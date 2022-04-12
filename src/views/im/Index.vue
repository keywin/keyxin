<script lang="ts" setup>
// import axios from 'axios'
import { ref, watch, watchEffect, watchPostEffect, onMounted, provide } from 'vue'
// import Container from '@/components/Container.vue'
import children from './children.vue'

// // 初始化
// const x = ref(0)
// const y = ref(0)
const z = ref('init')

// let _watch = watch(x, (nv, ov) => {
//   console.log(nv, ov)
// })

// const list = ref([12,26,32,49,51])
// const itemsRef = ref([])

// const cccccc = ref(null)
// onMounted(() => {
//   cccccc.value.c_a = '我改变了子组件的c_a'
//   console.log(cccccc.value.c_a)
// })

// function txtClick(e) {
//   console.log(e)
// }
function aaa () {
  console.log(2)
}

function s () {
  console.log(99999)
}

const IM_name = ref('')
function update_IM_name () {
  IM_name.value = '值变了!!!'
}
provide('foo', {
  IM_name,
  update_IM_name
})
</script>

<template>
<input v-model="IM_name" />{{ IM_name }}
  <children title="zzz标题" class="a" style="background: green;">
    <div @click="s()">asdjkasfhsdafkjsd</div>
    {{ z }}
  </children>
<!-- <button @click="_watch()">停止监听</button> -->
  <!-- <input v-model="x" type="number"> -->
  <!-- <input v-model="y" type="number"> -->
  <!-- {{ z }} -->
  <!-- <li v-for="item in list" ref="itemsRef">{{ item }}</li> -->
  <!-- <Container :noData="true"></Container> -->
</template>

<style scoped lang="less">
.im{
  display: flex;
}
.a{
  background: red;
}
</style>

#### 子组件没有跟节点, 需要指定 v-bind="$attrs"