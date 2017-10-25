// 直接书写二进制，前面加前缀 0b，比如十进制4的二进制数值是 100，在程序中书写就是 0b100

// 十进制 to 二进制
// number.toString(2)

// 字符串低效版
function f0(n) {
  const s = n.toString(2);
  return s.split("").reduce((count, char) => {
    if (char === "1") {
      count += 1;
    }
    return count;
  }, 0);
}

// 求模版
function f1(n) {
  let count = 0;
  do {
    const mod = n % 2;
    const next = Math.floor(n / 2);

    if (mod) {
      count += 1;
    }
    if (next === 0) {
      break;
    } else {
      n = next;
    }
  } while (true);
  return count;
}

// 求模递归版
function f2(n, count = 0) {
  count += n % 2 === 0 ? 0 : 1;
  const next = Math.floor(n / 2);
  if (next === 0) {
    return count;
  }
  return f2(next, count);
}

// 按位运算版，右移版
// 不适用于负数，如果i为负值会进入死循环
function f3(n) {
  let count = 0;
  while (n) {
    if (n & 1) {
      count += 1;
    }
    i = n >> 1;
  }
  return count;
}

// 按位运算，左移版，适用于负数，负数返回补码1个数
function f4(n) {
  let count = 0;
  let flag = 1;
  while (flag) {
    if (flag & n) {
      count += 1;
    }
    flag = flag << 1;
  }
  return count;
}

// 清除低位法，适用于负数，负数返回补码1个数
function f5(n) {
  let c;
  for (c = 0; n; ++c) {
    n &= n - 1; // 清除最低位的1
  }
  return c;
}

