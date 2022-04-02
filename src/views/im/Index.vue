<script lang="ts" setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import Container from '@/components/Container.vue'

// 初始化
const titleList = ref([])
const txt = ref('')
const active = ref('')

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `/md/im/${item}`}).then(res => {
    txt.value = res.data
  })
}

titleList.value[0] && linkTo(titleList.value[0]['title'])

</script>

<template>
  <Container :noData="true">
    <template #aside>
      <div v-for="item in titleList" :key="item.title" class="item" @click="linkTo(item.title)" :class="active === item.title && 'active'">{{ item.title }}</div>
    </template>
    <template v-slot:main>
      <v-md-preview :text="txt"></v-md-preview>
    </template>
  </Container>
</template>

<style scoped lang="less">
.im{
  display: flex;
}
</style>