class CoffeeMachine {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.temperature = 90;
    }

    makeCoffee() {
        console.log("Membuat kopi dengan suhu", this.temperature);
    }
}

const coffee = new CoffeeMachine(100);
coffee.temperature = 60;

coffee.makeCoffee();


class CoffeeMachineZero {
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this._temperature = 87;
    }

    set temperature(temperature) {
        console.log("You are not allowed to change the temperature!");
    }

    get temperature() {
        return this._temperature;
    }
}

const coffee0 = new CoffeeMachineZero(37);
console.log("Sebelum diubah: ", coffee0.temperature);
coffee0.temperature = 100;
console.log("Sesudah diubah: ", coffee0.temperature);


class pureCoffee {
    #temperature = 75;

    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = this.#defaultTemperature();
    }

    set temperature(temperature) {
        console.log("You are not allowed to change the temperature!");
    }

    get temperature() {
        return this.#temperature;
    }

    #defaultTemperature() {
        return 75;
    }
}

const sweetCoffee = new pureCoffee(70);
console.log("Sebelum diubah: ", sweetCoffee.temperature);
sweetCoffee.temperature = 789;
console.log("Setelah diubah: ", sweetCoffee.temperature);