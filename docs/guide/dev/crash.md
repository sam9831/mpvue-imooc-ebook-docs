# 异常捕获

## 集成 Vuex

安装 vuex：

```bash
npm install -S vuex
```

创建 store.js，源码如下：

```bash
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError: (state, message) => {
      if (message) {
        state.error = { message }
      } else {
        state.error = null
      }
    }
  }
})

export default store
```

这里的 vuex 中存放了一个 error 状态，mutations 中包含了一个方法 setError，用于更新 error 状态，error 状态是一个对象，包含一个 message 属性，即错误提示

## Global 组件

创建 Global 组件，源码如下：

```html
<template>
  <div class="global">
    <div class="error" v-if="error">
      <div class="error-msg-wrapper">
        <div class="error-image">
          <ImageView
            src="https://www.youbaobao.xyz/resource/icon/crash.png"
          />
        </div>
        <div class="error-msg">{{error.message || '程序猿紧急抢修中...'}}</div>
        <div class="error-retry-wrapper">
          <div class="error-retry" @click="retry">重启小程序</div>
        </div>
      </div>
    </div>
    <slot v-if="!error"></slot>
  </div>
</template>

<script>
  import store from '../store'
  import { setError } from '../utils/error'
  import ImageView from './base/ImageView'

  export default {
    components: { ImageView },
    computed: {
      error() {
        return store.state.error
      }
    },
    methods: {
      retry() {
        // 跳转回到首页
        let path = getApp().globalData.appOptions.path
        if (!path.startsWith('/')) {
          path = `/${path}`
        }
        mpvue.reLaunch({ url: path })
        // 重置异常信息
        setError()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../style/base';

  .error {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    @include center;

    .error-msg-wrapper {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;

      .error-image {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
      }

      .error-msg {
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #666;
        margin-top: 20px;
      }

      .error-retry-wrapper {
        width: 100%;
        @include center;

        .error-retry {
          border: 1px solid #3696EF;
          border-radius: 50px;
          text-align: center;
          font-size: 13px;
          color: #3696EF;
          padding: 8px 40px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
```

Global 是一个容器组件，它最主要的有以下两点：

1. 获取 vuex 中的 error 状态，如果 error 状态不为 null，则显示 error 中的信息
2. 如果 error 状态为 null，则显示 slot 插槽，这部分就是我们自己的组件内容了

## 优化现有组件

将现有组件外层套上 Global 组件即可，这里以 list 组件为例：

```html
<template>
  <Global>
    <div class="list">
      <SearchTable :data="data"/>
    </div>
  </Global>
</template>
```

::: tip
附赠：[Sam 老师《mpvue 专栏》异常处理章节](../dev/error.html)
:::
