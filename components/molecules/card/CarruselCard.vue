<template>
  <AtomsCardsContainerCard>
    <template #header>
      <div class="flex items-center justify-between w-full">
        <div class="flex flex-col gap-3">
          <h2 class="text-[38px] text-white font-bold">
            Explore our wide variety of categories
          </h2>
          <p class="text-[16px] text-[#999999]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <AtomsButtonsArrowButton
          class="hidden lg:inline-flex"
          @goLeft="onLeft"
          @goRight="onRight"
        />
      </div>
    </template>

    <template #content>
      <div
        class="flex gap-[30px] mt-20 justify-center w-full overflow-x-hidden"
      >
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
    </template>
  </AtomsCardsContainerCard>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = withDefaults(defineProps<{ title?: string; items?: any[] }>(), {
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
