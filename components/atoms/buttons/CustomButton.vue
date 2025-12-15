<template>
  <button :class="buttonClasses" :type="type" :disabled="disabled">
    <span v-if="$slots.icon" class="flex items-center bg-">
      <slot name="icon" />
    </span>
    <span class="flex items-center font-semibold text-base">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  size: "md",
  variant: "primary",
  disabled: false,
});

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-5 py-3",
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-[#E50000] text-white hover:bg-red-700",
  secondary:
    "bg-[#1A1A1A] text-white font-medium hover:bg-[#0F0F0F] hover:text-gray-200",
  outline:
    "bg-transparent border border-[#E50000] text-[#E50000] hover:bg-[#E50000] hover:text-white",
  ghost: "bg-transparent text-[#E50000] hover:bg-red-50",
};

const buttonClasses = computed(() => {
  const base =
    "flex items-center gap-3 font-semibold rounded-[8px] transition-colors disabled:opacity-60 disabled:cursor-not-allowed";
  return [base, variantClasses[props.variant], sizeClasses[props.size]]
    .filter(Boolean)
    .join(" ");
});
</script>

<style scoped>
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
