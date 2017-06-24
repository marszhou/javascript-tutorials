# Javascript-Tutorials

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

```
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

  // 让python支持utf8编码的命令
  python -c "import SimpleHTTPServer; m = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map; m[''] = 'text/plain'; m.update(dict([(k, v + ';charset=UTF-8') for k, v in m.items()])); SimpleHTTPServer.test();"
```

如果以上成功
第三步，打开浏览器，地址栏输入localhost:8000回车