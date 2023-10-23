<template>
    <div class="absolute top-0 right-0 flex left-0 text-center text-white bg-slate-700 w-full p-1 space-x-10">
        <div v-for="page in pages" :key="page.url" class="ml-10">
            <nuxt-link :to="page.url" class="hover:bg-slate-800 p-1 rounded-xl">
                {{ page.title }}
            </nuxt-link>
        </div>
        <fa-icon :icon="['fas', 'wave-square']" class="icon wave-icon" v-if="isPlaying" @click="pauseVideo" />
		<fa-icon :icon="['fas', 'music']" class="icon" v-else @click="playVideo" />
        <Player v-if="showFrame"/>
    </div>
</template>

<script setup>
const pages = [
    {
        title: 'Daily',
        url: '/'
    },
    {
        title: 'Endless',
        url: '/endless'
    }
]

const isPlaying = useState('music')
let iframe;
const showFrame = ref(false) 

const playVideo = () => {
    if (!showFrame.value) {
        showFrame.value = true
        setTimeout(() => {
            iframe = document.querySelector("iframe").contentWindow;
        }, 250);
        setTimeout(() => {
            iframe.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }, 850);
    }
    else {
        iframe.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    isPlaying.value = true;
	};

	const pauseVideo = () => {
		iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
		isPlaying.value = false;
	};
</script>

<style scoped>
	@keyframes wave {
		0% {
			transform: translateY(-5px);
		}
		33% {
			transform: translateY(0px);
		}
        66% {
			transform: translateY(5px);
		}
        100% {
			transform: translateY(-5px);
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