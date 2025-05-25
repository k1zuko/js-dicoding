export default function myFunction0() {
  console.log('Ini adalah function export default.');
}

export function myFunction1() {
  console.log('Ini adalah contoh named import.');
}

const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };