<script setup lang="ts">
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routeToOtherId = () => {
  router.push({
    name: 'dynamicRoute',
    params: {
      id: 'otherId'
    }
  })
}

const routeToHome = () => {
  router.push({
    name: 'home'
  })
}

onBeforeRouteLeave((to, from) => {
  const answer = window.confirm('페이지를 떠나시겠습니까?')

  if (!answer) return false
})

onBeforeRouteUpdate((to, from) => {
  const text = `previous param : ${from.params.id}, next param: ${to.params.id}`
  window.alert(text)
})
</script>
<template>
  <div>Dynamic Route Test</div>
  <div>{{ route.params.id }}</div>
  <div class="btns">
    <button @click="routeToOtherId">route to other id</button>
    <button @click="routeToHome">route to home</button>
  </div>
</template>
<style lang="scss">
.btns {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
