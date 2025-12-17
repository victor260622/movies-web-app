<template>
  <div class="bg-[#262626] rounded-[12px] p-5 flex flex-col items-center w-full max-w-[280px]">
    <img
      :src="url"
      :alt="alt"
      class="w-full h-full object-cover rounded-[8px] mb-4 mx-auto"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ url: string; alt?: string }>();
</script>
