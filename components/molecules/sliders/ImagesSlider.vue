<template>
  <div class="w-full overflow-x-auto">
    <div class="flex gap-4 py-2">
      <AtomsContainersImagesContainer
        v-for="(item, idx) in normalized"
        :key="idx"
        :url="item.url"
        :path="item.path"
        :alt="item.alt || `Imagen ${idx + 1}`"
        :width="200"
        :height="200"
        fit="cover"
        rounded="md"
        bordered
        class="min-w-[200px] min-h-[200px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Item {
  url?: string;
  path?: string;
  alt?: string;
}

interface Props {
  items?: Item[];
}

const props = defineProps<Props>();
const normalized = computed<Item[]>(() => {
  const list = props.items?.length
    ? props.items
    : Array.from({ length: 9 }, () => ({ url: undefined, path: undefined }));
  if (list.length < 9) {
    return [
      ...list,
      ...Array.from({ length: 9 - list.length }, () => ({
        url: undefined,
        path: undefined,
      })),
    ];
  }
  return list.slice(0, 9);
});
</script>
