///
// 测试Promise的运行时间，.then的调用返回是异步
console.error("start",Date.now());
new Promise(resolve => resolve()).then(() => console.error("then", Date.now()));
let i = 0;
while(i<1000) {
  console.log(i)

  Math.random();
  i++;
}
console.error("end",Date.now());
i=0;
while(i<1000) {
  console.log(i)
  Math.random();
  i++;
}
console.error("end2",Date.now());
///

///
// promise 的一般使用
const func = (success, fail) => {
  setTimeout(function() {
    const a = Math.random();
    if (a > 0.5) {
      success(a);
    } else {
      fail(a);
    }
    success(a);
  }, Math.random() * 1000 + 2000);
};
const p = new Promise(func);
p
  .then(r => {
    console.log('1st then')
    const ret = r * 1000;
    if (ret < 900) {
      throw {v:'value is lower than 900 is not availible:' +ret, errorNo:1}
    }
    return ret
  })
  .catch(e => {
    console.log('1st catch', e)
    if (e.errorNo === 1) {
      throw e // 捕获错误，但没有处理，继续抛出，将被下一个catch获得
    }
    return 900
  })
  .then(r1000 => {
    console.log('2nd then')
    return r1000 + 500
  })
  .catch(e => { // 这里catch将捕获上一个catch到这之前的错误
    console.log("catch2", e);
    return "!!!!"
  })
  .then(r => console.log(r))
  ;
///

///
// Promise.all / Promise.race
function makePromise(name, delay) {
  return new Promise((resolve) => {
    console.log(`${name} is running`);
    setTimeout(() => {
      console.log(`${name} finished at ${Date.now()}`);
      resolve(`${name}(delay=${delay}):` + Math.random())
    }, delay);
  })
}
const p1 = makePromise('a',2000)
const p2 = makePromise('p2', 1000)
Promise.all([
  // 注意p2在all 和 race的序列里都出现了，但p2的运行log只出现了一次
  p1, p2, makePromise('c',3000)
]).then(([r1, r2, r3]) => {
  console.log("all: ", {
    r1, r2, r3
  })
})
Promise.race([
  p2, makePromise('x', 2000), makePromise('y', 3000) // 注意这里
]).then(r => console.log('race winner=' + r))
///
