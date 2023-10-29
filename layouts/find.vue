<template>
	<div>
		<Confetti v-if="confetti" />
		<TopBar />
		<Heading />
		<Info />

		<slot></slot>

		<Finder />
		<Footing />
	</div>
</template>

<script setup>
	const confetti = useState("confetti");
</script>
