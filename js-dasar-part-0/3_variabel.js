/* const id = 123;
let username = 'Dicoding';
console.log(id); // output: 123
console.log(username); //output: Dicoding */


/* let username = 'Dicoding';
console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding
username = 'dicodingacademy';
console.log('Setelah diubah:', username); // output: Setelah diubah: dicodingacademy */


/* const username = 'Dicoding';
console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding
username = 'dicodingacademy'; // TypeError: Assignment to constant variable. 
console.log('Setelah diubah:', username); // Tidak akan pernah dieksekusi */


/* ------------- Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama -----------
// Company data
const name = 'Dicoding';
const legal = 'LLC';
 
// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';
*/


function printCompanyInfo() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';

    console.log('Company name:', name);
    console.log('Legal type:', legal);
}
 
function printEmployeeInfo() {
    const name = 'John'; // <- nama variabel sama
    const division = 'IT';

    console.log('Employee name:', name);
    console.log('Division:', division);
}

printCompanyInfo();
printEmployeeInfo();


/* ---------------- Nama Variabel Hanya Terdiri dari Karakter Tertentu -------------
// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang salah
const first-name = 'Fulan'; // tidak boleh mengandung karakter -
const last name = 'Lestari'; // tidak boleh mengandung spasi
const @message = 'Hello, World!'; // tidak boleh mengandung karakter @
 
// ..dan lain-lain
*/


/* --------------- Nama Variabel Tidak Boleh Diawali dengan Angka -----------------
// nama variabel yang benar
const firstName = 'Fulan';
const _secondName = 'Fulana';
 
// nama variabel yang salah karena diawali dengan angka
const 1stName = 'Fulan';
const 2ndName = 'Fulana';
*/