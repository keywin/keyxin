<script lang="ts" setup>
import axios from 'axios'
import { ref, watch, getCurrentInstance  } from 'vue'
import Container from '@/components/Container.vue'

// 初始化
const titleList = ref([
  { title: '15 git问题记录', id: 1649835660609, auth: 'keywin' },
  { title: '14 组合式函数-封装复用', id: 1649755156432, auth: 'keywin' },
  { title: '13 异步组件搞懂再写', id: 1649743644480, auth: 'keywin' },
  { title: '12 依赖注入provide和inject', id: 1649743644480, auth: 'keywin' },
  { title: '11 插槽slot', id: 1649733090330, auth: 'keywin' },
  { title: '10 透传', id: 1649669905000, auth: 'keywin' },
  { title: '09 组件通信-修饰符', id: 1649664021000, auth: 'keywin' },
  { title: '08 组件通信-子传父', id: 1649409526000, auth: 'keywin' },
  { title: '07 组件通信-父传子', id: 1649409542203, auth: 'keywin' },
  { title: '06 vue3-模板ref', id: 1649327576915, auth: 'keywin' },
  { title: '05 vue3-watch', id: 1649319949012, auth: 'keywin' },
  { title: '04 setter', id: 1649301260320, auth: 'keywin' },
  { title: '03 getter', id: 1649227458790, auth: 'keywin' },
  { title: '02 本地存储', id: 1649231575913, auth: 'keywin' },
  { title: '01 http 和 https', id: 1648798751030, auth: 'keywin' },
  
])
const txt = ref('')
const active = ref('')
// const { $dayjs } = getCurrentInstance()

// console.log($dayjs)

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `/md/notes/${item}.md`}).then(res => {
    txt.value = res.data
  })
  let dom = document.querySelector('.Container')
  dom?.scrollTo(0, 0)
}

titleList.value[0] && linkTo(titleList.value[0]['title'])

</script>
<script lang="ts">
  window.onload = function(){
    var oIframe = document.getElementById('iframe');
    console.log(oIframe)
    // oIframe.contentWindow.document.body.style.color = 'red';
  }
</script>

<template>
  <Container>
    <template #aside>
      <div v-for="item in titleList" :key="item.title" class="item" @click="linkTo(item.title)" :class="active === item.title && 'active'">
        <span>{{ item.title }}</span>
      </div>
    </template>
    <template v-slot:main>
      <div class="titleBlock">
        <div class="title">{{ titleList.filter(item => item.title === active)[0]['title'] }}</div>
        <div class="descr">
          <div class="auth">{{ titleList.filter(item => item.title === active)[0]['auth'] }}</div>
          <div class="time">{{ $dayjs(titleList.filter(item => item.title === active)[0]['id']).format('YYYY-MM-DD HH:mm:ss') }} <span style="margin-left: 12px;"></span> {{ $dayjs(titleList.filter(item => item.title === active)[0]['id']).format('dddd') }}</div>
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