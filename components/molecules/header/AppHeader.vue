<template>
  <AtomsContainersBgContainer>
    <template #header>
      <AtomsContainersNavContainer
        :logo-src="logoSrc"
        :logo-alt="logoAlt"
        :logo-to="logoTo"
      >
        <template #utils>
          <AtomsButtonsHamburgerButton
            class="lg:hidden"
            :active="menuOpen"
            @toggle="menuOpen = !menuOpen"
          />
          <div
            :class="[
              'flex items-center gap-4',
              'lg:flex',
              menuOpen ? 'flex' : 'hidden',
              'lg:gap-4',
            ]"
          >
          <NuxtLink to="/singup">
            <AtomsButtonsCustomButton
              variant="secondary"
              size="lg"
              class="flex items-center gap-4"
            >
            Sing Up
          </AtomsButtonsCustomButton>
        </NuxtLink>
            <AtomsButtonsCustomButton
              variant="primary"
              size="lg"
              class="flex items-center gap-4"
            >
              Log In
            </AtomsButtonsCustomButton>
          </div>
        </template>
      </AtomsContainersNavContainer>
    </template>
    <template #center>
      <div class="flex flex-col w-full items-center justify-center mt-8">
        <slot name="logo" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col w-full items-center justify-center mt-8">
        <slot name="body" />
      </div>
    </template>
  </AtomsContainersBgContainer>
</template>

<script setup lang="ts">
interface NavItem {
  label: string;
  to: string | Record<string, any>;
  active?: boolean;
}

interface Props {
  logoSrc?: string;
  logoAlt?: string;
  logoTo?: string | Record<string, any>;
  items?: NavItem[];
  cardClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  logoAlt: "Logo",
  logoTo: "/",
  cardClass: "",
  logoSrc: "/images/Logo.png",
});

const { logoSrc, logoAlt, logoTo, items, cardClass } = props;
import type { NuxtLink } from "#components";
import { ref } from "vue";
const menuOpen = ref(false);
</script>
