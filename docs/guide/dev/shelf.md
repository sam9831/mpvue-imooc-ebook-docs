# 书架

## 学习重点

- API对接：
    - 加入时间API
    - 书架列表API

## 书架视觉稿
[http://www.youbaobao.xyz/mpvue-design/preview/#artboard6](http://www.youbaobao.xyz/mpvue-design/preview/#artboard6)

## 用户信息面板

<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="3">ShelfUserInfo</td>
        <td rowspan="3">props</td>
        <td>num</td>
        <td>书架图书数量</td>
        <td>0</td>
    </tr>
    <tr>
        <td>readDay</td>
        <td>加入天数</td>
        <td>0</td>
    </tr>
    <tr>
        <td>userInfo</td>
        <td>用户信息</td>
        <td>{}</td>
    </tr>
</table>

## 书架列表组件

<table>
    <tr>
        <th>组件名称</th>
        <th>属性</th>
        <th>参数</th>
        <th>用途</th>
        <th>默认值</th>
    </tr>
    <tr>
        <td rowspan="3">ShelfList</td>
        <td>props</td>
        <td>shelfList</td>
        <td>书架列表</td>
        <td>[]</td>
    </tr>
    <tr>
        <td rowspan="2">methods</td>
        <td>gotoHome</td>
        <td>访问首页</td>
        <td>-</td>
    </tr>
    <tr>
        <td>gotoBookDetail</td>
        <td>访问图书详情</td>
        <td>-</td>
    </tr>
</table>

## 组件源码

### ShelfUserInfo

```vue
<template>
  <div class="user-info-wrapper">
    <div class="user-info">
      <div class="user-nick-name">{{userInfo.nickName}}</div>
      <div class="user-read-time">您已经加入小慕读书{{readDay}}天</div>
      <div class="user-avatar-wrapper">
        <img class="user-avatar" :src="userInfo.avatarUrl" mode="widthFix">
      </div>
    </div>
    <div class="user-extra">
      <div class="user-extra-text">您的书架中共有 {{num}} 本好书</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      num: Number,
      readDay: Number,
      userInfo: Object
    }
  }
</script>

<style lang="scss" scoped>
  .user-info-wrapper {
    margin: 15px 25px;
    background: #F8F9FB;
    border-radius: 12px;
    padding: 15px 20px;
    border: 1px solid #E0E1E2;

    .user-info {
      position: relative;
      height: 60px;
      border-bottom: 1px solid #E9E9E9;

      .user-nick-name {
        font-size: 17px;
        font-weight: 500;
        color: #333;
      }

      .user-read-time {
        font-size: 12px;
        color: #868686;
      }

      .user-avatar-wrapper {
        position: absolute;
        right: 0;
        top: 0;

        .user-avatar {
          width: 40px;
          border-radius: 50%;
        }
      }
    }

    .user-extra {
      margin-top: 15px;

      .user-extra-text {
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
    }
  }
</style>
```

### ShelfList

```vue
<template>
  <div class="shelf-list-wrapper">
    <div class="shelf-list-inner">
      <div
        class="shelf-book"
        v-for="book in shelfList"
        :key="book.fileName"
      >
        <div
          class="shelf-book-cover"
          v-if="book && book.cover"
          @click="() => gotoBookDetail(book)"
        >
          <ImageView :src="book.cover"></ImageView>
        </div>
        <div class="shelf-book-title" v-if="book && book.title">{{book.title}}</div>
        <div class="shelf-book-add" v-if="!book.title" @click="gotoHome">
          <div class="shelf-book-add-wrapper">
            <div class="shelf-book-add-x"></div>
            <div class="shelf-book-add-y"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'
  export default {
    components: { ImageView },
    props: {
      shelfList: Array
    },
    methods: {
      gotoHome() {
        this.$router.push('/pages/index/main')
      },
      gotoBookDetail(book) {
        this.$router.push({ path: '/pages/detail/main', query: { fileName: book.fileName } })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shelf-list-wrapper {
    padding: 0 12.5px 20px 12.5px;

    .shelf-list-inner {
      display: flex;
      flex-flow: row wrap;

      .shelf-book {
        flex: 0 0 33.33%;
        width: 33.33%;
        padding: 20px 12.5px 0 12.5px;
        box-sizing: border-box;

        .shelf-book-cover {
          width: 100%;
          height: 130px;
        }

        .shelf-book-title {
          width: 100%;
          font-size: 12px;
          color: #333;
          overflow: hidden;
          text-overflow: clip;
          line-height: 14px;
          max-height: 28px;
          margin-top: 10px;
        }

        .shelf-book-add {
          width: 100%;
          height: 130px;
          border: 1px solid #CBCBCB;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;

          .shelf-book-add-wrapper {
            position: relative;
            width: 30px;
            height: 30px;

            .shelf-book-add-x {
              position: absolute;
              top: 50%;
              width: 30px;
              height: 2px;
              margin-top: -1px;
              background: #CACACA;
            }

            .shelf-book-add-y {
              position: absolute;
              left: 50%;
              width: 2px;
              height: 30px;
              background: #CACACA;
            }
          }
        }
      }
    }
  }
</style>
```
