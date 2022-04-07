![https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2967b05ad4c4f6893c0f0f6a3359587~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2967b05ad4c4f6893c0f0f6a3359587~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.awebp?)

## `getter` 将对象属性绑定到查询该属性时将调用的函数

```js
let obj = {
  _name: 'zhang_san',
  get first_name() {
    return this._name ? this._name.split('_')[0] : '无名'
  }
}

console.log(obj.first_name) // zhang

obj._name = 'li_si'
console.log(obj.first_name) // li
```

#### 需要返回一个动态计算值的属性 使用`getter`

  - 被'get'的属性名与其他属性名不许重名
    ```js
      // 不允许
      {
        _name: '333',
        get _name: function () {}
      }
    ```
  - 一定不允许带参数

#### `delete`删除

#### `defineProperty` 为对象追加getter

```js
let obj = {
  _name: 'zhang_san'
}

Object.defineProperty(obj, 'first_name', {
  get: function () {
    return this._name ? this._name.split('_')[0] : '无名'
  }
})
```

#### 懒加载

  - getter定义了属性值与名, 初始化时并未生效, 只有在访问时才生效
  - 可以动态计算值
  - 带缓存, 根据计算的值未改变时 不需要重新计算