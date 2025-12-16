<template>
  <div :class="customClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  customClass?: string
}

withDefaults(defineProps<Props>(), {
  customClass: 'bg-[#1A1A1A] rounded-[10px] p-[40px] w-full'
})
</script>