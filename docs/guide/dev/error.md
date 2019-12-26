# mpvue 异常处理详解

## 微信小程序异常处理

### 异常处理方法

微信小程序的异常捕获方法有两种，第一是通过 App 中定义 `onError` 方法捕获异常，第二是通过微信小程序的 API `wx.onError` 捕获异常，下面我们分别看看他们的应用方法：

### App 异常处理

首先给出一个最简单的 App 异常处理案例，我们修改 app.js 源码：

```js
/* app.js */
App({
  onLaunch() {
    console.log('onLaunch')
    throw new Error('crash')
  },
  onError(err) {
    console.log(err)
  }
})
```

上面的代码自定义了 App 的生命周期函数 `onLaunch`，所以在应用启动阶段就会执行，在 `onLaunch` 中我们打印了一行日志，随后抛出异常，由于我们定义了 `onError` 方法，所以微信小程序会执行我们自定义的 `onError` 方法，此时会在控制台打印如下日志：

```bash
onLaunch
thirdScriptError
crash;at App lifeCycleMethod onLaunch function
Error: crash
    at pe.onLaunch (http://127.0.0.1:24523/appservice/app.js:12:11)
    at pe.<anonymous> (WAService.js:1:1318961)
    at WAService.js:1:1319523
    at new pe (WAService.js:1:1319599)
    at Function.<anonymous> (WAService.js:1:1319944)
    at WAService.js:1:1307261
    at http://127.0.0.1:24523/appservice/app.js:9:1
    at require (WAService.js:1:1353445)
    at <anonymous>:1:1
    at HTMLScriptElement.scriptLoaded (http://127.0.0.1:24523/appservice/appservice?t=1567692883746:1324:21)
```

第一行 onLauch 是我们打印的日志，第二行之后的内容是 Error 对象的内容。下面我们对 `onError` 方法监听异常过程中的一些逻辑进行分析：

#### 多个 onError 处理逻辑

`onError` 只能定义一个，当存在多个 `onError` 时，后定义的 `onError` 方法会覆盖先定义的：

```js
/* app.js */
App({
  onLaunch() {
    console.log('onLaunch')
    throw new Error('crash')
  },
  onError(err) {
    console.log(err)
  }, // 该 onError 方法会被覆盖
  onError(err) {
    console.log('err2', err)
  } // 该 onError 方法会生效
})
```

#### app.js 异常捕获

`onError` 只能监听 App、Page 和 Component 相关的生命周期函数或自定义方法的错误，如果错误发生在构造器之外，`onError` 将无法监听：

```js
/* app.js */
throw new Error('crash') // 该异常会被全局异常处理器捕获
App({
  onLaunch() {
    console.log('onLaunch')
    throw new Error('crash')
  },
  onError(err) {
    console.log(err)
  }
}) // App 初始化不会执行
```

上面的代码第一行抛出异常后会被微信小程序全局异常处理器捕获，所以后面的代码将不会执行，如果希望处理这类异常，我们需要使用 try catch 来实现：

```js
/* app.js */
try {
  throw new Error('crash')
  App({
    onLaunch() {
      console.log('onLaunch')
      throw new Error('crash')
    },
    onError(err) {
      console.log(err)
    }
  })
} catch(err) {
  console.log(err)
}
```

#### Page 或 Component 异常捕获

App 中定义的 `onError` 同样可以捕获 Page 和 Component 中抛出的异常：

```js
/* pages/index.js */
Page({
  onReady() {
    console.log('onReady')
    throw new Error('page crash')
  }
})
```

上述代码会在 Page 的 onReady 生命周期中抛出异常，该异常会被 App 的 `onError` 捕获到：

```bash
onLaunch
onReady
thirdScriptError
page crash;at "pages/index" page lifeCycleMethod onReady function
Error: page crash
    at ye.onReady (http://127.0.0.1:24523/appservice/pages/index2.js:9:11)
    at ye.<anonymous> (WAService.js:1:1315997)
    at ye.p.__callPageLifeTime__ (WAService.js:1:1315742)
    at WAService.js:1:1338247
    at Function.<anonymous> (WAService.js:1:1339036)
    at WAService.js:1:1307261
    at WAService.js:1:754376
    at WAService.js:1:392894
    at n (http://127.0.0.1:24523/appservice/__dev__/asdebug.js:1:27894)
    at e.exports.<anonymous> (http://127.0.0.1:24523/appservice/__dev__/asdebug.js:1:28236)
```

如果在 Component 中抛出异常，App 中 `onError` 方法仍然能捕获到。这里需要注意：虽然 Component 和 Page 抛出了异常，但是程序仍然会继续向下执行，也就是说生命周期中抛出异常不会中断小程序的执行，但在 js 文件中抛出异常会中断执行，如在 Page 中抛出异常：

```js
/* pages/index.js */
throw new Error('page crash') // 会中断小程序执行
Page({
  onReady() {
    console.log('onReady')
    throw new Error('page crash')
  }
})
```

第一行代码会中断整个小程序的执行，程序遇到这种异常将不会继续向下执行。那么为什么生命周期中的异常不会中断小程序执行呢？因为小程序使用 try catch 处理了这类异常，所以虽然控制台抛出了异常，但并不会影响小程序整体执行，这点和 Vue 执行生命周期方法的逻辑非常类似。

### API 捕获异常

异常捕获的第二种方法是使用微信小程序 API 进行捕获：

```js
/* app.js */
App({
  onLaunch() {
    console.log('onLaunch')
    wx.onError(function(err) {
      console.log('error from wx.onError')
    })
  }
})

```

调用方法非常简单，我们只是需要向 `wx.onError` 中传入一个异常处理的 function 即可。`wx.onError` 可以和 App 中的 `onError` 方法并存，不会产生覆盖，如果同时定义了两者，那么会优先触发 App 中的 `onError`：

```js
/* app.js */
App({
  onLaunch() {
    console.log('onLaunch')
    wx.onError(function(err) {
      console.log('error from wx.onError')
    })
  },
  onError(err) {
    console.log('error from app')
  }
})

```

然后我们分别在 Page 和 Component 中抛出异常，执行结果如下：

```bash
error from app
error from wx.onError
error from app
error from wx.onError

```

## mpvue 异常处理

mpvue 异常处理比微信小程序稍微复杂一些，因为它包含两个层面：微信小程序异常捕获和 mpvue 异常捕获，下面分别进行说明。

### mpvue 中小程序异常捕获

mpvue 中的小程序异常捕获方法与微信小程序中类型，我们可以通过 `onError` 方法进行捕获：

```vue
<!-- App.vue -->
<script>
  export default {
    onLaunch() {
      console.log('onLaunch')
      throw new Error('app crash')
    },
    onError(err) {
      console.log(err)
    }
  }
</script>

```

这与微信小程序的 `onError` 使用方法无异，它仍然能够捕获到页面或组件中抛出的异常：

```vue
<!-- pages/index.vue -->
<template>
	<div></div>
</template>

<script>
  export default {
    onReady() {
      throw new Error('onReady crash')
    }
  }
</script>

```

我们仍然可以使用 `mpvue.onError` 这个 API 来捕获异常，它与微信小程序使用的区别在于将 wx 替换为 mpvue：

```vue
<!-- App.vue -->
<script>
  export default {
    onLaunch() {
      console.log('onLaunch')
      mpvue.onError(function(err) {
        console.log('error from mpvue.onError', err)
      })
    },
    onError(err) {
      console.log(err)
    }
  }
</script>

```

这里需要注意，mpvue 的生命周期函数是无法被捕获的，因为它不受微信小程序控制：

```vue
<!-- pages/index.vue -->
<template>
	<div></div>
</template>

<script>
  export default {
    created() {
      throw new Error('created crash') // 无法被 onError 捕获
    },
    onReady() {
      throw new Error('onReady crash') // 可以被 onError 捕获
    }
  }
</script>

```

### mpvue 异常捕获

我们可以使用 mpvue 的自定义异常捕获方法来解决生命周期函数无法被捕获的问题，我们需要修改 index.vue 组件对应的 js 文件 main.js：

```js
/* pages/main.js */
import Vue from 'vue'
import App from './index'

Vue.config.errorHandler = function (err) {
  console.log('error from errorHandler', err)
} // 自定义 mpvue 异常捕获方法

const app = new Vue(App)
app.$mount()

```

值得注意的是 mpvue 每一个页面都对应一个 Vue 实例，如果将 `Vue.config.errorHandler` 定义到一个页面中，它将只能对当前页面生效，所以如果你希望进行全局异常处理，我们需要将它定义到全局的的 main.js 文件中：

```js
/* main.js */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.config.errorHandler = function (err) {
  console.log('error from errorHandler', err)
}

const app = new Vue(App)
app.$mount()

```

此时 index.vue 中的 `created` 和 `onReady` 的异常都将被 `errorHandler` 捕获：

```bash
error from errorHandler Error: created crash
    at Vue$3.created (main.js:96)
    at callHook (vendor.js:2429)
    at Vue$3.Vue._init (vendor.js:3882)
    at new Vue$3 (vendor.js:3976)
    at Object._ (main.js:17)
    at __webpack_require__ (manifest.js:59)
    at Object.webpackJsonpCallback [as webpackJsonpMpvue] (manifest.js:30)
    at main.js:3
    at require (WAService.js:1)
    at <anonymous>:11:7
error from errorHandler Error: onReady crash
    at Vue$3.onReady (main.js:99)
    at callHook$1 (vendor.js:5092)
    at ye.onReady (vendor.js:5393)
    at ye.<anonymous> (WAService.js:1)
    at ye.p.__callPageLifeTime__ (WAService.js:1)
    at WAService.js:1
    at Function.<anonymous> (WAService.js:1)
    at WAService.js:1
    at WAService.js:1
    at WAService.js:1

```

可以看到我们只需要使用 `errorHandler` 就能同时捕获到所有页面中生命周期函数的异常，非常方便。值得一提的是 `errorHandler` 同样能捕获到 App 中的异常，所以我们无需使用 `onError` 来处理异常了。

### mpvue 异常处理源码分析

mpvue 异常处理方法并不复杂，它的源码如下：

```js
function handleError (err, vm, info) {
  if (config.errorHandler) { 
    config.errorHandler.call(null, err, vm, info); // 如果自定义了 errorHandler 方法，则进行调用
  } else {
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err); // 如果处于浏览器环境，则通过 console.error 打印异常
    } else {
      throw err // 否则直接抛出异常，交给容器进行处理
    }
  }
}

```

可以看到如果我们自定义了 `errorHandler` 方法，mpvue 会优先调用这个方法处理异常，而如果没有定义时，mpvue 会判断我们是否处于浏览器环境，这是 Vue 的处理逻辑，如果处于浏览器环境并且能够使用 console 函数，则通过 `console.error` 打印异常，否则直接抛出异常。

# 总结

异常处理在程序开发时非常重要，是必须要掌握的内容，本章向大家介绍了微信小程序和 mpvue 异常处理的方法：

- 微信小程序处理异常主要有两种方法：
  - 通过 app.js 中添加 `onError` 捕获异常；
  - 通过 `wx.onError` API 捕获异常。
- mpvue 处理异常的方法主要是自定义 `errorHandler` 方法实现，mpvue 中仍然能够使用微信小程序的两种异常捕获方法；
- 如果异常发生的位置在小程序构造器以外，可以采用 try catch 的方式手动捕获异常，这种方法对 mpvue 同样适用。
