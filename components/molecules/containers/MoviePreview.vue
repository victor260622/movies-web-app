<template>
  <NuxtLink :to="`/${imdbID}`">
    <AtomsCardsCardPreview :url="url" :alt="alt">
      <div class="w-full flex flex-col items-center justify-center gap-2">
        <div class="flex w-full items-center justify-between gap-4 text-[#bbb] text-sm mb-2">
          <span v-if="imdbID" class="flex items-center gap-1">ID: {{ imdbID }}</span>
          <span v-if="year" class="flex items-center gap-1"><SvgsCalendar /> {{ year }}</span>
        </div>
      </div>
    </AtomsCardsCardPreview>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ url: string; alt?: string; imdbID?: string; year?: string | number }>();
</script>
