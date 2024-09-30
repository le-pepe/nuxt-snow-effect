<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: 'white',
  },
  flakes: {
    type: Number,
    default: 100,
  },
  speed: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <ClientOnly>
    <snow-effect
      :color="color"
      :flakes="flakes"
      :speed="speed"
    />
  </ClientOnly>
</template>

<style scoped>
</style>
