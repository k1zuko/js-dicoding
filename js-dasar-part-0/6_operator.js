/* --- operator dan operand ---
5 + 4           5 dan 4 adalah operand, + adalah operator 
10 < 6          10 dan 6 adalah operand, < adalah operator
typeof "Kz"     "Kz" adalah operand, typeof adalah operator
*/


/* --- unary, binary, ternary ---
let age = 25;
 
// Unary operator
typeof age;
 
// Binary operator
5 + 4;
10 / 2;
age = 30;
 
// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!'; 
*/


// --- assignment operator ---
// Digunakan untuk menginisiasi nilai
const name = 'Dicoding';
let location = 'Bandung';

// Digunakan untuk mengubah nilai
location = 'Jakarta';


/* --- arithmetic operator ---
+   add
-   sub
*   mul
/   div
%   mod
++a atau a++    increment
--a atau a--    decrement
**  square/pangkat/eksponensial

6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 *(10 + 2); // mengembalikan 24
*/


/* --- comparison operator --- 
==      sama dengan
!=      tidak sama dengan
===     identik
!==     tidak identik
>       besar dari
>=      besar dari atau sama dengan
<=      kurang dari atau sama dengan
<       kurang dari
*/
const a = 10;
const b = 12;
console.log(a < b); // output: true
console.log(a > b); // output: false


/* --- logical operator ---
&&  AND
||  OR
!   NOT
*/
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true
 
// NOT
console.log(!true); // false
console.log(!false); // true


// --- string operator ---
const first = 'bekerja';
const second = 'sama';
const merged = first + second;
 
console.log(merged); // Output: bekerjasama