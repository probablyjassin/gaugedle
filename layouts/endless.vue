<template>
	<div>
		<Confetti v-if="confetti" />
		<TopBar />
		<Heading />
		<Info />
		<slot></slot>
		<Choice />
		<Footing />
	</div>
</template>

<script setup>
	const confetti = useState("confetti");
</script>
