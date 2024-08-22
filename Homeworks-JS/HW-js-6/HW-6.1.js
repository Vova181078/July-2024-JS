// 1 Знайти та вивести довижину настипних стрінгових значень
//   'hello world', 'lorem ipsum', 'javascript is cool'
let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(arr.length);



// 2  Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

let arr1 = 'hello world'
const s = arr1.toUpperCase();
console.log(s);
let arr2 = 'lorem ipsum'
const s2 = arr2.toUpperCase();
console.log(s2);
let arr3 = 'javascript is cool'
const s3 = arr3.toUpperCase();
console.log(s3);


// 3  Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let arr4 = 'HELLO WORLD'
const s4 = arr4.toLowerCase();
console.log(s4);
let arr5 = 'LOREM IPSUM'
const s5 = arr5.toLowerCase();
console.log(s5);
let arr6 = 'JAVASCRIPT IS COOL'
const s6 = arr6.toLowerCase();
console.log(s6);



// 4 Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string  '
const b = str.trim();
console.log(b.length);
console.log(str);
console.log(str.length)




// 5  Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(str) {
     if (str) {
          const split = str.split('');
     return split;
     }
     return [''];
}

console.log(stringToarray('hello', 'hkuhksd, juisukzh'));



// 6  є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0];

const strings = numbers.map(number => {
     return number + '';
});

console.log(strings);

// 7  є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.




// 8  створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(arrayNums,direction) {
     if (direction === 'accending') {
          let sort = arrayNums.sort((a, b) => a - b);
          arrayNums.sort((a, b) => a - b);
          return sort;
          }
          if (direction === 'descending') {
               arrayNums.sort((a, b) => b - a);
               return sort.reverse();
     }
}



// 9   є масив

const coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
];
const sort =  coursesAndDurationArray
      .sort((a, b) => b. monthDuration - a. monthDuration)

      .filter(value => value.monthDuration > 5)

      .map((value, index) => {
     value.id = index + 1;
     return value;
});
console.log(sort);

//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// -----------------------------------------------------------------------------------------------------------


// 10   описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = ['spade', 'diamond', 'heart', 'clubs']
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king']

const cards =[];
for (const suit of suits) {
     for (const value of  values) {
          cards.push({cardSuit : suit,value:value});
     }
}
console.log(cards);

//  - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit ==='spade'));
//  - всі шістки
console.log(cards.filter(card => card.value === '6'));
//  - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
//  - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !=='7' || card.value !=='8' || card.value !=='9')));



// 11 Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт




cards.reduce((accum, card) => {
     switch (card.cardSuit) {
          case 'spade':
               accum.spades.push(card);
               break;
          case 'diamond':
               accum.diamonds.push(card);
               break;
          case 'heart':
               accum.heartes.push(card);
               break;
          case 'club':
               accum.clubs.push(card);
               break;
     }

     return accum:
},{
     spades:[],
     diamonds:[],
     hearts:[],
     clubs:[]

});

console.log(reduce);

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
     {
          title: 'JavaScript Complex',
          monthDuration: 5,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
     },
     {
          title: 'Java Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'angular',
               'aws',
               'docker',
               'git',
               'java core',
               'java advanced']
     },
     {
          title: 'Python Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'angular',
               'aws',
               'docker',
               'python core',
               'python advanced']
     },
     {
          title: 'QA Complex',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
     },
     {
          title: 'FullStack',
          monthDuration: 7,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'react',
               'angular',
               'aws',
               'docker',
               'git',
               'node.js',
               'python',
               'java']
     },
     {
          title: 'Frontend',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
     }
];


let courses = [
     {
          title: 'JavaScript Complex',
          monthDuration: 5,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
          logo: '',
          price: 0,
          rating: 5,
          avgResult: 99
     },
     {
          title: 'Java Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'react',
               'angular',
               'aws',
               'docker',
               'git',
               'java core',
               'java advanced'],
          logo: '',
          price: 0,
          rating: 4.998,
          avgResult: 97
     },
     {
          title: 'Python Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'react',
               'angular',
               'aws',
               'docker',
               'git',
               'python core',
               'python advanced'],
          logo: '',
          price: 0,
          rating: 4.812,
          avgResult: 98
     },
     {
          title: 'QA Complex',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
          logo: '',
          price: 0,
          rating: 4.65,
          avgResult: 97
     },
     {
          title: 'FullStack',
          monthDuration: 7,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'react',
               'angular',
               'aws',
               'docker',
               'git',
               'node.js',
               'python',
               'java'],
          logo: '',
          price: 0,
          rating: 4.772,
          avgResult: 100
     },
     {
          title: 'Frontend',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
          logo: '',
          price: 0,
          rating: 4.53,
          avgResult: 90
     }
];

coursesArray.filter(course => {
     course.modules.includes('saas');
});

coursesArray.filter(course => {
     course.modules.includes('decker');
});