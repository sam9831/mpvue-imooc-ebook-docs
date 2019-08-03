# mpvue入门

官网：[http://mpvue.com/](http://mpvue.com/)

## mpvue介绍
- mpvue （github [地址](https://github.com/Meituan-Dianping/mpvue)）是一个使用 Vue.js 开发小程序的前端框架
- github 1.7w+ Star
- 2018年3月14日 Release 1.0.2版本，正式开源
- 2019年2月18日 Release 2.0.2版本，正式支持多端小程序
- mpvue与原生小程序开发对比：

| 对比项 | 原生小程序 | mpvue |
| --- | --- | --- | 
| 学习成本 | 高 | 低 |
| IDE | 不友好 | 友好 |
| 多端开发 | 工作量大 | 一套代码 |
| 可复用性 | 低 | 高 |

## 搭建mpvue脚手架
第一步，基于mpvue-quickstart模板创建新项目
```bash
vue init mpvue/mpvue-quickstart my-project
```

第二步，安装依赖和运行
```bash
cd my-project
npm install
npm run dev
```

::: tip
mpvue开发需要我们预先安装node.js环境，大家可以到node.js官网[下载](https://nodejs.org/en/download)最新的稳定版本
:::


## mpvue原理
- `mpvue`保留了`vue.runtime`核心方法，无缝继承了`Vue.js`的基础能力
- `mpvue-template-compiler`提供了将`vue`的模板语法转换到小程序的`wxml`语法的能力
- 修改了`vue`的建构配置，使之构建出符合小程序项目结构的代码格式：`json/wxml/wxss/js`文件

## mpvue生命周期

### Vue生命周期
![lifecycle](https://www.youbaobao.xyz/mpvue-res/mpvue-lifecycle.jpg)

### 小程序生命周期

#### 小程序应用生命周期
小程序应用生命周期官网介绍：[https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object)

#### 小程序页面生命周期
![lifecycle](https://www.youbaobao.xyz/mpvue-res/wx-lifecycle.png)
::: tip
详细内容见官网文档：[https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html)
:::
