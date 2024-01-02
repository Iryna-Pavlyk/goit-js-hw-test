
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



