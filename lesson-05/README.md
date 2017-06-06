# 实战：计算器

# 知识点

## DOM
理解 Document Object Model的树，通过DOM API可以遍历查询任何元素，并通过API可以修改元素的内容。

### 全局对象
* window
* location
* history
* navigator
* document

### 查询DOM 元素
* document.getElementById
* document.getElementsByClassName
* document.getElementsByTagName
* document.querySelector

### 元素间的关系 (前一种包含了TextNode，后一种不包含)
* element.childNodes / element.children
* element.nextSibling / element.nextElementSibling
* element.previousSibling / element.previousElementSibling
* element.parentNode / element.parentElement

### 修改DOM 元素
* element.innerHTML
* element.innerText
* element.className
* element.style
* element.getAttribute / element.setAttribute

## 事件处理
### onclick事件在html里的绑定方式
### event对象：用event.target 获得当前事件的触发元素

----

## 以前的知识点：
switch / if ... else / 数组和字符串的一些基本使用