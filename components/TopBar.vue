<template>
	<div class="absolute top-0 right-0 flex left-0 text-center text-white bg-slate-700 w-full p-1 space-x-10">
		<div v-for="page in pages" :key="page.url" class="ml-10">
			<nuxt-link :to="page.url" class="hover:bg-slate-800 p-1 rounded-xl">
				{{ page.title }}
			</nuxt-link>
			<span v-if="page.new" class="absolute text-xs bg-red-600 rounded-lg py-0 px-1">
				<p class="mb-1">new</p>
			</span>
		</div>
		<div class="">
		<fa-icon :icon="['fas', 'wave-square']" class="icon wave-icon" v-if="isPlaying" @click="pauseVideo" />
		<fa-icon :icon="['fab', 'itunes-note']" class="icon" v-else @click="playVideo"/>
		<iframe width="1" height="1" src="https://www.youtube.com/embed/pHYHyZS_Xzo?enablejsapi=1&version=3&loop=1&playlist=pHYHyZS_Xzo" frameborder="0" allowfullscreen class=""></iframe>
		</div>
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
		{
			title: "Find",
			url: "/find",
			new: true,
		},
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
