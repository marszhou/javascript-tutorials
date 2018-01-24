function getNowText(){
  let nowDate = new Date();
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  let week = undefined;
  let ampm = undefined;
  switch(nowDate.getDay()){
    case 1 : 
      week = "星期一"
      break;
    case 2 :
      week = "星期二"
      break;
    case 3 :
      week = "星期三"
      break;
    case 4 :
      week = "星期四"
      break;
    case 5 :
      week = "星期五"
      break;
    case 6 :
      week = "星期六"
      break;
    case 7 :
      week = "星期日"
      break;
  }

  if(hours<12){
    ampm = "am"
  }
  else{
    ampm = "pm"
  }
  
  return("现在是 " + week + " " + hours + ":" + minutes + ":" + seconds + " " + ampm);
}