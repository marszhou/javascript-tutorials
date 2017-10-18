# 面向对象的编程

## es6语法下的类和对象

```javascript
class A {

  static s = '静态成员';
  static func() { // 静态成员方法，调用方式A.func()
    // 这里如果写this就是指A本身
  }
  // 可声明成员变量
  x = 1
  y = 2

  // 构造方法，不是必须的
  constructor(xValue, yValue) {
    this.x = xValue
    this.y = yValue
  }

  doSomething() { // 成员方法
    // 这里的this是指被实例化后的对象
    console.log(this.x, this.y)
  }
}
```

继承

```javascript
class B extends A {
  // 可省略构造方法，但如果一个子类使用了构造方法则必须调用父级构造方法
  constructor() {
    // 使用super特殊变量调用
    super(1, 2) // 此行必须，否则报错，注释掉这行看看
    this.z = 10
  }

  // 覆盖父类方法
  doThisOne() {
    super.doThisOne() // 此行不必须
    console.log(this.z)
  }

  doThatOne() {
    //...
  }
}
```

实例化

```javascript
const b = new B()
console.log(b instanceOf B) // true
console.log(b instanceOf A) // true
console.log(b instanceOf Object) // true
```

## 原型链

遵循ECMAScript标准，someObject.[[Prototype]] 符号是用于指向 someObject的原型。从 ECMAScript 6 开始，[[Prototype]] 可以用Object.getPrototypeOf()和Object.setPrototypeOf()访问器来访问。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 ```__proto__```。

它不应该与函数的func.prototype属性相混淆，func.prototype是作用是当该函数被作为构造函数使用的时候，指定所有通过该构造函数创建的实例对象的[[Prototype]]。Object.prototype属性表示Object的原型对象。

```javascript
const a = {a:1, b:2}
console.log(a.__proto__ === Object.prototype) // true
// 就是说，a对象的原型是Object对象的prototype
console.log(a.__proto__.__proto__)
// 如果我们调用a.__proto__.__proto__ 会发现是null，因为Object已经是顶级对象
// 所以a的原型链是 a -> Object.prototype -> null
```

使用普通方法创建对象和原型链

```javascript
const arr = [1, 2, 3]
// arr的原型链是 arr -> Array.prototype -> Object.prototype -> null

const func = () => {}
// func的原型链是 func -> Function.prototype -> Object.prototype -> null

const b = {b:3}
b.__proto__ = a
// b的原型链 b -> a -> Object.prototype -> null

// 同样的如果这时有一个c对象，c的原型是b那么
const c = {c:4}
c.__proto__ = b
// c的原型链是 c -> b -> a -> Object.prototype -> null
```

使用Object.create创建对象和原型链

```javascript
const a = {a: 1};
// a -> Object.prototype -> null

const b = Object.create(a);
// b -> a -> Object.prototype -> null
console.log(b.a); // 1 (继承而来)

const c = Object.create(b);
// c -> b -> a -> Object.prototype -> null

const d = Object.create(null);
// d -> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
```

Object.create的polyfill

```
if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
        if (!(proto === null || typeof proto === "object" || typeof proto === "function")) {
            throw TypeError('Argument must be an object, or null');
        }
        var temp = new Object();
        temp.__proto__ = proto;
        if(typeof propertiesObject ==="object")
            Object.defineProperties(temp,propertiesObject);
        return temp;
    };
}
```

使用构造方法创建对象(class 实际上是构造方法创建对象的语法糖)和原型链

```javascript
function A(xValue, yValue) {
 this.x = xValue
 this.y = yValue
}

A.prototype = {
  doThisOne() {
    console.log(this.x, this.y)
  }
}
A.s = '静态成员'
// 同static
A.func = function() {}
var a = new A(1,2)

function B() {
  A.call(this, 3, 4)
  this.z = 10
}

B.prototype = Object.create(A.prototype, {
  constructor: {
    value: B,
    enumerable: false,
    writable: true,
    configurable: true
  },
  doThisOne() {
    this.__proto__.__proto__.doThisOne.call(this)
    console.log(this.z)
  },
  doThatOne() {
    // ...
  }
})

B.__proto__ = A
```

## new 和 Object.create的区别

```javascript
function A() {
  this.x = 1 // 此属性不在__proto__上了
}
A.prototype = {
  x: 1,
  y: 2
}
const a = new A()
console.log(a)
```

VS

```javascript
// Object.create产生的对象缺少构造方法（如果没有传构造方法的话）
const A = {x: 1, y:2}
const a = Object.create(A)
console.log(a)
a instanceof A // !出错
```

## 算法题

题目：求1+2+…+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字以及条件判断语句（A?B:C）

```
function sum(n) {
  const functions = { true: sum, false: () => 0 };
  return n + functions[!!(n-1) + ""](n - 1);
}
console.log(sum(10));
```