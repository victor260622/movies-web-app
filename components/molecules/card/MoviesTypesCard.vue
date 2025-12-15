<template>
  <AtomsCardsTypesCard :text="text">
    <div class="grid grid-cols-2 grid-rows-2 gap-3 w-full">
      <AtomsContainersImagesContainer
        v-for="(img, idx) in images"
        :key="idx"
        :url="img.url"
        :alt="img.alt"
        :width="img.width || 80"
        :height="img.height || 80"
      />
    </div>
  </AtomsCardsTypesCard>
</template>

<script setup lang="ts">
interface ImageItem {
  url: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

defineProps<{
  images: ImageItem[];
  text: string;
}>();
</script>
