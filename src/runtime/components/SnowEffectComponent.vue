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
  <snow-effect
    :color="color"
    :flakes="flakes"
    :speed="speed"
  />
</template>

<style scoped>
snow-effect {
 --zindex: -1}
</style>
