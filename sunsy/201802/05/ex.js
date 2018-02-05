function countChar(str, char){
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  let i = 0;
  [...Array(lowerStr.length)].forEach((_, index) => {
    if(lowerStr[index] === lowerChar) i++;
  })
  return i;
}

function reverseArray(arr){
  const newArr = [];
  arr.forEach((_, index) => {
    newArr[index] = arr[arr.length - 1 - index]
  })
  return newArr;
}

function reverseArrayInPlace(arr){
  const temporaryArr = Array.from(arr);
  temporaryArr.forEach((_, index) => {
    arr[index] = temporaryArr[temporaryArr.length - 1 - index]
  })
}