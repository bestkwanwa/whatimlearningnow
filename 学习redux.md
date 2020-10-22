# 学习redux

```js
// 官网上的🌰
import { createStore } from 'redux'
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
let store = createStore(counter)
/*
	createStore(reducer)
		- reducer 纯函数
		** ...it’s just a function that takes state and action as arguments, and returns the next state of the app. **
		
	store
		- getState 获取 state
		- dispatch 修改 state
			- action
		- subscribe 监听 state 发生改变
			- subscribe 会接收一个函数，当状态改变时，则调用该函数
      - subscribe 会返回一个函数，该函数用于取消监听
*/
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

- 纯函数 reducer

  1. 相同的输入永远返回相同的输出

  2. 不修改函数的输入值

  3. 不依赖外部环境状态

  4. 无任何副作用

      https://www.cnblogs.com/ranyonsue/p/11444992.html 

      https://zcfy.cc/article/master-the-javascript-interview-what-is-a-pure-function-2186.html

  

## redux三大原则

- 单一数据源: 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
- State 是只读的: 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
-  使用纯函数来执行修改 state        

## reducer的拆分与合并

**因为合并了，所以action不能重名**

```js
// reducer 的拆分
function reducer(state={
  list:{},
  message:{},
  login:{}
},action) {
    return {
      list:list(state.list,action),
      message:message(state.message,action),
      login:login(state.login,action)
    };
}

// 多个 reducer
function list(list={},action) {
    return list;
}
function message(message={},action) {
  return message;
}

function login(login={},action) {
   return login; 
}
```

```js
// 多个 reducer
function list(list={/*初始值*/},action) {
    return list;
}
function message(message={/*初始值*/},action) {
  return message;
}

function login(login={/*初始值*/},action) {
   return login; 
}

// redux 提供一个 combineReducers 函数，将上述 reducer 合并成一个 reducer
// reducer 的合并
const reducer = combineReducers({
  list,
  message,
  login
})
// 返回的 reducer 与上一个代码框中的 reducer 一致
```

