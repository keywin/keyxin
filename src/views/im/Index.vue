<script lang="ts" setup>
// import axios from 'axios'
import { ref, watch, watchEffect, watchPostEffect, onMounted } from 'vue'
import Container from '@/components/Container.vue'
import children_ from './children_.vue'

// // 初始化
// const x = ref(0)
// const y = ref(0)
// const z = ref('init')

// let _watch = watch(x, (nv, ov) => {
//   console.log(nv, ov)
// })

// const list = ref([12,26,32,49,51])
// const itemsRef = ref([])

const cccccc = ref(null)
onMounted(() => {
  console.log(cccccc.value && cccccc.value['a'])
  console.log(cccccc.value && cccccc.value['b'])

  cccccc.value['a'] = 123
  cccccc.value['b'] = 'iii'

  console.log(cccccc.value && cccccc.value['a'])
  console.log(cccccc.value && cccccc.value['b'])
})
</script>

<template>
  <children_ ref="cccccc"></children_>
<!-- <button @click="_watch()">停止监听</button> -->
  <!-- <input v-model="x" type="number"> -->
  <!-- <input v-model="y" type="number"> -->
  <!-- {{ z }} -->
  <!-- <li v-for="item in list" ref="itemsRef">{{ item }}</li> -->
  <Container :noData="true"></Container>
</template>

<style scoped lang="less">
.im{
  display: flex;
}
</style>