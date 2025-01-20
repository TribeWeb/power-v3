// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [// @nuxt ui-pro must go BEFORE @nuxt/content for prose to work in .md files
  '@nuxt/ui-pro', '@nuxt/content', '@nuxthub/core'],

  runtimeConfig: {
    // Private keys are only available on the server
    googleApiKey: '',
    spreadsheetId: ''
  },
  
  css: ['~/assets/css/main.css'],

// components: [ // don't just leave this empty or it fails to find any components!
//   { path: '~/components/content', prefix: 'Content' }, // not sure this actually does anything
// ],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },
})