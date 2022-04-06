<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import {routes} from '@/router'

const router = useRouter()
const route = useRoute()

let navList = ref(routes[0].children)
let active = ref(router.currentRoute.value.name)

function itemClick (item='') {
  router.push({
    path: item
  })
}

onBeforeRouteUpdate((to, from) => {
  active.value = to.name
})

</script>

<template>
  <header class="header">
    预留标题
  </header>
</template>

<style lang="less" scoped>
header {
  display: flex;
  width: 100%;
  height: 48px;
  margin-bottom: 15px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, .1) 0px 2px 12px 0px;
  margin-left: -1px;
  z-index: 0;
}
</style>
<style lang="less" scoped>
@media (max-width: 1024px) {
  header {
    display: none;
  }
}
</style>
