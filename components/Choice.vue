<template>
	<Confetti v-if="winning" />
	<div class="my-3 text-center">
			<div class="ml-4 flex items-center justify-center space-x-1">
				<div class="flex flex-col">
					<p class="text-slate-200">Yesterdays' ability:</p>
					<span class="text-green-400 text-xl">{{ pretty(yesterdaySolution) }}</span>
				</div>
				<img :src="`${abilities[yesterdaySolution][Image]}`" width="30" />
			</div>
		<div v-if="winning" class="mt-8 p-2 bg-white">
			<p class="text-center text-6xl font-bold tracking-tighter text-green-600">You found the correct ability! Congratulations!</p>
		</div>
	</div>

	<div class="custom-scrollable-selection flex justify-center">
		<button
			@click="abilitiesExpand = !abilitiesExpand"
			class="w-screen text-center mx-auto py-3 mt-1 block rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
			Guess an ability
		</button>
		
		<div v-show="abilitiesExpand" class="options-container mt-10 max-h-80 overflow-y-auto overflow-x-hidden absolute bg-white rounded-lg shadow-md z-50 mx-auto">
			<div class="options">
				<div v-for="(ability, key) in abilities" :key="key" class="option flex items-center m-4" @click="addAbilityToTable(key)">
					<img :src="ability.Image" alt="Ability Icon" class="icon w-12 h-12" />
					<span class="label ml-4">{{ key }}</span>
				</div>
			</div>
		</div>
	</div>

	<div class="overflow-x-auto">
		<table class="w-screen align-middle bg-slate-50">
			<thead>
				<tr>
					<th class="bg-slate-400 border border-black">Ability</th>
					<th v-for="(property, index) in properties" :key="index" class="border-black border p-2 bg-slate-400">
						{{ property }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, itemIndex) in tableData" :key="itemIndex">
					<td class="text-center p-2 border border-black">
						<span><img width="50" class="mx-auto" :src="abilities[item.name]['Image']" /></span>{{ item.name.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim() }}
					</td>
					<td
						class="text-center p-2 border border-black"
						v-for="(property, propIndex) in properties"
						:key="propIndex"
						:class="getCellClass(item.name, property)">
						{{ item[property] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
	const abilitiesExpand = ref(false);

	const { generateDailyAbility, yesterdayAbility } = useRandomAbility();
	const { abilities } = useAbilities();
	const selectedAbility = ref("");
	let properties = ["CD", "ICD", "Gauge", "Diameter/Width", "Shape", "Element", "Blunt"];
	const tableData = ref([]);
	const solution = abilities.value[generateDailyAbility(abilities.value)];
	const yesterdaySolution = computed(() => yesterdayAbility(abilities.value));
	const Image = "Image";

	const winning = ref(false);
	function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}

	const getCellClass = (abilityName, property) => {
		const solutionValue = solution[property] || null;

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

			abilitiesExpand.value = false
			const guessObj = abilities.value[guess];

			if (guessObj == solution) {
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
</script>
