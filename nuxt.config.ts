// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  routeRules: {
    '/': { prerender: true },
}
})