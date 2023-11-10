<template>
	<div class="flex md:flex-nowrap flex-wrap space-x-4">
		<div class="md:w-1/4 w-3/4 p-4">
			
			<input type="text"
			v-model="searchTerm"
			placeholder="Search"
			class="mx-auto w-full py-1 text-center rounded-md bg-white border-gray-300 shadow-sm focus:ring" />

			<div class="options-container w-full mt-10 max-h-[50vh] overflow-y-auto overflow-x-hidden bg-white rounded-lg shadow-md z-50">
				<div v-for="(ability, key, index) in filteredOptions" :key="key" class="selected-option option flex items-center m-4 overflow-auto">
					<div class="flex focus:bg-slate-300 hover:bg-slate-300 w-full" @click="selected = { key: key, obj: ability }">
						<img :src="ability.Image" class="icon w-12 h-12" />
						<span class="label ml-4">{{ pretty(key) }}</span>
					</div>
				</div>
			</div>
			<div class="mt-4 text-white">
				<a href="/abilities.json" class="text-blue-300 underline">View the raw datasheet (json)</a>
			</div>
		</div>

		<div class="md:w-3/4 w-full p-4">
			<div class=" bg-slate-500 text-slate-100 bg-opacity-80 rounded-lg p-6" v-if="selected">
				<div class="flex items-center space-x-2">
					<p class="text-3xl">{{ pretty(selected.key) }}</p>
					<img :src="selected.obj.Image" class="icon w-12 h-12" loading="lazy" />
				</div>
				<div v-for="prop in Object.keys(selected.obj)" class="mb-3">
					<a v-if="prop == `Image`" :href="selected.obj[prop]" class="text-blue-300 underline">Image Source</a>
					<span v-else class="text-xl flex items-center space-x-2">
						<p class="w-1/6 bg-slate-500 p-2 rounded-md">{{ `${prop}:` }}</p> 
						<p>{{ selected.obj[prop] }}</p>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: "database",
	});

	const { abilities } = useAbilities();
	const { pretty } = useUtils()

	const { search } = useSearch(abilities.value);
	const searchTerm = ref("");
	const filteredOptions = computed(() => {
		return search(searchTerm.value.toLowerCase());
	});
	
	const selected = ref();
</script>
