<template>
  <nav class="w-full bg-transparent">
    <div class="mx-auto w-full max-w-7xl px-4 py-4">
      <div class="flex h-16 items-center justify-between gap-4">
        <div class="flex items-center">
          <slot name="logo">
            <template v-if="logoSrc">
              <NuxtLink
                v-if="logoTo"
                :to="logoTo"
                class="inline-flex items-center"
              >
                <img :src="logoSrc" :alt="logoAlt" class="h-9 lg:h-16 w-auto" />
              </NuxtLink>
              <div v-else class="inline-flex items-center">
                <img :src="logoSrc" :alt="logoAlt" class="h-9 lg:h-16 w-auto" />
              </div>
            </template>
          </slot>
        </div>

        <div class="flex items-center gap-3">
          <slot name="utils" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Props {
  logoSrc?: string;
  logoAlt?: string;
  logoTo?: string | Record<string, unknown>;
}

withDefaults(defineProps<Props>(), {
  logoAlt: "Logo",
});
</script>
