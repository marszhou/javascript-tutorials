# 变量的作用范围（术语：变量的scope）

## var vs let

let在MDN上的说明
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
let 允许你声明有限作用范围的变量，这些作用范围受限于let声明所在的block、语句或表达式。和var关键字不同，var定义的变量在自己所在的作用域是全局的、不受限制的。

**应当尽量使用let，避免使用var**

作为全局变量
```js
let me = 'go';  // 全局变量
var i = 'able'; // 全局变量

// 但是
console.log(window.me); // undefined
console.log(window.i); // 'able'
```

作为函数变量
```js
// 这个场景下的使用是类似的，作用范围都是在函数体内公布
function ingWithinEstablishedParameters() {
  let terOfRecommendation = 'awesome worker!'; //函数内部
  var sityCheerleading = 'go!'; //函数内部
}
```

作为代码块（block）变量
```js
function allyIlliterate() {
  //tuce 在这里不可见

  for( let tuce = 0; tuce < 5; tuce++ ) {
      //tuce 只在这里可见（包括for语句的"()"内部）
  }

  //tuce 在这里不可见
}

function byE40() {
  //nish 在这里可见

  for( var nish = 0; nish < 5; nish++ ) {
      //nish 在这里可见
  }

  //nish 在这里可见
}
```

重复定义
```js
'use strict';
let me = 'foo';
let me = 'bar'; // 语法错误，me被重复定义
```

```js
'use strict';
var me = 'foo';
var me = 'bar'; // 不报错
```

更多例子
```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

```js
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
}

console.log(a); // 11
console.log(b); // 2
```

## const

作用范围同let，但不能被再次赋值

# Event冒泡

* event.stopPropagation() 阻止冒泡 (https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
* event.preventDefault() 阻止事件在特定DOM元素的默认动作 (https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault)

[例子](./index.html)

# Arrow Function

书写方式

```

const myFunc = (a, b) => {
  return a + b
}

[1,2,3].forEach((v) => {
  console.log(v)
})

```

但一般的有名函数声明还会用传统方式。

# 作业

## Todo
![](https://ws1.sinaimg.cn/large/006tKfTcly1fimjz4adh7g30hs0dckbt.gif)

## 需求

1. 用户可以输入目标（文字），点添加按钮添加到todo列表中，刚刚被添加的todo状态是未完成
2. 点击一条todo可以将该条todo设置为已完成状态
3. 可以通过 全部、未完成、已完成切换显示列表
