// ini deklarasi function
function convertCelsiusToFahrenheit(temperature) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;
 
  console.log('Hasil konversi:', temperatureInFahrenheit);
}

// ini memanggil function
const temperatureInCelsius = 90;
convertCelsiusToFahrenheit(temperatureInCelsius);
