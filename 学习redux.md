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
	store
		- getState 获取 state
		- dispatch 修改 state
		- subscribe 监听 state 发生改变
*/
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

