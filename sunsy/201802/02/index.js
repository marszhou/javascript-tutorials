function longest(str){
  const arrayOfStr = str.split(" ");
  const longest = arrayOfStr.sort((a, b) => b.length - a.length)[0];
  console.log(longest);
}

function capitalWords(str){
  const arrayOfStr = str.toLowerCase().split(" ");
  const capitalWords = arrayOfStr.map(str => 
    str.replace(str.charAt(0), str.charAt(0).toUpperCase())).join(" ");
  console.log(capitalWords);
}

function range(x, y, z){
  return z === -1 ? [...Array(x-y+1)].map(() => x--) : [...Array(y-x+1)].map(() => x++)
}

function add(arr){
  return arr.reduce((sum, currentValue) => sum + currentValue)
}