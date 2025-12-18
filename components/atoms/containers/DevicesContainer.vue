<template>
  <div class="w-full">
    <h2 class="text-white text-[38px] font-bold mb-2">{{ title }}</h2>
    <p class="text-[#999] text-base">{{ description }}</p>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16font-bold text-[28px] lg:text-[48px] xl:text-[58px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>
