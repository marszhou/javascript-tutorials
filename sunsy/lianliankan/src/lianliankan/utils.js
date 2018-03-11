export function genMatrix(cols=10, rows=10, n=9) {
  if (cols * rows % 2 !== 0) throw Error('cols*rows结果必须为偶数')
  let a = [...Array(cols * rows / 2)].map(() => Math.ceil(Math.random() * n))
  a = [...a, ...a].sort(() => Math.random() - 0.5)
  return [...Array(rows)].map((value, y) => a.slice(y * cols, (y + 1) * cols))
}