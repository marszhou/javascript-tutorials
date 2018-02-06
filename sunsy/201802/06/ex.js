Array.prototype.shuffle = function () {
  return this.sort((a, b) => Math.random() > 0.5 ? 1 : -1)
}