
// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

// for in
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// for of
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}

// while
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}

// while loop tak terhingga
// let i = 0;

// while (i < 5) {
//   console.log(`Angka ke-${i} adalah ${i}.`);
// }

// do-while
let j = 0;

do {
  console.log(`Angka ke-${j} adalah ${j}.`);
  j++;
} while (i < 5);


//// control statement
// break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

const number = 1;

switch (number) {
  case 1:
    console.log('Ini 1');
    break;
  case 2:
    console.log('Ini 2');
    break;
  case 3:
    console.log('Ini 3');
    break;
  default:
    console.log('Ini default');
}

// continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}