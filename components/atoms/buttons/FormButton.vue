<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClasses">
    <span
      v-if="loading"
      class="mr-2 inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
    ></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "md",
  block: false,
  disabled: false,
  loading: false,
});

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-5 py-3",
};

const buttonClasses = computed(() => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  const color =
    "bg-[#E50000] text-white hover:bg-[#cc0000] disabled:opacity-60 disabled:cursor-not-allowed";
  const width = props.block ? "w-full" : "";
  return [base, color, sizeClasses[props.size], width]
    .filter(Boolean)
    .join(" ");
});
</script>
