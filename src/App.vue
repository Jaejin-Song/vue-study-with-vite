<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <h2>Vue.js Study</h2>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
nav {
  width: 50%;
  display: flex;
  flex-direction: column;
}
main {
  width: 40%;
}
</style>
