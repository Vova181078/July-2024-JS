// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerHTML = '<p></p>';
div.classList.add('wrap');
div.innerHTML = '<p></p>';
div.classList.add('collapse');
div.innerHTML = '<p></p>';
div.classList.add('alpha');
div.innerHTML = '<p></p>';
div.classList.add('beta');

document.body.appendChild(div);

let cloneNode = div.cloneNode(true);

document.body.append(div, cloneNode);


// #OPLI89c9G
// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr =  ['Main','Products','About us','Contacts'];

let arrayLi = document.createElement('ul');
arrayLi.classList.add('arrayList');

for (const item of arr) {
       document.createElement('li');
       li.innerText = item;
       arrayLi.appendChild(li);
}
document.body.appendChild(arrayLi);


// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (const blockItem  of coursesArray) {
    let createBlock = document.createElement('div');
    div.innerText = `${blockItem.title} ${blockItem.monthDuration}`
    document.body.appendChild(div);
}

// #Kx1xgoKy8
// - Є масив
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let DurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of DurationArray) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerText = course.title;
    const p = document.createElement('p');
    p.innerText = course.monthDuration;

    div.appendChild(h3);
    div.appendChild(p);


        document.body.appendChild(div);

        
}