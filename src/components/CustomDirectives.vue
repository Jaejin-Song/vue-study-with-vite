<script setup lang="ts">
import type { Directive } from 'vue'

const vTest: Directive = {
  mounted: (el, binding) => {
    console.log('v-test', binding)
    console.log('binding.arg : ', binding.arg)
    console.log('binding.value : ', binding.value)

    el.focus()
  }
}
</script>
<template>
  <input v-test:foo.bar="'message'" />
</template>
<style lang="scss" scoped></style>
