<template>
	<div class="my-3 text-center">
		<div class="ml-4 flex items-center justify-center space-x-4">
			<p class="text-slate-200 text-lg bg-slate-500 p-3 rounded-full">Endless Mode</p>
			<button @click="roll" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Reset</button>
		</div>
	</div>

	<div class="custom-scrollable-selection flex justify-center mx-0 md:mx-28">
		<input
			tabindex="1"
			v-model="searchTerm"
			@input="expand()"
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
</template>

<script setup>
	const { abilities } = useAbilities();
	const { generateRandomAbility } = useRandomAbility();
	const { pretty, singles } = useUtils();

	const solution = useState("solution-endless", () => "");
	const tableData = useState("table-endless", () => []);
	const properties = ["CD", "ICD", "Gauge", "Diameter/Width", "Shape", "Element", "Blunt"];

	const winning = useState("winning", () => false);
	const confetti = useState("confetti", () => false);

	onMounted(() => {
		if (!solution.value) roll();
	});

	function roll() {
		tableData.value = [];
		solution.value = abilities.value[generateRandomAbility()];
	}

	const { navigate } = useNavigation();
	const abilitiesExpand = useState("expanded");

	const { search } = useSearch(abilities.value);
	const searchTerm = ref("");
	const filteredOptions = computed(() => {
		return search(searchTerm.value.toLowerCase());
	});

	function expand() {
		abilitiesExpand.value = true;
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

		let newGuess = {
			name: guess,
		};
		for (const property of properties) {
			newGuess[property] = abilities.value[guess][property];
		}
		tableData.value.unshift(newGuess);
	}
</script>

<script>
	useHead({
		title: "The Genshin Gaugedle"
		meta: [
			{
				name: "description",
				content: "A wordle but for Genshin Theorycrafting - Try guessing a characters' ability using information like it's cooldown, ICD, shape and more!",
			},
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
	});
</script>
