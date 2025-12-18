<template>
  <MoleculesContainersDetailsContainer
    :year="movie.Year"
    :ratings="props.movie.Ratings"
    :language="props.movie.Language"
    :genre="props.movie.Genre"
    :director="props.movie.Director"
    :writer="props.movie.Writer"
  />
</template>

<script setup lang="ts">
import type { MovieDetails } from "~/types/movie";

const props = defineProps<{
  movie: MovieDetails;
}>();
</script>
