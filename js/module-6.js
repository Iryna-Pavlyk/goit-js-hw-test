class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  blacklistedEmails = [];
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  constructor({ email, access }) {
    super(email);
    this.access = access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return 'true';
    } else {
      return 'false';
    }
  }
}
const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true

/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/**
 * Глобальний контекст
 */

// "use strict";

// function foo() {
//   console.log("foo -> this", this);
// }

// foo();

/**
 * Контекст методу об'єкта
 */

// const user = {

//   tag: "Mango",

//   showTag() {
//     console.log("showTag -> this", this);
//   },

// };

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

// function showTag() {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// }

// // showTag();

// const mango = {
//   tag: "Mango",
// };

// mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

// const poly = {
//   tag: "Poly",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// // poly.showTag();

// const outerShowTag = poly.showTag;

// outerShowTag();

/**
 * Контекст у callback-функціях
 */

// const jacob = {
//   tag: "Jacob",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// jacob.showTag()

// function invokeAction(action) {
//   console.log(action);
//   action();
// }

// invokeAction(jacob.showTag);

// function foo() {
//   console.log("foo -> this", this);
// }

// foo(); // Який this ???

/**
 * -------------------------
 */
// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis(); // Який this ???  -> book

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ??? -> window / undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ??? -> undefined

/**
 * Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
 * розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
 * кількістю з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(stone => stone.name === stoneName)
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

// const student = {
//   username: 'Alex',

//   stats: {
//     positive: 4,
//     negative: 8,

//     printThis(){
//       console.log(this);
//     }

//   },

// }

// student.stats.printThis()

/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log('showThis -> this', this);
};

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */
// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// changeColor.call(hat, "orange");
// console.log(hat);

// const sweater = {
//   color: "green",
// };

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */
// const counter = {
//   value: 0,

//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

// console.log(dog)

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

/**
 * ----------------------------------------
 */
// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

const obj = {
  tag: 'This is tag',
  func: function () {
    console.log(this);
  },
};

// obj.func.apply(obj)
obj.func();

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

/**
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class User {

//     constructor(username, age, city){
//         console.log('Created!', username)
//         this.name = username
//         this.age = age
//         this.city = city
//     }

//     sayHello(){
//         console.log('Hello from user!')
//     }

//     login(){
//         console.log('User logged in!')
//     }
// }

// const user1 = new User('Alex', 23, 'Kyiv');
// const user2 = new User('Andrew', 45, 'Lviv');
// const user3 = new User('Viktor', 12, 'Odessa');

// console.log(user1)
// console.log(user2)
// console.log(user3)

class Rectangle {
  #a;
  #b;
  static counter = 0;

  static printAllRectangles() {
    console.log(Rectangle.counter);
  }

  constructor(a, b) {
    Rectangle.counter += 1;
    this.#a = a;
    this.#b = b;
  }

  getPerimetr() {
    return (this.#a + this.#b) * 2;
  }

  getArea() {
    return this.#a * this.#b;
  }

  // getA(){
  //     return this.#a;
  // }

  // setA(newValue){
  //     this.#a = newValue;
  // }

  get a() {
    return this.#a;
  }

  set a(value) {
    this.#a = value;
  }
}

const r1 = new Rectangle(12, 34);
const r2 = new Rectangle(12, 34);
const r3 = new Rectangle(12, 34);
console.log(Rectangle.counter);
Rectangle.printAllRectangles();
// const r2 = new Rectangle(22, 76);
// console.log(r1)
// console.log(r2)
// console.log(r1.getPerimetr())
// console.log(r2.getPerimetr())

// console.log(r1)
// r1.#a = 4000
// console.log(r1)

// console.log(r1.getPerimetr())

// console.log(r1.getA())
// r1.setA(1000)
// console.log(r1.a)
// r1.a = 550
// console.log(r1)
/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Transport {
  color;

  constructor(color) {
    this.color = color;
  }

  startEngine() {
    console.log('Engine started!');
  }
}

class Car extends Transport {
  model;

  constructor(color, model) {
    super(color);
    this.model = model;
  }
}

const car = new Car('green', 'bmw');
console.log(car.color, car.model);
car.startEngine();

/**
 * Напиши клас User для створення об'єкта блогера з наступними властивостями:
 * - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

class User {
  email;
  age;
  numberOfPosts;
  topics;

  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});

console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new User({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

/**
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */

class User {
  #login;
  #email;

  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    this.#login = value;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }
}

const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie

/**
 * Напиши клас Storage який створює об'єкти для керування складом товарів.
 * При виклику отримуватиме один аргумент - початковий масив товарів і
 * записуватиме його властивість items.
 *
 * Додай методи класу:
 * - getItems() - повертає масив товарів.
 * - addItem(item) - отримує новий товар і додає його до поточних.
 * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
 */

class Storage {
  items;

  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    if (this.items.includes(item)) {
      this.items = this.items.filter(i => i !== item);
    }
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
