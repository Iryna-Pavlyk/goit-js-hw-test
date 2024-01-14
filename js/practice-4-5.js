/*
 * Напиши скрипт, який, для об'єкта user, послідовно:
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
};
user.premium = false;
user.mood = 'happy';
user['hobby'] = 'skydiving';
const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

/*
 * У нас є об'єкт, у якому зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
 */

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 130,
};

let sum = 0;
const salariesValues = Object.values(salaries);
for (const salary of salariesValues) {
  sum += salary;
  console.log(sum);
}

/*
 * Напишіть ф-цію calcTotalPrice(array, stoneName), яка приймає масив об'єктів та рядок з назвою 
каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
];

function calcTotalPrice(array, stoneName) {
  for (const item of array) {
    if (item.name === stoneName) {
      return item.price * item.quantity;
    }
  }
  return 'NOt FOUND!';
}

console.log(calcTotalPrice(stones, 'Ізумруд'));
console.log(calcTotalPrice(stones, 'Цегла'));

//Створіть об'єкт calculator із трьома методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//mult() перемножує збережені значення та повертає результат

const calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

calculator.read(43, 25);
console.log(calculator.sum());
console.log(calculator.mult());

//Напишіть функцію, яка перевіряє, чи є елемент саме простим об'єктом, а не масивом, null тощо.

function isPlainObject(item) {
  return (
    typeof item === 'object' &&
    item !== null &&
    !Array.isArray(item)
  );
}

console.log(isPlainObject({ a: 1 })); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
console.log(isPlainObject(1)); // false
console.log(isPlainObject(undefined)); // false

//1 (map()) Потрібно отримати масив імен студентів та записати їх великими літерами.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const array = studentRecords.map(student =>
  student.name.toUpperCase()
);
console.log(array);

// 2 (filter()) Припустимо, що ми маємо той самий набір даних, що й вище, але цього разу ми хочемо
// отримати детальну інформацію про студентів, які набрали більше 50 балів.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const bestStudents = students =>
  students.filter(student => student.marks > 50);
console.log(bestStudents(studentRecords));

// 3  (reduce()) Необхідно одержати загальну суму балів студентів.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const sum = students =>
  students.reduce((acc, student) => {
    return (acc += student.marks);
  }, 0);

console.log(sum(studentRecords));

// 4 (map(), filter()) Необхідно отримати лише імена студентів, які набрали більше 50 балів із того ж набору
// даних.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const nameStudents = studentRecords
  .filter(student => student.marks > 50)
  .map(student => student.name);

console.log(nameStudents);

// 5 (filter(), reduce()) Необхідно отримати загальну суму балів студентів із id більше 120.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const totalIdStudents = studentRecords
  .filter(student => student.id > 120)
  .reduce((acc, student) => acc + student.marks, 0);

console.log(totalIdStudents);

//6 (map(), filter(), reduce()) Необхідно вивести загальну кількість студентів із балами
//більше 50, отриманими після нарахування заохочення до 15 балів.
//Використовуючи map(), додається заохочення до 15 балів студентам, які набрали менше 50 балів.
// Потім використовуємо filter() для масиву студентів, що повертається функцією map().
// Так ми знайдемо всіх студентів із відмітками понад 50.
// Нарешті ми використовували функцію reduce() для повертаного функцією filter()
// масиву студентів, щоб повернути суму оцінок.

let studentRecords = [
  { name: 'John', id: 123, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'yaga', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 },
];

const totalScore = studentRecords
  .map(student => {
    if (student.marks < 50) {
      student.marks += 15;
    }
    return student;
  })
  .filter(student => student.marks > 50)
  .reduce((acc, student) => acc + student.marks, 0);

console.log(totalScore);

/*
  Сортування складних типів
  Виконати сортування масиву об'єктів, не змінюючи вихідний масив:
  - за зростанням та зменшенням значення якості price.
  - на ім'я в алфавітному та зворотному алфавітному порядку.
*/

const items = [
  { name: 'Samsung', price: 2000 },
  { name: 'Asus', price: 2500 },
  { name: 'LG', price: 1900 },
  { name: 'Dell', price: 1200 },
  { name: 'BenQ', price: 900 },
];

const lowPrice = items.toSorted(
  (a, b) => a.price - b.price
);
console.log(lowPrice);
const hightPrice = items.toSorted(
  (a, b) => b.price - a.price
);
console.log(hightPrice);
const alfabetNames = items.toSorted((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(alfabetNames);
const reverseAlfabetNames = items.toSorted((a, b) =>
  b.name.localeCompare(a.name)
);
console.log(reverseAlfabetNames);
