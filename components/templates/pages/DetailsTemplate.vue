<template>
  <MoleculesHeaderAppHeader :hasBg="false" />
  <div v-if="pending" class="flex items-center justify-center h-64 text-white">
    <span class="animate-pulse">Cargando Detalles de la Película...</span>
  </div>
  <div class="" v-if="movie">
    <OrganismsSectionsDetailsFirstSection
      :title="movie?.Title"
      :url="movie?.Poster"
      :width="300"
      :height="450"
    />
    <div class="flex w-full items-center justify-center">
      <div class="max-w-7xl w-full flex justify-between gap-5">
        <div class="flex flex-col">
          <OrganismsSectionsDetailsThirdSection
            v-if="movie"
            :description="movie.Plot"
            :title="'Description'"
          />
          <OrganismsSectionsDetailsThirdSection
            v-if="movie"
            :description="movie.Awards"
            :title="'Awards'"
          />
          <OrganismsSectionsDetailsThirdSection
            v-if="movie"
            :description="movie.Actors"
            :title="'Actors'"
          />
        </div>
        <OrganismsSectionsDetailsSecodnSection v-if="movie" :movie="movie" />
      </div>
    </div>

    <OrganismsSectionsHomeSixthSection />
  </div>

  <MoleculesFooterAppFooter />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAsyncData } from "nuxt/app";
import { useMovieById } from "~/composables/useMovies";
import { onMounted } from "vue";

const route = useRoute();
const imdbId = route.params.imdbId as string;
if (!imdbId) {
  throw new Error("No se encontró imdbId en la ruta");
}
const {
  data: movie,
  pending,
  error,
  refresh,
} = await useAsyncData("movie", () => useMovieById(imdbId));

onMounted(() => {
  refresh();
});
</script>
