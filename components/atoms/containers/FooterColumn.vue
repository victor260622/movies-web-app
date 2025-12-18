<template>
  <div>
    <h3 class="text-base font-semibold mb-4">{{ title }}</h3>
    <ul v-if="links">
      <li v-for="link in links" :key="link" class="mb-2">
        <NuxtLink to="/" class="text-[#999] hover:text-white text-sm">
          {{ link }}
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

defineProps<{
  title: string;
  links?: string[];
}>();
</script>
