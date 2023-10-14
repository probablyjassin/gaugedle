<template>
	<Confetti v-if="winning" />
	<div class="my-3 text-center">
		<div class="flex items-center justify-center">
			<button @click="addAbilityToTable" class="my-3 bg-indigo-500 text-white px-4 py-2 rounded-md">Guess</button>
			<div class="ml-4 flex items-center justify-center space-x-1">
				<div class="flex flex-col">
					<p class="text-slate-200">Yesterdays' ability:</p>
					<span class="text-green-400 text-xl">{{ pretty(yesterdaySolution) }}</span>
				</div>
				<img :src="`${abilities[yesterdaySolution][Image]}`" width="30" />
			</div>
		</div>
		<div v-if="winning" class="mt-8 p-2 bg-white">
			<p class="text-center text-6xl font-bold tracking-tighter text-green-600">You found the correct ability! Congratulations!</p>
		</div>
	</div>

	<input
		placeholder="Select an ability"
		type="text"
		list="wordList"
		v-model="selectedAbility"
		class="w-screen text-center mx-auto py-3 mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
		@keyup.enter="addAbilityToTable" />

	<datalist id="wordList">
		<option v-for="(ability, key) in abilities" :key="key" :value="key">
			{{ key.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim() }}
		</option>
	</datalist>
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

	const addAbilityToTable = () => {
		if (selectedAbility.value && abilities.value[selectedAbility.value]) {

			if (abilities.value[selectedAbility.value] == solution) {
				winning.value = true;
				setTimeout(() => {
					winning.value = false;
				}, 3000);
			}

			const newAbility = { name: selectedAbility.value };
			for (const property of properties) {
				newAbility[property] = abilities.value[selectedAbility.value][property];
			}
			tableData.value.unshift(newAbility);
			selectedAbility.value = "";
		}
	};
</script>
