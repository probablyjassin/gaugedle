<template>
	<div class="my-1 text-center">
		<div class="ml-4 flex items-center justify-center space-x-4">
			<div class="flex items-center justify-center text-slate-200 text-lg bg-slate-500 p-2 rounded-full space-x-2" v-if="abilities[ability]">
				<p>
					Can you find an ability with the same <b class="text-green-500">{{ property }}</b> as <b class="text-green-500">{{ pretty(ability) }}</b> ?
				</p>
				<img :src="abilities[ability]['Image']" height="36" width="36" />
			</div>
			<button @click="reset" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Reset</button>
		</div>
	</div>
	<div class="flex justify-center my-1 mx-0 md:mx-28">
		<div v-for="i in 5" class="min-h-[12px] w-full border-gray-950 border rounded-sm" :class="progressClass(i - 1)"></div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: "match",
	});

	const { abilities, excluded } = useAbilities();
	const { generateRandomAbility } = useRandomAbility(exclude(abilities.value, excluded));

	let guesses = useState("guesses-match", () => []);
	const guessable = useState("abilities-match", () => abilities.value);

	const ability = useState("ability-match");
	const property = useState("property-match", () => "");
	const propValue = useState("propValue-match", () => "");

	function exclude(toFilter, excluded) {
		let newObj = { ...toFilter };
		excluded.forEach((ability) => {
			delete newObj[ability];
		});
		return newObj;
	}
	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}
	function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
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

	function reset() {
		ability.value = generateRandomAbility();
		const tableData = useState("table-match", () => []);
		guesses.value = [];
		tableData.value = [];
		guessable.value = { ...abilities.value }
		rollProperty();
	}
	function progressClass(i) {
		return guesses.value[i] == "true" ? "bg-green-500" : guesses.value[i] ? "bg-red-500" : "bg-gray-500";
	}
	function rollProperty() {
		property.value = Object.keys(properties)[Math.floor(Object.keys(properties).length * Math.random())];
		propValue.value = pickRandom(properties[property.value]);
		propValue.value = abilities.value[ability.value][property.value]
		delete guessable.value[ability.value];
	}
	onMounted(() => {
		if (!ability.value) ability.value = generateRandomAbility();
		if (!property.value || !propValue.value) {
			rollProperty();
		}
	});

	useHead({
		meta: [
			{
				name: "robots",
				content: "index, follow, noarchive",
			},
			{
				name: "description",
				content: "What ability might have the same Shape as Kaeya Burst? Test your knowledge of Genshin TC by matching abilities by their ICD, Gauge or Shape",
			},
		],
	});
</script>
