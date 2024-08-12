
//-------------------5--------------------------



let listItems = [
        'html',
        'css',
        'javascript',
        'mysql',
        'mongodb',
        'react',
        'angular',
        'node.js',
];


for (let x = 0; x < listItems.length; x++) {
    let list = listItems[x]
     document.write(
         `<ul>
               <li>${list}</li>
          </ul>`
     );
}

// --------------------------6------------------------

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-milk-splash-with-droplets-png-image_11595816.png'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-delicious-fruit-juices-png-image_11712372.png'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-brown-tea-cup-png-image_10163180.png'
    },
];


for (let product of products) {
        document.write(
            `<div class="items">
                 <h3>${product.title} ${product.price} ${product.image}</h3>
                 <img src="${product.image}" alt="${product.title} ${product.price}">
           
              </div>`
        );
    
}

//------------------------------7------------------------------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


arrTrue = [];
arrFalse = [];

for (let j = 0; j > users.length; j++) {
       if (users.status) {
           arrTrue[arrTrue.length] = users;
       }else {
         arrFalse[arrFalse] = users
    }
}


for (let s = 0; s < users.length; s++)  {
   if (users[s].age) {
       console.log(users[s].age)
       console.log(users[s].status)
   }
}




