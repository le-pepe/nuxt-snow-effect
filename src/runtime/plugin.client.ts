import { defineCustomElements } from '@le-pepe/snow-effect/loader'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'snow-effect',
  parallel: true,
  setup() {
    if (import.meta.client) {
      try {
        defineCustomElements(window)
      }
      catch (error) {
        console.error('Error loading snow-effect custom elements:', error)
      }
    }
  },
})
