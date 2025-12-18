<template>
  <div class="flex justify-center">
    <div class="max-w-7xl w-full mt-12 border-b border-red-gradient pb-6 px-4">
      <div
        v-if="pending"
        class="flex items-center justify-center h-64 text-white"
      >
        <span class="animate-pulse">Cargando películas...</span>
      </div>
      <MoleculesContainersCarruselContainer
        :items="movies"
        :title="'New Releases'"
      >
        <template #body="{ item }">
          <MoleculesContainersMoviePreview
            :url="item.url"
            :alt="item.alt"
            :imdbID="item.imdbID"
            :year="item.year"
          >
            <div class="mt-2 text-white text-lg font-semibold">
              {{ item.title }}
            </div>
            <div class="text-[#bbb] text-sm">
              {{ item.description }}
            </div>
          </MoleculesContainersMoviePreview>
        </template>
      </MoleculesContainersCarruselContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from "nuxt/app";
import { onMounted } from "vue";
import { useRandomMovies } from "~/composables/useMovies";
const {
  data: movies,
  pending,
  error,
  refresh,
} = await useAsyncData("third", useRandomMovies);
onMounted(() => {
  refresh();
});
</script>

<style scoped>
.border-red-gradient {
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, black 0%, red 50%, black 100%) 1;
}
</style>
