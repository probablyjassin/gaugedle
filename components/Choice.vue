<template>
	<div class="pb-80" @click="unblur($event)">
		<Confetti v-if="winning" />
		<div v-if="winning" class="mt-8 p-2 bg-white">
			<p class="text-center text-6xl font-bold tracking-tighter text-green-600">You found the correct ability! Congratulations!</p>
		</div>

		<div class="custom-scrollable-selection flex justify-center mx-0 md:mx-28">
			<input
				tabindex="1"
				v-model="searchTerm"
				@input="searchTerm = $event.target.value"
				@focus="abilitiesExpand = true"
				@keydown="navigate($event)"
				placeholder="Guess an ability"
				class="input w-screen text-center mx-auto py-3 mt-1 block rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
			<div
				v-show="abilitiesExpand"
				class="options-container mt-10 max-h-80 overflow-y-auto overflow-x-hidden absolute bg-white rounded-lg shadow-md z-50 mx-auto">
				<div class="options">
					<div v-for="(ability, key, index) in filteredOptions" :key="key" class="selected-option option flex items-center m-4" @click="addAbilityToTable(key)">
						<div class="flex focus:bg-slate-300 w-full" @keydown="navigate($event)" @keydown.enter.prevent="addAbilityToTable(key)" :tabindex="index + 2">
							<img :src="ability.Image" alt="Ability Icon" class="icon w-12 h-12" />
							<span class="label ml-4">{{ pretty(key) }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-x-auto  mx-0 md:mx-28">
			<table class="w-full align-middle bg-slate-50">
				<thead>
					<tr>
						<th v-for="(property, index) in ['Ability', ...properties]" :key="index" class="border-black border py-2 -mx-8 bg-slate-400 md:text-base text-[10px]">
							{{ property }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, itemIndex) in tableData" :key="itemIndex">
						<td class="text-center p-2 border border-black md:text-base text-[8px]">
							<span><img width="50" class="mx-auto" :src="abilities[item.name]['Image']" /></span
							>{{ item.name.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim() }}
						</td>
						<td
							class="text-center p-2 border border-black md:text-base text-xs"
							v-for="(property, propIndex) in properties"
							:key="propIndex"
							:class="getCellClass(item.name, property)">
							{{ item[property] }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
	const { abilities, excluded } = useAbilities();
	const { navigate } = useNavigation()

	const abilitiesExpand = ref(false);

	const searchTerm = ref("");

	const filteredOptions = computed(() => {
		const searchQuery = searchTerm.value.toLowerCase();
		if (searchQuery) {
			const results = Object.entries(abilities.value).filter(([key, value]) => key.toLowerCase().includes(searchQuery));
			return Object.fromEntries(results);
		} else {
			return abilities.value;
		}
	});

	let properties = ["CD", "ICD", "Gauge", "Diameter/Width", "Shape", "Element", "Blunt"];
	const tableData = useState('table');
	const solution = useState('solution')

	const winning = ref(false);
	function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}

	const getCellClass = (abilityName, property) => {
		const solutionValue = solution.value[property] || null;

		function singles(property) {
			return property.split(", ").join("|").split("-").join("|").split("|");
		}
		if (solutionValue === abilities.value[abilityName][property]) {
			return "bg-green-500";
		} else {
			const guessedValues = singles(abilities.value[abilityName][property]);

			const correctValues = singles(solutionValue);

			let partialMatch = false;
			for (let j = 0; j < guessedValues.length; j++) {
				if (correctValues.includes(guessedValues[j])) {
					partialMatch = true;
					break;
				}
			}
			if (partialMatch) {
				return "bg-yellow-400";
			} else return "bg-red-500";
		}
	};

	const addAbilityToTable = (guess) => {
		if (abilities.value[guess]) {

			abilitiesExpand.value = false;
			searchTerm.value = "";

			const guessObj = abilities.value[guess];

			if (JSON.stringify(guessObj) === JSON.stringify(solution.value)) {
				
				winning.value = true;
				setTimeout(() => {
					winning.value = false;
				}, 3000);
			}

			const newAbility = { name: guess };
			for (const property of properties) {
				newAbility[property] = abilities.value[guess][property];
			}
			tableData.value.unshift(newAbility);
		}
	};

	function unblur($event) {
		if (!$event.target.classList.contains("input" || "custom-scrollable-selection")) {
			abilitiesExpand.value = false;
		}
	}
</script>
