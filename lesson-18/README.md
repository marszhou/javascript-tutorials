# 第十八课

## [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
![](https://mdn.mozillademos.org/files/8633/promises.png)

```
new Promise(function(resolve, reject) {
    // executor
    // 执行Promise逻辑
})
    .then((r) => return '...')
    .then((r) => return '***')
    .then ...
    .catch(e => {
        // 处理错误
        // 也可以继续抛出错误
    })
    ...
```

* [Promise.all](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
* [Promise.race](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
* [示例](./promise.js)


## 算法题

写一个函数，该函数只接受一个参数n，n为数字，计算n转换成2进制后数字中『1』的个数。（暂时不考虑负数）
如函数形式为：

```
function f(n) {
  // ...逻辑
}

f(4) // 4 -> 二进制100，应返回1
f(5) // 5 -> 二进制101，应返回2
f(11) // 11 -> 二进制为1011，应返回3
```

[答案](./answer.js)

参考

* [按位运算](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
* [原码、反码、补码详解](http://www.cnblogs.com/zhangziqiu/archive/2011/03/30/ComputerCode.html)

