## vue3学习笔记 2022年3月23日17:04:19 

#### 核心功能

1. 声明式渲染: 通过js输出HTML  
2. 响应式: js状态改变 响应式改变dom

#### 快速开始

```sh
npm init vue@latest
cd  
npm i
npm run dev
npm run build
```

#### 创建根组件, (main.ts中)
```ts
import { createApp } from 'vue'

// 从一个单文件中导入根组件
import App from './App.vue'
import router from './router'

// 用createApp创建应用实例
const app = createApp(App)

app.use(router)

// 调用, 在index.html中引入main.ts, '#app'指向index.html可以为id也可以是dom名或class名
app.mount('#app')
```

#### 第一个vue页面

1. 选项式: 可以使用类似vue2的写法初始化数据 添加方法等(script标签不要加 setup 属性)

```js
<script lang="ts">
  export default {
    data() {
      return {
        count: 1
      }
    },
    mounted() {
      this.count = 2
    }
  }
</script>
<template>
  <div>{{ count }}</div>
</template>
```

2. 组合式 `reactive`
    1. 使用 `reactive` 创建响应式数据(script标签需添加`setup`属性)
    
    ```ts
      <script setup lang="ts">
        import { reactive } from 'vue'

        const state = reactive({ count: 0 })
      </script>

      <template>
        <button>{{ state.count }}</button>
      </template>
    ```
  
    2. 组件模板中使用, 在`setup()`函数中定义 并返回, 不要在script标签不添加 `setup` 属性
    
    ```ts
      <script setup lang="ts">
      import { reactive } from 'vue'

      export default {
        setup () {
          // 可以初始化数据
          const state = reactive({
            count: 2
          })

          // 也可以定义方法
          const increment = () => {
            state.count--
          }

          return {
            state,
            increment
          }
        }
      }
      </script>

      <template>
        <button @click="increment()">
          {{ state.count }}
        </button>
      </template>
    ```

3. `reactive` 的局限性

    1. 仅对对象类型有效(对象、数组、Map和Set集合类型), String、Number、Boolean基础类型无效
    
    2. vue的响应式根据属性进行跟踪, 不可以随意的替换响应式对象
    
    ```ts
      let state = reactive({ count: 2 })
      stste = reactive({ count: 1 }) // 是无效的

      let { count } = state
      count++ // 也是无法响应式改变
    ```

4. ref() 定义任意值类型响应式变量
    
    1.
  
      ```ts
        import { ref } from 'vue'

        const state = ref(0)

        state.value++

        // dom, 不需要 .value
        <template>
          <div>{{ state }}</div>
        </template>
      ```
      
    2. ref被传递给函数或对象结构, 响应性不会丢失
      
      ```ts
        let obj = {
          foo: ref(1),
          son: ref(2)
        }

        function add() {
          obj.foo.value++
          }

        // dom, 不需要 .value
        <template>
        <div @click="add()">{{ obj.foo }}</div>
        </template>
      ```

    3. ==$ref demo报错==


## vue3学习笔记 2022年3月23日17:04:19 

5. 计算属性

  5.1 computed

  ```ts
  import { ref, computed } from 'vue'

  const list = ref(['张三', '李四', '王五', '刘心心'])

  const lastUser = computed(() => list.value[list.value.length - 1])

  list.value = ['刘开开']

  // dom, 不需要 .value
  <template>
    <div>{{ lastUser }}</div>
  </template>
  ```

  ## vue3学习笔记 2022年3月23日17:04:19 

  5.2 `computed` 与 `watch`、 `methods`

    1. `computed` 依赖多个数据改变而改变, 有缓存, 避免直接改变计算属性值
    2. `watch` 监听已定义数据改变时执行
    3. `methods` 只有在调用时执行

6. 类 与 样式绑定

  6.1 方式与vue2一样

  6.2 补充(vue2也可以类似用)

  ```js
  const isActive = ref(true)
  const error = ref(null)

  const classObject = computed(() => ({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
  }))

  <div :class="classObject"></div>
  ```

  ```html
  <div :class="[isActive ? activeClass : '', errorClass]"></div>

  <div :class="[{ active: isActive }, errorClass]"></div>
  ```

  6.3 子组件接收父组件传入

  ```html
  <!-- 子组件 -->
  <div :class="$attrs.class">我是子组件</div>

  <!-- 父组件引入, 并添加class -->
  <my-components class="baz"></my-components>
  ```

7. 条件渲染

  1. v-if、v-else-if、v-else(必须同事存在v-if), 懒加载 真实控制dom渲染, 可用于template

  2. v-show、v-hide控制显示隐藏(通过css), 初始化时即使false也渲染, 不可用在template

  3. v-if首次渲染成本高, 需要频繁切换 用 v-show, 不常改变用 v-if

8. 列表渲染

  1. v-if 比 v-for优先级更高, 需要同时使用可以增加 template for循环

  2. 可以侦听数组变更出发视图更新的方法(总之可以改变原数组的一些方法)

  | 方法 | 说明 |
  | --- | --- |
  | push | 添加最后一项
  | unshift | 添加至第一项
  | pop | 移除最后一项
  | shift | 移除第一项
  | splice | splice(i, delL, item1, itemx, ...) 在i位置删除delL个元素后添加 item1 itemx...
  | sort | 排序, 需要传入函数控制升序降序, 否则 [2,5,40] 排序结果为 [2,40,5]
  | reverse | 颠倒数组顺序

  ```js
  let arr = [40, 100, 1, 5, 25, 10]
  arr.sort((a, b) => a - b)
  // [1, 5, 10, 25, 40, 100]

  let arr2 = [40, 100, 1, 5, 25, 10]
  arr2.sort((a, b) => b - a)
  // [100, 40, 25, 10, 5, 1]

  let arr3 = ["Banana", "Orange", "Apple", "Mango"];
  arr3.reverse();
  // ['Mango', 'Apple', 'Orange', 'Banana']
  ```

9. 事件处理

  1. 与vue2写法相同

  2. 方法中访问原生事件

  ```js
  // 使用特殊的 $event 变量
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>

  // 使用内联箭头函数
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>

  function warn(msg, e) {
    // 这里可以访问原生事件
    if (e) {
      e.preventDefault()
    }
    alert(msg)
  }
  ```

10. 生命周期
  
