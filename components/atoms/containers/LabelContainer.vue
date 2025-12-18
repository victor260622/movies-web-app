<template>
  <div class="flex flex-col gap-4">
    <slot />
    <div class="inline-grid grid-flow-row grid-cols-4 auto-cols-auto gap-2">
      <div
        v-for="value in item"
        :key="value"
        class="bg-[#141414] rounded-[6px] border border-[#262626] px-4 py-2 w-fit whitespace-nowrap"
      >
        <span class="text-white font-medium text-[18px]">
          {{ value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: string[] }>();
</script>
