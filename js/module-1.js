/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let и const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// let username = "Maksim";
// let age;
// age = 34;

// console.log(username);
// console.log(age);

// username = "Alex";
// console.log(username);

// // const address = "Kyiv";
// // // address = 45;

// // console.log(address);

let number = 23; // number
let q = 23.45; // number
let firstname = 'Alex'; // string
let status = false; // boolean
let status2 = true; // boolean
let w; // undefined
let r = null;

console.log(typeof r);

/**
 * Типові помилки
 *
 * - Звернення до змінної до її оголошення
 * - Перевизначення значення для змінної оголошеної через const
 * - Обращение по неправильному імени змінної
 *
 */

// const username = "Mango";

// let age = 20;

// const price = 200;

// username = "Apple"

// let user;
// user = 'Maksim'

// let module;
// module = 34;

// let myUser = "Viktor";
// myUser = "Alex";

// a-zA-Z0-9_

//let 1name; // error

/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

// const a = 10;
// const b = 5;

// console.log(a + b);
// const re = 3 / 2;
// console.log(re);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

// const applesAndGrapes = apples + grapes;
// console.log(applesAndGrapes)

// const difference = grapes - apples;
// console.log(difference);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

// let students = 100;
// // students = students + 50;
// students += 50;

// console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// let a = (2 + 2) * 2;
// console.log(a);

/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

// const firstName = "Chelsy";
// const lastName = "Emerald";

// const fullName = firstName + " " + lastName;

// console.log(fullName);

// const quantity = 15;
// const orderMsg = `You ordered ${quantity} bots ${23 / 2}`;
// console.log(orderMsg);

// const message = "This string is 28 chars long";
// console.log(message.length);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = 'Cyberdyne Systems';
const repairBots = 150432;
const defenceBots = 50;
const msg = `${companyName} has ${
  repairBots + defenceBots
} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"

('use strict');

/**
 * Перетворення типів: рядки
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// let a = "234"; // string
// let b = 123; //number

// console.log(a + b);

let q = 2 + 2;

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"

// console.log("5" + 3); // "53"
// console.log("5" + true); // "5true"
// console.log("5" + false); // "5false"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"

// let a = "5";
// let b = "4";

// const aa = Number(a);
// const bb = Number(b);

// console.log(aa + bb);

/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

// console.log(Number("5")); // 5
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN -> Not A Number
// console.log(Number("Jacob")); // NaN
// console.log(Number("25px")); // NaN

// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4

// console.log("5" + 5)

// const data = "hello5436"

// console.log(Number(data)) // NaN
// console.log(Number.parseInt(data)) // 234
// console.log(Number.parseFloat(data)) // 234.56

/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведение типов операндов
 */

console.log(5 > 4); // true

console.log(10 >= '7'); // true

// console.log("2" > "12");

// console.log("2" < "12");

console.log('4' == 4); // true

console.log('6' === 6); // false

console.log('hello' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

// console.log("Papaya" < "papaya");

console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = '50px';
console.log('elementWidth: ', elementWidth);

let elementHeight = '200.499999px';
console.log('elementHeight: ', elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

// const value = 27.5;

let height = Number.parseFloat(elementHeight);
console.log(height); // 200.74

console.log(Math.floor(height));
console.log(Math.ceil(height));
console.log(Math.round(height));

/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  weight = Number.parseFloat(weight);
  height = Number.parseFloat(height);

  const bmi = weight / height ** 2;

  return bmi.toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8

// function sayHello(){
//     console.log("Hello world!")
//     console.log("Hello world!")
//     console.log("Hello world!")
// }

// function summa(num1, num2, num3){
//     const result = num1 + num2 + num3;
//     console.log(result);
// }

// function calcP(a, b){
//     const p = (a + b) * 2;
//     console.log(p);
// }

// calcP(213, 652)
// calcP(210, 327)

// return example

// const a = 123;

// function calcP(a, b){
//     const p = (a + b) * 2;
//     return p;
// }

// const b = calcP(1, 2)
// console.log(b);

// console.log(p);

// + - / *

// < > <= >= != == === !==

// const a = 23 == 1;
// console.log(a);

// const b = 'helloooooo'.length > 'helloo'.length;
// console.log(b);

// const r = '1' !== 3;
// console.log(r);

// const w = 2 + 4 < 3 + 9

// console.log(w);
