var distance = 500
var cars = document.getElementsByName('car')
var showDiv = document.getElementById('show')
var stopLine =document.getElementById('stopLine')
var n = 0
var times 
var results = [
	{using:0, isFinished: false},
	{using:0, isFinished: false},
	{using:0, isFinished: false},
	{using:0, isFinished: false},
	{using:0, isFinished: false}
]

function startRun(){
	times = setTimeout(handle,1000)
}

function handle(){
	for(i = 0; i < 5; i++){
		var rand = Math.random()
		if((cars[i].offsetWidth + cars[i].offsetLeft) < 500){
			var rand = Math.random()
			moveDiv(cars[i],rand)
		}
	}
	times = setTimeout(startRun,1000)
}

function moveDiv(car,rand){  
	var rect = car.getBoundingClientRect();
	car.style.left = (rect.left + rand*100) + 'px'

}
function checkFinish(car){

}

function stopRun(){
	clearInterval(times)
}