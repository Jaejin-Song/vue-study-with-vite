<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

const city = ref('064')
const checked = ref(true)
const dataList = ref<any>([])

const getList = async () => {
  const list = await axios({
    method: 'get',
    url: 'https://34f395f6-94a1-4f26-8115-4394d881a0be.mock.pstmn.io/list'
  })
  console.log(list)

  dataList.value = list.data
}

onMounted(async () => {
  await getList()
})
</script>
<template>
  <div class="list">
    <div>
      <span>{{ city }}</span>
      <h2>select</h2>
      <select v-model="city">
        <option value="02">Seoul</option>
        <option value="21">Busan</option>
        <option value="064">JaeJu</option>
      </select>
    </div>

    <div>
      <span>{{ checked }}</span>
      <h2>checkbox</h2>
      <label><input type="checkbox" v-model="checked" />{{ checked }}</label>
    </div>

    <div>
      <button @click="getList">get list</button>
      <div v-for="data of dataList" :key="data.name">
        {{ data }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
