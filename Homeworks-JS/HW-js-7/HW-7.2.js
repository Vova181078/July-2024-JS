//#nkMXISv                        4
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//


function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

let client = new Client(1,
    'vova',
    'vovkin',
    'vovkin@gmail',
    '067585858',
    [{title: 'tv', price: 10000}, {title: 'phone', price: 5000}]);

console.log(client);




//
// #8abtVjRv                             5
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//


let clients = [
    new Client(1, 'vova', 'vovkin', 'vovkin@gmail', '067585858', [{title: 'tv', price: 10000}, {title: 'phone', price: 5000}, {title: 'tv', price: 10000}]),
    new Client(1, 'vova', 'vovkin', 'vovkin@gmail', '067585858', [{title: 'tv', price: 10000}, {title: 'phone', price: 5000}]),
    new Client(1, 'vova', 'vovkin', 'vovkin@gmail', '067585858', [{title: 'tv', price: 10000}, {title: 'phone', price: 5000}, {title: 'tv', price: 10000}, {title: 'phone', price: 5000}]),
    new Client(1, 'vova', 'vovkin', 'vovkin@gmail', '067585858', [{title: 'tv', price: 10000}, {title: 'phone', price: 5000}]),
    new Client(1, 'vova', 'vovkin', 'vovkin@gmail', '067585858', [{title: 'tv', price: 10000}, {title: 'phone', price: 5000},{title: 'phone', price: 5000}]),
    ];

let sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);


//
// #vV9a6584I5                           6
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineVolume =engineVolume

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
       for (const key in this) {
           console.log(key, this[key]);
       }
    };
    this.increaseMaxSpeed = function (newSpeed) {
         this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newYear) {
          this.year = newYear;
    };
    this.addDriver = function (driverObject) {
        this.driver = driverObject;
    };
}

const car = new Car('kjhg', 'jhj', 1990, '90', 3);
console.log(car);
//
// #5kla3yMpgp                        7
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// class Car {
//
//
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//
//         drive() {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//           };
//
//         info() {
//             for (const key in this) {
//                 console.log(key, this[key]);
//             }
//         };
//
//         increaseMaxSpeed(newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//         };
//
//         changeYear = function (newYear) {
//             this.year = newYear;
//         };
//
//         addDriver = function (driverObject) {
//             this.driver = driverObject;
//         };
//     }
// }
//
// const car = new Car('kjhg', 'jhj', 1990, '190', 3);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(100);
// car.changeYear(1000);
// car.addDriver({});
// console.log(car);


//
//
// #zg6Fifnqig                          8
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

class Popeluha {
     constructor(name, age, footSize) {
         this.name = name;
         this.age = age;
         this.footSize = footSize;
     }
}

class Prince {
    constructor(name, age, shoes) {
        this.name = name;
        this.age = age;
        this.shoes = shoes;
    }

}
const popeluhas = [
    new Popeluha('hjjk1',45,8),
    new Popeluha('hjjk2',45,9),
    new Popeluha('hjjk3',45,10),
    new Popeluha('hjjk4',45,11),
    new Popeluha('hjjk5',45,12),
    new Popeluha('hjjk6',45,14),
];

const prince = new Prince('Gojl', 1552, 28);

for (const popeluha of popeluhas) {
    if (popeluha.footSize === prince.shoes) {
        prince.wife = popeluha;
    }
}
//
//
// #gsKLAsNWM                            9
// *Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
   
};

[15,25,18].myForEach((x) => console.log(x));