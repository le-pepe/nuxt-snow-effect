import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'snow-effect',
  parallel: true,
  async setup() {
    if (import.meta.client) {
      try {
        const { defineCustomElements } = await import('@le-pepe/snow-effect/loader')
        defineCustomElements(window)
      }
      catch (error) {
        console.error('Error loading snow-effect custom elements:', error)
      }
    }
  },
})
