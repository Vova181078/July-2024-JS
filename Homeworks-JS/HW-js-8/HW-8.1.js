let obj = [
    {
        id: 1,
        name: 'kola',
        age: 25,
        hobby: 'box',
    }
];

console.log(obj);

let s = JSON.stringify(obj);
let p = JSON.parse(s)
console.log(p);




let courseUsers = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let result = courseUsers.filter((courseUser) => courseUsers);
console.log(result);