<template>
	<div class="my-1 text-center">
		<div class="ml-4 flex items-center justify-center space-x-4">
			<p class="text-slate-200 text-lg bg-slate-500 p-3 rounded-full">
				Can you find an ability with a
				<b class="text-green-500">{{ property }}</b> of
				<b class="text-green-400">{{ comparision ? (comparision == ">" ? "greater than " : "less than ") : "" }}</b>
				<b class="text-green-500">{{ propValue }}</b> ?
			</p>
			<button @click="reset" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Reset</button>
		</div>
	</div>
    <div class="flex justify-center my-1 mx-0 md:mx-28">
        <div v-for="i in 5" class="min-h-[12px] w-full border-gray-950 border rounded-sm" :class="progressClass(i-1)"></div>
    </div>
</template>

<script setup>
	definePageMeta({
		layout: "find",
	});

    let guesses = useState("guesses-find", (() => []))

	const { abilities } = useAbilities();
	const property = useState("property");
	const propValue = useState("propValue");
	const comparision = useState("comparision");

	function pickRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	const propNames = ["Shape", "Diameter/Width", "Gauge", "CD", "ICD"];
	const ranged = ["Diameter/Width", "CD"];
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

	function rollProperty() {
		property.value = Object.keys(properties)[Math.floor(Object.keys(properties).length * Math.random())];
		propValue.value = pickRandom(properties[property.value])

		comparision.value = "";
		if (ranged.includes(property.value)) {
			let comparisions = [];
			if (properties[property.value].some((item) => parseFloat(item) < parseFloat(propValue.value))) {
				comparisions.push("<");
			}
			if (properties[property.value].some((item) => parseFloat(item) > parseFloat(propValue.value))) {
				comparisions.push(">");
			}
			if (comparisions.length === 1) {
				comparision.value = comparisions[0];
			} else {
				return (comparision.value = pickRandom(comparisions));
			}
		}
		comparision.value = "";
	}
    onBeforeMount(() => {
        if (!(property.value && propValue.value && comparision.value)) rollProperty();
    })

    function reset() {
        rollProperty()
        const tableData = useState("table-find", () => []);
        guesses.value = []
        tableData.value = []
    }

    function progressClass(i) {
        return guesses.value[i] == "true" ? 'bg-green-500' : guesses.value[i] ? 'bg-red-500' : 'bg-gray-500'
    }
</script>
