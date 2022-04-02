<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ 
  msg?: string,
  asideList?: Array
}>()

const isShowAside = ref(false)

function isShowAsideClick() {
  isShowAside.value = !isShowAside.value
}
</script>

<template>
  <div class="Container">
    <div class="content">
      <div class="dingwei" @click="isShowAsideClick()"></div>
      <main>
        <slot name="main"></slot>
      </main>
      <aside :class="isShowAside && 'active'">
        <div class="aside">
          <slot name="aside"></slot>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Container{
  flex: 1;
  background: #f9f9f9;
  overflow-y: auto;
  .content{
    display: flex;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    // background: #e5cfdc;
    .dingwei{
      display: none;
    }
    main{
      width: 804px;
      // margin: 0 auto;
      background: #fff;
      overflow-y: auto;
    }
    aside{
      width: 200px;
      max-height: 100vh;
      // background: #545c64;
      margin-left: 20px;
      position: absolute;
      top: 0;
      right: 0;
      .aside{
        position: fixed;
        top: 20px;
        width: 200px;
        max-height: calc(100vh - 40px);
        padding: 10px 8px;
        background: #fff;
        transition: top .2s;
        overflow-y: auto;
        z-index: 1;
      }
      /deep/ .item{
        line-height: 32px;
        padding: 0 12px;
        font-size: 16px;
        cursor: pointer;
        &.active{
          color: #bcae34;
        }
      }
    }
  }
}
@media (max-width: 1264px) {
  .dingwei{
    position: fixed;
    bottom: 20px;
    right: 15px;
    display: flex !important;
    width: 42px;
    height: 42px;
    background: url(@/assets/imgs/more.png) no-repeat center #fff;
    background-size: 50%;
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 10%), -8px -8px 20px 0 #fff;
    border-radius: 50%;
    z-index: 2;
  }
  main{
    margin: 0 auto;
  }
  aside{
    right: -300px !important;
    transition: right .3s;
  }
  aside.active{
    top: 0 !important;
    right: 0 !important;
    .aside{
      right: 10px;
      top: 0 !important;
    }
  }
}
</style>
