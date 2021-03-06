window.onload = function() {
	var distance = 500
	var cars = document.getElementsByName('car')
	var showDiv = document.getElementById('show')
	var stopLine = document.getElementById('stopLine')
	var resultDiv = document.getElementById('result')
	var n = 0
	var times
	var last = 0
	var results = [
		{using:0, isFinished: false, distance: 0, id: 1},
		{using:0, isFinished: false, distance: 0, id: 2},
		{using:0, isFinished: false, distance: 0, id: 3},
		{using:0, isFinished: false, distance: 0, id: 4},
		{using:0, isFinished: false, distance: 0, id: 5}
	]

	document.getElementById('start').addEventListener('click', startRun)
	document.getElementById('stop').addEventListener('click', stopRun)

	function startRun(){
		times = setTimeout(handle,100)
	}

	function handle(){
		if(checkFinish()){
			outputResults()
			return
		}

		var now = Date.now()
		var diff = last ===0 ? 0 : (now - last)
		last = now
		for(i = 0; i < 5; i++){
			var rand = Math.random()
			if((cars[i].offsetWidth + cars[i].offsetLeft) < 500){
				var rand = Math.random()
				moveDiv(i,rand,diff )
			}
		}
		times = setTimeout(startRun,100)
	}

	function moveDiv(car,rand,diff){
		var car = cars[i]
		//var d = [i]
		var r = results[i]
		r.using += diff
		r.distance += rand
		var rect = car.getBoundingClientRect();
		car.style.left = (rect.left + rand*100) + 'px'

		if(r.distance>= distance){
			r.isFinished = true
		}

	}
	function checkFinish(){
		var ret = true
		results.forEach(function(r) {
			ret = ret && r.isFinished
		})
		return ret
	}

	function outputResults(){
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

	function stopRun(){
		clearInterval(times)
	}

}