// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ['~/plugins/fontawesome.js'],
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  vite: {
    build: {
      target: 'esnext'
    },
    esbuild: {
      target: 'esnext'
    }
  },
})