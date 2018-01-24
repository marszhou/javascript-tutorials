function fahrenheitToCelsius(celsius){
  const fahrenheit = 1.8*celsius + 32;
  return Math.round(fahrenheit*100)/100;
}

function celsiusToFahrenheit(fahrenheit){
  const celsius = (fahrenheit - 32)/1.8;
  return Math.round(celsius*100)/100;
}