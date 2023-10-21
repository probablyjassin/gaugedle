<template>
	<div v-if="!winning" class="my-3 text-center">
		<div class="ml-4 flex items-center justify-center space-x-1">
			<div class="flex flex-col">
				<p class="text-slate-200">Yesterdays' ability:</p>
				<span class="text-green-400 text-xl">{{ pretty(yesterdaySolution) }}</span>
			</div>
			<client-only><img :src="`${abilities[yesterdaySolution]['Image']}`" width="30" /></client-only>
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
</template>

<script setup>
	const { abilities, excluded } = useAbilities();
	const { generateDailyAbility, yesterdayAbility } = useRandomAbility();
	const tableData = useState('table')
	const winning = useState('winning')

	const yesterdaySolution = computed(() => yesterdayAbility(keineAhnung(abilities.value, excluded)));

	function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}
	const solution = useState('solution')
	function keineAhnung(toFilter, excluded) {
		let newObj = { ...toFilter };
		excluded.forEach((ability) => {
			delete newObj[ability];
		});
		return newObj;
	}
	tableData.value = []
	solution.value = abilities.value[generateDailyAbility(keineAhnung(abilities.value, excluded))];
</script>