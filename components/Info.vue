<template>
	<div class="absolute top-1/5 left-0 lg:top-8 lg:left-auto lg:right-0 flex justify-center text-center mx-auto">
		<div class="p-2 border rounded-lg bg-slate-200">
			<button class="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" @click="toggleExpand">
				{{ expanded ? "Close" : "read me" }}
			</button>
			<div v-if="expanded" class="overflow-hidden w-auto text-left">
				<div v-for="message in messages">
					{{ message }}
				</div>
				<a href="https://probablyjassin.github.io/gaugedle/old" class="text-blue-400 underline">Old version of the Gaugedle</a>
			</div>
		</div>
	</div>
</template>

<script setup>
let expanded = ref(true)
function toggleExpand() {
	expanded.value = !expanded.value
}
const { messages } = useLogs();
</script>
