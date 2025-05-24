const convertCelsiusToFahrenheit = function (temperature) {
  return (9 / 5) * temperature + 32;
};


// Dijadikan sebagai argumen dari parameter 'operation'
function calculate(operation, numA, numB) {
  return operation(numA, numB);
}
 
// Dijadikan sebagai return value
function multiplier(x) {
  return function (num) {
    return x * num;
  };
}