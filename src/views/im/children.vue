<script setup>
const props = defineProps(['title', 'footer'])
console.log(props.title)
</script>

<template>
  <div>
    {{ title }}
  </div>
</template>