//// pakai object constructor
const users = new Array();
const numbers = new Array(5);

//// pakai sintaks Array.from
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']

//// pakai array literal
const array = [];
const fruits = ['apple', 'banana', 'cherry'];


// akses element array
const myArray = [42, 55, 30];
console.log(myArray[1]); // Output: 55


// manipulasi nilai array
//// pakai indexing
const myArray1 = [1, 2, 3, 4, 5];
myArray1[1] = 10;
console.log(myArray1); // Output: [1, 10, 3, 4, 5]

//// pakai push
const myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
console.log(myArray2); // Output: [ 1, 2, 3, 4, 5, 6 ]


// hapus element dan data array
//// pakai delete
const myArray3 = ['Android', 'Data Science', 'Web'];
delete myArray3[1];
 
console.log(myArray3); // Output: ['Android', <1 empty item>, 'Web']

//// pakai splice
const myArray4 = ['Android', 'Data Science', 'Web'];
myArray4.splice(1, 1);
console.log(myArray4); // Output: ['Android', 'Web']

//// pakai shift dan pop
const myArray5 = ['Android', 'Data Science', 'Web'];
myArray5.shift();
console.log(myArray5); // Output: ['Data Science', 'Web']
 
const myArray6 = ['Android', 'Data Science', 'Web'];
myArray6.pop();
console.log(myArray6); // Output: ["Android", "Data Science"]