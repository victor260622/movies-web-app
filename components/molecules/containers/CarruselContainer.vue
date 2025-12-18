<template>
  <div>
    <div class="flex items-center justify-between w-full">
      <div class="flex flex-col gap-3">
        <h2 class="text-[38px] text-white font-bold">
          {{ title }}
        </h2>
      </div>
      <AtomsButtonsArrowButton
        class="hidden lg:inline-flex"
        @goLeft="onLeft"
        @goRight="onRight"
      />
    </div>

    <div class="flex gap-[30px] mt-12 justify-center w-full overflow-x-hidden">
      <template v-for="item in visibleItems" :key="itemKey(item)">
        <slot name="body" :item="item" />
      </template>
    </div>
    <div class="flex w-full justify-center mt-7">
      <AtomsButtonsArrowButton
        class="inline-flex lg:hidden"
        @goLeft="onLeft"
        @goRight="onRight"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(defineProps<{ items?: any[]; title: string }>(), {
  items: () => [],
});

const currentIndex = ref(0);
const itemsToShow = ref(5);

function updateItemsToShow() {
  itemsToShow.value = window.innerWidth < 1024 ? 2 : 5;
}

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});

const visibleItems = computed(() => {
  return props.items.slice(
    currentIndex.value,
    currentIndex.value + itemsToShow.value,
  );
});

function onLeft() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function onRight() {
  if (currentIndex.value + itemsToShow.value < props.items.length)
    currentIndex.value++;
}

function itemKey(item: any) {
  return item.id || item.key || JSON.stringify(item);
}
</script>
