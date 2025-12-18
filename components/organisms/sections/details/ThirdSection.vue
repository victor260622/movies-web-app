<template>
  <AtomsContainersDescriptionContainer
    :title="props.title"
    :description="props.description"
    class="mt-6"
  />
</template>

<script setup lang="ts">
import type { AtomsContainersDescriptionContainer } from "#components";

const props = defineProps<{
  title: String;
  description: String;
}>();
</script>
