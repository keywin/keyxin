<script lang="ts" setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import Container from '@/components/Container.vue'

// 初始化
const titleList = ref([
  { title: '404.html', id: 1648802019068, auth: 'keywin' },
  { title: '01 数组对象去重.md', id: 1648802019068, auth: 'keywin' },
])
const txt = ref('')
const active = ref('')

// // 引入md文件取标题
// const modules = import.meta.glob('/public/md/methods/*.md')
// let list = []
// for (const path in modules) {
//   list.push(path.split('methods/')[1])
// }
// titleList.value = list

// // 设置标题初始选中项
// if (titleList.value.length > 0) {
//   linkTo(titleList.value[0])
// }

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `https://ai.datahoop.cn`}).then(res => {
    console.log(res)
    txt.value = res.data
  })
}

titleList.value[0] && linkTo(titleList.value[0]['title'])

</script>

<template>
  <Container>
    <template #aside>
      <div v-for="item in titleList" :key="item['title']" class="item" @click="linkTo(item['title'])" :class="active === item['title'] && 'active'">
      <span>{{ item['title'] }}</span>
    </div>
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
      <!-- <iframe src="https://staging-cn.vuejs.org/guide/essentials/watchers.html#basic-example" frameborder="0"></iframe> -->
      <div v-html="txt"></div>
    </template>
  </Container>
</template>

<style scoped lang="less">
.methods{
  display: flex;
}
</style>