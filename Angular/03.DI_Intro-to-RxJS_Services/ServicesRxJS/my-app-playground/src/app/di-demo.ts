class Wallet {
    balance = 0;

    constructor(balance: number) {
        this.balance = balance;
    }
}

class Car {
    model: string;
    color: string;

    constructor(model: string, color: string) {
        this.model = model;
        this.color = color;
    }
}

//bad practice:
// class Person {
//     wallet: Wallet;
//     car: Car;
//     constructor(balance: number, model: string, color: string) {
//         this.wallet = new Wallet(balance);
//         this.car = new Car(model, color)
//     }
// }

// const pesho = new Person(1000, 'Opel', 'red');
// const ivan = new Person(2000, 'VW', 'black');

// console.log('peshos actives', pesho.wallet.balance, pesho.car.model, pesho.car.color);
// console.log('ivans actives', ivan.wallet.balance, ivan.car.model, ivan.car.color);


//good practice
class PersonOptimized {
    wallet: Wallet;
    car: Car;

    constructor(wallet: Wallet, car: Car) {
        this.wallet = wallet;
        this.car = car;
    }
}

const mariasWallet = new Wallet(10000);
const mariasCar = new Car('BMW', 'white');
const mariaPerson = new PersonOptimized(mariasWallet, mariasCar);
console.log(mariaPerson);

const bobsWallet = new Wallet(19000);
const bobsCar = new Car('BMW', 'gold');
const bobPerson = new PersonOptimized(bobsWallet, bobsCar);
console.log(bobPerson);