// for ... in / for ... of
// hash 哈希/散列

mother = '母亲'
studentA = {
  married: false,
  gender: 'male',
  name: 'Bob',
  age: 15,
  grade: 8,
  父亲: {           // 正常的文字都可以直接写这里！
    name: 'Adam'
  },
  [mother]: {      // key可以用变量代替
    name: 'Eva'
  },
  "01" : '...'     // 特殊的值做key要用引号包起来，去掉01的引号会报错
}

// for (var i in studentA) {
//   console.log(i, '=', studentA[i])
// }

// for (var k of studentA) {
//   console.log(k)
// }

// for

// a = [1,2,3,4]
// for(var i=0; i<a.length; ++i) {
//   console.log(a[i])
// }

// for(var i=1; i<=100; i+=1) {
//   var f = i % 3
//   if (f !== 0) {
//     while(i%2==0) {
//       console.log('i不能被3整除，但能被2整除', i)
//       break
//     }
//     continue
//   }
//   console.log(i)
// }

// var sum = 0
// for (
//   var i=1;    // (1)
//   i<=10;      // (2)(5)(8)
//   ++i         // (4)(7)(10)...
// ) {           // (3)(6)(9)
//   sum += i
// }
// console.log(sum)

// i = 0
// sum = 0
// while(i<=10) {
//   sum = sum + i
//   i = i + 1
// }
// console.log(sum)
// do ... while
// var i = 123
// var k = 0
// var b = null
// var f = null
// do {
//   b = parseInt(Math.random() * 100000)
//   f = b % i
//   k = k + 1
// } while(f !== 0)
// console.log('b = ', b, ', 循环了', k, '次')

// while

// var i = 123
// var k = 0
// var b = null
// var f = null
// while(f !== 0) {
//   b = parseInt(Math.random() * 100000)
//   f = b % i
//   k = k + 1
// }

// console.log('b = ', b, ', 循环了', k, '次')

// var i = 123
// var k = 0
// var b = null

// while(true) {
//   b = parseInt(Math.random() * 100000)
//   var f = b % i
//   if (f === 0) {
//     break
//   }
//   k = k + 1
// }

// console.log('b = ', b, ', 循环了', k, '次')