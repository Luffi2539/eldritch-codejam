// // Импорт всех js файлов

import greenCards from "./assets/MythicCards/green/index.js";
import brownCards from "./assets/MythicCards/brown/index.js";
import blueCards from "./assets/MythicCards/blue/index.js";
import blueCardsData from "./data/mythicCards/blue/index.js";
import brownCardsData from "./data/mythicCards/brown/index.js";
import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import greenCardsData from "./data/mythicCards/green/index.js";

// // Объявление переменных

const ancient = document.querySelector(".aza");
const hardness = document.querySelector(".hardness");
const stack = document.querySelector(".stack");
const easy = document.querySelector(".easy");
const normal = document.querySelector(".normal");
const hard = document.querySelector(".hard");
const shuffleDeck = document.querySelector(".shuffle_deck");
const deck = document.querySelector(".deck");
const randomCardShow = document.querySelector(".card");
const randomCardPlay= document.querySelector(".random-card");

// // Листенеры

ancient.addEventListener("click", hardnessChoise);
easy.addEventListener("click", shuffleButton1);
normal.addEventListener("click", shuffleButton2);
hard.addEventListener("click", shuffleButton3);
shuffleDeck.addEventListener("click", Deck);
deck.addEventListener("click", randomCardFunc);

// // Функция отображения уровней сложности

function hardnessChoise() {
  hardness.classList.add("activ");
}

// // Функции отображения кнопки перемешивания колоды, после выбора уровня сложности

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

// // Функция отображения колоды, после нажатия на кнопку перемешивания колоды

function Deck() {
  shuffleDeck.classList.remove("activ");
  deck.classList.add("activ");
  shuffleCards();
 }

// // Функция отображения рандомной карты снизу колоды

function randomCardFunc() {
  deck.classList.add("activ");
  shuffleDeck.classList.remove("activ");
  randomCardShow.classList.add("activ");
  showCard()
}

let useCardsSrc;
let useCards = [];

function getRandomCard(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function repeat(arr1, arr, sum) {
  let card;
  while (arr1.length < sum) {
  card = getRandomCard(arr);
  if (!arr1.includes(card)) {
      arr1.push(card);
    }
  }
}
function repeat1(arr1, arr, sum) {
  while (arr1.length < sum) {
    const num = Math.floor(Math.random() * arr.length);
    arr1.push(arr[num]);
    arr.splice(num, 1);
  }
}

// Функция перемешивания карт

function shuffleCards() {
  useCards.splice(0, useCards.length);
  const greenuseCards = [];
  const brownuseCards = [];
  const blueuseCards = [];

  const sumGreenCards =
    +ancientsData[0].firstStage.greenCards +
    +ancientsData[0].secondStage.greenCards +
    +ancientsData[0].thirdStage.greenCards;
  const sumBrownCards =
    +ancientsData[1].firstStage.brownCards +
    +ancientsData[1].secondStage.brownCards +
    +ancientsData[1].thirdStage.brownCards;
  const sumBlueCards =
    +ancientsData[1].firstStage.blueCards +
    +ancientsData[1].secondStage.blueCards +
    +ancientsData[1].thirdStage.blueCards;

  repeat(greenuseCards, greenCardsData, sumGreenCards);
  repeat(brownuseCards, brownCardsData, sumBrownCards);
  repeat(blueuseCards, blueCardsData, sumBlueCards);

  const sumFirstStageGreenCards = ancientsData[0].firstStage.greenCards;
  const sumFirstStageBrownCards = ancientsData[0].firstStage.brownCards;
  const sumFirstStageBlueCards = ancientsData[0].firstStage.blueCards;

  const firstStageGreen = [];
  const firstStageBrown = [];
  const firstStageBlue = [];

  repeat1(firstStageGreen, greenuseCards, sumFirstStageGreenCards);
  repeat1(firstStageBrown, brownuseCards, sumFirstStageBrownCards);
  repeat1(firstStageBlue, blueuseCards, sumFirstStageBlueCards);
  const sumSecondStageGreenCards = ancientsData[0].secondStage.greenCards;
  const sumSecondStageBrownCards = ancientsData[0].secondStage.brownCards;
  const sumSecondStageBlueCards = ancientsData[0].secondStage.blueCards;

  const secondStageGreen = [];
  const secondStageBrown = [];
  const secondStageBlue = [];

  repeat1(secondStageGreen, greenuseCards, sumSecondStageGreenCards);
  repeat1(secondStageBrown, brownuseCards, sumSecondStageBrownCards);
  repeat1(secondStageBlue, blueuseCards, sumSecondStageBlueCards);

  const sumThirdStageGreenCards = ancientsData[0].thirdStage.greenCards;
  const sumThirdStageBrownCards = ancientsData[0].thirdStage.brownCards;
  const sumThirdStageBlueCards = ancientsData[0].thirdStage.blueCards;

  const thirdStageGreen = [];
  const thirdStageBrown = [];
  const thirdStageBlue = [];
  repeat1(thirdStageGreen, greenuseCards, sumThirdStageGreenCards);
  repeat1(thirdStageBrown, brownuseCards, sumThirdStageBrownCards);
  repeat1(thirdStageBlue, blueuseCards, sumThirdStageBlueCards);

  const firstStageCards = firstStageGreen.concat(
    firstStageBrown,
    firstStageBlue
  );
  const secondStageCards = secondStageGreen.concat(
    secondStageBrown,
    secondStageBlue
  );
  const thirdStageCards = thirdStageGreen.concat(
    thirdStageBrown,
    thirdStageBlue
  );

  const firstStageMix = firstStageCards
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
  const secondStageMix = secondStageCards
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);
  const thirdStageMix = thirdStageCards
    .map((i) => [Math.random(), i])
    .sort()
    .map((i) => i[1]);

  useCards.splice(-1, 0, ...useCards.splice(-1, 1, firstStageMix));
  useCards.splice(-1, 0, ...useCards.splice(-1, 1, secondStageMix));
  useCards.splice(-1, 0, ...useCards.splice(-1, 1, thirdStageMix));
  useCardsSrc = firstStageMix.concat(secondStageMix, thirdStageMix);
  randomCardPlay.src = " ";
  tracker();
}

// Функция отображения рандомной карты

function showCard() {
  if (useCards[0].length != 0) {
    randomCardPlay.src = useCards[0][0].cardFace;
     useCards[0].splice(0, 1);
    tracker();
   } else if (useCards[1].length != 0) {
    randomCardPlay.src = useCards[1][0].cardFace;
     useCards[1].splice(0, 1);
    tracker();
     } else if (useCards[2].length != 0) {
    randomCardPlay.src = useCards[2][0].cardFace;
       useCards[2].splice(0, 1);
    tracker();
     } else deck.classList.remove("activ");
}

// Функция трекер

function tracker() {
  const dot = document.querySelectorAll(".dot");
  dot[0].textContent = useCards[0].filter(
    (card) => card.color === "green"
  ).length;
  dot[1].textContent = useCards[0].filter(
    (card) => card.color === "brown"
  ).length;
  dot[2].textContent = useCards[0].filter(
    (card) => card.color === "blue"
  ).length;

  dot[3].textContent = useCards[1].filter(
    (card) => card.color === "green"
  ).length;
  dot[4].textContent = useCards[1].filter(
    (card) => card.color === "brown"
  ).length;
  dot[5].textContent = useCards[1].filter(
    (card) => card.color === "blue"
  ).length;

  dot[6].textContent = useCards[2].filter(
    (card) => card.color === "green"
  ).length;
  dot[7].textContent = useCards[2].filter(
    (card) => card.color === "brown"
  ).length;
  dot[8].textContent = useCards[2].filter(
    (card) => card.color === "blue"
  ).length;
}
