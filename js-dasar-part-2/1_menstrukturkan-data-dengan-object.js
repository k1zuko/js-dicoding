// membuat object
const user = {};
const products = { name: 'Sepatu', price: 230000 };


// akses properti di object
//// pakai dot .
const user1 = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
 
console.log(user1.name); // Output: Dicoding

//// pakai kurung siku/square bracket []
const user2 = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
 
console.log(user2['last name']); // Output: Indonesia

//// pakai object destructuring
const user3 = {
  'name': 'Dicoding',
  'lastName': 'Indonesia',
  age: 9
};
 
const { name, lastName } = user3;
console.log(name, lastName); // Output: Dicoding Indonesia


// mengubah nilai di object
const account = {
  balance: 1000,
  debt: 10,
};
 
account.balance = 2000;
console.log(account.balance); // Output: 2000


// menghapus properti di object
const user4 = {
  'name': 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};
 
delete user4.age;
console.log(user4); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }