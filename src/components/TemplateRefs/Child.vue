<script setup lang="ts">
import { ref, inject } from 'vue'

const value = ref(1)
const parentCount = inject('parent-key')

const childFn = () => {
  console.log('hi im child')
}

defineExpose({
  childFn,
  value
})
</script>
<template>
  <div>I'm Child Component</div>
  <div>{{ `value : ${value}` }}</div>
  <div>{{ `parentCount : ${parentCount}` }}</div>
</template>
<style lang="scss" scoped></style>
