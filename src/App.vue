<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />

  <main class="container page">
    <RouterView />
  </main>

  <TheFooter />
</template>
