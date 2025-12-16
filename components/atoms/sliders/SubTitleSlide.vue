<template>
  <transition name="slide-fade">
    <div v-if="show" class="text-[#bbb] text-sm" key="subtitle">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ show: boolean }>();
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
</style>
