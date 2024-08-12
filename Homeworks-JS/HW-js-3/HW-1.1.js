
// ------------------1-------------------------------

for (let i = 1; i <= 10; i++) {
    document.write(
        '<div>Привіт</div>');

}

// --------------------2-------------------------

for (let i = 1; i <= 10; i++) {
    document.write(
        '<div>Привіт + 10 + </div>');

}

// -------------------3-----------------------

let a = 1;
while (a < 20) {
    document.write(
     '<h1>Okten</h1>')
       a++;

}

//------------------------4------------------------

let content = [
    {
        name: 'Vasya',
        surname: 'Petrik',
        age: 20,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Vova',
        surname: 'Petrjrik',
        age: 30,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Jura',
        surname: 'Tetrik',
        age: 40,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Maks',
        surname: 'Petrit',
        age: 25,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Ola',
        surname: 'Petrak',
        age: 22,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Ira',
        surname: 'Petrik',
        age: 88,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Gosha',
        surname: 'Pedrik',
        age: 262,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Edik',
        surname: 'Patrik',
        age: 205,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Mega',
        surname: 'Detrik',
        age: 120,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },
    {
        name: 'Rubik',
        surname: 'Pygih',
        age: 70,
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus, aliquam amet aspernatur assumenda consectetur corporis cumque dicta doloribus ducimus earum enim fugit ipsum laboriosam laborum libero magni molestias, nemo nobis nulla officia officiis praesentium quod quos ratione recusandae, rerum sed sint soluta ut vel veniam vero voluptates? Eum, perspiciatis!',

    },

]

let b = 0;
while (b < content.length) {
    document.write(
        `<h1>${content[b].age}</h1>`)
    b++;

}
