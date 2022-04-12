<script setup lang="ts">
import Header from '@/views/layout/Header.vue'
import Nav from '@/views/layout/Nav.vue'

import axios from 'axios'
import { defineAsyncComponent } from 'vue'



const AsyncComp = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    axios({ method:'get', url: `~@/views/notes/Index.vue`}).then(res => {
      resolve(res)
    })
    // ...从服务器获取组件
  })
})

console.log(AsyncComp)
// const AsyncComp = defineAsyncComponent(() => {
//   import('https://github.com/keywin/keyxin/blob/main/src/views/im/Index.vue')
// })
</script>

<template>
<async-comp></async-comp>
  <main>
    <Nav></Nav>
    <!-- <Transition> -->
      <div class="main">
        <!-- <Header></Header> -->
        <router-view></router-view>
      </div>
    <!-- </Transition> -->
  </main>
</template>

<style lang="less" scoped>
main{
  display: flex;
  height: 100vh;
  background: #f9f9f9;
  .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
<style lang="less" scoped>
@media (max-width: 1024px) {
  main{
    flex-direction: column;
    .main{
      overflow-y: auto;
    }
  }
}
</style>
