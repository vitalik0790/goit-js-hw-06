// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

// const array = [
//     {
//         name: 'number 1',
//         value: 9
//     },
//     {
//         name: 'number 2',
//         value: 16
//     },
//     {
//         name: 'number 3',
//         value: 4
//     },
//     {
//         name: 'number 4',
//         value: 25
//     }
// ]

// const result = array.map(({ value }) => Math.sqrt(value));
// console.log(result);
// =======================================
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// const string = array.map(arr => {
//     return { ...arr, name: arr.name + '!' }
// })
// console.log(string);

// =======================================
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// const stringArr = [
//     'Mango',
//     'Tango',
//     'Kongo',
//     'Pongo'
// ]

// const newArr = stringArr.map((arr) => {
//     return [...arr].reverse().join('');
// })
// console.log(newArr);
// =======================================
// Дан следующий массив:
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
// ];

// const result = arr.map((item) => {
//     return [...item].map((item) => Number(item));
// });
// console.log(result);
// =======================================
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
// const numberArray = ["123", "456", "789", "13", "45"];
// const result = numberArray.map((item, index) => Number(item) * (index + 1));
// console.log(result);
// =======================================
// Дан массив с числами. Оставьте в нем только положительные числа.
// =======================================
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
// =======================================
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const arrStrings = [
//     'Lorema',
//     'Linda',
//     'Toni',
//     'Number',
// ]

// const string = arrStrings.filter(str => str.length > 5 )
// console.log('string :>> ', string);

// ==========================================
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

// const allNumbers = [4, 9, 20, 9, 3, 10];
// const numbers = allNumbers.filter((numb, index) => numb * (index + 1) < 30);
// console.log('numbers :>> ', numbers);
// ==========================================
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.


// ==========================================
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// =========================================
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
// =========================================
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// =========================================
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
// =========================================
// const headerNavigation = [
//   {
//     name: "Home",
//     path: "/home",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Contacts",
//     path: "/contacts",
//   },
//   {
//     name: "Sign In",
//     path: "/signin",
//   },
//   {
//     name: "Sign Up",
//     path: "/signup",
//   },
//   {
//     name: "Logout",
//     path: "/logout",
//   },
// ];
// Напишите функцию:
// 1. которая в качестве параметров будет принимать указаннный массив объектов:
// 2. которая возвращает разметку формата
// '<li>
//     <a href="http://">
//     </a>
// </li>' для каждого из элементов массива
// =========================================
// const products = [
//     {
//         id: "1",
//         name: "Bread",
//         description:
//             "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, at?",
//     },
//     {
//         id: "2",
//         name: "Bread",
//         description: "Lorem, ipsum dolor sit amet",
//     },
//     {
//         id: "3",
//         name: "Bread",
//         description: "Lorem, ipsum dolor sit amet consectetur Temporibus, at?",
//     },
// ];
// const cart = [];
// Напишите функцию, которая будет добавлять элемент в массив cart и создавать ему дополнительное свойство quantity равное нулю

// const addCart = (arr, id) => {
//     const newElem = arr.find(item => item.id === id)
//     newElem.quantity = 1;
//     cart.push(newElem)
// }
// addToCart(products, '3')
// console.log(cart);

// Напишите функцию, которая будет удалять элемент из массива cart по id

// const delFromCart = (id) => {
//     return cart.filter(item => item.id !== id)
// }
// console.log(delFromCart('3'));
// Напишите функцию, которая будет добавлять количество товаров (свойство quantity) на единицу

// const addQuantity = (id) => {
//     const product = cart.find(item => item.id === id)
//     product.quantity += 1;
//     console.log(product);
// }
// addQuantity('3');
// addQuantity('3');


// ============================================

// const delQuantity = (id) => {
//     const product = cart.find(item => item.id === id)
//     if (product.quantity < 1) {
//         return;
//     } else product.quantity -= 1;
// }
// console.log(cart);
// delQuantity('3')

// Напишите функцию, которая будет фильтровать массив products по названию товара
// Напишите функцию, которая будет возвращать разметку формата, пригодного для отображения информации о товаре в модальном окне.Обязательно добавить кнопки добавления товара и записать в них id товара
// Модифицируйте функцию, которая добавляет элемент в массив cart, при этом использует id  для поиска элемента в массиве products и если он совпадает - добавляет объект с дополнительным свойством quantity
// =========================================
// =========================================