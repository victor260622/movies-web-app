<template>
  <button
    :aria-label="ariaLabel"
    :class="[
      'relative flex flex-col  justify-center border-4 border-[#262626] items-center w-[48px] h-[48px] rounded-md',
      { '': active },
    ]"
    @click="$emit('toggle')"
    :type="type"
  >
    <SvgsHamburger />
  </button>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean;
  type?: string;
  ariaLabel?: string;
}
const props = withDefaults(defineProps<Props>(), {
  active: false,
  type: "button",
  ariaLabel: "Abrir menú",
});
</script>

<style scoped>
button {
  color: #222;
  background-color: #1a1a1a;
}
</style>
