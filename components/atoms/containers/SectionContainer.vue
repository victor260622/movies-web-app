<template>
  <div class="w-full" :class="subClasses ? subClasses : 'mt-36'">
    <div class="w-full mb-[80px] flex flex-col lg:flex-row justify-between items-start gap-y-4 lg:items-center">
      <div class="flex flex-col">
        <h2 class="text-white text-4xl font-bold mb-2">{{ title }}</h2>
        <p class="text-[#999999] text-base">{{ subtitle }}</p>
      </div>
      <div class="flex" v-if="hasButtons">
        <AtomsButtonsCustomButton
          size="md"
          :variant="isYearly ? 'primary' : 'secondary'"
          @click="emit('yearly')"
        >
          yearly
        </AtomsButtonsCustomButton>
        <AtomsButtonsCustomButton
          size="md"
          :variant="isMonthly ? 'primary' : 'secondary'"
          @click="emit('monthly')"
        >
          monthly
        </AtomsButtonsCustomButton>
      </div>
    </div>
    <div :class="gridClass">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  subClasses?: string
  gridClass?: string
  isYearly?: boolean
  isMonthly?: boolean
  hasButtons?: boolean
}

const emit = defineEmits<{
  (e: 'yearly'): void
  (e: 'monthly'): void
}>()

withDefaults(defineProps<Props>(), {
  gridClass: 'grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-x-6',
  isYearly: false,
  isMonthly: false,
  hasButtons: false,
})
</script>