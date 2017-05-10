# 第2课 循环语句

# 目录

* 内容
  * [while](#while)
  * [do ... while](#dowhile)
  * [for](#for)
  * [for ... in](#for--in)
  * [break和continue](#break和continue)
* 其他
  * [关于调试](#关于调试)
* [作业](#作业)

### while

基本语法

```javascript
  while(条件) {
    语句...
    {break 或 continue}
  }
```

示例 寻找1到100,000以内能整除123的数

```javascript
  var i = 123
  var k = 0
  var b = null

  while(true) {
    b = parseInt(Math.random() * 100000)
    var f = b % i
    if (f === 0) {
      break
    }
    k = k + 1
  }

  console.log('b = ', b, ', 循环了', k, '次')
```

不用break的写法

```javascript
  var i = 123
  var k = 0
  var b = null
  var f = null
  while(f !== 0) {
    b = parseInt(Math.random() * 100000)
    f = b % i
    k = k + 1
  }

  console.log('b = ', b, ', 循环了', k, '次')
```

### do...while

基本语法

```javascript
  do {
    语句...
    {break 或 continue}
  } while(条件)
```

示例

```javascript
  var i = 123
  var k = 0
  var b = null
  var f = null
  do {
    b = parseInt(Math.random() * 100000)
    f = b % i
    k = k + 1
  } while(f !== 0)
  console.log('b = ', b, ', 循环了', k, '次')
```

### for

基本语法

```javascript
  for (#a始化条件; #b判断条件; #c条件值变化) {
    #d语句...
    {break 或 continue}
  }
```

其执行顺序是 #a -> #b (如果条件成立) -> #d -> #c -> #b (如果条件成立) -> #d ...

如我们有一个while 版本的求和语句

```javascript
  i = 0
  sum = 0
  while(i<=10) {
    sum = sum + i
    i = i + 1
  }
  console.log(sum)
```

用for版本写出来就是

```javascript
  var sum = 0
  for (
    var i=1;    // (1)
    i<=10;      // (2)(5)(8)
    ++i         // (4)(7)(10)...
  ) {           // (3)(6)(9)
    sum += i
  }
  console.log(sum)
```

用for循环遍历数组

```javascript

  a = [1,2,3,4]
  for(var i=0; i < a.length; ++i) {
    console.log(a[i])
  }

```

### for ... in

基本语法

```javascript
  for (var 变量1 in 变量2) {
    语句...
    {break 或 continue}
  }
```

变量2通常是对象（hash 哈希值或者散列值）

遍历散列对象的所有key并打印

```javascript
  mother = '母亲'
  studentA = {
    married: false,
    gender: 'male',
    name: 'Bob',
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

  for (var i in studentA) {
    console.log(i, '=', studentA[i])
  }
```

### break和continue

* break的作用是跳出当前循环
* continue的作用是忽略本次循环后面的语句，进行下一次循环

循环的嵌套，说明break和continue指令的作用

```javascript
  for(var i=1; i<=100; i+=1) {
    var f = i % 3
    if (f !== 0) {
      while(i%2==0) {
        console.log('i不能被3整除，但能被2整除', i)
        break
      }
      continue
    }
    console.log(i)
  }

```
### 关于调试

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
```

如果以上成功
第三步，打开浏览器，地址栏输入localhost:8000回车

# 作业

1. 找出100－999之间的所有“[水仙花数](https://zh.wikipedia.org/wiki/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0)”，所谓水仙花数是指一个三位数，各位数字的立方和等于该数本身。（如153＝1^3＋5^3＋3^3）并输出这些数字，统计有多少个。并求出这些数字之和。 [☆答案☆](assignments/1.html)


2. 打印一千位斐波那契数列 [斐波那契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97) [☆答案☆](assignments/2.html)

3. 使用console.log打印一个99*99的菱形（用你喜欢的字符填充），比如这是一个5x5的菱形 [☆答案☆](assignments/3.html)
```
  *
 ***
*****
 ***
  *
```

4. 打印100,000,000以内的素数（难度高）[☆答案☆](assignments/4.html)