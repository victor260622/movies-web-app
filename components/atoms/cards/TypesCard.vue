<template>
  <div class="bg-[#1A1A1A] rounded-[12px] p-5 flex flex-col items-start border border-[#262626]">
    <div class="w-full">
      <slot />
    </div>
    <div class="flex items-center justify-between gap-2 mt-4 w-full">
      <span class="text-white text-base opacity-80">
        {{ text }}
      </span>
      <SvgsRigthArrow />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>
