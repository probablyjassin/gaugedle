<template>
	<div class="absolute top-0 right-0 flex justify-center text-center mx-auto">
		<div class="p-2 border rounded-lg bg-slate-200">
			<button class="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" @click="toggleExpand">
				{{ expanded ? "Close" : "read me" }}
			</button>
			<div v-if="expanded" class="overflow-hidden w-auto transition-all duration-300">
				<main>
					<ContentDoc :path="$route.path" />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				expanded: false,
			};
		},
		methods: {
			toggleExpand() {
				this.expanded = !this.expanded;
			},
		},
	};
</script>

<script setup>

</script>

<style scoped>
</style>
