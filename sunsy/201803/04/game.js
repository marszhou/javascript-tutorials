function genMatrix(cols, rows, n) {
  if(cols*rows%2 !== 0) throw Error('cols*rows结果必须为偶数');
  let a = [...Array(cols*rows/2)].map(() => Math.ceil(Math.random() * n))
  a = [...a, ...a].sort(() => Math.random() - 0.5)
  return [...Array(rows)].map((value, y) => a.slice(y*cols, (y+1)*cols))
}

// 1. 判断两个数是否相等
// 2. 先判断两个坐标是否在一条直线上
// 3. 判断两个坐标之间的元素是否全部为0
// array用于存储生成的二维数组
function isLinkable (a,b) {
  if(array[a[1]][a[0]] !== array[b[1]][b[0]]) return false;
  if(a[0] !== b[0] && a[1] !== b[1])  return false;
  let distance = null;
  if(a[0] === b[0]) {
    distance = b[1] - a[1];
    for(let i=1; i<distance; i++) {
      if(array[a[1]+i][a[0]] !== 0) return false;
    }
    return true;
  }
  if(a[1] === b[1]) {
    distance = b[0] - a[0];
    for(let i=1; i<distance; i++) {
      if(array[a[1]][a[0]+i] !== 0) return false;
    }
    return true;
  }
}

// 1. 得到二维数组的坐标数组（一维）
// 2. 循环判断两个坐标是否可以链接
// 3. 将可以链接的坐标push保存
function getLinkableCoordinates (array) {
  const cols = array[0].length;
  const rows = array.length;
  const allCoordinates = [...Array(cols*rows)].map((_, index) => 
    [index - Math.floor(index/cols)*cols, Math.floor(index/cols)]
  )
  const linkableCoordinates = [];
  while(allCoordinates.length > 1) {
    const begin = allCoordinates.shift();
    allCoordinates.forEach((coordinate) => {
      if(isLinkable(begin, coordinate)) linkableCoordinates.push([begin, coordinate])
    })
  }
  return linkableCoordinates;
}
