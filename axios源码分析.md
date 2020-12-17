# axios的使用及源码分析

## axios是什么

首先需要知道：axios不是一种新的技术。

axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范，有以下特点：

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF(跨站点请求伪造)

## 为什么使用axios

- 因为axios设计简洁，API简单，支持浏览器和node
- 它能很好的与各种前端框架整合

### 与 ajax / fetch 的比较

#### ajax

ajax是 ``Asynchronous JavaScript and XML``的缩写，意思是异步网络请求。区别于传统web开发中采用的同步方式。以往，页面表单提交数据，在用户点击完”submit“按钮后，页面会强制刷新一下，体验十分不友好。而ajax可以使页面无刷新地请求数据。

#### fetch

Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

这种功能以前是使用 XMLHttpRequest 实现的。Fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如  Service Workers。Fetch 还提供了专门的逻辑空间来定义其他与 HTTP 相关的概念，例如 CORS 和 HTTP 的扩展。

但是 fetch 当下并不能完全取代XMLHttpRequest对象
 *  兼容性不够好
 *  没有实现 upload 对象中的 progress 进度监控

## 如何使用axios

axios既可以是一个对象，也可以是一个函数（当然，在JavaScript中，万物皆对象，函数自然也是对象），当作为对象时，它身上挂载了很多请求方法，比如：get、post、head等等；当作为函数时，它可以直接调用，传递配置参数，参数传递有两种形式，分别是axios(url[,config])、axios(config)。

### 作为对象使用

#### 发起 get / options 等请求时

```js
axios.get('/api/user',{
    headers,
    data
}).then(data=>{
    //do something
})
```

#### 发起 post / put 等请求时

```js
axios.post('/api/login',data,{	// axios库会根据data的格式自动解析
    headers,
}).then(data=>{
    //do something
})
```

### 作为函数使用

```js
axios({
    url:'/user',
    method:'get',
    headers,
}).then(data=>{
    //do something
})
```

当然，以上都可在 axios 前加 await ，直接拿到调用后的数据。

## axios如何实现

### axios既是对象，也是函数

```js
// axios.js
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}
```

上面代码中，Axios.prototype.request是一个方法，用工具函数bind（axios内部定义的一个方法）将它的上下文(this)绑定为Axios的实例，得到instance，也就是说instance是绑定this后的request方法。**所以，axios当成函数调用时，实际上调用的是request方法。**

```js
Axios.prototype.request = function request(config) {

  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
	
  // --- mergeConfig 规定了哪些配置需要覆盖，哪些配置需要合并 ---
  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }
  
  // ...
  
  return promise;
};
```

同时，通过exend（也是axios内部定义的一个方法）给它身上定义了一些属性和方法。这样就可以当成对象来调用属性。

### 适配器 adapter

适配器会根据当前使用axios的环境来决定使用哪种工具去发送请求，当前环境是浏览器的话，就会使用XMLHttpRequest，是node的话，会使用http(s).request()。实现在不同平台调用不同的底层库。

```js
// dafault.js
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}
```

- 不管是浏览器还是node，总入口为request方法 （不管是调用get方法还是post方法，其实还是调用request） 。
- adapter会被包装成promise对象。

### 拦截器 interceptor

拦截器两种类型：请求拦截器和响应拦截器，请求拦截器的主要作用是，让请求的整个操作按照我们规定的顺序执行，让我们我们可以集中处理各种请求时传递的参数，如设置请求头等），响应拦截器拦截的是返回的数据。如：

```js
// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 例如在登录后在每一次的请求都带上token
    if(cookie.getCookie('token')){
        config.headers.Authorization = "Bearer " + cookie.getCookie("token")
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // response 是请求回来的数据，通过 adapter 的 resolve 传过来
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

```

拦截器源码如下：

```js
// InterceptorManager.js
function InterceptorManager() {
 	// 存放拦截器的容器
  this.handlers = [];
}

// 存放拦截器的方法
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

// 弹出指定拦截器
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

// 自定义一个forEach方法
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
```
