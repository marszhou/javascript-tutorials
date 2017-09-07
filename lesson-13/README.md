# this、 Function 的 bind, apply  和 call

## this 和 bind

```js
const person = {
    firstName: 'Matt',
    lastName: 'Zhou',
    describe: function() {
        return `I'm ${this.firstName} ${this.lastName}`
    }
}

var firstName = 'Nobody' // 只是为了为全局顶级对象window加一个firstName属性所以用了var
person.describe()       // correct! this = person -> "I'm Matt Zhou"
const d = person.describe
d()                     // wrong! this = window -> "I'm Nobody undefined"
```

解决办法1: 写死

```js
const person = {
    firstName: 'Matt',
    lastName: 'Zhou',
    describe: function() {
        return `I'm ${person.firstName} ${person.lastName}`
    }
}
var firstName = 'Nobody'
person.describe()       // -> "I'm Matt Zhou"
const d = person.describe
d()                     // -> "I'm Matt Zhou"
```

***缺点: 写死 person 的灵活性差***

解决办法2: bind

```js
const person = {
    firstName: 'Matt',
    lastName: 'Zhou',
    describe: function() {
        return `I'm ${this.firstName} ${this.lastName}`
    }
}
const person2 = {
    firstName: 'Peter',
    lastName: 'Park'
}

var firstName = 'Nobody'
person.describe()       // -> "I'm Matt Zhou"
const d = person.describe.bind(person)
d()                     // -> "I'm Matt Zhou"
const d = person.describe.bind(person2)
d2()                    // -> "I'm Peter Park"
```

## 使用 => 自动绑定

```js
const person = {
    firstName: 'Matt',
    lastName: 'Zhou',
    describe: function() {
        return `I'm ${this.firstName} ${this.lastName}`
    },
    // 仅为测试用, 无任何意义，作用循环count次，调用this.describe
    // 请对比loop1,loop2,loop3,loop4
    loop1: function(count) { // correct
        [...Array(count)].forEach(() => this.describe())
    },
    loop2: function(count) { // wrong
        [...Array(count)].forEach(function(){ this.describe()})
    },
    loop3: function(count) { // correct
        const self = this;
        [...Array(count)].forEach(function(){ self.describe()})
    },
    loop4: function(count) { // correct
        [...Array(count)].forEach((function(){ this.describe()}).bind(this))
    }
}

person.loop1(3)
// 会报错
// person.loop2(3)
person.loop3(3)
person.loop4(3)
```
***注意: 对比 Array(3) 和 [...Array(3)]的区别***

## bind其他的功能

为函数绑定参数, 绑定的参数首先填充左边的参数

```js

function add(x, y) {
    return x + y
}

const addEleven = add.bind(null /*没用到this,无所谓传什么值*/, 11)
addEleven(3) // -> 14
const add100 = add.bind(null, 100)
add100(3) // -> 103

function echoThreeString(s1, s2, s3) {
    console.log(s1)
    console.log(s2)
    console.log(s3)
}

echoThreeString('cat', 'dog', 'fish') // (1)
const echoThird = echoThreeString.bind(null, 'cat', 'dog')
echoThird('fish') // 打印结果和(1)一样，因为前两个参数已经被填上了
```

使用第三方库，也可以从右侧填充参数

引入lodash

```html
<script src='https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js'></script>
```

```js
function echoThreeString(s1, s2, s3) {
    console.log(s1)
    console.log(s2)
    console.log(s3)
}
const echoFirst = _.partialRight(echoThreeString, 'dog', 'fish')
echoFirst('cat') // 打印结果和(1)一样，因为后两个参数已经被填上了
```

## Function: call 和 apply

*第一个参数和bind一样，是指函数运行上下文所需的this是哪个，这里不演示了*

```js
function sum() {
    const args = Array.prototype.slice.call(arguments)
    let ret = 0
    args.forEach(v => ret += v)
    return ret
}

sum(1, 2, 3, 4)                 // -> 10
sum.call(null, 1, 2, 3, 4)      // -> 10
sum.apply(null, [1, 2, 3, 4])   // -> 10

function joinString(sep) {
    const args = Array.prototype.slice.call(arguments, 1)
    return args.join(sep)
}
joinString('|', 'a', 'b', 'c')                  // -> "a|b|c"
joinString.call(null, '|', 'a', 'b', 'c')       // -> "a|b|c"
joinString.apply(null, ['|', 'a', 'b', 'c'])    // -> "a|b|c"
```

## ...spread


```js
const xs = [1, 2, 3]
const ys = [11, 12, ...xs]  // [11, 12, 1, 2, 3]
                            // 等同于 [11, 12].concat(xs)，但比它还强大
                            // 试试 [11, ...xs, 12]
const a = {
    a1: 1,
    a2: 2
}
const b = {
    b1: 3,
    b2: 4,
    ...a
} // {b1: 3, b2: 4, a1: 1, a2: 2}

function joinString(sep, ...parts) {
    return parts.join(sep)
}
joinString("*", 1, 2, 3) // "1*2*3"
const c = [1, 2, 3]
joinString("*", ...c) // "1*2*3"
```

