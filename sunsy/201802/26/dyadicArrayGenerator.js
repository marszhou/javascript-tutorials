// 要求cols*rows%2=0, n<=cols*rows/2
function dyadicArrayGenerator (cols, rows, n) {
  if(n > cols*rows/2) {
    alert("请输入符合要求的n，n<=cols*rows/2");
    return
  }
  if(cols%2 !== 0 && rows%2 !== 0) {
    alert("请输入符合要求的行和列，行和列至少一个是偶数");
    return
  }
  // 首先生成元素成对的二维数组
  const arr = [...Array(rows)];
  // arr.forEach(arr1 => arr1 = [...Array(5)]); 不能执行？？？
  for(let i=0; i<rows; i++) {
    arr[i] = [...Array(cols)]
  }
  if(cols%2 === 0) {
    for(let i=0; i<rows; i++) {
      for(let j=0; j<cols/2; j++) {
        arr[i][j] = Math.floor(Math.random()*n) + 1;
        arr[i][cols/2 + j] = arr[i][j];
      }
    }
  }
  else if(rows%2 === 0) {
    for(let j=0; j<cols; j++) {
      for(let i=0; i<rows/2; i++) {
        arr[i][j] = Math.floor(Math.random()*n) + 1;
        arr[rows/2 + i][j] = arr[i][j];
      }
    }
  }
  //随机打乱二维数组
  for(let i=0; i<rows; i++) {
    for(let j=0; j<cols; j++) {
      // 随机取一个坐标
      const x = Math.floor(Math.random()*rows);
      const y = Math.floor(Math.random()*cols);
      // 遍历二维数组，随机交换元素
      const num = arr[i][j];
      arr[i][j] = arr[x][y];
      arr[x][y] = num;
    }
  }
  return arr;
}
