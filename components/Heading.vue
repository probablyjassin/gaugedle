<template>
	<p class="invisible">Hmmg</p>
	<div class="text-center mt-3">
		<div class="bg-slate-700 p-4 inline-block rounded-lg">
			<div style="display: flex; align-items: center" class="">
				<div class="font-bold tracking-tighter text-slate-100">
					<h1 class="text-6xl ">The Genshin Gaugedle</h1>
					<p v-if="subtitle" class="text-3xl underline">{{ subtitle }}</p>
				</div>
				<img src="~/assets/images/gauge.png" width="70" height="70" class="ml-4" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const route = useRoute()
	const subtitle = computed(() => {
		if (route.name == 'index') return 'Daily'
		return route.name.charAt(0).toUpperCase() + route.name.slice(1)
	})
</script>