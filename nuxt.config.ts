import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  srcDir: 'src',
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    }
  },
})
