
// Колбек-функції. Функція як значення

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);
console.log(pointer);

// =================================================================

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage("Ultracheese", deliverPizza));
console.log(makeMessage("Royal Grand", makePizza));

// Колбек-функції. Функція як значення

// Інлайн-колбеки

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`)
});

// Інлайн-колбеки

// Метод forEach(callback)

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

orderedItems.forEach(function(element) {
totalPrice += element}
);
  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); 
console.log(calculateTotalPrice([164, 48, 291]));

// =================================================

function filterArray(numbers, value) {
const newNumbers = [];
numbers.forEach(function(number) {
if (number > value) {
newNumbers.push(number)}
});
return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 5));

// Метод forEach(callback)


// Стрілочні функції

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

const calculateTotalPrice = (quantity, pricePerItem) => {
 return quantity * pricePerItem;
}

// Неявне повернення (без фігурних дужок, повертаємо тільки значення)
const calculateTotalPrice = (quantity, pricePerItem) =>
    quantity * pricePerItem;

// Явне повернення
const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// Колбеки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));

// ===================================================
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));

// Стрілочні функції

// Чисті функції

function changeEven(numbers, value) {
    let copy = [];
    numbers.forEach((element) => {
   element % 2 === 0 ? copy.push(element + value) : copy.push(element);
  });
  return copy;
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));

// ===========================================================================

function changeEven(numbers, value) {
let newArray = [...numbers];
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] % 2 === 0) {
     newArray[i] = newArray[i] + value 
      }
    }
    
return newArray
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));

// Чисті функції


// Метод map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map(planet => planet.length);

console.log(planets);
console.log(planetsLengths);

// ===== Масив об'єктів ====================================================

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);

console.log(titles);

// Метод map()

// Метод flatMap()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);

console.log(genres);

// =====================================================

const getUserEmails = (users) => {
return usersMail = users.map(user => user.email)};

// Метод flatMap()

// Метод filter()

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 != 0);

console.log(evenNumbers);
console.log(oddNumbers);

// ====  Метод filter() на масиві об'єктів  =======================

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);

// ========================================================================

const getUsersWithEyeColor = (users, color) =>
{const usersEyeColor = users.filter(user => user.eyeColor === color)
  return usersEyeColor
};

// ==========================================================================
const getUsersWithAge = (users, minAge, maxAge) => {
const usersAge = users.filter(user => user.age > minAge && user.age < maxAge)
return usersAge};

// Метод filter()

// Метод find()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

// ================================================================

const getUserWithEmail = (users, email) => {
const usersEmail = users.find(user => user.email === email)
return usersEmail};

// Метод find()

// Метод every()

const isEveryUserActive = (users) => {
let usersOnline = users.every(user => user.isActive === "true")
return usersOnline};

// Метод every()

// Метод some()

const isAnyUserActive = (users) => {
const usersOnline = users.some(user => user.isActive === true)
return usersOnline};

// Метод some()

// Метод reduce()

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((playtime, value) => 
{return playtime + value;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);

// ==========================================================================

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
let acc = 0;
return acc = total + player.playtime / player.gamesPlayed;
}, 0); 

console.log(totalAveragePlaytimePerGame);

// ==========================================================================

const calculateTotalBalance = (users) => {
const balance = users.reduce((total, user) => 
{return total + user.balance;}, 0);
return balance;};

// Метод reduce()

// Метод toSorted()
// ==== За замовчуванням ====================================================              
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();

// ===== За зростанням і спаданням числа==========================================

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// ==== Сортування рядків =======================================================

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

// =========================================================================

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// Метод toSorted()

// Ланцюжки методів

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
.filter(book => book.rating > MIN_BOOK_RATING)
.map(book => book.author)
.toSorted((a, b) => a.localeCompare(b)
);

console.log(names);

// Ланцюжки методів
