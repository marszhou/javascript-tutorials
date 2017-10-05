// function print(a, b, c) {
//   // console.log({
//   //   a, b, c
//   // })

//   const a = arguments[0], b = arguments[1], c = arguments[2]
//   // console.log('print', arguments)

//   const x = {'a': a, 'b': b, 'c': c}
//   const name = '廖少寒'
//   const y = {a, b, c, name}
//   console.log({x: x, y: y})
// }

// function echo() {
//   console.log('echo', arguments)
// }

// print(1,2,3);


// function sum(a, b, c) {
//   const arr = Array.prototype.slice.apply(arguments)
//   // let sum=0
//   // for(let i=0; i<arr.length;i++){
//   //   sum=sum+arr[i]
//   // }
//   // return sum
//   let sum = 0
//   arr.forEach(function(currentValue, index, array) {
//     // console.log(currentValue, index, array)
//     // if (index < 3) {
//     sum = sum + currentValue
//     // }
//   })
//   return sum
// }

// console.log('result=', sum(1, 2, 3, 4, 5, 6,7, 1999))
// sum(100, 200)

// function join(s) {
//   // console.log(arguments)
//   const arr = Array.prototype.slice.apply(arguments)
//   // console.log(arr)
//   return arr.slice(1).join(s)
// }

// console.log(join('@%', 'cat', 'dog', 'bird', 'egg'))

// const x = ['a', 'b', 'c']
// console.log(x.join('***'))


window.onload = function() {
  // const e = arguments[0]
  // console.log(e)
// console.log(document.getElementById('okBtn'))
  const  btn = document.getElementById('okBtn')
  const callback = function(s, event) {
    console.log(s, event)
  }
  const newCallback = callback.bind(null, 'o...')
  btn.onclick = newCallback

  btn.addEventListener('click', function() {
    console.log(2)
  })

  btn.addEventListener('click', function() {
    console.log(3)
  })

  document.getElementById('okBtn2').onclick = function() {
     btn.onclick = function() {
      console.log(4)
    }
  }

  function clickIndexButton(x, e) {
    console.log(this)
    console.log(x, e)
  }

  document.getElementById('content').innerHTML = [...Array(100)].map(function(v, index) {
    return '<button>' + index + '</button>'
  }).join('')

  document.getElementById('content').querySelectorAll('button').forEach(function(btnDom, index) {
    btnDom.addEventListener('click', clickIndexButton.bind(1, index))
  })
}


// function x(a, b) {
//   console.log(a, b)
// }

// function myBind(func) {
//   const arr = Array.prototype.slice.apply(arguments).slice(1)
//   // arr = [10]
//   return function() {
//     console.log(arguments)
//     return func(arr[0], arguments[0])
//   }
// }

// const newX = myBind(x, 10)
// newX(11)

// function 团圆饭(爸,妈) {
//   console.log(爸, 妈, arguments)
// }

// const b = 团圆饭.bind(null, 'x', 'y')
// b('z', 'u', 'w')

// let usageLength = 10

const car = {
  price: 5000,
  usageLength: 1,
  getSellValue: function() {
    return this.price * (1 - this.usageLength * 0.05)
  }
}

const 冰箱 = {
  price: 600
}

function printMyPrice() {
  console.log(this.price)
}

// car.print = printMyPrice

// car.print()
(printMyPrice.bind(冰箱))()

// console.log(car.getSellValue())

// const g = car.getSellValue

// console.log(g())


{
  let i = 10
  {
    let i = 100
    console.log(i)
  }
  console.log(i)
}