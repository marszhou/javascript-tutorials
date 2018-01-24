function findTriangleAreaOfSide(a, b, c){
  let perimeter = a + b + c;
  let areaSquare = perimeter*(perimeter - a)*(perimeter - b)*(perimeter - c);
  let area =  Math.sqrt(areaSquare);
  return Math.round(area*100)/100;
}