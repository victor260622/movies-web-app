<template>
  <NuxtLink
    :to="to"
    :class="linkClasses"
    :aria-disabled="disabled ? 'true' : 'false'"
    :tabindex="disabled ? -1 : 0"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  to: string | Record<string, any>;
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  to: "/",
  active: false,
  disabled: false,
  block: false,
});

const linkClasses = computed(() => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[8px] transition-colors";
  const pad = "px-[24px] py-[14px]";
  const state = props.active
    ? "bg-[#1A1A1A] text-white"
    : "bg-transparent text-[#BFBFBF]";
  const width = props.block ? "w-full" : "";
  const disabledCls = props.disabled ? "pointer-events-none opacity-60" : "";
  return [base, pad, state, width, disabledCls].filter(Boolean).join(" ");
});
</script>
