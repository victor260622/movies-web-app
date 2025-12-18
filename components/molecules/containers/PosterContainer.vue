<template>
  <AtomsContainersImagesContainer
    :title="props.title"
    :url="props.url"
    :alt="props.alt"
    :customClasses="'h-[600px] w-full object-fill rounded'"
  >
    <AtomsButtonsCustomButton
      variant="primary"
      size="sm"
      class="flex items-center gap-4"
      @click="$router.push('/movies')"
    >
      <template #icon>
        <SvgsPlay width="28" height="28" />
      </template>
      Start Watching Now
    </AtomsButtonsCustomButton>
  </AtomsContainersImagesContainer>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
  alt?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}>();
</script>
