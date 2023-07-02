<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <h2>Vue.js Study</h2>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/lazyLoad">lazyLoad</RouterLink>
    <RouterLink :to="{ name: 'dynamicRoute', params: { id: 'defaultId' } }"
      >dynamicRoute</RouterLink
    >
    <router-link to="/dataBinding">data binding</router-link>
    <router-link to="/templateRefs">templateRefs</router-link>
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
  padding: 1rem;
}
</style>
