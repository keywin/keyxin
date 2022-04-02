<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

import { ref, computed } from 'vue'

const list = ref(['张三', '李四', '王五', '刘心心'])
const txt = ref('<p>这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本</p>')

const lastUser = computed(() => list.value[list.value.length - 1])

const myObject = ref({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

list.value = ['刘开开', '山']

const maodianClick = (id) => {
  var dom = document.querySelector(id)
  document.documentElement.scrollTop = dom.offsetTop
}

</script>

<template>
  <router-view></router-view>
  <!-- <ul>
    <li v-for="(v, k, i) in myObject" :key="v">
      {{ v }} + {{ k }} + {{ i }}
    </li>
  </ul> -->

  <!-- <div v-for="item of list" :key="item" style="background: red;">{{ item }}</div> -->

  <!-- <header> -->
    <!-- <div>
      <button v-for="item in 30" :key="item" @click="maodianClick('#id-' + item)">{{item}}</button>
    </div>
    <template v-for="item in 30" :key="item">
      <div class="txtFoo" :id="'id-' + item">
        {{ item }}<div v-html="txt"></div>
      </div>
    </template> -->
    <!-- <div>{{ lastUser }}</div> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" class="bazss" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div> -->
  <!-- </header> -->

  <!-- <RouterView /> -->
</template>

<style lang="less">
@import '@/assets/base.css';
</style>
