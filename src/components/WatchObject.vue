<script setup lang="ts">
import { watch, isReactive } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const { increment, decrease, documentReplace, documentValueChange } = useCounterStore()
const { state } = storeToRefs(useCounterStore())

// documentReplace()에 반응 O
// documentValueChange()에 반응 X
watch(
  () => state.value.data.documnet,
  () => {
    console.log('state.value', state.value.data.documnet)
    console.log(isReactive(state.value.data.documnet))
  }
)

// getter를 사용하지 않으면 watch()에 숫자를 전달하기 때문에 작동하지 않는다.
watch(
  () => state.value.count,
  () => {
    console.log('state.value.count', state.value.count)
  }
)

// 초기에 랜더링되고 나서는 반응 O
// documentReplace()가 동작하고 난 이후에는 반응 X
watch(state.value.data.documnet, () => {
  console.log('This is not working!')
  console.log(isReactive(state.value.data.documnet))
})
</script>
<template>
  <div>
    {{ state }}
  </div>
  <div class="btns">
    <button @click="increment">+1</button>
    <button @click="decrease">-1</button>
    <button @click="documentReplace('val')">documentReplace('val')</button>
    <button @click="documentReplace('value')">documentReplace('value')</button>
    <button @click="documentValueChange('val1')">documentValueChange('val1')</button>
    <button @click="documentValueChange('val2')">documentValueChange('val2')</button>
  </div>
</template>
<style lang="scss">
.btns {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
