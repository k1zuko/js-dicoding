// Eksplisit
// --- Ubah ke string ---
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

// --- Ubah ke number ---
const strNumber1 = '123';
const strFloat = '3.14';
const boolean1 = true;

const numFromString = Number(strNumber1);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean1);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const cm1 = '20.55cm';
const px1 = '64.23px';

const floatFromCM = parseFloat(cm1);
const floatFromPX = parseFloat(px1);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23


// --- Ubah ke boolean ---
const number1 = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(number1);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
/* !NOTE
nilai true = truthy
nilai false = falsy

daftar nilai falsy:
    false
    0
    -0
    0n
    ''
    null
    undefined
    NaN
*/


// IMPLISIT
const age = 20;
const message = 'Umurku: ' + age;
console.log(message); // output: Umurku: 20

const strNumber2 = '123';
const result = strNumber2 * 2;
console.log(result); // output: 246

const bool = true;
const result1 = 1 + bool;
console.log(result1); // output: 2