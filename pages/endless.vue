<template>
    <div class="my-3 text-center">
		<div class="ml-4 flex items-center justify-center space-x-4">
			<div class="flex flex-col">
				<p class="text-slate-200 text-lg">Endless Mode</p>
			</div>
			<button @click="roll" class="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                Reset
            </button>
		</div>
		
	</div>
</template>


<script setup>
	const { abilities, excluded } = useAbilities();
	const { generateRandomAbility } = useRandomAbility();

	const solution = useState('solution')
    const tableData = useState('table');

	function keineAhnung(toFilter, excluded) {
		let newObj = { ...toFilter };
		excluded.forEach((ability) => {
			delete newObj[ability];
		});
		return newObj;
	}

    function roll() {
        tableData.value = []
        solution.value = abilities.value[generateRandomAbility(keineAhnung(abilities.value, excluded))];        
    }
    roll()
</script>