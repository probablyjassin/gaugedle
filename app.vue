<template>
	<div class="app" @click="clickAway($event)">
		<title>Gaugedle</title>
		<div>
			<Confetti v-if="confetti" />

			<TopBar />
			<Info />

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
			{
				charset: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "og:title",
				content: "The Genshin Gaugedle",
			},
			{
				name: "og:description",
				content: "A wordle but for Genshin Theorycrafting - Try guessing a character's ability using information like its cooldown, ICD, shape, and more!",
			},
			{
				name: "og:type",
				content: "website",
			},
			{
				name: "og:url",
				content: "https://gaugedle.jassin.aouani.de",
			},
			{
				name: "author",
				content: "probablyjassin - Jässin Aouani",
			},
			{
				name: "keywords",
				content: "Genshin, Theorycrafting, ICD, Gauge, Wordle, ICDle, gaygedle",
			},
			{
				name: "robots",
				content: "index, follow",
			},
		],
		script: [
			{
				src: "https://www.youtube.com/iframe_api",
			},
		],
	});

	function clickAway($event) {
		const expanded = useState("expanded");
		if (!Object.values($event.target.classList).some((value) => ["input", "options", "label"].includes(value))) {
			expanded.value = false;
		}
	}
	const confetti = useState("confetti");
</script>

<style scoped>
	.app {
		min-height: 100vh;
		background-image: url("~/assets/images/background2.webp");
		background-size: cover;
		background-repeat: none;
	}
</style>
