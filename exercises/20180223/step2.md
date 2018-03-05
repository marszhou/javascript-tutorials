# 练习2解题思路

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

请注意throttle常量作为阀值，控制是否出现0，出现几率为1-throttle，如throttle=0.6的时候有40%几率填充0。

假设我们有以下4x4填充1-4数字的矩阵:

![](https://ws3.sinaimg.cn/large/006tNc79gy1fp18667s1sj305s05vt8l.jpg)

按照练习二的要求，只需要得到直连的结果，所以结果集有以下三组：

![](https://ws1.sinaimg.cn/large/006tNc79gy1fp185szym8j305r05x0sm.jpg)

我们可以发现规则，A点和B点如果可以相连的条件是，A和B点要么x坐标相同，要么y坐标相同，A和B连线之间的数字只有0的时候才可以通过，如(1, 0)和(3, 0)中间因为隔了数字2所以不能连线。

![](https://ws4.sinaimg.cn/large/006tNc79gy1fp1873vn84j305q05rjra.jpg)

那么接下来可以通过遍历的方式来找到每个点的匹配（可以连线的点）

![](https://ws3.sinaimg.cn/large/006tNc79ly1fp18ae8i3uj306v06k3yf.jpg)

我设置了一个函数，getAllLinks(matrix)，来找出矩阵中所有匹配的点。

```js
function getAllLinks(matrix) {
 let ret = []
 const { cols, rows } = getMatrixDimension(matrix)
 for (let x = 0; x < cols; x++) {
   for (let y = 0; y < rows; y++) {
     const finding = findMatchByRule1(x, y, matrix)
     ret = [...ret, ...finding]
   }
 }
 return ret
}
```

该函数的思路：

1. 每遍历到一个点，就向一个函数（findMatchByRule1，因为连连看这个游戏的连线规则不只有目前这一种连线方法，所以如此命名，以后还会有findMatchByRule2，findMatchByRule3）询问：“谁跟我是匹配的？”
2. findMatchByRule1会返回所有和该点匹配的其他点的结果集（数组）
3. 把findMatchByRule1得到的结果集和当前结果相加，直到遍历完所有点。

这样当遍历到a=(1,1)的时候，就会得到[3,1]和[1,2]两个和他匹配的，findMatchByRule1返回一个长度为2的数组
假如a=(0,3)的时候没有找到匹配，返回空数组[]
假如a=(2,3)的时候，会得到(3,3)和他匹配，findMatchByRule1返回长度为1的数组

以下是findMatchByRule1的实现，findMatchByRule1依赖其他两个函数，一并列出来：

```js
function getMatrixValue(x, y, matrix) {
 return matrix[y][x]
}

function getMatrixDimension(matrix) {
 return {
   rows: matrix.length,
   cols: matrix[0].length
 }
}

function findMatchByRule1(x, y, matrix) {
 const current = getMatrixValue(x, y, matrix)
 if (current === 0) return []

 const { cols, rows } = getMatrixDimension(matrix)
 const ret = []
 for (let xx = x + 1; xx < cols; xx++) {
   const a = getMatrixValue(xx, y, matrix)
   if (a === 0) continue
   if (a === current) {
     ret.push({ value: a, points: [[x, y], [xx, y]] })
   }
   break
 }
 for (let yy = y + 1; yy < rows; yy++) {
   const a = getMatrixValue(x, yy, matrix)
   if (a === 0) continue
   if (a === current) {
     ret.push({ value: a, points: [[x, y], [x, yy]] })
   }
   break
 }
 return ret
}
```

所以可以看出来，findMatchByRule1的思路是：

1. 从某点开始，遍历所有跟该点的x坐标相同，但y坐标从该坐标点y值逐步加1直到rows上限
2. 或遍历所有跟该点y坐标相同，x逐步加1直到columns上限
3. 如果遇到0，则继续下一个坐标
4. 如果没有遇到0，则比较该坐标上的值是否和当前查询点上的数字相同，如果相同就记录下来
5. 但不论是否相同都跳出循环(break)

需要注意，findMatchByRule1遍历的方式的方向只向右、向下遍历，不会向左、向上，因为这样会造成重复的结果。

这样就可以得到getAllLinks的结果。

另外，练习还要求，要写一个函数能够判断两个点是否可以连接：

该函数如下，它可以继续利用findMatchByRule1

```js
function comparePoint(a, b) {
 const ydiff = a[1] - b[1]
 const xdiff = a[0] - b[0]
 if (ydiff !== 0) {
   return ydiff
 } else {
   return xdiff
 }

}

function isLinkable(a, b, matrix) {
 // a, b坐标完全一样
 if (a[0] === b[0] && a[1] === b[1]) return false
 // a, b坐标位置上的数字值不一样
 if (getMatrixValue(...a, matrix) !== getMatrixValue(...b, matrix)) return false

 if (comparePoint(a, b) > 0) { // a/b交换位置
   [a, b] = [b, a]
   // 传统写法
   // const temp = a
   // a = b
   // b = temp
 }
 const finding = findMatchByRule1(a[0], a[1], matrix)
 return finding.findIndex(f => f.points.findIndex(point => point[0] === b[0] && point[1] === b[1]) > -1) > -1
}
```

思路如下：

1. 比较a,b两个点，按照出现的先后顺序（y值比较大的排在后面，y值一样的情况下，x值比较大的排在后面）排序，如果a点比b点出现的靠后，则两个点要交换位置
2. 然后从findMatchByRule1得到a点可以连接的所有结果
3. 在结果中定位是否存在b点，如果存在则说明两点可以相连，如果不存在，则说明不能相连。

最后测试一下结果：

```js
// 测试
const matrix = [
 [4, 3, 2, 3],
 [0, 1, 0, 1],
 [2, 1, 0, 4],
 [1, 0, 2, 2]
]

console.log(getAllLinks(matrix))
// [
//   { "value": 1, "points": [[1, 1], [3, 1]] },
//   { "value": 1, "points": [[1, 1], [1, 2]] },
//   { "value": 2, "points": [[2, 0], [2, 3]] },
//   { "value": 2, "points": [[2, 3], [3, 3]] }
// ]

console.log(isLinkable([0, 1], [0, 3], matrix)) // false
console.log(isLinkable([1, 1], [1, 3], matrix)) // false
console.log(isLinkable([1, 2], [1, 1], matrix)) // true
console.log(isLinkable([3, 3], [2, 3], matrix)) // true
console.log(isLinkable([3, 3], [2, 3], matrix)) // true
```

