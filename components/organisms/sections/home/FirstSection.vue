<template>
  <MoleculesHeaderAppHeader :has-bg="true">
    <template #logo>
      <SvgsLogo class="w-[200px] h-[200px] lg:w-[470px] lg:h-[470px]" />
    </template>
    <template #body>
      <div class="flex flex-col items-center gap-8 mt-24">
        <div class="text-white max-w-5xl text-center gap-4 px-4">
          <h1 class="font-bold text-[38px] lg:text-[48px] xl:text-[58px]">
            The Best Streaming Experience
          </h1>
          <p class="font-normal text-[#999999] text-base">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <AtomsButtonsCustomButton
          variant="primary"
          size="lg"
          class="flex items-center gap-4"
          @click="$router.push('/movies')"
        >
          <template #icon>
            <SvgsPlay width="28" height="28" />
          </template>
          Start Watching Now
        </AtomsButtonsCustomButton>
      </div>
    </template>
  </MoleculesHeaderAppHeader>
</template>
