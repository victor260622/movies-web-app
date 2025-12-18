<template>
  <div
    class="relative flex items-center justify-center"
    :class="props.customClasses ?? 'rounded overflow-hidden'"
    :style="bgStyle"
  >
    <img
      v-if="!props.asBackground"
      :src="url"
      :alt="alt"
      :style="imgStyle"
      class="object-fill rounded w-full h-full"
    />

    <div v-if="props.title" class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="absolute bottom-28 flex flex-col items-center justify-center w-full px-4 gap-3"
    >
      <h2 class="text-white text-4xl font-bold drop-shadow-lg z-10">
        {{ props.title }}
      </h2>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  url: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  customClasses?: string;
  title?: string;
  asBackground?: boolean;
}>();

const imgStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.width)
    style.width =
      typeof props.width === "number" ? props.width + "px" : props.width;
  if (props.height)
    style.height =
      typeof props.height === "number" ? props.height + "px" : props.height;
  return style;
});

const bgStyle = computed(() => {
  if (props.asBackground) {
    return {
      backgroundImage: `url(${props.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: typeof props.width === "number" ? props.width + "px" : props.width,
      height:
        typeof props.height === "number" ? props.height + "px" : props.height,
    };
  }
  return {};
});
</script>
