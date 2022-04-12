<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

defineProps<{ 
  msg?: string,
  asideList?: Array,
  noData?: Boolean,
  titleList?: Array,
  type?: String
}>()

const isShowAside = ref(false)
const active = ref('')

function isShowAsideClick() {
  isShowAside.value = !isShowAside.value
}

// 点击标题出内容
function linkTo (item='') {
  active.value = item
  axios({ method:'get', url: `/md/notes/${item}`}).then(res => {
    return res.data
  })
}
</script>

<template>
  <div class="Container">
    <div class="content">
      <div class="noData" v-if="noData"></div>
      <template v-if="!noData">
        <div class="dingwei" @click="isShowAsideClick()"></div>
        <main>
          <slot name="main"></slot>
        </main>
        <aside :class="isShowAside && 'active'">
          <div class="aside" @click="isShowAside = false">
            <!-- <template v-if="titleList && titleList.length > 0">
              <div v-for="item in titleList" :key="item.title" class="item" @click="$emit('linkTo', linkTo)" :class="active === item.title && 'active'">{{ item.title }}</div>
            </template> -->
            <div class="aside-cont">
              <slot name="aside"></slot>
            </div>
          </div>
        </aside>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Container{
  flex: 1;
  background: #f9f9f9;
  overflow-y: scroll;
  .content{
    display: flex;
    position: relative;
    max-width: 1024px;
    min-height: 100vh;
    margin: 0 auto;
    // background: #e5cfdc;
    .noData{
      flex: 1;
      display: flex;
      height: 100vh;
      background: url(@/assets/imgs/noData.png) no-repeat center;
      background-size: 300px;
    }
    .dingwei{
      display: none;
    }
    main{
      width: 804px;
      // margin: 0 auto;
      background: #fff;
      overflow-y: auto;
      /deep/ .titleBlock{
        padding: 5px 32px;
        .title{
          min-height: 42px;
          line-height: 35px;
          word-wrap: break-word;
          word-break: break-all;
          color: #333;
          font-weight: bold;
          font-size: 32px;
        }
        .descr{
          font-size: 14px;
          margin-top: 5px;
          .auth{
            color: #515767;
          }
          .time{
            color: #8a919f;
          }
        }
      }
    }
    aside{
      width: 200px;
      max-height: 100vh;
      // background: #545c64;
      margin-left: 20px;
      position: absolute;
      top: 0;
      right: 0;
      user-select:none;
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
        display: flex;
        align-items: center;
        min-height: 40px;
        line-height: 20px;
        padding: 5px 12px 5px;
        font-size: 14px;
        cursor: pointer;
        transition: all .3s;
        span{
          flex: 1;
          margin-left: 0;
          word-wrap: break-word;
          word-break: break-all;
          transition: all .2s;
        }
        &:hover{
          color: #bcae34;
        }
        &.active{
          color: #bcae34;
          background: #f5f5f5;
          border-radius: 4px;
          span{
            margin-left: 5px;
          }
        }
        &.active:before{
          content: '';
          width: 3px;
          height: 12px;
          border-radius: 1.5px;
          background-color: #333;
        }
      }
    }
  }
  /deep/ .github-markdown-body .hljs-keyword{
font-weight: normal;
  }
  /deep/ .github-markdown-body .hljs-selector-tag{
font-weight: normal;
  }
  /deep/ .github-markdown-body .hljs-subst {
    font-weight: normal;
  }
  /deep/ .github-markdown-body .hljs-section{
    font-weight: normal;
  }
  /deep/ .github-markdown-body .hljs-selector-id{
    font-weight: normal;
  }
  /deep/ .github-markdown-body .hljs-title{
    font-weight: normal;
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
    .aside{
      width: 100% !important;
      height: 100vh;
      max-height: 100vh !important;
      padding: 0 !important;
      top: 0 !important;
      box-shadow: 0 8px 10px -5px rgb(0 0 0 / 20%), 0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%);
      background: rgba(0,0,0,.3) !important;
      .aside-cont{
        width: 200px;
        height: 100vh;
        float: right;
        background: #fff;
        overflow-y: auto;
      }
    }
  }
  aside.active{
    top: 0 !important;
    right: 0 !important;
    .aside{
      right: 0;
    }
  }
}
</style>
