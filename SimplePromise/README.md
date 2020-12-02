# 手写promise

## 一、Promise的三种状态
- 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝。
- 已兑现（fulfilled）: 意味着操作成功完成。
- 已拒绝（rejected）: 意味着操作失败。

## 二、resolve / reject 方法
- 改变Promise状态
- 改变Promise的值


## 三、then 方法
- then传入的函数，不是在then中执行，而是在then中保存，在resolve/reject中执行
- then执行前要设置Promise状态，即then**执行前**已经调用了resolve/reject；而onResolved和onRejected要在then**保存完**后才能调用 >> 调用onResolved/onRejected时包在setTimeout里 >> 放入异步任务队列
- then可以多次调用 >> then传入的函数保存到队列中

## 四、Promise执行顺序
- 原生Promise.then是微任务 >> MutationObserver是微任务，模拟原生Promise.then

## 五、then 链式调用
- 每调用一次 then，就会返回一个 Promise 对象
- Promise 对象的状态由 then 的回调函数的返回值决定
    - onResolved 返回值为 Promise 对象，则
    - onResolved 返回值为普通值，则将 then 返回的 Promise 对象的状态改为 fulfilled
    - onRejected 将 then 返回的 Promise 对象的状态改为 rejected（不处理返回 Promise 对象）

## 六、catch 方法 
- then 方法的特殊情况
- TODO 捕捉错误

## 七、静态方法 resolve / reject
- 返回一个确认状态的 Promise 对象

## 八、静态方法 all
- 返回一个 Promise 对象，只有当 list 里的所有 Promise 状态为 fulfilled，all方法返回的 Promise 对象状态才为 fulfilled

## 九、静态方法 race 
- 返回一个 Promise 对象，该对象与list里最先确认状态的 Promise 的状态一致，并传递resolve传入的值

## 十、finally 方法
- 不管 resolve 或 reject ，都执行 finally
- TODO 未实现