var distance = 500
var button = document.getElementById('btnStart')
var divs = Array.prototype.slice.call(document.querySelectorAll('.car'))
var resultDiv = document.getElementById('result')
var results = [
  {using:0, distance: 0, id: 1},
  {using:0, distance: 0, id: 2},
  {using:0, distance: 0, id: 3},
  {using:0, distance: 0, id: 4},
  {using:0, distance: 0, id: 5}
]
button.addEventListener('click', handleClick)
function handleClick() {
  run()
}
function run() {
  for (var i = 0; i < results.length; i++) {
    if (results[i].distance>=distance) {
      outputResults()
      return
    }
    else {
      move(i)
    }
  }
  setTimeout(run,1000/24)
}
function move(i){
  var d = divs[i]
  var r = results[i]
  var k=0
  r.using = k*100
  var s = Math.random() * 100
  r.distance += s
  var rect = d.getBoundingClientRect()
  d.style.left = (rect.left + s) + 'px'
  if(results[i].distance<distance){
      k=k+1
  }
}
function outputResults() {
  results.sort(function(a, b) {
    if (a.using < b.using) {
      return -1
    } else if (a.using > b.using) {
      return 1
    }
    return 0
  })
  resultDiv.innerHTML = results.map(function(r, index) {
    return `第${index+1}名是(${r.id})用时=${r.using}`
  }).join('<br/>')
}
