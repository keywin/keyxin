![https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

#### 声明ref必须与模板ref同名

```js
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
```
```html
<input ref="input">
```

#### for循环绑定ref

```js
const itemsRef = ref([])

onMounted(() => {
  itemsRef.value.map(item => {
    console.log(item)
  })
})
```
```html
<li v-for="item in 5" :key="item" ref="itemsRef"></li>
```

#### ref可用于子组件

```js
<script setup>
import { ref, onMounted } from 'vue'
import Child from './Child.vue'

const child = ref(null)

onMounted(() => {
  // child.value 是 <Child /> 组件的实例
})
</script>

<template>
  <Child ref="child" />
</template>
```

#### 父组件直接访问或修改子组件

```js
// 子组件
const c_a = ref('w我是子组件ref定义')
const c_b = '我是子组件声明的变量'

defineExpose({
  c_a,
  c_b
})

<template>
  {{ c_a }}
</template>
```
```js
// 父组件
const foo_c = ref(null)
onMounted(() => {
  foo_c.value.c_a = '我改变了子组件的值'
})

<children ref="foo_c"></children>
```