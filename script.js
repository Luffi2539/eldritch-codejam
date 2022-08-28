// Импорт всех js файлов

import greenCards from "./assets/MythicCards/green/index.js";
import brownCards from "./assets/MythicCards/brown/index.js";
import blueCards from "./assets/MythicCards/blue/index.js";
import blueCardsData from "./data/mythicCards/blue/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import greenCardsData from "./data/mythicCards/green/index.js";

// Объявление переменных

const ancient = document.querySelector(".aza");
const hardness = document.querySelector(".hardness");
const stack = document.querySelector(".stack");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const shuffleDeck = document.querySelector(".shuffle_deck");
const deck = document.querySelector(".deck");
const randomCardShow = document.querySelector(".card");

// 1-й этап
// Зеленые карты

const greenFirstStage = [];
greenFirstStage.length = 1;
for (let i = 0; i < greenCardsData.length; i++) {
  if (greenCardsData[i].difficulty === "easy") {
    greenFirstStage.push(greenCardsData[i]);
  }
}
const greenArrSplice = greenFirstStage.splice(0, 4);
const randomGreenCard = Math.floor(Math.random() * greenFirstStage.length);
// console.log(greenFirstStage);
// console.log(randomGreenCard);

// 1-й этап
//Коричневые карты

const brownFirstStage = [];
brownFirstStage.length = 2;
for (let i = 0; i < brownCardsData.length; i++) {
  if (brownCardsData[i].difficulty === "easy") {
    brownFirstStage.push(brownCardsData[i]);
  }
}
// const brownArrSplice = brownFirstStage.splice(1, 3);
// brownFirstStage.length=2;
const randomBrownCard = Math.floor(Math.random() * brownFirstStage.length);
// console.log(brownFirstStage);
// console.log(randomBrownCard);

// 1-й этап
//Голубые карты

const blueFirstStage = [];
blueFirstStage.length = 1;
for (let i = 0; i < blueCardsData.length; i++) {
  if (blueCardsData[i].difficulty === "easy") {
    blueFirstStage.push(blueCardsData[i]);
  }
}
// const brownArrSplice = brownFirstStage.splice(1, 3);
// brownFirstStage.length=2;
const randomBlueCard = Math.floor(Math.random() * blueFirstStage.length);
// console.log(blueFirstStage);
// console.log(randomBlueCard);

// Общий массив для 1-го этапа

const firstStageArr = greenFirstStage.concat(brownFirstStage, blueFirstStage);
console.log(firstStageArr);
// Функция перемешки

function shuffle() {
  firstStageArr.sort(() => Math.random() - 0.5);
}
shuffle(firstStageArr);

// // shuffle t cards
// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;
// }

// Листенеры

ancient.addEventListener("click", hardnessChoise);
easy.addEventListener("click", shuffleButton1);
normal.addEventListener("click", shuffleButton2);
hard.addEventListener("click", shuffleButton3);
shuffleDeck.addEventListener("click", Deck);
deck.addEventListener("click", randomCardFunc);

// Функция отображения уровней сложности

function hardnessChoise() {
  hardness.classList.add("activ");
}

// Функции отображения кнопки перемешивания колоды, после выбора уровня сложности

function shuffleButton1() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.add("activ");
  hard.classList.remove("activ");
  normal.classList.remove("activ");
  randomCardShow.classList.remove("activ");
}

function shuffleButton2() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.remove("activ");
  hard.classList.remove("activ");
  normal.classList.add("activ");
  randomCardShow.classList.remove("activ");
}

function shuffleButton3() {
  shuffleDeck.classList.add("activ");
  deck.classList.remove("activ");
  easy.classList.remove("activ");
  hard.classList.add("activ");
  normal.classList.remove("activ");
  randomCardShow.classList.remove("activ");
}

// Функция отображения колоды, после нажатия на кнопку перемешивания колоды

function Deck() {
  shuffleDeck.classList.remove("activ");
  deck.classList.add("activ");
}

// Функция отображения рандомной карты снизу колоды

function randomCardFunc() {
  // const greenFirstStage = []
  deck.classList.add("activ");
  shuffleDeck.classList.remove("activ");
  randomCardShow.classList.add("activ");
}
