<script setup>
import { ref, onMounted } from 'vue'

import children_ from './children_.vue'

const list = ref([
  1111,
  22,333333333333,44
])

const _children_ = ref(null)

onMounted(() => {
  console.log(_children_.value)
})
</script>

<template>
  <children_ ref="_children_"></children_>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>