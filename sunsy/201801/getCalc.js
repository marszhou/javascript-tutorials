function getCalc(op){
  switch(op){
    case "add" :
      return (x, y) => { return x + y }
      break;
    case "subtract" :
      return (x, y) => { return x - y }
      break;
    case "multiply" :
      return (x, y) => { return x * y }
      break;
    case "divide" :
      return (x, y) => { return x / y }
      break;
    default :
      alert("请输入正确的运算符: 'add', 'substract', 'multiply', 'divide'.")
  }
}