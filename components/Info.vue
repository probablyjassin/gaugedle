<template>
	<div class="absolute top-8 right-0 flex justify-center text-center mx-auto">
		<div class="p-2 border rounded-lg bg-slate-200">
			<button class="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" @click="toggleExpand">
				{{ expanded ? "Close" : "read me" }}
			</button>
			<div v-if="expanded" class="overflow-hidden w-auto transition-all duration-300">
				<p>
					- added Wriothesley and Neuvillette <br />
					- fixed the text you're reading right now <br />
					- fixed Nahida Skill Hold wrong ICD <br />
					- working on endless mode
				</p>
				<a href="https://probablyjassin.github.io/gaugedle/old" class="text-blue-400 underline">Old version of the Gaugedle</a>
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
