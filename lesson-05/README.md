# 实战：计算器 [源码](cal.html)

# 知识点

## DOM
理解 Document Object Model的树，通过DOM API可以遍历查询任何元素，并通过API可以修改元素的内容。

### 全局对象
* window
* location
* history
* navigator
* document

### 查询DOM元素
* document.getElementById
* document.getElementsByClassName
* document.getElementsByTagName
* document.querySelector / document.querySelectorAll

### 元素间的关系
* element.children 得到某元素下所有子元素列表
* element.nextElementSibling 得到某元素同级的下一个元素
* element.previousElementSibling 得到某元素同级的前一个元素
* element.parentElement 得到父级元素

### 读/写DOM元素属性
* element.innerHTML
* element.innerText 注意innerHTML 和 innerText的区别，前者对特殊字符不转义，后者转义（仅仅做必要转义，比如空格innerText也不会转）
* element.className
```js
// 添加class
element.className = element.className.split(/\s+/).concat(newClassName).join(' ')
// 去除class
element.className = element.className.split(/\s+/).filter(c => c !== 要删除的className).join(' ')
```
* element.style
```js
element.style.background = 'rgb(0,0,0)'
element.style.width = '100px'
element.style.fontSize = '1.2em' // 注意css中两个单词组成的指令，会用-连接起来，在js代码中要用驼峰形式代替
```
* element.getAttribute / element.setAttribute
```js
element.getAttribute('href')
element.setAttribute('src', './loading.gif')
```

### 添加插入元素
* element.append
* element.prepend
* [element.insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)
* element.remove
* element.removeChild

## 事件处理
### onclick事件在html里的绑定方式
### event对象：用event.target 获得当前事件的触发元素

----

## 以前的知识点：
switch / if ... else / 数组和字符串的一些基本使用