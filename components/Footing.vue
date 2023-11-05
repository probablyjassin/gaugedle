<template>
	<footer :class="{ 'bottom-0': props.scrollable, 'absolute bottom-0 left-1/2 transform -translate-x-1/2': !props.scrollable}">
		<div class="md:text-sm text-[10px] text-slate-300">
			<p>
				version 2.3 | made and maintained by
				<a href="https://github.com/probablyjassin" class="underline text-blue-300">probablyjassin</a>, idea by
				<a href="https://twitch.tv/Zajef77" class="underline text-blue-300">Zajef77</a>
			</p>
		</div>
	</footer>
</template>

<script setup>
	const props = defineProps({
		scrollable: {required: false}
	});
</script>