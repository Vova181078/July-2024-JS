// #XjJuucOMR0                1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

let user1 = new User(1, 'Kola', 'Kolkiv', 'Kola@gmail.com', 38058363636);


function User(id, name, surname , email, phone) {
     this.id = id
     this.name = name
     this.surname = surname
     this.email = email
     this.phone = phone
}

console.log(user1);


// #2ikXsE2WiKZ                   2
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//


let users = [
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983'),
    new User(8, 'kokos', 'asdqwe', '+964657983'),
    new User(9, 'kokos', 'asdqwe', '+964657983'),
    new User(10, 'kokos', 'asdqwe', '+964657983'),
    new User(321, 'asdasd', 'qweqwe', '+.65464654654')
];

let userResultArray = users.map((user, index) =>{
    let s = JSON.stringify(user);
    let obj = JSON.parse(s);
    obj.id = index + 1
    return obj;
})

console.log(userResultArray);


function filterFunction(user) {
    return user.id % 2 === 0;
}
let filterUsers = users.filter(filterFunction);

console.log(filterUsers);


// #pOeHKct                        3
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let users2 = [
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(11, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(9, 'kokos', 'asdqwe', '+964657983'),
    new User(10, 'kokos', 'asdqwe', '+964657983'),
    new User(8, 'asdasd', 'qweqwe', '+.65464654654')
];

users2.sort((user1, user2) => {
    console.log(user1.id, user2.id);
})

