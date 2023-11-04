<template>
	<div class="flex space-x-4">
		<div class="w-1/4 p-4">
			<div class="mb-4">
				<input
					v-model="searchTerm"
					placeholder="Search"
					class="input w-auto mt-3 text-center py-3 block rounded-md bg-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
			</div>
			<div class="options-container mt-10 max-h-[50vh] w-1/4 mx-auto overflow-y-auto overflow-x-hidden absolute bg-white rounded-lg shadow-md z-50">
				<div v-for="(ability, key, index) in filteredOptions" :key="key" class="selected-option option flex items-center m-4 overflow-auto">
					<div class="flex focus:bg-slate-300 hover:bg-slate-300 w-full" @click="selected = {key: key, obj: ability}">
						<img :src="ability.Image" class="icon w-12 h-12" />
						<span class="label ml-4">{{ pretty(key) }}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="w-3/4 p-4 mt-3">
			<div class="min-h-[64vh] bg-slate-500 text-slate-100 bg-opacity-80 rounded-lg p-8 md:mt-0 mt-24" v-if="selected">
				<div class="flex items-center space-x-2">
                    <p class="text-3xl">{{ pretty(selected.key) }}</p>
                    <img :src="selected.obj.Image" class="icon w-12 h-12" loading="lazy"/>
                </div>
                <div v-for="prop in Object.keys(selected.obj)" class="mb-3 items-center flex space-x-3">
                    <p class="text-xl">{{ `${prop}:` }}</p>
                    <p>{{ selected.obj[prop] }}</p>
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
	const searchTerm = ref("");
	const { search } = useSearch(abilities.value);
    const selected = ref()

	const filteredOptions = computed(() => {
		return search(searchTerm.value.toLowerCase());
	});
    function pretty(input) {
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}
</script>
