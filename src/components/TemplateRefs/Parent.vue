<script setup lang="ts">
import { ref, provide } from 'vue'
import Child from './Child.vue'

const child = ref<InstanceType<typeof Child> | null>(null)
const count = ref(0)

const accessToChildFn = () => {
  if (!child.value) return

  child.value.childFn()
  child.value.value += 1
}

provide('parent-key', count)
</script>
<template>
  <div>Parent Component</div>
  <div class="btns">
    <button @click="accessToChildFn">accessToChildFn</button>
    <button @click="count += 1">add count</button>
    <span>{{ `count: ${count}` }}</span>
  </div>
  <div>Child Component</div>
  <Child ref="child" />
</template>
<style lang="scss" scoped>
.btns {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
