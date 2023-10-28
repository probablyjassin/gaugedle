<template>
	<div>hi</div>
</template>

<script setup>
	const { abilities } = useAbilities();

	const propNames = ["Shape", "Diameter/Width", "Gauge", "CD", "ICD"];
	const properties = {};
	propNames.forEach((name) => {
		properties[name] = new Set();
		for (let ability in abilities.value) {
            abilities.value[ability][name].split(/,|-/).map((value) => value.trim()).forEach(prop => {
                properties[name].add(prop)
            });
		}
	});
    console.log(properties)
</script>
