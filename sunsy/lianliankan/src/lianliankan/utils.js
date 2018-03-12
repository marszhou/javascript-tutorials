export function genMatrix(cols=8, rows=8, n=9) {
  if (cols * rows % 2 !== 0) throw Error('cols*rows结果必须为偶数')
  let a = [...Array(cols * rows / 2)].map(() => Math.ceil(Math.random() * n))
  a = [...a, ...a].sort(() => Math.random() - 0.5)
  return [...Array(rows)].map((value, y) => a.slice(y * cols, (y + 1) * cols))
}

export function isPointsEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}

export function isLinkable(p1, p2, matrix) {
  if(p1.length === 0) return false;
  if(getMatrixValue(p1[0], p1[1], matrix) !== getMatrixValue(p2[0], p2[1], matrix)) return false;
  if(isOneLineLink(p1, p2, matrix) || isTwoLineLink(p1, p2, matrix) || isThreeLineLink(p1, p2, matrix)) return true;
  return false;
}

export function setMatrixValue(value, x, y, matrix) {
  matrix[y][x] = value
}

export function isGameFinished(matrix) {
  for(let x=0; x<matrix[0].length; x++) {
    for(let y=0; y<matrix.length; y++) {
      if(matrix[y][x] !== 0) return false;
    }
  }
  return true;
}
function getMatrixValue(x, y, matrix) {
  return matrix[y][x]
}
function getMatrixDimension(matrix) {
  return {
    rows: matrix.length,
    cols: matrix[0].length
  }
}
function comparePoints(p1, p2) {
  const ydiff = p1[1] - p2[1]
  const xdiff = p1[0] - p2[0]
  if (ydiff !== 0) {
    return ydiff
  } else {
    return xdiff
  }
}
function sortPoints(p1, p2) {
  if (comparePoints(p1, p2) < 0) {
    return [p1, p2]
  } else {
    return [p2, p1]
  }
}
function isPointsEqual(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1]
}
// 注意这里判断是p1,p2之间是否可以画的下一条线，而不需要判断p1/p2点所在位置值是否相同
function isVerticalLink(p1, p2, matrix) {
  [p1, p2] = sortPoints(p1, p2) // 强制排序p1,p2两个点，这样循环的步长保证是1，不用考虑正负号
  if (p1[0] !== p2[0] || p1[1] === p2[1]) return false
  for (let y = p1[1] + 1; y < p2[1]; y++) {
    // 用点和点之间的坐标差值循环，如果在循环中发现非0值，则说明不能连线
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
// 可以用一条直线连接？（没有转弯）
function isOneLineLink(p1, p2, matrix) {
  return isVerticalLink(p1, p2, matrix) || isHorizontalLink(p1, p2, matrix)
}
function isHVLink(p1, p2, matrix) {
  const { cols, rows } = getMatrixDimension(matrix)
    ;[p1, p2] = sortPoints(p1, p2)
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const p3 = [x, y] // 遍历整个矩阵，用p3去尝试是否能够满足条件
      // 在尝试条件前，先检查p3上面的值，如果是非0值（p1, p2的交叉点上的值必须为0才可能画线)
      //  则本次循环失败，再尝试下一个点
      const v3 = getMatrixValue(p3[0], p3[1], matrix)
      if (v3 !== 0) continue
      // 如果p3坐标和p1或p2相同时也略过
      if (isPointsEqual(p1, p3) || isPointsEqual(p2, p3)) {
        continue
      }
      // 如果p1和p3之间能画一条横线线，并且p2和p3之间能画一条竖线，则代表找到了
      if (isHorizontalLink(p1, p3, matrix) && isVerticalLink(p2, p3, matrix)) {
        return true
      }
    }
  }
  return false
}
function isVHLink(p1, p2, matrix) {
  const { cols, rows } = getMatrixDimension(matrix)
    ;[p1, p2] = sortPoints(p1, p2)
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const p3 = [x, y]
      const v3 = getMatrixValue(p3[0], p3[1], matrix)
      if (v3 !== 0) continue
      if (isPointsEqual(p1, p3) || isPointsEqual(p2, p3)) {
        continue
      }
      if (isVerticalLink(p1, p3, matrix) && isHorizontalLink(p2, p3, matrix)) {
        return true
      }
    }
  }
  return false
}
// 可以用两条直线连接？(一次转弯)
function isTwoLineLink(p1, p2, matrix) {
  [p1, p2] = sortPoints(p1, p2)
  return isHVLink(p1, p2, matrix) || isVHLink(p1, p2, matrix)
}
function frameMatrix(matrix, fill=0/*填充0*/, thickness=1 /*默认边框宽度为0*/) {
  const {cols, rows} = getMatrixDimension(matrix)
  const fillLength = (length) => [...Array(length)].map(() => fill) // 填充一定长度的值
  const top = fillLength(cols + 2*thickness)
  const bottom = fillLength(cols + 2*thickness)
  const middle = matrix.map(row => [...fillLength(thickness), ...row, ...fillLength(thickness)])
  return [top, ...middle, bottom]
}
// 可以用3条直线连接？（二次转弯）
function isThreeLineLink(p1, p2, matrix) {
  const framedMatrix = frameMatrix(matrix) // 先镶一圈0
  const { cols, rows } = getMatrixDimension(framedMatrix);
  [p1, p2] = sortPoints(p1, p2)
  // 修正p1, p2的值, 坐标点应该都+1，新点起名叫q1, q2
  const q1 = [p1[0]+1, p1[1]+1]
  const q2 = [p2[0]+1, p2[1]+1]
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      // 这里逻辑和twoLineLink类似，不赘述
      const q3 = [x, y]
      const v3 = getMatrixValue(q3[0], q3[1], framedMatrix)
      if (v3 !== 0) continue
      if (isPointsEqual(q1, q3) || isPointsEqual(q2, q3)) {
        continue
      }
      if (
          (isVerticalLink(q1, q3, framedMatrix) && isHVLink(q3, q2, framedMatrix)) /*符合竖横竖？*/||
          (isHorizontalLink(q1, q3, framedMatrix) && isVHLink(q3, q2, framedMatrix)/*符合横竖横？*/)
        ) {
        return true
      }
    }
  }
  return false
}