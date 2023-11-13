// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/fontawesome.js'],
  ssr: false,
  vite: {
    esbuild: {
      target: 'esnext'
    }
  },
})