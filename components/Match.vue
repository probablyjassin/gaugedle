<template>
	<div>
		<div class="custom-scrollable-selection flex justify-center mx-0 md:mx-28">
			<input
				tabindex="1"
				v-model="searchTerm"
				@input="expand()"
				@click="expand()"
				@keydown="navigate($event)"
				placeholder="Guess an ability"
				class="input w-screen text-sm text-center mx-auto py-3 mt-1 block rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
			<div
				v-show="abilitiesExpand"
				class="options-container mt-10 max-h-80 overflow-y-auto overflow-x-hidden absolute bg-white rounded-lg shadow-md z-50 mx-auto">
				<div class="options">
					<div v-for="(ability, key, index) in filteredOptions" :key="key" class="selected-option option flex items-center m-4" @click="guess(key)">
						<div
							class="flex focus:bg-slate-300 hover:bg-slate-300 w-full"
							@keydown="navigate($event)"
							@keydown.enter.prevent="guess(key)"
							:tabindex="index + 2">
							<img :src="ability.Image" class="icon w-12 h-12" />
							<span class="label ml-4">{{ pretty(key) }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-x-auto mx-0 md:mx-28">
			<div class="table-container overflow-y-auto max-h-[60vh]">
				<table class="w-full align-middle bg-slate-50">
					<thead>
						<tr>
							<th v-for="(property, index) in ['Ability', property]" :key="index" class="border-black border py-2 -mx-8 bg-slate-400 md:text-base text-[10px]">
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
							<td class="text-center p-2 border border-black md:text-base text-xs" :class="getCellClass(item.name, property)">
								{{ abilities[item.name][property] }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { abilities } = useAbilities();
	const guessable = useState("abilities-match");

	const { generateRandomAbility } = useRandomAbility();
	const { navigate } = useNavigation();

	const ability = useState("ability-match");

	const abilitiesExpand = useState("expanded");
	const searchTerm = ref("");
	const winning = useState("winning");
	const confetti = useState("confetti");

	winning.value = false;
	confetti.value = false;

	let guesses = useState("guesses-match");
	const property = useState("property-match");
	const propValue = useState("propValue-match");

	const filteredOptions = computed(() => {
		const searchQuery = searchTerm.value.toLowerCase();
		if (searchQuery) {
			return Object.fromEntries(Object.entries(guessable.value).filter(([key]) => key.toLowerCase().includes(searchQuery)));
		} else return guessable.value;
	});

	const tableData = useState("table-match", () => []);

	function expand() {
		abilitiesExpand.value = true;
	}

	function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}

	function singles(property) {
		return property.split(/,|-/).map((value) => value.trim());
	}

	const getCellClass = (abilityName, property) => {
		for (let prop of singles(abilities.value[abilityName][property])) {
			console.log(propValue.value)
			if (singles(propValue.value).some((value) => value == prop)) {
				return "bg-green-500";
			}
		}
		return "bg-red-500";
	};

	function guess(guess) {
		if (!abilities.value[guess]) return;
		searchTerm.value = "";
		abilitiesExpand.value = false;
		document.querySelector("input").focus();

		addToTable(guess);
		if (getCellClass(guess, property.value).includes("green")) {
			guesses.value.push("true");
		} else guesses.value.push("false");
		delete guessable.value[guess];

		if (guesses.value.length == 5) {
			const count = {}
			guesses.value.forEach((element) => {
				count[element] = (count[element] || 0) + 1;
			});
			if (count["true"] > count["false"]) {
				confetti.value = true
				setTimeout(() => {
					confetti.value = false
				}, 4000);
			}
		}
	}

	function addToTable(guess) {
		let newGuess = {
			name: guess,
		};
		newGuess[property] = abilities.value[guess][property];
		tableData.value.unshift(newGuess);
	}
</script>
