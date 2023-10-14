<template>
	<div class="absolute top-0 right-0 flex justify-center text-center mx-auto">
		<div class="p-2 border rounded-lg bg-slate-200">
            <button class="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" @click="toggleExpand">
				{{ expanded ? "Close" : "read me" }}
			</button>
            <div v-if="expanded" class="overflow-hidden w-auto transition-all duration-300">
                <p>Well well welt</p>
                <p>I caught the sound of a man named Zy0nix trying to roast the design of the website I made</p>
				<p>Apart from the fact that half the chat said "this is art" or "its peak"</p>
                <p>So what to do other than spending a full night (I'm writing this at 2am) to create a incredible beautiful design for Gaugedle overnight.</p>
                <p>I even made an animation for when you win the game. So thanks for the encouragement om</p>
                <p>~ probably jassin</p>
                <p class="mt-3">Here is the original version, from which I will migrate the missing features over time: 
					<a href="https://gaugedle.jassin.aouani.de/old" class="text-blue-500 underline">click here</a>
				</p>
				<div class="mt-3">
					<p class="text-xl">Release notes:</p>
					<ul>
						<li>Gotta add Neuvillete soon</li>
						<li>Gotta add all the functionality</li>
					</ul>
				</div>
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

<style scoped>
	/* Add any custom styles here */
</style>
