// -----------------1---------------


function scuar(a, b) {
    let s = a + b;
    return s;
}

scuar(20,40);
let x = scuar(20,40);
console.log(x);


// -----------------2-------------------

function myRadius(radius) {
    return Math.PI * radius * radius;
}

console.log( myRadius(10,10));

//------------------3----------------------

function objCylindr(radius,height) {
      return 2 * Math.PI * radius * height;
}

console.log(objCylindr(15,30));

//-------------------4---------------------

function foobar(array) {
     for (let elem of array) {
         console.log(elem);
     }
}

//-------------------5-----------------------

function foob(text) {
    let p = `<p>${text}</p>`
    document.write(p);
}
foob('okten');

//----------------------6---------------------

function uel() {
    document.write(`
                    <ul>
                        <li>ert</li>
                        <li>ert</li>
                        <li>ert</li>
                    </ul>
                    `)
}
uel();

//---------------------7-----------------------

function foobatr(text, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
       document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
}

foobatr('ktmkk', 20);

//-------------------8---------------------------

function foobari(arrayElementPrimitives) {
document.write(`<ul>`);
    for (const item of arrayElementPrimitives) {
          document.write(`<li>${item}</li>`);
        }
    document.write(`</ul>`);

}
foobari([65,6,515,8452,544,'lkm','true']);

//---------------------9------------------------

function foobar(users) {
    for (const item of user) {
        document.write(`<div>${users.id} ${users.name} ${users.age}</div>`);
    }
}  foobar([]);

//-------------------------10----------------------

function arrayMinNumber(numbers) {
     let min = numbers[0];
    for (const number of numbers) {
         if (number < min) {
             min = number
         }
    }
    return min;
}

console.log(arrayMinNumber([]));

//-------------------11------------------------

function arrayNumbers(numbers) {
       let basket = 0;
    for (const item of numbers) {
         basket = basket + item;
    }
    return basket;
}

arrayNumbers([]);

//---------------------12-------------------

function swap(arr, index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;

      return arr;
}

console.log(swap([33, 57, 88],9, 3));

//--------------------13----------------------------

function exchange(sumUAN, currencyValues,exchangeCurrency) {
    let choosenCurency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choosenCurency = item;
        }
    }
}