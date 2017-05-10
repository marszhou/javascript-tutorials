
function calculateResult(param1, param2) {


  var result = param1 +  “” + param2;

  return result;


}


var e = new Function( "a", "return a * 2;" );

e(2); // 4

var f = function(a) { return a * 2; };

f(3); // 6

function helloWorld() {
  console.warn('hello world!');
}

function add(a, b) {
  return a + b;
}



var a = function() {
  console.log(2);
}

function a() {
  console.log(1);
}


function c() {
  for(i in arguments) {
    console.log(arguments[i]);
  }
}


function joinStrings(separator) {
  var strings = Array.prototype
                     .slice
                     .call(arguments, 1);
  return strings.join(separator);
}

joinStrings('|', 'cat', 'dog', 'egg');
// Output: cat|dog|egg



function joinStrings(separator) {
  arguments.slice = Array.prototype.slice;
  var strings = arguments.slice(1);
  return strings.join(separator);
}


fun.apply(thisArg, [argsArray])
fun.call(thisArg[, arg1[, arg2[, ...]]])

function howOld(age) {
  console.log(this.name + ' is ' + age + ' years old.');
}

var a = {
  name: 'a',
  howOld: howOld
}

var b = {
  name: 'b',
  howOld: howOld
}

a.howOld(16); // a is 16 years old.
b.howOld(17); // b is 17 years old.
howOld();     // is undefined years old.

window.name = 'He';
howOld(1);            // He is 1 years old.
howOld.call(a, [18]); // a is 18 years old.
howOld.apply(a, 19);  // a is 19 years old.
howOld = howOld.bind(b); // hard bind
howOld(20);           // b is 20 years old.
a.howOld(21);         // a is 21 years old.


var b = false;
if (b) {
  function sayHi() {
    return 'Hi';
  }
} else {
  function sayHi() {
    return 'Hello';
  }
}

var b = false;
var sayHi;
if (b) {
  sayHi = function() {
    return 'Hi';
  };
} else {
  sayHi = function() {
    return 'Hello';
  };
}

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

factorial(4); // 4 * 3 * 2 * 1
              // 24

var factorial2 = factorial;
factorial = null;
factorial2(5);
// Uncaught TypeError: factorial is not a function(…)

function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}


var i = 0;
var MAX = 10;
var timer = setInterval(function(){
  console.log(new Date);
  ++i;
  if (i >= MAX) {
    clearInterval(timer);
  }
}, 1000);


fun.bind(thisArg[, arg1[, arg2[, ...]]])


function cal(a, b, func) {
  return func(a, b);
}

function plus(a, b) {
  return a + b;
}

function multiply(a, b){
  return a * b;
}

cal(3, 4, plus); // 7
cal(5, 6, multiply); // 30


(function($){
  $('.some-class')....

})(jQuery);
/**
function somefunc($) {
  ....
}

somefunc(jQuery);
*/
[1,2,3].map(x => x*x); // [1, 4, 9]


function autoIncrement() {
  var i = 0;
  return function() {
    return ++i;
  }
}

var incr = autoIncrement();
incr(); // 1
incr(); // 2
incr(); // 3





