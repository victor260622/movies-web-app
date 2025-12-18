<template>
  <button
    class="flex items-center justify-center rounded-full bg-transparent hover:bg-[#222] transition-colors p-1 focus:outline-none"
    type="button"
    @click="$emit('click')"
  >
    <SvgsUser width="40" height="40" />
  </button>
</template>

<script setup lang="ts">
defineEmits(["click"]);
</script>
