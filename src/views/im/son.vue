<script setup>
import { inject } from 'vue'

const { Im_name, update_IM_name } = inject('foo')

</script>

<template>
  _____________son: {{ Im_name }}
  <button @click="update_IM_name()">修改下值</button>
</template>

<style scoped lang="less">

</style>