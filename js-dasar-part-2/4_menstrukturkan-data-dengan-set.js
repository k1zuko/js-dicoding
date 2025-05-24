const set = new Set();
const mySet = new Set([1, 2, 3]);

// simpan nilai di set
const set1 = new Set();
set1.add(1);
set1.add(2);

// akses nilai di set
const set2 = new Set();
set2.add(1);
set2.add(2);
 
for (const number of set2) {
  console.log(number); // Output: 1, 2
}

// atau

const set3 = new Set();
set3.add(1);
set3.add(2);
 
set3.forEach((value) => console.log(value)); // Output: 1, 2

// hapus nilai di set
const set4 = new Set();
set4.add(1);
set4.add(2);
set4.delete(1);
 
console.log(set4); // Set(1) { 2 }