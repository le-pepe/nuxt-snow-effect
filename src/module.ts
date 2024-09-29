import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { name, version } from '../package.json'

// Module options TypeScript interface definition
export interface ModuleOptions {
  color?: string
  flakes?: number
  speed?: number
}
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'snowEffect',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    color: 'white',
    flakes: 100,
    speed: 1,
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    // TODO: make nuxt config working

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin.client'))
    addComponent({
      name: 'SnowEffectComponent',
      filePath: resolver.resolve('./components/SnowEffectComponent.vue'),
    })
  },
})
