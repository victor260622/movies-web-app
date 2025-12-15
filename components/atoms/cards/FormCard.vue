<template>
  <div :class="cardClasses">
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "default" | "elevated" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "default" | "lg" | "xl";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "md",
  padding: "default",
  shadow: "md",
  border: false,
  rounded: "lg",
  className: "",
});

const baseClasses = "bg-[rgb(15,15,15)]/85";

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  default: "",
  elevated: "border-0",
  outlined: "border-0 border-gray-500",
  ghost: "bg-transparent shadow-none",
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "min-h-32 max-w-sm",
  md: "min-h-40 max-w-md",
  lg: "min-h-48 max-w-lg",
  xl: "min-h-56 max-w-xl",
  full: "w-full",
};

const paddingClasses: Record<NonNullable<Props["padding"]>, string> = {
  none: "p-0",
  sm: "p-4",
  default: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const shadowClasses: Record<NonNullable<Props["shadow"]>, string> = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const roundedClasses: Record<NonNullable<Props["rounded"]>, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

const borderClasses = computed(() =>
  props.border ? "border border-gray-200" : "",
);

const cardClasses = computed(() =>
  [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
    paddingClasses[props.padding],
    shadowClasses[props.shadow],
    roundedClasses[props.rounded],
    borderClasses.value,
    props.className,
  ]
    .filter(Boolean)
    .join(" "),
);
</script>
