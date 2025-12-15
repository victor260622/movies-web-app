<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: "",
});

const base = "bg-[#0F0F0F] rounded-[12px] border-[4px] border-[#1F1F1F]";

const cardClasses = computed(() =>
  [base, props.className].filter(Boolean).join(" "),
);
</script>
