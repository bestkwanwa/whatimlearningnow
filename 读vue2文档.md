# 读vue2文档

## 响应式数据
    - 文本插值 >> {{}}
    - attribute >> v-bind >> :

## 指令
    - v-bind
    - v-if
    - v-for
    - v-on 
    - v-model >> 语法糖。通过 input 事件关联 响应式数据 和 target.value
    - v-once
    - v-html
    - 动态参数
    - 修饰符

## 计算属性
**计算属性的 getter 函数是没有副作用 (side effect) 的。**

### 计算属性缓存 vs 方法
**计算属性是基于它们的响应式依赖进行缓存的**

### 计算属性 vs 侦听属性
使用计算属性替代逻辑重复的侦听属性。见官网例子。

### 计算属性的 setter
计算属性也可以有setter。见官网例子。

## 侦听器



## Class 和 Style

- :class 可以接收对象或数组
- :style 可以接收对象或数组

## 全局变量
- $event
