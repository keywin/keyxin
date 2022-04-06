<script lang="ts" setup>
import axios from 'axios'
import { ref, watch, getCurrentInstance  } from 'vue'
import Container from '@/components/Container.vue'

// 初始化
const titleList = ref([
  { title: '04 setter.md', id: 1649227458790, auth: 'keywin' },
  { title: '03 getter.md', id: 1649227458790, auth: 'keywin' },
  { title: '01 http 和 https.md', id: 1648798751030, auth: 'keywin' },
  { title: '02 本地存储.md', id: 1649231575913, auth: 'keywin' },
  
])
const txt = ref('')
const active = ref('')
// const { $dayjs } = getCurrentInstance()

// console.log($dayjs)

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `/md/notes/${item}`}).then(res => {
    txt.value = res.data
  })
}

titleList.value[0] && linkTo(titleList.value[0]['title'])

</script>

<template>
  <Container>
    <template #aside>
      <div v-for="item in titleList" :key="item.title" class="item" @click="linkTo(item.title)" :class="active === item.title && 'active'">{{ item.title }}</div>
    </template>
    <template v-slot:main>
      <div class="titleBlock">
        <div class="title">{{ titleList.filter(item => item.title === active)[0]['title'] }}</div>
        <div class="descr">
          <div class="auth">{{ titleList.filter(item => item.title === active)[0]['auth'] }}</div>
          <div class="time">{{ $dayjs(titleList.filter(item => item.title === active)[0]['id']).format('YYYY-MM-DD HH:mm:ss') }}</div>
        </div>
      </div>
      <v-md-preview :text="txt"></v-md-preview>
    </template>
  </Container>
</template>

<style scoped lang="less">
.notes{
  display: flex;
}
</style>