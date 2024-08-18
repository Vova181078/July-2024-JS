
// ARRAY FUNCTION

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б-----------------1-------------------

let square = (a, b) =>   a + b;

console.log(square(20, 20));

//творити функцію яка обчислює та повертає площу кола з радіусом r--------------------2------------------------

const myRadius = (r1, r2)  => Math.PI * r1 * r2;


console.log( myRadius(10,10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r------------------3-----------------------

const objCylindr = (r, h) => 2 * Math.PI * r * h;

console.log(objCylindr(15,30));

//-створити функцію яка приймає масив та виводить кожен його елемент---------------------4------------------------

const foobar = (array) => {
    for (let elem of array) {
        console.log(elem);
    }
}
        foobar([1,5,85,30]);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

const foob = (text) => {
    document.write(`<p>${text}</p>`);

}
foob('iuhnkljuh');

// //-створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий---------------------6---------------------

const uel = () => {
    document.write(`
                    <ul>
                        <li>ert</li>
                        <li>ert</li>
                        <li>ert</li>
                    </ul>
                    `)
}
uel();

//-створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)--------------------7-----------------------

const foobatr = (text, counter) => {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
}

foobatr('ktmkk', 20);
//
// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список------------------8---------------------------

const foobari = (arrayElementPrimitives) => {
    document.write(`<ul>`);
    for (const item of arrayElementPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}
foobari([65,6,515,8452,544,'lkm','true']);
//
// //-створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.--------------------9------------------------

// let foobar = (users) => {
//     for (let user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
//
// foobar([
//     {id: 1, name: 'bob', age: 123},
//     {id: 2, name: 'bod', age: 124},
//     {id: 3, name: 'bib', age: 125},
// ])
//

//
// //-створити функцію яка повертає найменьше число з масиву------------------------10----------------------
//
const arrayMinNumber = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(arrayMinNumber([1, 8, 35, 2, -15]));
//
// //-створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13------------------11------------------------
//
const arrayNumbers = (numbers) => {
    let basket = 0;
    for (const item of numbers) {
        basket = basket + item;
    }
    return basket;
}

console.log(arrayNumbers([5, 8, 10, 4, 18, 6]));
//
// //- створити функцію swap(arr,index1,index2). Функція міняє місцями знячення у відаовідних індексах--------------------12-------------------
//
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

console.log(swap([3, 57, 88],1, 2));
//
// //-Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)-------------------13----------------------------
//
const exchange =(sumUAN, currencyValues,exchangeCurrency) => {
    let choosenCurency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choosenCurency = item;
        }
    }

     let result = sumUAN/choosenCurency.value
    return result;
}

console.log(exchange(10000,[{currency: 'USD',value: 40}, {currency: 'EUR',value: 42}],'EUR'));


//
//
