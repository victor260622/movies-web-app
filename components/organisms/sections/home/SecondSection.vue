<template>
  <div class="flex flex-col items-center w-full mt-32">
    <div class="flex max-w-7xl w-full px-4">
      <MoleculesCardCarruselCard :items="movieTypes">
        <template #body="{ item }">
          <MoleculesCardMoviesTypesCard
            :images="item.images"
            :text="item.text"
          />
        </template>
      </MoleculesCardCarruselCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const movieTypes = [
  {
    text: "Acción",
    images: [
      { url: "/images/img1.png", alt: "Imagen 1", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 2", width: 80, height: 80 },
      { url: "/images/img3.png", alt: "Imagen 3", width: 80, height: 80 },
      { url: "/images/img4.png", alt: "Imagen 4", width: 80, height: 80 },
    ],
  },
  {
    text: "Comedia",
    images: [
      { url: "/images/img5.png", alt: "Imagen 5", width: 80, height: 80 },
      { url: "/images/img6.png", alt: "Imagen 6", width: 80, height: 80 },
      { url: "/images/img7.png", alt: "Imagen 7", width: 80, height: 80 },
      { url: "/images/img8.png", alt: "Imagen 8", width: 80, height: 80 },
    ],
  },
  {
    text: "Drama",
    images: [
      { url: "/images/img9.png", alt: "Imagen 9", width: 80, height: 80 },
      { url: "/images/img1.png", alt: "Imagen 10", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 11", width: 80, height: 80 },
      { url: "/images/img3.png", alt: "Imagen 12", width: 80, height: 80 },
    ],
  },
  {
    text: "Documental",
    images: [
      { url: "/images/img4.png", alt: "Imagen 13", width: 80, height: 80 },
      { url: "/images/img5.png", alt: "Imagen 14", width: 80, height: 80 },
      { url: "/images/img6.png", alt: "Imagen 15", width: 80, height: 80 },
      { url: "/images/img7.png", alt: "Imagen 16", width: 80, height: 80 },
    ],
  },
  {
    text: "Aventura",
    images: [
      { url: "/images/img8.png", alt: "Imagen 17", width: 80, height: 80 },
      { url: "/images/img9.png", alt: "Imagen 18", width: 80, height: 80 },
      { url: "/images/img1.png", alt: "Imagen 19", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 20", width: 80, height: 80 },
    ],
  },
  {
    text: "Acción",
    images: [
      { url: "/images/img1.png", alt: "Imagen 1", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 2", width: 80, height: 80 },
      { url: "/images/img3.png", alt: "Imagen 3", width: 80, height: 80 },
      { url: "/images/img4.png", alt: "Imagen 4", width: 80, height: 80 },
    ],
  },
  {
    text: "Comedia",
    images: [
      { url: "/images/img5.png", alt: "Imagen 5", width: 80, height: 80 },
      { url: "/images/img6.png", alt: "Imagen 6", width: 80, height: 80 },
      { url: "/images/img7.png", alt: "Imagen 7", width: 80, height: 80 },
      { url: "/images/img8.png", alt: "Imagen 8", width: 80, height: 80 },
    ],
  },
  {
    text: "Drama",
    images: [
      { url: "/images/img9.png", alt: "Imagen 9", width: 80, height: 80 },
      { url: "/images/img1.png", alt: "Imagen 10", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 11", width: 80, height: 80 },
      { url: "/images/img3.png", alt: "Imagen 12", width: 80, height: 80 },
    ],
  },
  {
    text: "Documental",
    images: [
      { url: "/images/img4.png", alt: "Imagen 13", width: 80, height: 80 },
      { url: "/images/img5.png", alt: "Imagen 14", width: 80, height: 80 },
      { url: "/images/img6.png", alt: "Imagen 15", width: 80, height: 80 },
      { url: "/images/img7.png", alt: "Imagen 16", width: 80, height: 80 },
    ],
  },
  {
    text: "Aventura",
    images: [
      { url: "/images/img8.png", alt: "Imagen 17", width: 80, height: 80 },
      { url: "/images/img9.png", alt: "Imagen 18", width: 80, height: 80 },
      { url: "/images/img1.png", alt: "Imagen 19", width: 80, height: 80 },
      { url: "/images/img2.png", alt: "Imagen 20", width: 80, height: 80 },
    ],
  },
];
</script>
