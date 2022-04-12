<script>
// 使用一个简单的 <script> to declare options
export default {
  inheritAttrs: true
}
</script>

<script setup>
import children from './son.vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()


const props = defineProps(['title', 'footer'])
function bbb () {
  console.log('c_a')
}
function ccc () {
  console.log('c_b')
}

</script>

<template>
<children></children>
  <div @click="bbb(1)" class="a">
    <button @click="ccc()">{{ title }}</button>
    {{ $attrs }}
    <div style="border: 10px solid #fff;" v-bind="$attrs">{{ $attrs }}</div>
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.a{
  border: 5px solid rgb(36, 7, 7);
}
</style>