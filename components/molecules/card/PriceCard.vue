<template>
  <AtomsCardsCustomCard
    :customClass="'flex flex-col items-center justify-start text-left gap-6 p-[40px] border border-[#262626] rounded-[10px] bg-[#1A1A1A] w-full'"
  >
    <div class="w-full">
      <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-[#999] text-base mb-4">{{ subtitle }}</p>
      <div class="text-2xl font-semibold text-white mb-4">
        {{ price
        }}<span class="text-base font-medium text-[#999999]">{{
          year ? "/year" : "/month"
        }}</span>
      </div>
    </div>
    <div class="flex justify-start w-full">
      <slot name="custombuttons" />
    </div>
  </AtomsCardsCustomCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  price: string | number;
  year: boolean;
}>();
</script>
