![https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/11/5/16e3adfa079451b7~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp)

#### 使用slot插槽, 对组件做一些个性化操作

```js
// children
<div>
  <slot>
    <div>默认, 如果传入则不渲染</div>
  </slot>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>

// foo
<children>
  <div style="color: red;">{{ foo }}</div>
  <div v-slot:footer>{{ foo }}</div>
  或
  <div #footer>{{ foooo }}</div>
</children>
```