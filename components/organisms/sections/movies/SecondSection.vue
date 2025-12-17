<template>
  <div class="flex justify-center">
    <div class="max-w-7xl w-full mt-12 border-b border-red-gradient pb-6 px-4">
      <MoleculesContainersCarruselContainer :items="movies" :title="'New Releases'">
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
import type { MoleculesContainersCarruselContainer } from '#components';

const movies = [
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
  {
    url: "/images/Image.png",
    alt: "Portada de la película",
    imdbID: "tt1234567",
    year: 2023,
    title: "Título de la Película",
    description: "Descripción breve o información adicional."
  },
]
</script>

<style scoped>
.border-red-gradient {
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, black 0%, red 50%, black 100%) 1;
}
</style>