<template>
	<button class="absolute right-28 top-[42%] transform -translate-y-1/2 px-3 invisible md:visible" @click="toggle" title="Filter by Element">
		<faIcon icon="chevron-up" class="w-5 h-5 transition-all duration-200" :class="{ 'transform rotate-180': activated }"></faIcon>
	</button>
	<span class="absolute bg-white w-72 h-8 right-28 -translate-y-9 flex justify-between px-2 rounded-lg" :class="{'hidden': !activated}">
		<span v-for="(value, index) in ['Hydro', 'Pyro', 'Electro', 'Cryo', 'Anemo', 'Geo', 'Dendro']" class="rounded-lg" :class="{ 'bg-slate-300': element ? value === element : false }" @click="chElement(value)">
			<img :src="`/element_icons/Element_${value}.svg`" height="30" width="30" />
		</span>
	</span>
</template>

<script setup>
	const element = useState("filter-element", (() => false));
    const activated = ref(false)

    function toggle() {
        activated.value = !activated.value
    }

	function chElement(value) {
		if (value == element.value) return (element.value = false);
		element.value = value;
	}
</script>
