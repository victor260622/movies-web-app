<template>
  <div class="flex justify-center">
    <div class="max-w-7xl w-full flex gap-5">
      <MoleculesContainersPosterContainer
        :url="props.url"
        :alt="props.alt"
        :title="props.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
  alt?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}>();
</script>
