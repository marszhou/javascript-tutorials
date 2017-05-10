
# JavaScript 函数讲解(reveal-md)

---

什么是函数(Function)?

----

MDN上的定义

* 函数是Javascript程序的<font color="red">基本组成部分</font>。
* 在Javascript中函数是用来<font color="red">执行一个过程</font>或者<font color="red">运算一个数据结果</font>的一堆语句的集合。
* 如要使用函数，则需要在某个作用域中先<font color="red">定义</font>它，然后再调用它。

----

Function是Javascript的内置对象

* Object
* String
* Number
* Function <font color="red"> ← </font>
* RegExp
* Math
* ...

---

定义函数

----

函数声明(ex1)

![](./function-structure.png)

----

函数表达式

![](./function-expression.png)

----

声明和表达式的区别 (ex2)

![](./function-comp.png)

----

![](./function-comp2.png)

----

<font color='red'>不要这样做!</font>

![](./call4.png)

----

<font color='green'>这样是可以的</font>

![](./call5.png)

---

函数对象的属性和方法

----

arguments(ex3)

![](./arguments.png)

----

![](./arguments2.png)

----

.call()和.apply()

![](./call.png)

----

.bind()

![](./bind.png)


----

(ex4)

![](./call2.png)

----

![](./call3.png)

---

函数的应用

----

递归方法（ex5）

![](./func1.png)

----

但是上面的写法是有错误的

![](./func2.png)

----

![](./func3.png)

----

回调方法(ex6)

![](./callback.png)

----

![](./callback2.png)

----

匿名方法(ex7)

![](./callback3.png)

----

闭包(ex8)

![](./closure.png)


---

#The End <font color='blue'>@</font> 2016-06-06