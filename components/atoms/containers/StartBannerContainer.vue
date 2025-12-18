<template>
  <div
    class="relative w-full h-[350px] rounded-[16px] overflow-hidden flex items-center justify-center"
  >
    <!-- capa de fondo -->
    <div class="absolute inset-0 z-0 banner-bg"></div>

    <!-- contenido -->
    <div
      class="relative z-10 w-full h-full flex flex-col items-center justify-center"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.banner-bg {
  background:
    linear-gradient(
      90deg,
      rgba(15, 15, 15, 0.9) 20%,
      rgba(20, 15, 15, 0.8) 38%,
      rgba(34, 14, 14, 0.8) 48%,
      rgba(229, 0, 0, 0.5) 100%
    ),
    url("/images/Banner.png") center/cover no-repeat;
}
</style>
