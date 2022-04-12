![https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

#### 当需要传值给子组件的子组件..., 使用props传值或通过事件通知根组件修改状态时, 会很繁琐
![https://staging-cn.vuejs.org/assets/prop-drilling.11201220.png](https://staging-cn.vuejs.org/assets/prop-drilling.11201220.png)
<div style="text-align: right;">
  <a href="https://staging-cn.vuejs.org/guide/components/provide-inject.html#prop-drilling" target="_blank">图片来自vue3中文文档</a>
</div>

#### provide 和 inject
![https://staging-cn.vuejs.org/assets/provide-inject.3e0505e4.png](https://staging-cn.vuejs.org/assets/provide-inject.3e0505e4.png)
<div style="text-align: right;">
  <a href="https://staging-cn.vuejs.org/guide/components/provide-inject.html#prop-drilling" target="_blank">图片来自vue3中文文档</a>
</div>

#### root(根组件) children(根组件的子组件) son(根组件子组件引用的组件)

```js
// root
import { ref, provide } from 'vue'
const value = ref('')
provide('value', value)

<input v-model="value" />
{{ value }}
<children></children>
```

```js
// children
import son from './son.vue'

<son></son>
```

```js
// son
import { inject } from 'vue'
const myVal = inject('value', '如果父组件没有传递值, 默认展示此处文字')

<div>{{ myVal }}</div>
```

#### 推荐修改状态 和 状态来源于同一个组件

```js
// root
import { ref, provide } from 'vue'
const val = ref()
function updateValue () {
  value.val += 1
}

provide('foofoo', {
  val,
  updateValue
})

<children></children>
```

```js
// children
<son></son>
```

```js
// son
import { inject } from 'vue'
const { val, updateValue } = inject('foofoo')

<div >+1</div>
{{ val }}
```