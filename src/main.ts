import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import mavonEditor from 'mavon-editor'
// import '@/assets/styles/github-markdown.min.css'

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VMdPreview);

// app.use(mavonEditor)

app.mount('#app')
