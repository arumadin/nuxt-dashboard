// https://nuxt.com/docs/api/configuration/nuxt-config
import * as shadcn from 'shadcn-nuxt'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/icon'],

  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-09-05'
})