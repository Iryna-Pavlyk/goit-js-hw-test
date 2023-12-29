"use strict";

// Об'єкти. Запис об'єкту та вкладеність

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
owner: {
name: "Henry",
phone: "982-126-1588",
email: "henry.carter@aptmail.com",
},
};

// Об'єкти. Запис об'єкту та вкладеність

// Доступ до властивостей через крапку / квадратні дужки

 const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

// Доступ до властивостей через крапку / квадратні дужки

// Доступ до вкладених властивостей. Методи масиву

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];

// Доступ до вкладених властивостей. Методи масиву

// Зміна значення властивостей

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

// Зміна значення властивостей

// Додавання властивостей

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
country: "Jamaica",
city: "Kingston",
};

// Додавання властивостей

// Короткі властивості

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {name, price, image, tags};

// Короткі властивості

// Обчислювальні властивості

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
[emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam"
};

// Обчислювальні властивості

// Перебір об'єкта. Цикл for...in

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment){
 keys.push(key);
    values.push(apartment[key]);
};

console.log(keys);
console.log(values);

// Перебір об'єкта. Цикл for...in

// Метод Object.keys() і цикл for...of

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (const key of keys) {
values.push(apartment[key]);
};
console.log(values);

// ==============================================

function countProps(object) {
 let propCount = 0;
 const keys = Object.keys(object);
 return propCount = keys.length
};
console.log(countProps({ name: "Mango", age: 2 }));

// Метод Object.keys() і цикл for...of

// Метод Object.values()

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);

// ===================================================

function countTotalSalary(salaries) {
let totalSalary = 0;
for (const key of Object.values(salaries)){
totalSalary += key};
return totalSalary
};

// Метод Object.values()

// Масив об’єктів

// `hexColors` - це масив `["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]`
// `rgbColors` - це масив `["244,67,54", "33,150,243", "76,175,80", "255,235,59"]`

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
for (const key of colors) { 
    hexColors.push(key.hex);
    console.log(hexColors);
    rgbColors.push(key.rgb);
    console.log(rgbColors);    
};

// Масив об’єктів

// Пошук об'єкта за значенням властивості

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
    ];
    
    for (const key of products) {
    // console.log(key);
     if (key.name === productName) {
     return key.price}}
}   

console.log(getProductPrice("Grip"));  
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Radar"));  

// Пошук об'єкта за значенням властивості

// Колекція значень властивості

function getAllPropValues(propName) {
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];
    let result = [];
    for (const product of products) {
        // console.log(product);
        // console.log(Object.keys(product));
        // console.log(Object.values(product));
        if (propName in product) {
           result.push(product[propName])
        };

    };
    return result;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));

// ======================================================

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

for (const product of products) {
if (product.name === productName) {
return product.price * product.quantity
    };
    };
return `Product ${productName} not found!`
}

console.log(calculateTotalPrice("Blaster"));
console.log(calculateTotalPrice("Radar"));
console.log(calculateTotalPrice("Droid"));

// Колекція значень властивості

// Методи об'єкта

const atTheOldToad = {
 potions: [],
 getPotions() {return "List of all available potions"} ,
 addPotion(potionName) { return `Adding ${potionName}` }
};

console.log(atTheOldToad.addPotion("Power potion"));
console.log(atTheOldToad.addPotion("Invisibility"));

// Методи об'єкта