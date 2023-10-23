<template>
	<div>
		<iframe width="1" height="1" src="https://www.youtube.com/embed/pHYHyZS_Xzo?enablejsapi=1&loop=1" frameborder="0" allowfullscreen class=""></iframe>
	</div>
</template>

<script setup>	
	const isPlaying = useState('music');
	let iframe;
	
	onMounted(() => {
		iframe = document.querySelector("iframe").contentWindow;
	});
</script>


