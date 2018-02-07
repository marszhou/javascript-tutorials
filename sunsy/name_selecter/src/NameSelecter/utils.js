export function arrayShuffle (arr) {
  return arr.sort((a, b) => Math.random() > 0.5 ? 1 : -1)
}

