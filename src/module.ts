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

    // Transpilar el módulo de snow-effect
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || []
    _nuxt.options.build.transpile.push('@le-pepe/snow-effect')

    // Configurar Vue para reconocer el custom element de Stencil
    _nuxt.options.vue = _nuxt.options.vue || {}
    _nuxt.options.vue.compilerOptions = _nuxt.options.vue.compilerOptions || {}
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _nuxt.options.vue.compilerOptions.isCustomElement = _nuxt.options.vue.compilerOptions.isCustomElement || ((tag) => {
      return false
    })

    const originalIsCustomElement = _nuxt.options.vue.compilerOptions.isCustomElement
    _nuxt.options.vue.compilerOptions.isCustomElement = (tag) => {
      if (tag === 'snow-effect') {
        return true
      }
      return typeof originalIsCustomElement === 'function' ? originalIsCustomElement(tag) : false
    }

    // Configurar Vite para manejar correctamente el módulo
    _nuxt.options.vite.optimizeDeps = _nuxt.options.vite.optimizeDeps || {}
    _nuxt.options.vite.optimizeDeps.include = _nuxt.options.vite.optimizeDeps.include || []
    _nuxt.options.vite.optimizeDeps.include.push('@le-pepe/snow-effect/loader')
    _nuxt.options.vite.optimizeDeps.exclude = _nuxt.options.vite.optimizeDeps.exclude || []
    _nuxt.options.vite.optimizeDeps.exclude.push('@le-pepe/snow-effect')

    // Configurar Vite SSR
    _nuxt.options.vite.ssr = _nuxt.options.vite.ssr || {}
    _nuxt.options.vite.ssr.noExternal = _nuxt.options.vite.ssr.noExternal || []
    if (Array.isArray(_nuxt.options.vite.ssr.noExternal)) {
      _nuxt.options.vite.ssr.noExternal.push('@le-pepe/snow-effect')
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin.client'))

    // Registrar el componente wrapper
    addComponent({
      name: 'SnowEffectComponent',
      filePath: resolver.resolve('./runtime/components/SnowEffectComponent.vue'),
    })
  },
})
