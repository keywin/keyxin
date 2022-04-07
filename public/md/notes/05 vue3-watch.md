![https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

#### 直接监听

```js
import { ref, watch } from 'vue'

const str = ref('')

watch(str, async (nv, ov) => {
  if (nv) {
    try {
      const res = await fetch('https://yesno.wtf/api')
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
})

<termplate>
  <input v-model="str">
</termplate>
```

#### getter函数

```js
const x = ref(0)
const y = ref(0)
const z = ref('')

watch(
  () => x.value + y.value,
  (nv, ov) => {
    console.log(`和由${ov}变为${nv}`)
  }
)
```

#### 同时监听多个值改变

```js
const x = ref(0)
const y = ref(0)
const z = ref('')

watch([x, () => y.value], ([nx, ny], [ox, oy]) => {
  z.value = `x: ${ox}->${nx}, y: ${oy}->${ny}`
})
```

#### watch 和 watchEffect

1. watch初始化时不执行, watchEffect会执行且不需要传入依赖

```js

const x = ref(0)

watch(x, (nv, ov) => {
  // 初始化时不执行
  console.log(nv, ov)
})

watchEffect(() => {
  console.log(x.value)
})
```

2. watch会监听新值和就值, watchEffect无法获取原值

3. watch第三参

```js
watch(x, (nv, ov) => {
  console.log(nv, ov)
}, {
  immediate: true, // 立即执行
  deep: true, // 深监听
  flush: 'post' // dom更新后执行
})

watchEffect(() => {

}, {
  flush: true // dom更新后执行
})

// 后置刷新也可以直接使用 watchPostEffect
watchPostEffect(() => {
  console.log(x.value)
})
```

#### 关闭监听

```js
let _watch = watch(x, (nv, ov) => {
  console.log(nv, ov)
})
```
```html
<button @click="_watch()">停止监听</button>
```