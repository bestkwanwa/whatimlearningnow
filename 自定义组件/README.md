# 自定义组件

[demo](https://bestkwanwa.github.io/demolib/custom-component.html)

## 封装会话框组件
封装组件不考虑vdom和封装css，仅学习封装组件思路。

1. 合并配置。可以传入配置，也可以使用默认配置。
    - 可传入属性：宽、高、标题、内容、是否可拖拽、是否有遮罩、是否有取消按钮
    - 可传入方法：自定义事件success的处理函数、点击取消调用的函数
2. 初始化。
    - 创建dom / vdom
    - 监听自定义事件
    - 利用事件委托给click事件绑定处理函数
    - 根据配置设置点开会话框后是否有遮罩层
    - 根据配置设置是否给鼠标事件绑定处理函数

## 封装带有输入框的会话框组件

1. 继承上面的会话框组件
2. 创建input输入框，添加到会话框中
3. 重写sure，点击确定是打印出输入框的内容

## Web Components

### 自定义一个 show-dialog 元素

- customElements.define("show-dialog", ShowDialog) 定义元素
    - ShowDialog 为构造器，继承自 HTMLElement
    - show-dialog 元素表现为一个 button 元素。
    - 构造 show-dialog 元素时，给它的click事件绑定处理函数，调用会话框的open方法。

## 总结
- 设计封装组件时从使用者角度出发。
- 内部方法单一功能。