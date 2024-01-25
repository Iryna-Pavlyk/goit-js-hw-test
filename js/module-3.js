/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

const courses = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PostgreSQL',
];
console.table(courses);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

courses[1] = 'Node.js';
courses[3] = 'Next.js';
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex);

/**
 * Передача за посиланням і за значенням
 *
 * Примітиви і складні типи
 * Посилальна рівність (referential equality)
 */

const a = [1, 2, 3];
const b = a;

console.log('a', a);
console.log('b', b);

a[0] = 500;

console.log('a', a);
console.log('b', b);

console.log(a === b);

console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]);

/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PostgreSQL',
];

/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PostgreSQL',
];
// const newCourses = ["JAVA", "C#", "Angular"];

// console.log(courses);

// const result = newCourses.concat(courses);
// console.log(result);

// const res = courses.indexOf("JavaScript")
// console.log(res);

// courses.push('element 123')
// const deleted = courses.pop()

// courses.unshift('start')
// courses.shift()
// console.log(courses)

// console.log(courses)
// console.log(deleted)

// console.log(result);
// const strElements = courses.join(" | ");
// console.log(strElements);

// const phoneNumber = "097 456 78 90"

// const arr = phoneNumber.split(" ");
// console.log(arr);
// const result = arr.join('-')
// console.log(result);

// const result = courses.slice(3)
// console.log(result);

/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

console.table(friends);

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = '8 11';

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Not an even number!', number);
    continue;
  }

  console.log(`${number} - even!`);
  total += number;
}

console.log('Total: ', total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones =
  '89001234567,89001112233,890055566377,890055566300';

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = 'Welcome to the future';

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1

/**
 * Псевдомасив arguments и Array.from
 */

function foo() {
  console.log(arguments);
  const args = Array.from(arguments);
  console.log(args);
}

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

const add = function (arguments) {
  const args = Array.from(arguments);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

console.log(globalValue); // 10

function foo() {
  const a = 20;
  console.log(a); // 20
  console.log(globalValue); // 10

  for (let i = 0; i < 5; i += 1) {
    console.log(a); // 20
    console.log(globalValue); // 10

    if (i === 2) {
      console.log(a); // 20
      console.log(globalValue); // 10
    }
  }
}

// ❌ Помилка! Змінна a не доступна в цій області видимості
console.log(a);

for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  console.log(a);
}

/**
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  console.log('fnA execution');
}

function fnB() {
  console.log('fnB execution');
}

function fnC() {
  console.log('fnC execution');
}

console.log('Before fnA execution');
fnA();
console.log('After fnA execution');

console.log('Before fnB execution');
fnB();
console.log('After fnB execution');

console.log('Before fnC execution');
fnC();
console.log('After fnC execution');

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {}

printInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
