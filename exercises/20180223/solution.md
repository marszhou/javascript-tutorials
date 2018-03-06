# 练习2

首先，本题是在练习1的基础上的，我已经给出的练习1的函数，可以在此基础上继续完成

```js
function genMatrix(cols, rows, n) {
 if (cols * rows % 2 !== 0) throw Error('cols*rows结果必须为偶数')
 const throttle = 0.6 // 有40%几率填充0
 let a = [...Array(cols * rows / 2)].map(() => Math.ceil(Math.random() > throttle ? 0 : Math.random() * n))
 a = [...a, ...a].sort(() => Math.random() - 0.5)
 return [...Array(rows)].map((value, y) => a.slice(y * cols, (y + 1) * cols))
}
```

请注意throttle常量作为阀值，控制是否出现0，出现几率为1-throttle，如throttle = 0.6的情况下有40%几率填充0。

假设我们有以下6x6填充1-4数字的矩阵:
![](https://ws3.sinaimg.cn/large/006tKfTcgy1fp2bauuthbj309608waa4.jpg)

## 思路

如果玩过连连看，都应该知道，连连看的连线方式有三种：
1.直线，也就是竖线(vertical)或横线(horizontal)，如下图中的3组，当中间相隔0或者，没有隔任何位置的时候两个格子可以连线

![](https://ws3.sinaimg.cn/large/006tKfTcgy1fp2ba3lcbxj309408uglo.jpg)


2.一次折线，也就是说由一条竖线+一条横线(vh)，或者一条横线+一条竖线(hv)组成

![](https://ws4.sinaimg.cn/large/006tKfTcgy1fp2b8t476jj30lw08nq3f.jpg)


3.二次折线，也就是说由一条竖线(vertical)+一条hv线，或一条横线+一条vh线组成

![](https://ws1.sinaimg.cn/large/006tNc79gy1fp2be1tgz9j30iv094aae.jpg)

所以，我也准备使用3个方法分别判断三种连线方式，分别是：

1. isOneLineLink(p1, p2, matrix)
2. isTwoLineLink(p1, p2, matrix)
3. isThreeLineLink(p1, p2, matrix)

先不考虑后两种算法，只考虑第一种算法，其实它具体判断的就是两个点p1和p2之间是否能连线就要看它们是否符合竖线或者横线的规则

所以

```js

function isOneLineLink(p1, p2, matrix) {
 return isVerticalLink(p1, p2, matrix) || isHorizontalLink(p1, p2, matrix)
}

```

isVerticalLink和isHorizontalLink的定义如下

```js
function isVerticalLink(p1, p2, matrix) {
 [p1, p2] = sortPoints(p1, p2)
 if (p1[0] !== p2[0] || p1[1] === p2[1]) return false
 for (let y = p1[1] + 1; y < p2[1]; y++) {
   if (getMatrixValue(p1[0], y, matrix) !== 0) return false
 }
 return true
}

function isHorizontalLink(p1, p2, matrix) {
 [p1, p2] = sortPoints(p1, p2)
 if (p1[1] !== p2[1] || p1[0] === p2[0]) return false
 for (let x = p1[0] + 1; x < p2[0]; x++) {
   if (getMatrixValue(x, p1[1], matrix) !== 0) return false
 }
 return true
}
```



