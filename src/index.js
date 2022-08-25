// import ancients from './assets/Ancients/index.js';
// import {cards as pngBlueCards} from './assets/MythicCards/blue/index.js';
// import {cards as pngBrownCards} from './assets/MythicCards/brown/index.js';
// import {cards as pngGreenCards} from './assets/MythicCards/green/index.js';
import {brownCards, blueCards, greenCards} from './data/mythicCards/index.js';
import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';

const azathoth = document.querySelector('.card_azathoth');
const cthulthu = document.querySelector('.card_cthulthu');
const iogSothoth = document.querySelector('.card_iog-sothoth');
const snubNiggurath = document.querySelector('.card_snub_niggurath');
const veryEasy = document.querySelector('.level_very-easy');
const easy = document.querySelector('.level_easy');
const normal = document.querySelector('.level_normal');
const hard = document.querySelector('.level_hard');
const veryHard = document.querySelector('.level_very-hard');
const deck = document.querySelector('.deck');
const circle = document.querySelectorAll('.circle');
const shuffle = document.querySelector('.shuffle__button');
const deckShow = document.querySelector('.deck_show')

let isAncient = 0;
let isDifficulty = 'normal';
let arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
let cardsForFirst;
let cardsForSecond;
let cardsForThird;

function randomGreenCards() {
    let sum = ancientsData[isAncient].firstStage.greenCards + ancientsData[isAncient].secondStage.greenCards + ancientsData[isAncient].thirdStage.greenCards;
    let easyFilter = greenCards.filter(dif => dif.difficulty === 'easy').sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = greenCards.filter(dif => dif.difficulty === 'normal').sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = greenCards.filter(dif => dif.difficulty === 'hard').sort(() => Math.round(Math.random() * 100) - 50);
    let difference;
    let resultArray = greenCards.sort(() => Math.round(Math.random() * 100) - 50);;
    if (isDifficulty === 'veryEasy') {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0,difference)]
    }
    if (isDifficulty === 'easy') {
        resultArray = [...easyFilter, ...normalFilter]
    }
    if (isDifficulty === 'hard') {
        resultArray = [...hardFilter, ...normalFilter]
    }
    if (isDifficulty === 'veryHard') {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0,difference)]
    }
    let result = resultArray;
    return result.slice(0,sum).sort(() => Math.round(Math.random() * 100) - 50);
}
function randomBlueCards() {
    let sum = ancientsData[isAncient].firstStage.blueCards + ancientsData[isAncient].secondStage.blueCards + ancientsData[isAncient].thirdStage.blueCards;
    let easyFilter = blueCards.filter(dif => dif.difficulty === 'easy').sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = blueCards.filter(dif => dif.difficulty === 'normal').sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = blueCards.filter(dif => dif.difficulty === 'hard').sort(() => Math.round(Math.random() * 100) - 50);
    let difference;
    let resultArray = blueCards.sort(() => Math.round(Math.random() * 100) - 50);;
    if (isDifficulty === 'veryEasy') {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0,difference)]
    }
    if (isDifficulty === 'easy') {
        resultArray = [...easyFilter, ...normalFilter]
    }
    if (isDifficulty === 'hard') {
        resultArray = [...hardFilter, ...normalFilter]
    }
    if (isDifficulty === 'veryHard') {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0,difference)]
    }
    let result = resultArray;
    return result.slice(0,sum).sort(() => Math.round(Math.random() * 100) - 50);
}
function randomBrownCards() {
    let sum = ancientsData[isAncient].firstStage.brownCards + ancientsData[isAncient].secondStage.brownCards + ancientsData[isAncient].thirdStage.brownCards;
    let easyFilter = brownCards.filter(dif => dif.difficulty === 'easy').sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = brownCards.filter(dif => dif.difficulty === 'normal').sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = brownCards.filter(dif => dif.difficulty === 'hard').sort(() => Math.round(Math.random() * 100) - 50);
    let difference;
    let resultArray = brownCards.sort(() => Math.round(Math.random() * 100) - 50);;
    if (isDifficulty === 'veryEasy') {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0,difference)]
    }
    if (isDifficulty === 'easy') {
        resultArray = [...easyFilter, ...normalFilter]
    }
    if (isDifficulty === 'hard') {
        resultArray = [...hardFilter, ...normalFilter]
    }
    if (isDifficulty === 'veryHard') {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0,difference)]
    }
    let result = resultArray;
    return result.slice(0,sum).sort(() => Math.round(Math.random() * 100) - 50);
}

function countCards() {
    for (let i = 0; i < circle.length; i++) {
        circle[i].textContent = arrayCards[i];
    }
}

function getCards() {
    let green = randomGreenCards();
    let brown = randomBrownCards();
    let blue = randomBlueCards();
    let firstGreen = ancientsData[isAncient].firstStage.greenCards;
    let secondGreen = ancientsData[isAncient].secondStage.greenCards + firstGreen;
    let thirdGreen = ancientsData[isAncient].thirdStage.greenCards + secondGreen;
    let firstBlue = ancientsData[isAncient].firstStage.blueCards;
    let secondBlue = ancientsData[isAncient].secondStage.blueCards + firstBlue;
    let thirdBlue = ancientsData[isAncient].thirdStage.blueCards + secondBlue;
    let firstBrown = ancientsData[isAncient].firstStage.brownCards;
    let secondBrown = ancientsData[isAncient].secondStage.brownCards + firstBrown;
    let thirdBrown = ancientsData[isAncient].thirdStage.brownCards + secondBrown;
    cardsForFirst = [...green.slice(0,firstGreen), ...brown.slice(0,firstBrown), ...blue.slice(0,firstBlue)].sort(() => Math.round(Math.random() * 100) - 50);
    cardsForSecond = [...green.slice(firstGreen,secondGreen), ...brown.slice(firstBrown,secondBrown), ...blue.slice(firstBlue,secondBlue)].sort(() => Math.round(Math.random() * 100) - 50);
    cardsForThird = [...green.slice(secondGreen,thirdGreen), ...brown.slice(secondBrown,thirdBrown), ...blue.slice(secondBlue,thirdBlue)].sort(() => Math.round(Math.random() * 100) - 50);
}
getCards();

function showCards() {
    if (cardsForFirst.length > 0) {
        deckShow.style.backgroundImage = `url(${cardsForFirst[0].cardFace})`
        if (cardsForFirst[0].color === 'green') {
            arrayCards[0] = arrayCards[0] - 1;
        }
        if (cardsForFirst[0].color === 'brown') {
            arrayCards[1] = arrayCards[1] - 1;
        } 
        if (cardsForFirst[0].color === 'blue') {
            arrayCards[2] = arrayCards[2] - 1;
        }
        console.log(`id: ${cardsForFirst[0].id}\ndif: ${cardsForFirst[0].difficulty}`);
        cardsForFirst.shift();
    }
    else if (cardsForSecond.length > 0) {
        deckShow.style.backgroundImage = `url(${cardsForSecond[0].cardFace})`
        if (cardsForSecond[0].color === 'green') {
            arrayCards[3] = arrayCards[3] - 1;
        }
        if (cardsForSecond[0].color === 'brown') {
            arrayCards[4] = arrayCards[4] - 1;
        } 
        if (cardsForSecond[0].color === 'blue') {
            arrayCards[5] = arrayCards[5] - 1;
        }
        console.log(`id: ${cardsForSecond[0].id}\ndif: ${cardsForSecond[0].difficulty}`);
        cardsForSecond.shift();
    }
    else if (cardsForThird.length > 0) {
        deckShow.style.backgroundImage = `url(${cardsForThird[0].cardFace})`
        if (cardsForThird[0].color === 'green') {
            arrayCards[6] = arrayCards[6] - 1;
        }
        if (cardsForThird[0].color === 'brown') {
            arrayCards[7] = arrayCards[7] - 1;
        } 
        if (cardsForThird[0].color === 'blue') {
            arrayCards[8] = arrayCards[8] - 1;
        }
        console.log(`id: ${cardsForThird[0].id}\ndif: ${cardsForThird[0].difficulty}`);
        cardsForThird.shift();
    } 
    if (cardsForThird.length === 0) {
        deck.style.opacity = 0;
    }
    deckShow.style.opacity = 1;
    countCards()
}

deck.addEventListener('click', showCards);
azathoth.addEventListener('click', () => {
    isAncient = 0;
    cthulthu.classList.remove('card_active');
    iogSothoth.classList.remove('card_active');
    snubNiggurath.classList.remove('card_active');
    azathoth.classList.add('card_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
cthulthu.addEventListener('click', () => {
    isAncient = 1;
    cthulthu.classList.add('card_active');
    iogSothoth.classList.remove('card_active');
    snubNiggurath.classList.remove('card_active');
    azathoth.classList.remove('card_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
iogSothoth.addEventListener('click', () => {
    isAncient = 2;
    cthulthu.classList.remove('card_active');
    iogSothoth.classList.add('card_active');
    snubNiggurath.classList.remove('card_active');
    azathoth.classList.remove('card_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
snubNiggurath.addEventListener('click', () => {
    isAncient = 3;
    cthulthu.classList.remove('card_active');
    iogSothoth.classList.remove('card_active');
    snubNiggurath.classList.add('card_active');
    azathoth.classList.remove('card_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
veryEasy.addEventListener('click', () => {
    isDifficulty = 'veryEasy';
    veryEasy.classList.add('level_active');
    easy.classList.remove('level_active');
    normal.classList.remove('level_active');
    hard.classList.remove('level_active');
    veryHard.classList.remove('level_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
easy.addEventListener('click', () => {
    isDifficulty = 'easy';
    veryEasy.classList.remove('level_active');
    easy.classList.add('level_active');
    normal.classList.remove('level_active');
    hard.classList.remove('level_active');
    veryHard.classList.remove('level_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
normal.addEventListener('click', () => {
    isDifficulty = 'normal';
    veryEasy.classList.remove('level_active');
    easy.classList.remove('level_active');
    normal.classList.add('level_active');
    hard.classList.remove('level_active');
    veryHard.classList.remove('level_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
hard.addEventListener('click', () => {
    isDifficulty = 'hard';
    veryEasy.classList.remove('level_active');
    easy.classList.remove('level_active');
    normal.classList.remove('level_active');
    hard.classList.add('level_active');
    veryHard.classList.remove('level_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})
veryHard.addEventListener('click', () => {
    isDifficulty = 'veryHard';
    veryEasy.classList.remove('level_active');
    easy.classList.remove('level_active');
    normal.classList.remove('level_active');
    hard.classList.remove('level_active');
    veryHard.classList.add('level_active');
    deckShow.style.opacity = 0;
    deck.style.opacity = 1;
    arrayCards = [...Object.values(ancientsData[isAncient].firstStage), ...Object.values(ancientsData[isAncient].secondStage), ...Object.values(ancientsData[isAncient].thirdStage)];
    countCards();
    getCards();
})

