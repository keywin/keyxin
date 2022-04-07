![https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

## `setter`尝试设置属性时, 将对象属性绑定到要调用的函数

```js
let obj = {
  set a (val) {
    this.log.push(val)
  },
  log: []
}

obj.a = 1
console.log(obj.log) // [1]

obj.a = 22
console.log(obj.log) // [1, 22]
```

#### 改变一个属性的值, 对应setter将被执行

  - 必须有一个明确的参数
  - set的名不能与已存在的属性名重名
  - set的属性时未定义的, 不能直接取, 取值为 undefined

#### delete可删除setter

#### defineProperty为已存在的对象追加setter

```js
let obj = {
  log: []
}
Object.defineProperty(obj, 'a', {
  set: function (val) {
    this.log.push(val)
  }
})

obj.a = 1
console.log(obj.log) // [1]

obj.a = 22
console.log(obj.log) // [1, 22]
```

#### 计算属性名

```js
let o = 'bar'
let obj = {
  log: [],
  set [o] (val) {
    this.log.push(val)
  }
}

obj.bar = 123
console.log(obj.log) // [123]

console.log(obj.bar) // undefinedd
```