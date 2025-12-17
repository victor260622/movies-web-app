<template>
  <AtomsContainersBgContainer :has-bg="hasBg">
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
          <div v-if="currentUser">
            <MoleculesContainersUserActions />
          </div>
          <div v-else class="flex items-center gap-4">
            <NuxtLink to="/signup">
              <AtomsButtonsCustomButton
                variant="secondary"
                size="lg"
                class="flex items-center gap-4"
              >
                Sign Up
              </AtomsButtonsCustomButton>
            </NuxtLink>
            <NuxtLink to="/login">
              <AtomsButtonsCustomButton
                variant="primary"
                size="lg"
                class="flex items-center gap-4"
              >
                Log In
              </AtomsButtonsCustomButton>
            </NuxtLink>
          </div>

          </div>
        </template>
      </AtomsContainersNavContainer>
    </template>

    <template #center >
      <div class="flex flex-col w-full items-center justify-center mt-8" v-if="hasBg">
        <slot name="logo" />
      </div>
    </template>

    <template #content>
      <div class="flex flex-col w-full items-center justify-center mt-8"  v-if="hasBg">
        <slot name="body" />
      </div>
    </template>
  </AtomsContainersBgContainer>
</template>

<script setup lang="ts">
import { useCookie } from "nuxt/app";
import { onMounted, ref } from "vue";
import useFirebaseAuth from "~/composables/useAuth";


const sessionCookie = useCookie("auth-cookie");

const menuOpen = ref(false);

const {  verifyAuth, currentUser } = useFirebaseAuth();
onMounted(() => {
  verifyAuth();
});

interface NavItem {
  label: string;
  to: string | Record<string, any>;
  active?: boolean;
}

interface Props {
  logoSrc?: string;
  logoAlt?: string;
  hasBg: boolean;
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
</script>