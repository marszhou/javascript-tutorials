# Javascript-Tutorials

# 目录

* [lesson-01 - js - 基本语法：变量、数据类型及条件语句](./lesson-01)
* [lesson-02 - js - 基本语法：循环for,while,break,continue](./lesson-02)
* [lesson-03 - js - 基本语法：函数初级](./lesson-03)
* [lesson-04 - 综合 - 实战：计算器的布局和外观（html, css）](./lesson-04)
* [lesson-05 - 综合 - 实战：计算器的功能实现（javascript）](./lesson-05)
* [lesson-06 - html, api - 表单介绍，事件绑定，正则表达式](./lesson-06)
* [lesson-07 - 综合 - 实战：表单验证](./lesson-07)
* [lesson-09 - js - 关于数组的使用](./lesson-09)
* [lesson-10 - api, dom - 定位和定时器(有很多例子)](./lesson-10)
* [lesson-11 - js, dom - 变量作用范围及Event冒泡概念，todo初步](./lesson-11)
* [lesson-12 - 综合 - todo第一版](./lesson-12)
* [lesson-13 - js - this、 Function 的 bind, apply 和 call，箭头函数，...spred](./lesson-13)
* [lesson-14 - api, js - localStorage，JSON，AJAX，todo localStorage版](./lesson-14)
* [lesson-15 - 综合 - todo AJAX版](./lesson-15)
* [lesson-16 - js - 面向对象OOP es6语法及概念介绍](./lesson-16)
* [lesson-17 - js - 面向对象OOP原理及原型链](./lesson-17)
* [lesson-18 - js - Promise](./lesson-18)

----

* [lesson-19 - react - 环境搭建](./lesson-19)
* [lesson-20 - react(1) - 组件](./lesson-20)
* [lesson-21 - react(2) - 属性](./lesson-21)
* [lesson-22 - react(3) - ref & context](./lesson-22)

## Links

* HTML教程及手册
  * [教程](http://www.w3school.com.cn/html/index.asp)
  * [手册](http://www.w3school.com.cn/tags/index.asp)
* CSS教程及手册
  * [教程](http://www.w3school.com.cn/css/index.asp)
  * [手册](http://www.w3school.com.cn/cssref/index.asp)
* Javascript教程及手册
  * [廖雪峰教程](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000)
  * [w3school教程](http://www.w3school.com.cn/js/index.asp)
  * [es6](http://es6.ruanyifeng.com/#README)
  * [语言手册](http://www.w3school.com.cn/jsref/index.asp)
* 高级参考
  * [MDN Javascript Document](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
  * [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API)
* 常用工具
  * [Sublime Text](https://www.sublimetext.com/)
  * [Google Chrome](https://www.google.com/chrome/browser/features.html?brand=CHBD&gclid=CjwKEAjwm7jKBRDE2_H_t8DVxzISJACwS9WbWXLWrc05xGZwJUBzGwYmDvJTBMFjqBX1x5LnyfPbwhoCaHfw_wcB&dclid=CJTEqqX71dQCFQg4lgodfOIF3Q)
  * [SourceTree](https://www.sourcetreeapp.com/)
* 在线工具
  * [JSBin](http://jsbin.com/)
  * [GitHub](https://github.com)
* React
  * [文档](https://reactjs.org/)

## 关于调试

本地开启http server的方法，如果Mac或Windows中安装了php或者Python的话可以按以下方法开启服务

第一步

```  cd {网站所在的目录}```

例如

```
  cd ~/Documents/javascript/lesson-02
```

第二步
PHP方法

```
  php -S 127.0.0.1:8000
```

Python方法

```
  python -m SimpleHTTPServer


  让python支持utf8编码的命令

  python -c "import SimpleHTTPServer; m = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map; m[''] = 'text/plain'; m.update(dict([(k, v + ';charset=UTF-8') for k, v in m.items()])); SimpleHTTPServer.test();"
```

如果以上成功
第三步，打开浏览器，地址栏输入localhost:8000回车

