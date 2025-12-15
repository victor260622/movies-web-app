<template>
  <div
    class="rounded-[12px] border p-12 flex flex-col gap-4"
    :style="cardStyle"
  >
    <div class="flex items-center gap-3 mb-2">
      <slot name="icon" />
      <span class="text-white text-2xl font-bold">{{ title }}</span>
    </div>
    <div class="text-[#999999] text-base">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; description: string }>();

const cardStyle = {
  border: "1px solid #262626",
  background:
    "linear-gradient(to bottom left, rgba(70,1,1,0.3) 0%, rgba(70,1,1,0) 18%, rgba(15,15,15,1) 100%)",
};
</script>
