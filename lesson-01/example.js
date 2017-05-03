// 注释
// 这是一行单行注释

/*
 * 这是多行注释
 * 在sublime编辑器中，可以使用 ⌘+/ 或 ⌘+⌥+/ 切换代码的注释状态
 */

// 严格模式
// 对比以下两段代码的效果

// 未使用严格模式
x = 1 // 变量没有声明的情况下，直接使用，不出错

// 使用严格模式
"use strict" // 声明严格模式
y = 2 // 变量未声明就赋值，报错

// 关于声明变量
var x
x = 1
// 可以写成一行
var x = 1
var y = "hello world"
var z = {name: 'nobody'}
var a = 1, b = 2, c = 3 // 在某些语法检查工具下，这是不好的书写风格
                        // 虽然不是出错，但是不建议这么写
// 关于变量类型
// 布尔值 Boolean
// 以下写法都是正确的
x = true
y = false
z = Boolean(1) // = true, Boolean() 可以理解为类型转换，把不同类型的变量转换为布尔值

// 数字 Number
a = 100
b = 012                   // = 10, 八进制，0前导开头
c = 0x1F                  // = 31，十六进制，0x前导开头，这里字符不区分大小写
// funny stuffs
// javascript有 +0 和 -0, Infinity 和 -Infinity
1/0 == Infinity           // 不报错
// 浮点数表达法
0.3 - 0.2 === 0.2 - 0.1   // false，浮点数的值不可作为判断条件，最好转换成整数
// 科学计数法
3.127e10
// NaN值
// NaN是Not a Number的缩写
NaN == NaN                // false，javascript中唯一自己不等于自己的等式，也是判断NaN的条件
// 其他类型转换为Number类型，有多种方式
a = '123'
+a              // 123
Number(a)       // 123
parseInt(a)     // 123
a = '123.5'
parseInt(a)     // 123
Math.floor(a)   // 123，取低值
Math.round(a)   // 124，四舍五入函数
parseFloat(a)   // 123.5
a = "FF"
+a              // NaN
parseInt(a)     // NaN
parseInt(a, 16) // 255，解析十六进制

// 关于字符串 String
// 双引号，单引号，反引号
a = "abc"
a = 'abc' // 双引号和单引号作用完全一样
a = 8
b = `我有${a}块钱`    // 反引号可以做字符串模板
b = `我有${a*10}块钱` // 里面可以写任何正常的js表达式
// 转义符，常用的 \n \r \t \b \' \" 使用转义符因为在正常情况下无法输入这些字符 或者 不方便表达
a = "今天气温\n28℃"
// 如何在字符串中输入多行文本？
a = 'hello
world' // 这是错误的代码
a = 'hello\
world' // output: helloworld，结尾必须以\结尾，代表这一行未结束，linux里如果要输入多行的命令行也是这样的
a = 'hello\n\
world' // 也许这样输出的更符合你的预期
// 或者直接用反引号，支持换行，但要注意这里打印出来也是三行
a = `1
2
3`
// 字符串转换
// 任何类型，和字符串类型的变量相加都会转换为字符串类型
a = 10
b = '我有' + a + '块钱'
// 实际上上面这行的执行代码会被解析为
b = '我有' + a.toString() + '块钱' // javascript中任何值都是对象，任何对象都有toString方法
// 看这个例子
c = {
  name: 'Danny'
}
'我的名字是' + c // "我的名字是[object Object]", 因为默认的Object类型的toString只是返回[object Object]
// 如果要自定义toString方法，是可以的
c = {
  name: 'Danny',
  toString: function() { return '*' + this.name + '*'}
}
'我的名字是' + c // "我的名字是*Danny*"

// 关于对象类型 Object
// 对象的赋值
// a = {
//   key1: value1,
//   key2: value2,
//   ...
//   keyN: valueN
// }
mother = '母亲'
studentA = {
  name: 'Bob',
  gender: 'male',
  age: 15,
  grade: 8,
  父亲: {           // 正常的文字都可以直接写这里！
    name: 'Adam'
  },
  [mother]: {      // key可以用变量代替
    name: 'Eva'
  },
  "01" : '...'     // 特殊的值做key要用引号包起来，去掉01的引号会报错
}
// 使用下标取对象的值
studentA.age
studentA.父亲
studentA[mother]   // 与student.母亲 效果一样
// 如何删掉对象的key
delete studentA.grade

// 关于数组 Array
a = Array(10)     // 创建一个数组，初始化了10个空位
a = [1,2,3]
// 数组取值
a[1]

// 操作符
// ++
a = 1
b = a++
console.log(b, a) // b = 1, a = 2 // 谨慎使用 后++ 符号，有可能产生问题
a = 1
b = ++a
console.log(b, a) // b = 2, a = 2
// 三元操作符
a = true
b = a ? '真的' : '假的'
// 逻辑操作符 && || !
// == 和 ===区别
// A
a = '123'
b = 123
a == b // true
a === b // false
// B
a = 0
b = false
a == b // true
a === b // false

// if ... else 语句的使用
/*
  if (条件) {
    语句...
  } else if (条件2) {
    语句...
  } else {
    语句...
  }
*/
// 改变1的值，测试2的效果
// 1)
a = {
  age: 50,
  gender: 'male'
}
// 2)
if (a.gender === 'male') {
  if (a.age > 40) {
    console.log('uncle')
  } else {
    console.log('lad')
  }
} else if (a.gender === 'female'){
  if (a.age > 40) {
    console.log('aunt')
  } else {
    console.log('sis')
  }
} else {
  console.log('unknown')
}

// switch 语句
// 对于分支非常多，用if ... else if 太麻烦了，不如用switch
/*
  switch (表达式) {
    case 值1:
      语句1
      break
    case 值2:
      语句2
      break
    case 值N
      语句N
      break
    default:
      语句
      break
  }
*/
// 1) 一周七天的口号, 更改day值查看效果不同
day = 1
s = ''
switch(day) {
  case 1:
    s = '努力工作'
    break
  case 2:
    s = '鼓舞干劲'
    break
  case 3:
    s = '终于过了一半了'
    break
  case 4:
    s = '一周太长了'
    break
  case 5:
    s = '终于到周末了，万岁！'
    break
  case 6:
  case 7:
    s = 'Zzz...Zzz...'
    break
  default:
    s = '输错日子了'
    break
}
console.log(s) // 注意看6、7用了同一个语句处理
// 2) 另外一种用法，switch值固定，case值是变量或表达式，
//    假设根据钱数点星巴克咖啡
money = 12
type = null
switch (true) {
  case money > 12 && money <= 15:
    type = '中杯'
    break
  case money > 15 && money <= 18:
    type = '大杯'
    break
  case money > 18:
    type = '超大杯'
    break
  default:        // 什么也没做
    break
}
if (money <= 12) {
  console.log('你的资金不足')
} else {
  console.log(`你有${money}￥，可以购买${type}`)
}