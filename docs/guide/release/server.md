# 服务端搭建

## MySQL安装
MySQL 安装相关请参考：[MySQL 数据库搭建](https://www.youbaobao.xyz/admin-docs/guide/exercise/prepare.html#mysql-%E6%95%B0%E6%8D%AE%E5%BA%93%E6%90%AD%E5%BB%BA)

## 创建数据库 & 数据导入
1. 下载数据脚本（[地址](https://www.youbaobao.xyz/mpvue-res/book.sql)）
2. 创建 book 数据库
3. 通过 Navicat 等工具导入数据脚本

## 服务端部署
1. 下载服务端源码（[地址](https://git.imooc.com/coding-376/mpvue-imooc-node)）
2. 源码需要额外配置三个文件：
- db/config.js 该文件为数据库文件，代码格式为：
```js
module.exports = {
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'book',
}
``` 

- alipay/appIdMap.js 该文件为微信小程序的 appId 和 secretKey，代码格式为：
```js
const appIdMap = {
  ['your_wechat_app_id']: 'your_wechat_secret_key'
}
module.exports = appIdMap
```

- https/** 需要创建 https 文件夹，里面存储通过阿里云注册获得的 https 证书
```bash
book_youbaobao_xyz.key
book_youbaobao_xyz.pem
```
:::tip
如果你的小程序需要发布到互联网，则必须包含 https 证书，因为小程序接口要求必须为 https 服务
:::
