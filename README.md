<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Snow Effect Nuxt module
- Package name: nuxt-snow-effect
- Description: My new Nuxt module
-->

# Nuxt Snow Effect

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A simple Nuxt module to add snow effect to your Nuxt application using [snow-effect](https://github.com/le-pepe/snow-effect) custom element.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/le-pepe/nuxt-snow-effect?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Add snow effect to your Nuxt application
- Customize the snow effect with various options
- Easy to use and setup

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-snow-effect
```

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    'nuxt-snow-effect',
  ],
})
```

Then in your `app.vue` file, add `<SnowEffectComponent>`:

```vue
<SnowEffectComponent />
```

### Options

| Option | Type   | Default         | Example                              | Description                                |
|--------|--------|-----------------|--------------------------------------|--------------------------------------------|
| color  | string | white / #ffffff | `<SnowEffectComponent color="red" />` | Change the color of the flakes             |
| flakes | number | 100             | `<SnowEffectComponent flakes="150" />`| Change the number of flakes                |
| speed  | number | 1               | `<SnowEffectComponent speed="1.5" />` | Change the speed of the falling flakes     |




## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-snow-effect/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-snow-effect

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-snow-effect.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-snow-effect

[license-src]: https://img.shields.io/npm/l/nuxt-snow-effect.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-snow-effect

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
