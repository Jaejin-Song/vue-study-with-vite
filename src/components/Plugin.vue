<script setup lang="ts">
import { inject } from 'vue'
import { i18nKey } from '@/plugins/i18n'

const i18n = inject(i18nKey)
</script>
<template>
  <div>{{ i18n }}</div>
  <div>{{ $translate('greetings.hello') }}</div>
</template>
<style lang="scss" scoped></style>
