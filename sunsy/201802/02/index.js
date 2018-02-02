function longest(str){
  const arrayOfStr = str.split(" ");
  const longest = arrayOfStr.sort((a, b) => b.length - a.length)[0];
  return longest;
}

function capitalWords(str){
  const arrayOfStr = str.toLowerCase().split(" ");
  const capitalWords = arrayOfStr.map(str => 
    str.replace(str.charAt(0), str.charAt(0).toUpperCase())).join(" ");
  return capitalWords;
}

function capitalWords2(str){
  const arrayOfStr = str.toLowerCase().split(" ");
  const capitalWords = arrayOfStr.map(str => 
    str[0].toUpperCase() + str.slice(1)
  ).join(" ");
  return capitalWords;
}

function range(a, b, n){
  const x = a, y = b;
  const step = n ? n : 1;
  let i = 0;
  const outPutArray = [];
  const outPut = () => {
    if(x < y){
      if(x + i < y) {
        outPutArray.push(x + i);
        i += step;
        outPut();
      }
    }
    if(x > y){
      if(x - i > y){
        outPutArray.push(x - i);
        i += step;
        outPut();
      }
    }
  }
  outPut();
  outPutArray.push(y);
  return outPutArray;
}

function add(arr){
  return arr.reduce((sum, currentValue) => sum + currentValue)
}