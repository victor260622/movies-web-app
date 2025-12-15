<template>
  <div class="flex items-center justify-center">
    <img
      :src="url"
      :alt="alt"
      :style="imgStyle"
      class="object-cover rounded"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ url: string; alt?: string; width?: string | number; height?: string | number }>();

const imgStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.width) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width;
  if (props.height) style.height = typeof props.height === 'number' ? props.height + 'px' : props.height;
  return style;
});
</script>
