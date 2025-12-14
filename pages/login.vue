<template>
  <AtomsCardsFormCard
    variant="outlined"
    size="md"
    padding="default"
    shadow="md"
    className="w-full max-w-md"
  >
    <AtomsInputsFormInput
      v-model="email"
      type="email"
      label="Email"
      placeholder="Enter your email"
      size="sm"
      className="mb-4"
    />
    <AtomsInputsFormInput
      v-model="password"
      type="password"
      label="Password"
      placeholder="Enter your password"
      :eyeIcons="true"
      size="sm"
      className="mb-4"
    />
  </AtomsCardsFormCard>
</template>

<script setup lang="ts">
import { ref } from "vue";
const email = ref("");
const password = ref("");
</script>
