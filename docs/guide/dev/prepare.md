# 项目框架搭建

## 项目初始化
- 打开视觉稿
- 初始化mpvue项目
  - 删除无关内容
  - `npm run dev`进入开发模式
- 打开微信开发者工具
  - 设置AppId
  - 勾选"不校验合法域名"

## 集成`scss`
### 安装依赖
```bash
npm i -D sass-loader node-sass
```

### 使用
```html
<style lang="scss" scoped>
  .img {
    width: 100%;
  }
</style>
```

## 集成`vant-weapp`组件库
### 官网
[https://youzan.github.io/vant-weapp/](https://youzan.github.io/vant-weapp/)

### 安装依赖
```bash
npm i vant-weapp -S --production
```

### 引入组件
```json
{
  "usingComponents": {
    "van-button": "/path/to/vant-weapp/dist/button/index"
  }
}
```

### 使用组件
```html
<van-button type="primary">按钮</van-button>
```

### 修改构建配置
修改webpack.base.config.js
```js
if (/^wx$/.test(PLATFORM)) {
  baseWebpackConfig = merge(baseWebpackConfig, {
    plugins: [
      new CopyWebpackPlugin([{
        from: resolve('node_modules/vant-weapp/dist'),
        to: resolve('dist/wx/vant-weapp/dist'),
        ignore: ['.*']
      }])
    ]
  })
}
```
## 集成`mpvue-router-patch`插件
`github`地址：[https://github.com/F-loat/mpvue-router-patch](https://github.com/F-loat/mpvue-router-patch)
### 安装依赖
```bash
npm i -S mpvue-router-patch
```

### 安装插件
```js
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.use(MpvueRouterPatch)
```

### 使用
```js
this.$router.push('/pages/categoryList/main')
```

## 集成`flyio`
`github`地址：[https://github.com/wendux/fly](https://github.com/wendux/fly)

### 安装依赖
```bash
npm i -S flyio
```

### 使用
初始化Flyio对象
```js
function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}
```

处理get请求
```js
export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
```

处理post请求
```js
export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        handleError(err)
        reject(err)
      })
    })
  }
}
```

这里的`handleError`我们可以根据实际业务场景进行定制
