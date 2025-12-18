<template>
  <div class="rounded-[10px] px-5 flex flex-col gap-2 w-full">
    <div class="flex items-center gap-2 mb-1">
      <span class="text-white text-base font-semibold">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>();
</script>
