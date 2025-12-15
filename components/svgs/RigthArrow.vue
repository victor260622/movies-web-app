<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 30 30" fill="none">
        <path d="M5.625 15L24.375 15M24.375 15L15.9375 6.5625M24.375 15L15.9375 23.4375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 30,
  },
  height: {
    type: [String, Number],
    default: 28,
  },
});
</script>