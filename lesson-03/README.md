# 函数初探

[structure]: https://raw.githubusercontent.com/marszhou/javascript-tutorials/master/lesson-03/demo/function-structure.png

## 函数基本定义

1. 函数是Javascript程序的基本组成部分。
2. 在Javascript中函数是用来执行一个过程或者运算一个数据结果的一堆语句的集合。
3. 如要使用函数，则需要在某个作用域中先定义它，然后再调用它。

**函数也是一个对象**

## 函数的定义方式

### 声明方式

![][structure]

### 表达式方式

![](https://github.com/marszhou/javascript-tutorials/blob/master/lesson-03/demo/function-expression.png?raw=true)


### 声明和表达式区别

![](https://github.com/marszhou/javascript-tutorials/blob/master/lesson-03/demo/function-comp.png?raw=true)

如上例，我们以为后一个函数声明a会覆盖前一个，如果执行a()的话会打印1，其实实际上会打印2，因为**function声明总是被javascript解释器提到最前面运行**
