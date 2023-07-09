import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface State {
  count: number
  data: {
    documnet: Record<string, string>
  }
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const state = reactive<State>({
    count: 0,
    data: {
      documnet: {
        key: 'value'
      }
    }
  })

  const documentReplace = (val: string) => {
    state.data.documnet = {
      key: val
    }
  }

  const documentValueChange = (val: string) => {
    state.data.documnet.key = val
  }

  function increment() {
    state.count++
  }

  const decrease = () => {
    state.count--
  }

  return {
    count,
    doubleCount,
    increment,
    decrease,
    state,
    documentReplace,
    documentValueChange
  }
})
