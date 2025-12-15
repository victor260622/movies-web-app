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
      { url: "/images/img1.jpg", alt: "Imagen 1", width: 80, height: 80 },
      { url: "/images/img2.jpg", alt: "Imagen 2", width: 80, height: 80 },
      { url: "/images/img3.jpg", alt: "Imagen 3", width: 80, height: 80 },
      { url: "/images/img4.jpg", alt: "Imagen 4", width: 80, height: 80 },
    ],
  },
  {
    text: "Comedia",
    images: [
      { url: "/images/img5.jpg", alt: "Imagen 5", width: 80, height: 80 },
      { url: "/images/img6.jpg", alt: "Imagen 6", width: 80, height: 80 },
      { url: "/images/img7.jpg", alt: "Imagen 7", width: 80, height: 80 },
      { url: "/images/img8.jpg", alt: "Imagen 8", width: 80, height: 80 },
    ],
  },
  {
    text: "Drama",
    images: [
      { url: "/images/img9.jpg", alt: "Imagen 9", width: 80, height: 80 },
      { url: "/images/img10.jpg", alt: "Imagen 10", width: 80, height: 80 },
      { url: "/images/img11.jpg", alt: "Imagen 11", width: 80, height: 80 },
      { url: "/images/img12.jpg", alt: "Imagen 12", width: 80, height: 80 },
    ],
  },
  {
    text: "Documental",
    images: [
      { url: "/images/img13.jpg", alt: "Imagen 13", width: 80, height: 80 },
      { url: "/images/img14.jpg", alt: "Imagen 14", width: 80, height: 80 },
      { url: "/images/img15.jpg", alt: "Imagen 15", width: 80, height: 80 },
      { url: "/images/img16.jpg", alt: "Imagen 16", width: 80, height: 80 },
    ],
  },
  {
    text: "Aventura",
    images: [
      { url: "/images/img17.jpg", alt: "Imagen 17", width: 80, height: 80 },
      { url: "/images/img18.jpg", alt: "Imagen 18", width: 80, height: 80 },
      { url: "/images/img19.jpg", alt: "Imagen 19", width: 80, height: 80 },
      { url: "/images/img20.jpg", alt: "Imagen 20", width: 80, height: 80 },
    ],
  },
  {
    text: "Acción 2",
    images: [
      { url: "/images/img1.jpg", alt: "Imagen 1", width: 80, height: 80 },
      { url: "/images/img2.jpg", alt: "Imagen 2", width: 80, height: 80 },
      { url: "/images/img3.jpg", alt: "Imagen 3", width: 80, height: 80 },
      { url: "/images/img4.jpg", alt: "Imagen 4", width: 80, height: 80 },
    ],
  },
  {
    text: "Comedia 2",
    images: [
      { url: "/images/img5.jpg", alt: "Imagen 5", width: 80, height: 80 },
      { url: "/images/img6.jpg", alt: "Imagen 6", width: 80, height: 80 },
      { url: "/images/img7.jpg", alt: "Imagen 7", width: 80, height: 80 },
      { url: "/images/img8.jpg", alt: "Imagen 8", width: 80, height: 80 },
    ],
  },
  {
    text: "Drama 2",
    images: [
      { url: "/images/img9.jpg", alt: "Imagen 9", width: 80, height: 80 },
      { url: "/images/img10.jpg", alt: "Imagen 10", width: 80, height: 80 },
      { url: "/images/img11.jpg", alt: "Imagen 11", width: 80, height: 80 },
      { url: "/images/img12.jpg", alt: "Imagen 12", width: 80, height: 80 },
    ],
  },
  {
    text: "Documental 2",
    images: [
      { url: "/images/img13.jpg", alt: "Imagen 13", width: 80, height: 80 },
      { url: "/images/img14.jpg", alt: "Imagen 14", width: 80, height: 80 },
      { url: "/images/img15.jpg", alt: "Imagen 15", width: 80, height: 80 },
      { url: "/images/img16.jpg", alt: "Imagen 16", width: 80, height: 80 },
    ],
  },
  {
    text: "Aventura 2",
    images: [
      { url: "/images/img17.jpg", alt: "Imagen 17", width: 80, height: 80 },
      { url: "/images/img18.jpg", alt: "Imagen 18", width: 80, height: 80 },
      { url: "/images/img19.jpg", alt: "Imagen 19", width: 80, height: 80 },
      { url: "/images/img20.jpg", alt: "Imagen 20", width: 80, height: 80 },
    ],
  },
];
</script>
