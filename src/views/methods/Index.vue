<script lang="ts" setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import Container from '@/components/Container.vue'

// 初始化
const titleList = ref([
  { title: '01 数组对象去重.md', id: 1648802019068, auth: 'keywin' },
])
const txt = ref('')
const active = ref('')

// // 引入md文件取标题
// const modules = import.meta.glob('/public/md/methods/*.md')
// let list = []
// for (const path in modules) {
//   list.push(path.split('methods/')[1])
// }
// titleList.value = list

// // 设置标题初始选中项
// if (titleList.value.length > 0) {
//   linkTo(titleList.value[0])
// }

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `/md/methods/${item}`}).then(res => {
    txt.value = res.data
  })
}

titleList.value[0] && linkTo(titleList.value[0]['title'])

</script>

<template>
  <Container>
    <template #aside>
      <div v-for="item in titleList" :key="item['title']" class="item" @click="linkTo(item['title'])" :class="active === item['title'] && 'active'">
      <span>{{ item['title'] }}</span>
    </div>
    </template>
    <template v-slot:main>
      <div class="titleBlock">
        <div class="title">{{ titleList.filter(item => item.title === active)[0]['title'] }}</div>
        <div class="descr">
          <div class="auth">{{ titleList.filter(item => item.title === active)[0]['auth'] }}</div>
          <div class="time">{{ $dayjs(titleList.filter(item => item.title === active)[0]['id']).format('YYYY-MM-DD HH:mm:ss') }}</div>
        </div>
      </div>
      <v-md-preview :text="txt"></v-md-preview>
      <iframe src="https://sfc.vuejs.org/#eyJBcHAudnVlIjoiPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnXG5cbmNvbnN0IHggPSByZWYoMClcbmNvbnN0IHkgPSByZWYoMClcblxud2F0Y2goXG4gICgpID0+IHgudmFsdWUgKyB5LnZhbHVlLFxuICAoc3VtKSA9PiB7XG4gICAgY29uc29sZS5sb2coYHN1bSBvZiB4ICsgeSBpczogJHtzdW19YClcbiAgfVxuKVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPHA+XG4gICAgQXNrIGEgeWVzL25vIHF1ZXN0aW9uOlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInhcIiAvPlxuICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInlcIiAvPlxuICA8L3A+XG4gIDxwPnt7IHggfX08L3A+XG48L3RlbXBsYXRlPiIsImltcG9ydC1tYXAuanNvbiI6IntcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcInZ1ZVwiOiBcImh0dHBzOi8vc2ZjLnZ1ZWpzLm9yZy92dWUucnVudGltZS5lc20tYnJvd3Nlci5qc1wiXG4gIH1cbn0ifQ==" frameborder="0" width="100%" height="600px" style="margin-bottom: 20px"></iframe>
    </template>
  </Container>
</template>

<style scoped lang="less">
.methods{
  display: flex;
}
</style>