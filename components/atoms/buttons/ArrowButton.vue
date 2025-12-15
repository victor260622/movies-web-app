<template>
  <div class="flex items-center gap-2">
    <button
      :aria-label="`${ariaLabel} izquierda`"
      :class="[
        'relative flex justify-center items-center border-4 border-[#262626] w-[48px] h-[48px] rounded-md',
        { 'ring-2 ring-white': active },
      ]"
      @click="$emit('goLeft')"
      :type="type"
    >
      <SvgsLeftArrow />
    </button>

    <slot name="utils" />

    <button
      :aria-label="`${ariaLabel} derecha`"
      :class="[
        'relative flex justify-center items-center border-4 border-[#262626] w-[48px] h-[48px] rounded-md',
        { 'ring-2 ring-white': active },
      ]"
      @click="$emit('goRight')"
      :type="type"
    >
      <SvgsRigthArrow />
    </button>
  </div>
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
  ariaLabel: "Mover carrusel",
});
</script>

<style scoped>
button {
  color: #222;
  background-color: #1a1a1a;
  transition: background-color 0.2s;
}
button:hover {
  background-color: #333;
}
</style>
