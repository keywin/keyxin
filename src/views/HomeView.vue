<script setup lang="ts">
import Nav from '@/views/layout/Nav.vue'
</script>

<template>
  <main>
    <Nav></Nav>
    <!-- <Transition> -->
      <router-view></router-view>
    <!-- </Transition> -->
  </main>
</template>

<style lang="less" scoped>
main{
  display: flex;
  height: 100vh;
  background: #f9f9f9;
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
  }
}
</style>
