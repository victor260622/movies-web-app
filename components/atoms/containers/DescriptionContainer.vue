<template>
  <div class="bg-[#1A1A1A] rounded-[12px] p-6 w-full">
    <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-[#bbb] text-base">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>
