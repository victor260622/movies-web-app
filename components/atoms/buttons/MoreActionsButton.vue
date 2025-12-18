<template>
  <button
    class="flex items-center text-white p-2 hover:bg-[#333] transition-colors focus:outline-none"
    type="button"
    @click="toggleActive"
  >
    <SvgsMore v-if="!isActive" />
    <SvgsLess v-if="isActive" />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "click", value: boolean): void;
}>();

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
  emit("click", isActive.value);
}
</script>
