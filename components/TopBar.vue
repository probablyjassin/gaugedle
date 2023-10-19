<template>
    <div class="absolute top-0 right-0 flex left-0 text-center text-white bg-slate-700 w-full p-1 space-x-10">
        <div v-for="page in pages" :key="page.url" class="ml-10">
            <nuxt-link :to="page.url" class="hover:bg-slate-800 p-1 rounded-xl">
                {{ page.title }}
            </nuxt-link>
        </div>
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
</script>