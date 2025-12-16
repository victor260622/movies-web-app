<template>
  <div class="bg-[#232323] rounded-[10px] px-4 py-2 inline-flex items-center justify-center">
    <span class="text-white text-xl font-medium">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>
