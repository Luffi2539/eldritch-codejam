import cardsDataGreen from './data/mythicCards/green/indexGreen.js';
import cardsDataBrown from './data/mythicCards/brown/indexBrown.js';
import cardsDataBlue from './data/mythicCards/blue/indexBlue.js';

// ---------------------------------------
const knife = new Audio('./assets/Audio/6802dff441a6d4e (mp3cut.net).mp3');
const music = new Audio('./assets/Audio/film-ujasov-kino.mp3');
const difficulty = document.querySelectorAll(".difficulty");
const takeCard = document.querySelector(".deck");
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

function playAudio(item, audio, volume) {
    item.addEventListener("click", () => {
        audio.play();
    });
    audio.volume = volume;
}

difficulty.forEach(item => {
    item.addEventListener("click", () => {
        knife.play();
        knife.volume = .1;
    });
});

playAudio(card1, new Audio('./assets/Audio/monster1.mp3'), .1);
playAudio(card2, new Audio('./assets/Audio/monster2.mp3'), .1);
playAudio(card3, new Audio('./assets/Audio/monster3.mp3'), .1);
playAudio(card4, new Audio('./assets/Audio/monster4.mp3'), .1);
playAudio(takeCard, new Audio('./assets/Audio/mb_card_deal_08.mp3'), .1);

document.querySelector('.rain').volume = .1;

// ---------------------------------------
const cards = document.querySelectorAll('.ancient-cards img')
const deck = document.querySelector('.deck-of-cards');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('fire-border'));
        card.classList.add('fire-border');
    })
});

difficulty.forEach(item => {
    item.addEventListener('click', () => {
        difficulty.forEach(item => item.classList.remove('fire-border'));
        item.classList.add('fire-border');
        deck.classList.add('show');
    })
});

// ---------------------------------------
const firstGreen = document.querySelector('.first-green');
const firstBrown = document.querySelector('.first-brown');
const firstBlue = document.querySelector('.first-blue');
const secondGreen = document.querySelector('.second-green');
const secondBrown = document.querySelector('.second-brown');
const secondBlue = document.querySelector('.second-blue');
const thirdGreen = document.querySelector('.third-green');
const thirdBrown = document.querySelector('.third-brown');
const thirdBlue = document.querySelector('.third-blue');

const difficultyBlock = document.querySelector('.difficulty-level');

card1.addEventListener('click', () => {
    firstGreen.value = 0;
    firstBrown.value = 2;
    firstBlue.value = 2;
    secondGreen.value = 1;
    secondBrown.value = 3;
    secondBlue.value = 0;
    thirdGreen.value = 3;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
    difficultyBlock.classList.remove('hide');
});

card2.addEventListener('click', () => {
    firstGreen.value = 1;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 3;
    secondBrown.value = 2;
    secondBlue.value = 1;
    thirdGreen.value = 2;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
    difficultyBlock.classList.remove('hide');
});

card3.addEventListener('click', () => {
    firstGreen.value = 0;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 2;
    secondBrown.value = 3;
    secondBlue.value = 1;
    thirdGreen.value = 3;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
    difficultyBlock.classList.remove('hide');
});

card4.addEventListener('click', () => {
    firstGreen.value = 1;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 2;
    secondBrown.value = 3;
    secondBlue.value = 1;
    thirdGreen.value = 2;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
    difficultyBlock.classList.remove('hide');
});

// ---------------------------------------

let arrayOfGreenEasy = []; // 5
let arrayOfBrownEasy = []; // 5
let arrayOfBlueEasy = []; // 4

let arrayOfGreenNormal = []; // 8
let arrayOfBrownNormal = []; // 11
let arrayOfBlueNormal = []; // 4

let arrayOfGreenHard = []; // 5
let arrayOfBrownHard = []; // 5
let arrayOfBlueHard = []; // 4

for (let i = 0; i < cardsDataGreen.length; i++) {
    if (cardsDataGreen[i].difficulty === 'easy') {
        arrayOfGreenEasy.push(cardsDataGreen[i]);
    } else if (cardsDataGreen[i].difficulty === 'normal') {
        arrayOfGreenNormal.push(cardsDataGreen[i]);
    } else {
        arrayOfGreenHard.push(cardsDataGreen[i]);
    }
}

for (let i = 0; i < cardsDataBrown.length; i++) {
    if (cardsDataBrown[i].difficulty === 'easy') {
        arrayOfBrownEasy.push(cardsDataBrown[i]);
    } else if (cardsDataBrown[i].difficulty === 'normal') {
        arrayOfBrownNormal.push(cardsDataBrown[i]);
    } else {
        arrayOfBrownHard.push(cardsDataBrown[i]);
    }
}

for (let i = 0; i < cardsDataBlue.length; i++) {
    if (cardsDataBlue[i].difficulty === 'easy') {
        arrayOfBlueEasy.push(cardsDataBlue[i]);
    } else if (cardsDataBlue[i].difficulty === 'normal') {
        arrayOfBlueNormal.push(cardsDataBlue[i]);
    } else {
        arrayOfBlueHard.push(cardsDataBlue[i]);
    }
}

// ---------------------------------------

const veryEasyDifficult = document.querySelector('.very-easy');
const easyDifficult = document.querySelector('.easy');
const normalDifficult = document.querySelector('.normal');
const hardDifficult = document.querySelector('.hard');
const veryHardDifficult = document.querySelector('.very-hard');

let deckFirstStage = [];
let deckSecondStage = [];
let deckThirdStage = [];

function sumCardsValues(color) {

    if (color === 'green') {
        return +firstGreen.value + +secondGreen.value + +thirdGreen.value;
    }
    if (color === 'brown') {
        return +firstBrown.value + +secondBrown.value + +thirdBrown.value;
    }
    if (color === 'blue') {
        return +firstBlue.value + +secondBlue.value + +thirdBlue.value;
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

card1.addEventListener('click', () => {

    takeCard.classList.remove('hide');

    veryEasyDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasy[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = thirdGreen.value;
        while (value_5 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = firstBlue.value;
        while (value_6 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_6--;
        }

        // ----------------------------------- //

        let firstCards = firstBrownArray.concat(firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    });

    easyDifficult.addEventListener('click', () => {

        let arrayOfGreenEasyAndVeryEasy = arrayOfGreenEasy.concat(arrayOfGreenNormal);
        let arrayOfBrownEasyAndVeryEasy = arrayOfBrownEasy.concat(arrayOfBrownNormal);
        let arrayOfBlueEasyAndVeryEasy = arrayOfBlueEasy.concat(arrayOfBlueNormal);

        shuffle(arrayOfGreenEasyAndVeryEasy);
        shuffle(arrayOfBrownEasyAndVeryEasy);
        shuffle(arrayOfBlueEasyAndVeryEasy);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('brown'); i++) {
            requiredCardsBrown.push(arrayOfBrownEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasyAndVeryEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = thirdGreen.value;
        while (value_5 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = firstBlue.value;
        while (value_6 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_6--;
        }

        // ----------------------------------- //

        let firstCards = firstBrownArray.concat(firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    normalDifficult.addEventListener('click', () => {

        let arrayOfGreen = arrayOfGreenEasy.concat(arrayOfGreenNormal, arrayOfGreenHard);
        let arrayOfBrown = arrayOfBrownEasy.concat(arrayOfBrownNormal, arrayOfBrownHard);
        let arrayOfBlue = arrayOfBlueEasy.concat(arrayOfBlueNormal, arrayOfBlueHard);

        shuffle(arrayOfGreen);
        shuffle(arrayOfBrown);
        shuffle(arrayOfBlue);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreen[i]);
        }

        for (let i = 0; i < sumCardsValues('brown'); i++) {
            requiredCardsBrown.push(arrayOfBrown[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlue[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    hardDifficult.addEventListener('click', () => {

        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenNormalAndHard[i]);
        }

        for (let i = 0; i < sumCardsValues('brown'); i++) {
            requiredCardsBrown.push(arrayOfBrownNormalAndHard[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueNormalAndHard[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    veryHardDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenHard[i]);
        }

        if (arrayOfBrownHard.length <= sumCardsValues('brown')) {
            arrayOfBrownHard.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownHard.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueHard[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;
    })

});

card2.addEventListener('click', () => {

    takeCard.classList.remove('hide');

    veryEasyDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    });

    easyDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstBrownArray.concat(firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    normalDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    hardDifficult.addEventListener('click', () => {

        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    veryHardDifficult.addEventListener('click', () => {


        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

});

card3.addEventListener('click', () => {

    takeCard.classList.remove('hide');

    veryEasyDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasy[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstBrown.value
        while (value_0 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_0--;
        }

        let value_1 = secondBrown.value;
        while (value_1 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBlue.value;
        while (value_2 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = thirdGreen.value;
        while (value_5 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = firstBlue.value;
        while (value_6 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_6--;
        }

        // ----------------------------------- //

        let firstCards = firstBrownArray.concat(firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    });

    easyDifficult.addEventListener('click', () => {

        let arrayOfGreenEasyAndVeryEasy = arrayOfGreenEasy.concat(arrayOfGreenNormal);
        let arrayOfBrownEasyAndVeryEasy = arrayOfBrownEasy.concat(arrayOfBrownNormal);
        let arrayOfBlueEasyAndVeryEasy = arrayOfBlueEasy.concat(arrayOfBlueNormal);

        shuffle(arrayOfGreenEasyAndVeryEasy);
        shuffle(arrayOfBrownEasyAndVeryEasy);
        shuffle(arrayOfBlueEasyAndVeryEasy);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('brown'); i++) {
            requiredCardsBrown.push(arrayOfBrownEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasyAndVeryEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstBrown.value
        while (value_0 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_0--;
        }

        let value_1 = secondBrown.value;
        while (value_1 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBlue.value;
        while (value_2 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = thirdGreen.value;
        while (value_5 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = firstBlue.value;
        while (value_6 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_6--;
        }

        // ----------------------------------- //

        let firstCards = firstBrownArray.concat(firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    normalDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    hardDifficult.addEventListener('click', () => {

        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    veryHardDifficult.addEventListener('click', () => {


        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value;
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value;
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = thirdBrown.value;
        while (value_3 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_3--;
        }

        let value_4 = secondGreen.value;
        while (value_4 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_4--;
        }

        let value_5 = secondBlue.value;
        while (value_5 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

});

card4.addEventListener('click', () => {

    takeCard.classList.remove('hide');

    veryEasyDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasy[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = secondBlue.value;
        while (value_3 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_3--;
        }

        let value_4 = thirdBrown.value;
        while (value_4 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_4--;
        }

        let value_5 = secondGreen.value;
        while (value_5 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    });

    easyDifficult.addEventListener('click', () => {

        let arrayOfGreenEasyAndVeryEasy = arrayOfGreenEasy.concat(arrayOfGreenNormal);
        let arrayOfBrownEasyAndVeryEasy = arrayOfBrownEasy.concat(arrayOfBrownNormal);
        let arrayOfBlueEasyAndVeryEasy = arrayOfBlueEasy.concat(arrayOfBlueNormal);

        shuffle(arrayOfGreenEasyAndVeryEasy);
        shuffle(arrayOfBrownEasyAndVeryEasy);
        shuffle(arrayOfBlueEasyAndVeryEasy);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        for (let i = 0; i < sumCardsValues('green'); i++) {
            requiredCardsGreen.push(arrayOfGreenEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('brown'); i++) {
            requiredCardsBrown.push(arrayOfBrownEasyAndVeryEasy[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasyAndVeryEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = secondBlue.value;
        while (value_3 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_3--;
        }

        let value_4 = thirdBrown.value;
        while (value_4 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_4--;
        }

        let value_5 = secondGreen.value;
        while (value_5 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    normalDifficult.addEventListener('click', () => {

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = secondBlue.value;
        while (value_3 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_3--;
        }

        let value_4 = thirdBrown.value;
        while (value_4 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_4--;
        }

        let value_5 = secondGreen.value;
        while (value_5 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    hardDifficult.addEventListener('click', () => {

        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = secondBlue.value;
        while (value_3 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_3--;
        }

        let value_4 = thirdBrown.value;
        while (value_4 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_4--;
        }

        let value_5 = secondGreen.value;
        while (value_5 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

    veryHardDifficult.addEventListener('click', () => {


        let arrayOfGreenNormalAndHard = arrayOfGreenNormal.concat(arrayOfGreenHard);
        let arrayOfBrownNormalAndHard = arrayOfBrownNormal.concat(arrayOfBrownHard);
        let arrayOfBlueNormalAndHard = arrayOfBlueNormal.concat(arrayOfBlueHard);

        shuffle(arrayOfGreenNormalAndHard);
        shuffle(arrayOfBrownNormalAndHard);
        shuffle(arrayOfBlueNormalAndHard);

        // ----------------------------------- //

        let requiredCardsGreen = [];
        let requiredCardsBrown = [];
        let requiredCardsBlue = [];

        if (arrayOfGreenEasy.length <= sumCardsValues('green')) {
            arrayOfGreenEasy.forEach(item => requiredCardsGreen.push(item));
        }

        for (let i = 0; i < sumCardsValues('green') - arrayOfGreenEasy.length; i++) {
            requiredCardsGreen.push(arrayOfGreenNormal[i]);
        }

        if (arrayOfBrownEasy.length <= sumCardsValues('brown')) {
            arrayOfBrownEasy.forEach(item => requiredCardsBrown.push(item));
        }

        for (let i = 0; i < sumCardsValues('brown') - arrayOfBrownEasy.length; i++) {
            requiredCardsBrown.push(arrayOfBrownNormal[i]);
        }

        for (let i = 0; i < sumCardsValues('blue'); i++) {
            requiredCardsBlue.push(arrayOfBlueEasy[i]);
        }

        shuffle(requiredCardsGreen);
        shuffle(requiredCardsBrown);
        shuffle(requiredCardsBlue);

        // ----------------------------------- //

        let firstGreenArray = [];
        let firstBrownArray = [];
        let firstBlueArray = [];

        let secondGreenArray = [];
        let secondBrownArray = [];
        let secondBlueArray = [];

        let thirdGreenArray = [];
        let thirdBrownArray = [];

        let value_0 = firstGreen.value
        while (value_0 > 0) {
            firstGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_0--;
        }

        let value_1 = firstBrown.value
        while (value_1 > 0) {
            firstBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_1--;
        }

        let value_2 = secondBrown.value;
        while (value_2 > 0) {
            secondBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_2--;
        }

        let value_3 = secondBlue.value;
        while (value_3 > 0) {
            secondBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_3--;
        }

        let value_4 = thirdBrown.value;
        while (value_4 > 0) {
            thirdBrownArray.push(requiredCardsBrown[0]);
            requiredCardsBrown = requiredCardsBrown.filter(function (item) { return item !== requiredCardsBrown[0] });
            value_4--;
        }

        let value_5 = secondGreen.value;
        while (value_5 > 0) {
            secondGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_5--;
        }

        let value_6 = thirdGreen.value;
        while (value_6 > 0) {
            thirdGreenArray.push(requiredCardsGreen[0]);
            requiredCardsGreen = requiredCardsGreen.filter(function (item) { return item !== requiredCardsGreen[0] });
            value_6--;
        }

        let value_7 = firstBlue.value;
        while (value_7 > 0) {
            firstBlueArray.push(requiredCardsBlue[0]);
            requiredCardsBlue = requiredCardsBlue.filter(function (item) { return item !== requiredCardsBlue[0] });
            value_7--;
        }

        // ----------------------------------- //

        let firstCards = firstGreenArray.concat(firstBrownArray, firstBlueArray);
        let secondCards = secondGreenArray.concat(secondBrownArray, secondBlueArray);
        let thirdCards = thirdGreenArray.concat(thirdBrownArray);

        shuffle(firstCards);
        shuffle(secondCards);
        shuffle(thirdCards);

        deckFirstStage = firstCards;
        deckSecondStage = secondCards;
        deckThirdStage = thirdCards;

    })

});

// ---------------------------------------

const randomCard = document.querySelector('.random-card');

takeCard.addEventListener('click', () => {

    randomCard.classList.add('show');

    if (deckFirstStage.length > 0) {
        randomCard.style.background = `url(${deckFirstStage[0].cardFace}) center/cover`;
        if (deckFirstStage[0].color === 'green') {
            firstGreen.value--;
        }
        if (deckFirstStage[0].color === 'brown') {
            firstBrown.value--;
        }
        if (deckFirstStage[0].color === 'blue') {
            firstBlue.value--;
        }
        deckFirstStage.shift();

    } else if (deckFirstStage.length === 0 && deckSecondStage.length > 0) {
        randomCard.style.background = `url(${deckSecondStage[0].cardFace}) center/cover`;
        if (deckSecondStage[0].color === 'green') {
            secondGreen.value--;
        }
        if (deckSecondStage[0].color === 'brown') {
            secondBrown.value--;
        }
        if (deckSecondStage[0].color === 'blue') {
            secondBlue.value--;
        }
        deckSecondStage.shift();

    } else if (deckSecondStage.length === 0 && deckThirdStage.length > 0) {
        randomCard.style.background = `url(${deckThirdStage[0].cardFace}) center/cover`;
        if (deckThirdStage[0].color === 'green') {
            thirdGreen.value--;
        }
        if (deckThirdStage[0].color === 'brown') {
            thirdBrown.value--;
        }
        if (deckThirdStage[0].color === 'blue') {
            thirdBlue.value--;
        }
        deckThirdStage.shift();
    }

    if (deckFirstStage.length === 0 && deckSecondStage.length === 0 && deckThirdStage.length === 0) {
        takeCard.classList.add('hide');
        difficultyBlock.classList.add('hide');
        card1.classList.remove('fire-border');
        difficulty.forEach(item => item.classList.remove('fire-border'));
        music.play();
    }

})