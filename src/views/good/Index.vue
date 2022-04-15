<script lang="ts" setup>
import Container from '@/components/Container.vue'

import { ref } from 'vue'

// 初始化
const titleList = ref([
  { title: '前端代码的三种设计模式', id: 1649991176864, uri: 'https://juejin.cn/post/7081147167653494797' },
  { title: 'OAuth2.0授权机制', id: 1649992995496, uri: 'https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html' },
])
const txt = ref('')
const active = ref('')

// 点击标题出内容
function linkTo (id) {
  active.value = id
  let dom = document.querySelector('.Container')
  dom?.scrollTo(0, 0)
}

titleList.value[0] && linkTo(titleList.value[0]['id'])
</script>

<template>
  <Container style="overflow: hidden;">
    <template #aside>
      <div v-for="item in titleList" :key="item.id" class="item" @click="linkTo(item.id)" :class="active === item.id && 'active'">
        <span>{{ item.title }}</span>
      </div>
    </template>
    <template v-slot:main>
      <iframe :src="titleList.filter(item => item.id === active)[0]['uri']" frameborder="0" width="100%" height="100%" id="iframe"></iframe>
    </template>
  </Container>
</template>

<style scoped lang="less">
/deep/ .Container{
  overflow: hidden;
}
/deep/ main{
  overflow-y: hidden !important;
}
</style>