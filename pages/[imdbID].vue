<template>
  <div>
    <h1>Detalle de película</h1>
    <p>ID: {{ imdbID }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const imdbID = route.params.imdbID
</script>
