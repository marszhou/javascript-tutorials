let x = 0;
let marText = [];
function textToArray(t){
  let text = [];
  for(let i=0; i<t.length; i++){
    text[i] = t[i]
  }
  marText = [text];
  for(let i=0; i<text.length-1; i++){
    const newText = [];
    for(let i=0; i<text.length-1; i++){
      newText[i] = text[i+1];
    }
    newText[text.length-1] = text[0];
    marText.push(newText);
    text = newText;
  }
}

function marquee(t){
  textToArray(t);
  show();
}

function show(){
  let int = setInterval(() => {
    if(x >= marText[0].length){
      x = 0;
      clearInterval(int);
      setTimeout(show, 1000)
    }
    document.getElementById("target").innerHTML = marText[x].join("")
    x++;
  }, 200)
}