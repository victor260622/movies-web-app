<template>
  <div
    class="bg-global-bg min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
    :style="bgStyle"
  >
    <div class="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
    <AtomsCardsFormCard
      variant="outlined"
      size="md"
      padding="default"
      shadow="md"
      className="w-full max-w-md z-10"
    >
      <template #header>
        <div class="mb-6 text-[32px] text-white font-bold">
          <h1>Iniciar sesión</h1>
        </div>
      </template>
      <template #body>
        <form @submit.prevent="onSubmit" class="flex flex-col gap-y-4">
          <AtomsInputsFormInput
            v-model="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            size="sm"
          />
          <AtomsInputsFormInput
            v-model="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            :eyeIcons="true"
            size="sm"
          />
          <AtomsButtonsFormButton type="submit" size="sm" block>
            Login
          </AtomsButtonsFormButton>
        </form>
      </template>
    </AtomsCardsFormCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");

const bgStyle = {
  backgroundImage: `url(/public/images/Banner.png)`,
};

function onSubmit() {
  // TODO: Wire to Firebase auth if desired
  // e.g., useFirebaseAuth().loginWithEmail(email.value, password.value)
  console.log("submit", { email: email.value, password: password.value });
}
</script>
