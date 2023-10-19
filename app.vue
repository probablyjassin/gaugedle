<template>
	<div class="app">
		<title>Gaugedle</title>
		<div>
			<NuxtLayout>
				<NuxtPage/>
			</NuxtLayout>
		</div>
	</div>
</template>

<script setup lang="ts">
	useHead({
		title: "The Genshin Gaugedle",
		meta: [
			{
				name: "description",
				content: "A wordle but for Genshin Theorycrafting - Try guessing a characters' ability using information like it's cooldown, ICD, shape and more!",
			},
		],
	});
</script>

<style scoped>
	.app {
		margin-top: 0;
		height: 100vh;
		background-image: url("~/assets/images/background2.webp");
		background-size: cover;
	}
</style>
