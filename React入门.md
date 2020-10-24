# React入门

## 小知识点

### 严格模式

- 识别具有不安全生命周期的组件
- 有关旧式字符串ref用法的警告
- 检测意外的副作用
- 检测遗留 context API

### CSS Modules

没有使用css模块化，则引入css文件时，父子组件都会生效样式。使用css模块化，避免样式冲突的问题。

- 在 create-react-app 中的使用：
  - .css .sass 正常文件
  - [name].module.css [name].module.sass 需要模块化的文件
  - 引入时当成变量引入，这个变量是一个对象，里面是样式名与编译后的样式名
- CSS Modules 使用
  - 局部 声明:local(.className) .className 使用 styled.className 。.box和#box会编译成一样的名字，但样式是正确的。
  - 全局 :global(.className)，不编译该样式名，全局生效
  - composes 引入其他样式