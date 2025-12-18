<template>
  <div class="flex flex-col gap-4">
    <slot />
    <div class="flex">
      <div
        v-for="rating in filteredRatings"
        :key="rating.Source + rating.Value"
        class="bg-[#141414] rounded-[6px] border border-[#262626] px-4 py-2 flex flex-col items-start justify-start gap-1"
      >
        <span class="text-white font-medium text-[18px]">
          {{ rating.Source }}
        </span>
        <span class="text-white font-medium text-[18px] text-start">
          {{ rating.Value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Rating } from "~/types/movie";

const props = defineProps<{ item: Rating[] }>();

const filteredRatings = computed(() =>
  props.item.filter((r) => r.Source !== "Internet Movie Database"),
);
</script>
