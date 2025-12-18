<template>
  <div ref="root" class="relative inline-block text-left">
    <slot name="trigger">
      <AtomsButtonsAvatarButton @click="toggleDropdown" />
    </slot>

    <transition name="fade">
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#232323] ring-1 ring-black ring-opacity-5 z-50"
        role="menu"
        aria-orientation="vertical"
      >
        <ul class="py-2">
          <NuxtLink to="/movies">
            <li
              role="menuitem"
              class="px-4 py-2 text-white hover:bg-[#333] cursor-pointer"
            >
              Movies
            </li>
          </NuxtLink>
          <li
            role="menuitem"
            class="px-4 py-2 text-white hover:bg-[#333] cursor-pointer"
            @click="logOut()"
          >
            Log Out
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import useFirebaseAuth from "~/composables/useAuth";
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { NuxtLink } from "#components";

const open = ref(false);
const root = ref<HTMLElement | null>(null);
const { logOut } = useFirebaseAuth();

function toggleDropdown() {
  open.value = !open.value;
}

function handleClickOutside(event: MouseEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
