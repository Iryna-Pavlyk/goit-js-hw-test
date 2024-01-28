/*
Натискання на кнопку "SHOW ME" має виводити значення з поля введення в alert

   <div>
        <button id="alertButton">SHOW ME</button>
        <input id="alertInput" type="text" value="Hello world!" />
   </div>
*/
const btnEl = document.querySelector('#alertButton');
const inputEl = document.querySelector('#alertInput');
console.log(btnEl);
console.log(inputEl);
btnEl.addEventListener('click', () => {
  const value = inputEl.value.trim();
  alert(value);
});

// ====================================================================================================

//Написати скрипт: при натисканні на кнопку додавати в div з ідентифікатором «container»
//фрагмент розмітки:
{
  /* <div class="item"> 
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div> */
}
{
  /* <button class="add-btn">add</button>
  <div class="container"></div> */
}

const btnAdd = document.querySelector('.add-btn');
const container = document.querySelector('.container');
btnAdd.addEventListener('click', foo);

// function foo(params) {
//   const box = document.createElement('div');
//   box.classList.add('item');
//   const title = document.createElement('h3');
//   title.textContent = 'Title';
//   const text = document.createElement('p');
//   text.textContent = 'Lorem ipsum';

//   box.append(title, text);
//   container.append(box);
// }

// або!!!!========================================

function foo() {
  const markup = `<div class="item">
<h3>Заголовок</h3>
<p>текст текст текст</p>
</div>`;
  container.innerHTML = markup;
}

// ===================================================================================================
/*
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

   <div>
        <button id="swapButton">SWAP ME</button>
        <input id="leftSwapInput" type="text" value="???" />
        <input id="rightSwapInput" type="text" value="!!!" />
   </div>
*/

const inputLeftEl = document.querySelector(
  '#leftSwapInput'
);
const inputRightEl = document.querySelector(
  '#rightSwapInput'
);
const btnEl = document.querySelector('#swapButton');
console.log(inputLeftEl, inputRightEl, btnEl);

btnEl.addEventListener('click', foo);

// function foo() {
//   const inputValueLeft = inputLeftEl.value;
//   inputLeftEl.value = inputRightEl.value;
//   inputRightEl.value = inputValueLeft;
// }

// === або!!!

function foo() {
  [inputLeftEl.value, inputRightEl.value] = [
    inputRightEl.value,
    inputLeftEl.value,
  ];
}

// =====================================================================================================
/*

Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.

  <div>
        <input id="passwordInput" value="pass123456"  type="password">
        <button id="passwordButton">Розкрити</button>
    </div>

*/

const btnEl = document.querySelector('#passwordButton');
const inputEl = document.querySelector('#passwordInput');

// btnEl.addEventListener('click', () => {
//   if (inputEl.type === 'password') {
//     inputEl.type = 'text';
//     btnEl.textContent = 'Приховати';
//   } else {
//     inputEl.type = 'password';
//     btnEl.textContent = 'Розкрити';
//   }
// });

// =====або!!!======

btnEl.addEventListener('click', () => {
  const toggle = inputEl.type === 'password';
  inputEl.type = toggle ? 'text' : 'password';
  btnEl.textContent = toggle ? 'Приховати' : 'Розкрити';
});

//=======================================================================================================

/*
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

<style>
#box {
    width: 30px;
    height: 30px;
    background: red;
}
</style>

    <div>
        <div id="box"></div>
        <button id="decrease">Зменшити</button>
        <button id="increase">Збільшити</button>
    </div>
*/

const box = document.querySelector('#box');
const decrease = document.querySelector('#decrease');
const increase = document.querySelector('#increase');

decrease.addEventListener('click', decreaseHandler);
increase.addEventListener('click', increaseHandler);

let number = box.clientWidth;
console.dir(box);

function decreaseHandler(event) {
  number -= 10;
  updateBoxSize();
}
function increaseHandler(event) {
  number += 10;
  updateBoxSize();
}

function updateBoxSize() {
  box.style.width = `${number}px`;
  box.style.height = `${number}px`;

// ====================================================================================================

/*

Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази


    <div>
        <ul class="list">
            <li class="listItem">1</li>
            <li class="listItem">4</li>
            <li class="listItem">8</li>
            <li class="listItem">16</li>
            <li class="listItem">20</li>
            <li class="listItem">30</li>
        </ul>
        <button id="double">Удвоить</button>
    </div>

*/

const list = document.querySelector('.list');
const btnEl = document.querySelector('#double');

btnEl.addEventListener('click', () => {
  const listItem = Array.from(list.children);
  console.log(listItem);
  for (const item of listItem) {
    item.textContent *= 2;
  }
});

// =====================================================================================================

/* ---------------------------------*/
//Вивести 4 червоні квадрати, при кліку на будь-який, він ставати зеленим, при цьому якщо
//є вже зелений квадрат, то він ставати назад червоним і так можна кликати на будь-який
//квадрат, він ставати зеленим, а старий зелений квадрат назад червоним і тд.
//(Зробити завдання так, щоб можна було додати ще хоч 100 квадратів, при цьому скрипт не
//треба міняти).

{
  /* 
  <style>
  .square {
  width: 150px;
  height: 150px;
  background: red;
  margin: 10px;
}

.square.green {
  background: green;
}
</style>

<div class="wrapper">
  <div class="square"></div> 
<div class="square"></div> 
<div class="square"></div> 
<div class="square"></div>  

</div>*/
}

const wrapperEl = document.querySelector('.wrapper');
wrapperEl.addEventListener('click', event => {
  if (!event.target.classList.contains('square')) return;
  console.log(event.target);
  event.currentTarget
    .querySelector('.green')
    ?.classList?.remove('green');
  event.target.classList.add('green');
});