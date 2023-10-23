<template>
	<div class="app" @click="clickAway($event)">
		<title>Gaugedle</title>
		<div>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
	</div>
</template>

<script setup>
	useHead({
		title: "The Genshin Gaugedle",
		meta: [
			{
				name: "description",
				content: "A wordle but for Genshin Theorycrafting - Try guessing a characters' ability using information like it's cooldown, ICD, shape and more!",
			},
		],
		script: [
			{
				src: "https://www.youtube.com/iframe_api"
			}
		],
	});

	function clickAway($event) {
		const expanded = useState('expanded')
		if (!Object.values($event.target.classList).some(value => ['input', 'options', 'label'].includes(value))) {
			expanded.value = false
		}
	}
</script>

<style scoped>
	.app {
		min-height: 100vh;
		background-image: url("~/assets/images/background2.webp");
		background-size: cover;
		background-repeat: none;
	}
</style>
