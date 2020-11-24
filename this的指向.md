# this的指向

一句话总结：谁调用它，this就指向谁

## 主要规则📏

- 隐式调用函数
  - 严格模式，this指向undefined
  - 非严格模式，this指向window / global
- new调用构造函数，构造函数内的this指向新创建的实例
- call / apply / bind 显式调用函数式，this指向指定参数的对象
- 上下文对象调用函数，this 指向该对象
- 箭头函数的this指向其外层作用域的this

## 例子🌰

```js
// 全局环境的this
function f1(){
  console.log(this)
}
function f2(){
  'use strict'
  console.log(this)
}
f1()	// window
f2()	// undefined

// 一个特别的事情发生了
function f1(){
  console.log(this)
}
function f2(){
  let _this=this
  console.log(this)
  'use strict'
  let _this_=this
  console.log(this)
  console.log(_this===_this_)	// true,其实是同一个this
}
f1()	// window
f2()	// window window
```

```js
// 上下文对象调用中的this
const obj1={
  msg='obj1',
  fn:function(){
    return this.msg
  }
}
const obj2={
  msg='obj2',
  fn:function(){
    return obj1.fn()
  }
}
const obj3={
  msg='obj3',
  fn:function(){
    var fn=obj1.fn	// var fn=function(){return this.msg}
    return fn()		// 这里为隐式调用普通函数，this指向window，window下没有msg
  }
}
console.log(obj1.fn())	// obj1
console.log(obj2.fn())	// obj1
console.log(obj3.fn())	// undefined

// 问：不使用call/apply/bind，如何让obj2.fn()返回obj2
const obj2={
  msg='obj2',
  fn:obj1.fn()
}
// 让obj1.fn挂载到obj2上
```

```js
// 箭头函数中的this
const foo={
  fn:function(){
    setTimeout(function(){	// setTimeout的回调函数里的this始终指向window
      console.log(this)
    })
  }
}
foo.fn()	// window

// 让this指向foo
const foo={
  fn:function(){
   let _this=this
    setTimeout(()=>{	// setTimeout的回调函数里的this始终指向window
      console.log(this)	// foo
      console.log(_this===this)	// true
    })
  }
}
```

## 绑定this的优先级
- 显示绑定：call / apply / bind / new
- 隐式绑定：根据调用关系确定this指向
```js
function fn(){
  console.log(this.msg)
}
const obj1={
  msg:'obj1',
  fn:fn
}
const obj2={
  msg:'obj2',
  fn:fn
}
obj1.fn.call(obj2)	// obj2
obj2.fn.apply(obj1)	// obj1

// 综上，call / apply 优先级高于 隐式绑定
```

```js
function fn(a){
  this.a=a
}

const obj1={}

var bar=fn.bind(obj1) // bar函数内部this指向obj1
bar(2)	// obj1.a=2
console.log(obj1.a)	// 2

var baz=new bar(3)	// 原本bar函数内部this指向obj1，new调用bar函数后，其内部this指向实例baz
console.log(obj1.a)	// 2
console.log(baz.a)	// 3

// 综上，new绑定this的优先级比显式bind绑定更高
```

## 箭头函数的this指向无法修改

```js
var a=123
const foo=()=>a=>{
  console.log(this.a)
}
const obj1={
  a:2
}
const obj1={
  a:3
}
var bar=foo.call(obj1) // foo为箭头函数，其内部this指向foo所在的全局环境的window，且无法修改
bar.call.(obj2)	// 123。bar为调用foo后返回的箭头函数，其内部this指向其所属的foo函数的this的指向，即window

// 若变量a的声明改为使用 const 或 let 声明
const a=123
const foo=()=>a=>{
  console.log(this.a)
}
const obj1={
  a:2
}
const obj1={
  a:3
}
var bar=foo.call(obj1) 
bar.call.(obj2)		// undefined。因为let和const声明的变量不会挂载到window
```









