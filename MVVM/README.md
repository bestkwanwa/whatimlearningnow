# 简版MVVM框架
- 简版vue（不考虑虚拟dom与diff算法）

## 编译渲染
- 找到挂载的dom元素
- 文本节点匹配大胡子语法并替换为data里的数据
- 元素节点则递归编译

## 双向绑定
- defineProperty
- Proxy
