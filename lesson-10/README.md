# 定位和定时器

## 浏览器里的坐标系

左上角原点，X轴从左到右(0->+∞)，Y轴从上到下(0->+∞)

## 定位类型

* 静态定位 position: static (默认值)
* 绝对定位 position: absolute [[示例1](http://jsbin.com/hevano/1/edit?html,css,output)] [[示例2](http://jsbin.com/yarixed/1/edit?html,css,output)]
* 相对定位 position: relative ***相对定位是根据自身所在静态位置计算出来的相对位置*** [[示例1](http://jsbin.com/xotije/1/edit?html,css,output)] [[示例2](http://jsbin.com/yonuluf/edit?html,css,output)]
* 固定定位 position: fixed [[示例](http://jsbin.com/noxinak/1/edit?html,css,output)]
* 粘性定位 position: sticky ***试验特性，可以大致了解一下*** [[示例](http://jsbin.com/besadaj/edit?html,css,output)]

## 与坐标位置、尺寸相关的css

* left
* top
* bottom
* right
* width
* height

***涉及到宽高位置等css值注意给单位比如100是无效的，100px是有效的***

[[综合示例](http://jsbin.com/boluzuj/8/edit?html,css,output)]

## 显隠层的方式

* display: none
* visibility: hidden
* opacity: 0 ***透明度***

***display: none 后元素在页面上不占任何位置***

## 鼠标事件中的位置信息

* clientX/clientY 在当前显示区域的位置（相对于浏览器显示区域左上角)
* pageX/pageY 在当前显示页面的位置（相对于浏览器页面左上角)
* offsetX/offsetY 事件发生元素内部的相对位置

  [[示例](http://jsbin.com/vofanet/7/edit?html,css,js,output)]

```diff
- 鼠标在页面上移动看效果，注意要先点一下『run with js』按钮
```

## 浏览器中的空间信息
![](https://ws4.sinaimg.cn/large/006tNc79gy1fhzl9em9nvj30h30nstaz.jpg)

*document.documentElement是指&lt;html&gt;标签*

*document.body是指&lt;body&gt;标签*

* document.documentElement.clientWidth/clientHeight 文档可视区域的宽度/高度
* document.documentElement.scrollWidth/scrollHeight 文档滚动区域的宽度/高度
* document.documentElement.scrollLeft/scrollTop 文档滚动条当前的位置

[[示例](http://jsbin.com/faregeg/17/edit?html,css,js,output)]
```diff
- 滚动窗口或中间的div看效果，注意要先点一下『run with js』按钮
```

## Z坐标
浏览器屏幕从内到外是Z轴方向（0->+∞）

* z-index: n *** n是整数，数字越大越靠前 ***

[[示例](http://jsbin.com/muyewic/4/edit?html,css,js,output)]

```diff
- 点击层查看效果，注意要先点一下『run with js』按钮
```

***CSS中的属性名称是复合词的（两个单词组成，中间用-连接的），在Javascript中使用时要转换成驼峰形式，如background-color在Javascript中就变成了backgroundColor***

## 获得任意DOM元素的尺寸及位置

* el.getBoundingClientRect()

## 定时器

* setTimeout/clearTimeout
* setInterval/clearInterval

setTimeout和setInterval调用形式类似，第一个参数都是不需要参数的回调函数，第二个参数是延迟时间（duration, 单位毫秒)

setTimeout和setInterval的区别是，setTimeout只执行一次，setInterval会一直循环执行

运行setTimeout得到的返回值是一个timerId，用clearTimeout(timerId)可以终止timer效果，setInterval和clearInterval也是一样

[[示例:倒计时](http://jsbin.com/puvogoy/edit?html,css,js,output)]
[[示例:电子时钟](http://jsbin.com/gidopok/9/edit?html,css,js,output)]

## 作业：赛车

需求
1. 竖排有5个正方形同样大小的并列的div(x值相同，y不同)
1. 有一个『开始』按钮
1. 有一个显示结果的div
1. 有一条终点线
1. 点击开始按钮时，启动一个计时器，计时器延迟n毫秒后执行
1. 计时器执行时，会分配给5个div各自一个随机长度，并将5个div的left值增加这个随机长度
1. 每次计时器执行完，检查是否有某个div越过终点
1. 越过终点的div停止移动
1. 如果没有全部5个div越过终点，则再次启动一个新的计时器，执行5-8步内容
1. 所有div都越过终点后，在显示结果div处显示最终的名次和每个div的成绩（总计用时）

[框架](http://jsbin.com/tutovu/12/edit?html,css,js,output) 也可以使用编辑本地html的方法[模板](./assignment.html)
