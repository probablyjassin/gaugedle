<template>
	<div class="my-3 text-center">
		<div class="ml-4 flex items-center justify-center space-x-4">
			<p class="text-slate-200 text-lg bg-slate-500 p-3 rounded-full">Endless Mode</p>
			<button @click="roll" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Reset</button>
		</div>
	</div>
	<Choice :solution="solution" :table="`endless`"/>
</template>

<script setup>
	const { abilities, excluded } = useAbilities();
	const { generateRandomAbility } = useRandomAbility(exclude(abilities.value, excluded));

	const solution = useState("solution-endless", (() => ""));
	const tableData = useState("table-endless");

	function exclude(toFilter, excluded) {
		let newObj = { ...toFilter };
		excluded.forEach((ability) => {
			delete newObj[ability];
		});
		return newObj;
	}

	function roll() {
		tableData.value = [];
		solution.value = abilities.value[generateRandomAbility()];
	}
	onMounted(() => {
		if (!solution.value) roll()
	})
</script>
