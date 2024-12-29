import { defineCustomElements } from '@le-pepe/snow-effect/loader'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.hook('vue:setup', () => {
    defineCustomElements(window!)
  })
})
