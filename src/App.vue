<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { ref, computed, watch } from 'vue'

// import { Repl, ReplStore } from '@vue/repl'

// const list = ref(['张三', '李四', '王五', '刘心心'])
// const txt = ref('<p>这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本这是库里面存的带标签的文本</p>')

// const lastUser = computed(() => list.value[list.value.length - 1])

const x = ref(0)
const y = ref(0)

// const myObject = ref({
//   title: 'How to do lists in Vue',
//   author: 'Jane Doe',
//   publishedAt: '2016-04-10'
// })

// list.value = ['刘开开', '山']

// const maodianClick = (id) => {
//   var dom = document.querySelector(id)
//   document.documentElement.scrollTop = dom.offsetTop
// }



watch([x, () => y.value], ([newX, newY], [ox, oy]) => {
  console.log(`x is ${ox} and y is ${oy}`)
})

// console.log([
//     "                   _ooOoo_",
//     "                  o8888888o",
//     "                  88\" . \"88",
//     "                  (| -_- |)",
//     "                  O\\  =  /O",
//     "               ____/`---'\\____",
//     "             .'  \\\\|     |//  `.",
//     "            /  \\\\|||  :  |||//  \\",
//     "           /  _||||| -:- |||||-  \\",
//     "           |   | \\\\\\  -  /// |   |",
//     "           | \\_|  ''\\---/''  |   |",
//     "           \\  .-\\__  `-`  ___/-. /",
//     "         ___`. .'  /--.--\\  `. . __",
//     "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
//     "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
//     "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
//     "======`-.____`-.___\\_____/___.-`____.-'======",
//     "                   `=---='",
//     "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
//     "         佛祖保佑       永无BUG"
// ].join('\n'));

</script>

<template>
<!-- <input type="number" v-model="x"> -->
<!-- <input type="number" v-model="y"> -->
  <router-view></router-view>
  <!-- <ul>
    <li v-for="(v, k, i) in myObject" :key="v">
      {{ v }} + {{ k }} + {{ i }}
    </li>
  </ul> -->

  <!-- <div v-for="item of list" :key="item" style="background: red;">{{ item }}</div> -->

    <!-- <div>
      <button v-for="item in 30" :key="item" @click="maodianClick('#id-' + item)">{{item}}</button>
    </div>
    <template v-for="item in 30" :key="item">
      <div class="txtFoo" :id="'id-' + item">
        {{ item }}<div v-html="txt"></div>
      </div>
    </template> -->
    <!-- <div>{{ lastUser }}</div> -->


  <!-- <RouterView /> -->
</template>

<style lang="less">
@import '@/assets/base.css';
</style>
