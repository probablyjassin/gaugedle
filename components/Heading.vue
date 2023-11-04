<template>
	<p class="invisible">Hmmg</p>
	<div class="text-center mt-3">
		<div class="bg-slate-700 p-4 inline-block rounded-lg">
			<div style="display: flex; align-items: center" class="">
				<div class="font-bold tracking-tighter text-slate-100">
					<h1 class="text-6xl ">The Genshin Gaugedle</h1>
					<p v-if="props.subtitle" class="text-3xl underline">{{ props.subtitle }}</p>
				</div>
				<img src="~/assets/images/gauge.png" width="70" class="ml-4" />
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		subtitle: {
			required: false,
		},
	});
</script>