// menggunakan parameter dan argumen
function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
 
  console.log('Hasil konversi:', temperatureInFahrenheit);
}