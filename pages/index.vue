<template>
	<transition>
		<div>		
			<div v-if="!winning" class="my-3 text-center">
				<div class="ml-4 flex items-center justify-center space-x-1">
					<div class="flex flex-col">
						<p class="text-slate-200">Yesterdays' ability:</p>
						<span class="text-green-400 text-xl">{{ pretty(yesterdaySolution) }}</span>
					</div>
					<client-only v-if="yesterdaySolution"><img :src="`${abilities[yesterdaySolution]['Image']}`" width="40" /></client-only>
				</div>
			</div>
		
			<div v-else class="my-3 text-center">
				<div class="ml-4 flex items-center justify-center space-x-1">
					<div class="flex flex-col">
						<span class="text-green-400 text-xl">Congratulations, you found the correct ability!</span>
						<NuxtLink to="/endless" class="px-2 mx-auto bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Endless mode</NuxtLink>
					</div>
				</div>
			</div>
		
			<div class="custom-scrollable-selection flex justify-center mx-0 md:mx-28">
				<input
					tabindex="1"
					v-model="searchTerm"
					@input="input()"
					@click="expand()"
					@keydown="navigate($event)"
					placeholder="Guess an ability"
					class="input w-screen text-center mx-auto py-3 mt-1 block rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
				<div
					v-show="abilitiesExpand"
					class="options-container mt-10 max-h-80 overflow-y-auto overflow-x-hidden absolute bg-white rounded-lg shadow-md z-50 mx-auto">
					<div class="options">
						<div v-for="(ability, key, index) in filteredOptions" :key="key" class="selected-option option flex items-center m-4" @click="guess(key)">
							<div class="flex focus:bg-slate-300 hover:bg-slate-300 w-full" @keydown="navigate($event)" @keydown.enter.prevent="guess(key)" :tabindex="index + 2">
								<img :src="ability.Image" class="icon w-12 h-12" loading="lazy" />
								<span class="label ml-4">{{ pretty(key) }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		
			<div class="overflow-x-auto mx-0 md:mx-28">
				<div class="table-container overflow-y-auto max-h-[54vh]">
					<table class="w-full align-middle bg-slate-50">
						<thead>
							<tr>
								<th
									v-for="(property, index) in ['Ability', ...properties]"
									:key="index"
									class="border-black border py-2 -mx-8 bg-slate-400 md:text-base text-[10px]">
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
		</div>
	</transition>
</template>

<script setup>
	const { abilities } = useAbilities();
	const { generateAbility, pastAbility } = useRandomAbility();
	const { pretty, singles } = useUtils();
	
	const { navigate } = useNavigation();
	const { search } = useSearch(abilities.value);
	
	const solution = useState("solution-index");
	solution.value = abilities.value[generateAbility(0)];
	const yesterdaySolution = computed(() => pastAbility(1));

	const tableData = useState("table-index", () => []);
	const properties = ["CD", "ICD", "Gauge", "Diameter/Width", "Shape", "Element", "Blunt"];

	const winning = useState("winning", () => false);
	const confetti = useState("confetti", () => false);

	const searchTerm = ref("");
	const filteredOptions = computed(() => {
		return search(searchTerm.value.toLowerCase());
	});

	const abilitiesExpand = useState("expanded", (() => false));
	function expand() {
		abilitiesExpand.value = true;
	}

	function input() {
		expand()
		document.querySelector('.options-container').scrollTop = 0;
	}

	function guess(guess) {
		if (!abilities.value[guess]) return;
		searchTerm.value = "";
		abilitiesExpand.value = false;
		document.querySelector("input").focus();

		addToTable(guess);
	}
	function addToTable(guess) {
		let guessObj = abilities.value[guess];

		if (JSON.stringify(guessObj) === JSON.stringify(solution.value)) {
			winning.value = true;
			confetti.value = true;
			setTimeout(() => {
				confetti.value = false;
			}, 3500);
		}

		let newGuess = { name: guess };
		for (const property of properties) {
			newGuess[property] = abilities.value[guess][property];
		}
		tableData.value.unshift(newGuess);
	}
	const getCellClass = (abilityName, property) => {
		const solutionValue = solution.value[property] || null;

		if (solutionValue === abilities.value[abilityName][property]) return "bg-green-500";
		else {
			const guessedValues = singles(abilities.value[abilityName][property]);
			const correctValues = singles(solutionValue);

			for (let j = 0; j < guessedValues.length; j++) {
				if (correctValues.includes(guessedValues[j])) return "bg-yellow-400";
			}
			return "bg-red-500";
		}
	};
</script>
