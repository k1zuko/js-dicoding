// if statement
const gajian = true;

console.log('Berjalan-jalan di mal');
if (gajian) {
  console.log('Makan di restoran mal');
}
console.log('Pulang ke rumah');


const score = 80;

if (score >= 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}


const score1 = 85;

if (score1 > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score1 > 80) {
  console.log('Selamat, Anda lulus ujian!');
} else {
  console.log('Maaf, Anda belum lulus ujian.');
}


const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);


// switch case
const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('I am a banana.');
    break;
  case 'apple':
    console.log('I am an apple.');
    break;
  case 'orange':
    console.log('I am an orange.');
    break;
  case 'strawberry':
    console.log('I am a strawberry.');
    break;
  default:
    console.log('I am not a fruit. I am a programmer.');
}


const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}


const number = 2;

switch (number) {
case 1:
  console.log('Ini 1');
  break;
case 2:
  console.log('Ini 2');
case 3:
  console.log('Ini 3');
  break;
default:
  console.log('Ini default');
}