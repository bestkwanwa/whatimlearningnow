# 学习react-redux

- 只允许一个store（可以导出多个，但是只能使用一个）
- 使用 Provider 组件包裹 整个应用
  - 在 Provider 中有一个 store 属性，store 属性中传入的是 redux 的 store

## 如何在组件中获取 redux 的 store:

-  connect 高阶组件 (传入函数，返回一个新的函数)，将组件需要的state，以及dispatch 传给组件
  - connect(callback) - callback 可以拿到 state  ，返回需要用到的 state 
  - callback 必须有一个对象类型的返回值，该返回值决定了哪些参数需要传递给组件
  - connect 被调用后 会返回一个高阶组件，高阶组件再调用返回可以使用redux的组件
  - 在组件的props可以拿到筛选后的state和dispatch方法

- react-redux 提供的 hooks (react-redux 版本7):
  - useDispatch 获取 dispatch
  - useStore 获取 store
  - useSelector 获取 state  

## 异步操作中间件 - redux-thunk

- thunk 中间件：使 action 支持 函数

  - 如果 action 是对象的话，则 直接调用 reducer 发起修改

  - 如果 action 是函数，则 执行该函数，并将 getState 和 dispatch 传递给该函数



review

20201022

update

20201022