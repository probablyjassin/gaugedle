<template>
	<div class="top-0 flex text-center text-white bg-slate-700 p-1 md:space-x-10 md:justify-start justify-evenly">
		<div v-for="page in pages" :key="page.url" class="md:ml-10 ml-0 flex">
			<nuxt-link :to="page.url" class="hover:bg-slate-800 p-1 rounded-xl">
				{{ page.title }}
			</nuxt-link>
			<span v-if="page.new" class="text-xs">
				<p class="bg-red-600 pb-0.5 rounded-lg">new</p>
			</span>
		</div>
		<div class="mt-1">
			<div class="group">
				<fa-icon :icon="['fas', 'wave-square']" class="icon wave-icon" v-if="isPlaying" @click="pauseVideo"/>
				<fa-icon :icon="['fab', 'itunes-note']" class="icon" v-else @click="playVideo"/>
					<span
						class="group-hover:scale-100 bg-slate-300 text-black text-sm rounded p-1 absolute top-8 transform -translate-x-1/2 pointer-events-none scale-0">
						Music
					</span>
			</div>
			<iframe
				width="1"
				height="1"
				src="https://www.youtube.com/embed/pHYHyZS_Xzo?enablejsapi=1&version=3&loop=1&playlist=pHYHyZS_Xzo"
				frameborder="0"
				allowfullscreen
				class=""></iframe>
		</div>
		<nuxt-link to="/database" class="mt-1 relative group">
			<faIcon icon="database" class="icon"></faIcon>
			<span
				class="group-hover:scale-100 group-hover:transition-opacity bg-slate-300 text-black text-sm rounded p-1 absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-none scale-0">
				Database
			</span>
		</nuxt-link>
	</div>
</template>

<script setup>
	const pages = [
		{
			title: "Daily",
			url: "/",
		},
		{
			title: "Endless",
			url: "/endless",
		},
		{
			title: "Match",
			url: "/match",
			new: true,
		},
		/* {
			title: "Find",
			url: "/find",
			new: true,
		}, */
	];

	const isPlaying = useState("music");
	let iframe;

	const playVideo = () => {
		iframe.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
		isPlaying.value = true;
	};

	const pauseVideo = () => {
		iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
		isPlaying.value = false;
	};

	onMounted(() => {
		iframe = document.querySelector("iframe").contentWindow;
	});
</script>

<style scoped>
	@keyframes wave {
		0% {
			transform: translateY(2px);
		}
		50% {
			transform: translateY(-2px);
		}
		100% {
			transform: translateY(2px);
		}
	}

	.wave-icon {
		animation: wave 1s infinite;
	}
	.icon {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
</style>
