<template>
  <div class="flex flex-col items-center">
    <div class=" w-full max-w-[1920px]" :class="hasBg ? 'bg-container' : ''">
      <slot name="header" />
      <slot name="center" />
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  hasBg: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.bg-container {
  background-image:
    linear-gradient(
      to bottom,
      rgba(20, 20, 20, 1) 2%,
      rgba(20, 20, 20, 0.5) 38%,
      rgba(20, 20, 20, 1) 98%
    ),
    url("/public/images/Banner.png");
  background-size: fill;
  background-position: center;
  background-repeat: no-repeat;
}

:where(.min-h-screen) {
  min-height: 100vh;
}
</style>
