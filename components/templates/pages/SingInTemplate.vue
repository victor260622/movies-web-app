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
            v-model="formInput.email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            size="sm"
          />
          <AtomsInputsFormInput
            v-model="formInput.password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            :eyeIcons="true"
            size="sm"
          />

          <!-- Botón con spinner -->
          <AtomsButtonsFormButton type="submit" size="sm" block :disabled="isLoading">
            <template v-if="isLoading">
              <svg
                class="animate-spin h-4 w-4 mr-2 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Cargando...
            </template>
            <template v-else>
              Sign In
            </template>
          </AtomsButtonsFormButton>
        </form>
      </template>
    </AtomsCardsFormCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useFirebaseAuth from "~/composables/useAuth";
const { signIn, formInput } = useFirebaseAuth();

let isLoading = ref(false); 

const bgStyle = {
    backgroundImage: `url(/images/Banner.png)`,
};

function onSubmit() {
    isLoading.value = true;
      try{
        if (formInput.value.password.length <= 0 ) {
            alert("Password must be at least 6 characters long");
            return;
        }
    } catch (error) {
        alert("An error occurred during sign up. Please try again.");
        return;
    }
    signIn();
}
</script>
