<template>
	<transition>
		<div>
			<div class="my-3 text-center">
				<div class="ml-4 flex items-center justify-center space-x-4">
					<div class="flex-col space-y-2 text-white bg-slate-600 p-1 rounded-lg">
						<div class="group">
							<faIcon icon="question-circle" class="w-5 cursor-pointer" @Click="toast" />
							<div class="absolute -translate-x-32 -translate-y-16 scale-0 group-hover:scale-[1] bg-slate-600 p-1 rounded-lg shadow-2xl">
								<p>(for bugfixing:) click to check the correct property</p>
							</div>
						</div>
					</div>
					<div class="flex items-center justify-center text-slate-200 text-lg bg-slate-500 p-2 rounded-full space-x-2" v-if="abilities[ability]">
						<p>
							Can you find an ability with the same <b class="text-green-500">{{ property }}</b> as <b class="text-green-500">{{ pretty(ability) }}</b> ?
						</p>
						<img :src="abilities[ability]['Image']" height="36" width="36" />
					</div>
					<button @click="reset" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Reset</button>
				</div>
			</div>

			<div v-if="hint" class="absolute bottom-0 -translate-y-8 transform left-1/2 -translate-x-1/2 bg-red-400 p-2 rounded-lg">{{ propValue }}</div>

			<!--<div class="flex justify-center my-1 mx-0 md:mx-28">
				 <div v-for="i in 5" class="min-h-[12px] w-full border-gray-950 border rounded-sm" :class="progressClass(i - 1)"></div> 
			</div> -->

			<div>
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
					<div class="table-container overflow-y-auto max-h-[54vh]">
						<table class="w-full align-middle bg-slate-50">
							<thead>
								<tr>
									<th
										v-for="(property, index) in ['Ability', property]"
										:key="index"
										class="border-black border py-2 -mx-8 bg-slate-400 md:text-base text-[10px]">
										{{ property }}
									</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, itemIndex) in tableData" :key="itemIndex">
									<td class="text-center p-2 border border-black md:text-base text-[8px]">
										<span><img v-if="abilities[item.name]" width="50" class="mx-auto" :src="abilities[item.name]['Image']" /></span
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
		</div>
	</transition>
</template>

<script setup>
	definePageMeta({
		layout: "match",
	});

	const { abilities } = useAbilities();
	const { generateRandomAbility } = useRandomAbility();
	const { pretty, singles } = useUtils();

	const tableData = useState("table-match", () => []);
	let guesses = useState("guesses-match", () => []);
	const guessable = useState("abilities-match", () => structuredClone(toRaw(abilities.value)));

	const ability = useState("ability-match");
	const property = useState("property-match", () => "");
	const propValue = useState("propValue-match", () => "");

	const { navigate } = useNavigation();
	const searchTerm = ref("");
	const { search } = useSearch(guessable.value, "match");

	const abilitiesExpand = useState("expanded", () => false);

	const winning = useState("winning", () => false);
	const confetti = useState("confetti", () => false);

	const filteredOptions = computed(() => {
		return search(searchTerm.value.toLowerCase());
	});
	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	const propNames = ["Shape", "Gauge", "ICD"];
	//const ranged = ["Diameter/Width", "CD"]; // not yet implemented
	const properties = {};
	propNames.forEach((name) => {
		properties[name] = new Set();
		for (let ability in abilities.value) {
			abilities.value[ability][name]
				.split(/,|-/)
				.map((value) => value.trim())
				.forEach((prop) => {
					properties[name].add(prop);
				});
		}
		properties[name] = Array.from(properties[name]);
	});

	let counts = {};
	for (let key of Object.keys(abilities.value)) {
		for (let innerKey of Object.keys(abilities.value[key])) {
			const value = abilities.value[key][innerKey];

			if (!propNames.includes(innerKey)) continue;

			if (!counts[value]) {
				counts[value] = 0;
			}

			counts[value]++;
		}
	}

	function reset() {
		hint.value = false;
		
		guesses.value = [];
		tableData.value = [];
		guessable.value = structuredClone(toRaw(abilities.value))
		rollProp();
	}
	/* function progressClass(i) {
		return guesses.value[i] == "true" ? "bg-green-500" : guesses.value[i] ? "bg-red-500" : "bg-gray-500";
	}
	function rollProperty() {
		property.value = Object.keys(properties)[Math.floor(Object.keys(properties).length * Math.random())];
		propValue.value = pickRandom(properties[property.value]);
		propValue.value = abilities.value[ability.value][property.value];
		guessable.value = { ...abilities.value };
		delete guessable.value[ability.value];
	} */
	function rollProp() {
		ability.value = generateRandomAbility();
		property.value = pickRandom(propNames);
		if (counts[abilities.value[ability.value][property.value]] <= 1) rollProp();
		propValue.value = abilities.value[ability.value][property.value];
	}
	onMounted(() => {
		ability.value ||= generateRandomAbility();
		if (!property.value || !propValue.value) {
			rollProp();
		}
	});

	watch(confetti, (newValue, oldValue) => {
		if (newValue == true) {
			setTimeout(() => {
				reset();
			}, 2000);
		}
	});

	function expand() {
		abilitiesExpand.value = true;
	}
	function input() {
		expand()
		document.querySelector('.options-container').scrollTop = 0;
	}
	const getCellClass = (abilityName, property) => {
		if (abilities.value[abilityName][property] == propValue.value) return "bg-green-500"
		return "bg-red-500";
	};

	function makeConfetti() {
		confetti.value = true;
		setTimeout(() => {
			confetti.value = false;
		}, 4000);
	}

	function guess(guess) {
		if (!abilities.value[guess]) return;
		searchTerm.value = "";
		abilitiesExpand.value = false;
		document.querySelector("input").focus();

		addToTable(guess);
		if (getCellClass(guess, property.value).includes("green")) {
			/* guesses.value.push("true"); */
			makeConfetti();
		} /* else guesses.value.push("false"); */
		delete guessable.value[guess];

		/* if (guesses.value.length == 5) {
			const count = {};
			guesses.value.forEach((element) => {
				count[element] = (count[element] || 0) + 1;
			});
			if (count["true"] > count["false"]) {
				makeConfetti();
			}
		} */
	}

	function addToTable(guess) {
		let newGuess = {
			name: guess,
		};
		newGuess[property.value] = abilities.value[guess][property.value];
		tableData.value.unshift(newGuess);
	}

	let hint = ref(false);
	function toast() {
		hint.value = true;
		setTimeout(() => {
			hint.value = false;
		}, 2000);
	}
</script>


<script>
	useHead({
		title: "The Genshin Gaugedle",
		meta: [
			{
				name: "description",
				content: "A wordle but for Genshin Theorycrafting: Try guessing a characters' ability using information like it's cooldown, ICD, shape and more!",
			},
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "og:type",
				content: "website",
			},
			/* {
				name: "og:title",
				content: "The Genshin Gaugedle",
			},
			{
				name: "og:description",
				content: "A wordle but for Genshin Theorycrafting",
			},
			{
				name: "og:url",
				content: "https://gaugedle.jassin.aouani.de",
			}, */
			/* {
				name: "keywords",
				content: "Genshin, Theorycrafting, ICD, Gauge, ICDle",
			}, */
			{
				name: "author",
				content: "probablyjassin - Jässin Aouani",
			},
		],
	});
</script>