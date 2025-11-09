import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (_nuxtApp) => {
  if (import.meta.client) {
    const { defineCustomElements } = await import('@le-pepe/snow-effect/loader')
    _nuxtApp.hook('app:beforeMount', () => {
      defineCustomElements(window)
    })
  }
})
