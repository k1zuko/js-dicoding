// constructor function
function Person0 (name, age) {
    this.name = name;
    this.age = age;
}

Person0.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
}

const person0 = new Person0("Fulan", 40);

console.log(typeof(Person0));
console.log(person0.name);
console.log(person0.age);
person0.eat();


// ES6 Class
class PersonZero {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is cooking.`);
    }
}

const personZero = new PersonZero("Fulanah", 36);

console.log(typeof(PersonZero));
console.log(personZero.name);
console.log(personZero.age);
personZero.eat();
