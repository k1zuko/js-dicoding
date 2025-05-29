// Dengan ES6 Class
class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
    
    charging() {
        console.log(`Charging ${this.model}.`);
    }
}

class iOS extends SmartPhones {
    airDrop() {
        console.log("iOS have a behavior AirDrop.");
    }
}

class Android extends SmartPhones {
    splitScreen() {
        console.log("Android have a Split Screen.");
    }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "Galaxy S21");

console.log(ios.color, ios.brand, ios.model);
ios.charging();
ios.airDrop();
console.log(ios instanceof SmartPhones);

console.log(android.color, android.brand, android.model);
android.charging();
android.splitScreen();
console.log(android instanceof SmartPhones);


// Tanpa ES6 Class
function JustSmartPhones(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
}

JustSmartPhones.prototype.Justcharging = function() {
    console.log(`Charging ${this.model}.`);
}

function JustiOs(color, brand, model) {
    JustSmartPhones.call(this, color, brand, model)
}

JustiOs.prototype = Object.create(JustSmartPhones.prototype);
JustiOs.prototype.constructor = JustiOs;

JustiOs.prototype.JustairDrop = function() {
    console.log("iOS have a behavior AirDrop.");
}

function JustAndroid(color, brand, model) {
    JustSmartPhones.call(this, color, brand, model)
}

JustAndroid.prototype = Object.create(JustSmartPhones.prototype);
JustAndroid.prototype.constructor = JustAndroid;

JustAndroid.prototype.JustsplitScreen = function() {
    console.log("Android have a Split Screen.");
}

const justios = new JustiOs('black', 'A', '12 Pro Max');
const justandroid = new JustAndroid('white', 'B', 'Galaxy S21');

console.log(justios.color, justios.brand, justios.model);
justios.Justcharging();
justios.JustairDrop();
console.log(justios instanceof JustSmartPhones);

console.log(justandroid.color, justandroid.brand, justandroid.model);
justandroid.Justcharging();
justandroid.JustsplitScreen();
console.log(justandroid instanceof JustSmartPhones);