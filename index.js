import cardsDataGreen from './data/mythicCards/green/indexGreen.js';
import cardsDataBrown from './data/mythicCards/brown/indexBrown.js';
import cardsDataBlue from './data/mythicCards/blue/indexBlue.js';

// ---------------------------------------
const cards = document.querySelectorAll('.blood');
const deck = document.querySelector('.deck-of-cards');
const difficulty = document.querySelectorAll(".difficulty");

cards.forEach(card => {
    card.addEventListener('click', () => {
        leaveUsedCard(card);
    })
});

difficulty.forEach(item => {
    item.addEventListener('click', () => {
        leaveUsedDifficulty(item);
        deck.classList.add('show');
    })
});

// ---------------------------------------
const card1 = document.querySelector('.ancients-cards__card1');
const card2 = document.querySelector('.ancients-cards__card2');
const card3 = document.querySelector('.ancients-cards__card3');
const card4 = document.querySelector('.ancients-cards__card4');

const veryEasy = document.querySelector('.very-easy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.normal');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.very-hard');

const firstGreenValue = document.querySelector('.first-green');
const firstBrownValue = document.querySelector('.first-brown');
const firstBlueValue = document.querySelector('.first-blue');

const secondGreenValue = document.querySelector('.second-green');
const secondBrownValue = document.querySelector('.second-brown');
const secondBlueValue = document.querySelector('.second-blue');

const thirdGreenValue = document.querySelector('.third-green');
const thirdBrownValue = document.querySelector('.third-brown');
const thirdBlueValue = document.querySelector('.third-blue');

const randomCard = document.querySelector('.random-card');

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
};

function cardsColorValue(value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9) {
    document.querySelector('.first-green').value = value_1;
    document.querySelector('.first-brown').value = value_2;
    document.querySelector('.first-blue').value = value_3;
    document.querySelector('.second-green').value = value_4;
    document.querySelector('.second-brown').value = value_5;
    document.querySelector('.second-blue').value = value_6;
    document.querySelector('.third-green').value = value_7;
    document.querySelector('.third-brown').value = value_8;
    document.querySelector('.third-blue').value = value_9;
    return value_1 + +value_2 + +value_3 + +value_4 + +value_5 + +value_6 + +value_7 + +value_8 + +value_9;
};

let allCards = cardsDataGreen.concat(cardsDataBrown, cardsDataBlue);

function createArrayWithColorAndDifficult(color, difficulty) {
    let array = [];
    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].color === color && allCards[i].difficulty === difficulty) {
            array.push(allCards[i]);
        }
    }
    return array;
}

let arrayEasyNormalGreen = createArrayWithColorAndDifficult('green', 'easy').concat(createArrayWithColorAndDifficult('green', 'normal'));
let arrayEasyNormalBrown = createArrayWithColorAndDifficult('brown', 'easy').concat(createArrayWithColorAndDifficult('brown', 'normal'));
let arrayEasyNormalBlue = createArrayWithColorAndDifficult('blue', 'easy').concat(createArrayWithColorAndDifficult('blue', 'normal'));

let arrayHardNormalGreen = createArrayWithColorAndDifficult('green', 'hard').concat(createArrayWithColorAndDifficult('green', 'normal'));
let arrayHardNormalBrown = createArrayWithColorAndDifficult('brown', 'hard').concat(createArrayWithColorAndDifficult('brown', 'normal'));
let arrayHardNormalBlue = createArrayWithColorAndDifficult('blue', 'hard').concat(createArrayWithColorAndDifficult('blue', 'normal'));

function pushFromArray_1(dif, stage, value, array, dif_1) {
    if (dif == 'simple') {
        shuffle(array);
        for (let i = 0; i < value; i++) {
            stage.push(array[0]);
            array.shift();
        }
    }
    if (dif == 'complex') {
        for (let i = 0; i < value; i++) {
            if (array[0].difficulty === dif_1) {
                stage.push(array[0]);
                array.shift();
            } else if (array[0].difficulty === 'normal') {
                shuffle(array);
                stage.push(array[0]);
                array.shift();
            }
        }
    }
}

function createArrayOfStage(dif, arr_1, arr_2, arr_3, val_1, val_2, val_3, val_4, val_5, val_6, val_7, val_8, val_9, dif_1) {
    let stage_1 = []; let stage_2 = []; let stage_3 = [];
    let stage_4 = []; let stage_5 = []; let stage_6 = [];
    let stage_7 = []; let stage_8 = []; let stage_9 = [];

    pushFromArray_1(dif, stage_1, val_1, arr_1, dif_1);
    pushFromArray_1(dif, stage_2, val_2, arr_2, dif_1);
    pushFromArray_1(dif, stage_3, val_3, arr_3, dif_1);
    pushFromArray_1(dif, stage_4, val_4, arr_1, dif_1);
    pushFromArray_1(dif, stage_5, val_5, arr_2, dif_1);
    pushFromArray_1(dif, stage_6, val_6, arr_3, dif_1);
    pushFromArray_1(dif, stage_7, val_7, arr_1, dif_1);
    pushFromArray_1(dif, stage_8, val_8, arr_2, dif_1);
    pushFromArray_1(dif, stage_9, val_9, arr_3, dif_1);

    return shuffle(stage_1.concat(stage_2, stage_3, stage_4, stage_5, stage_6, stage_7, stage_8, stage_9));
};

let green_1 = [];
let brown_1 = [];
let blue_1 = [];

let green_2 = [];
let brown_2 = [];
let blue_2 = [];

let green_3 = [];
let brown_3 = [];
let blue_3 = [];

function splitArrayOfCards(cards, array, color, value) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].color === color) {
            array.push(cards[i]);
        }
    }
    array.length = value;
    for (let i = 0; i < cards.length; i++) {
        let myIndex = cards.indexOf(array[i]);
        if (myIndex !== -1) {
            cards.splice(myIndex, 1);
        }
    }
    return shuffle(array);
};

let array1 = [];
let array2 = [];
let array3 = [];

function divisionToCircles(cards, array) {
    splitArrayOfCards(cards, green_1, 'green', array[0]);
    splitArrayOfCards(cards, brown_1, 'brown', array[1]);
    splitArrayOfCards(cards, blue_1, 'blue', array[2]);
    splitArrayOfCards(cards, green_2, 'green', array[3]);
    splitArrayOfCards(cards, brown_2, 'brown', array[4]);
    splitArrayOfCards(cards, blue_2, 'blue', array[5]);
    splitArrayOfCards(cards, green_3, 'green', array[6]);
    splitArrayOfCards(cards, brown_3, 'brown', array[7]);
    splitArrayOfCards(cards, blue_3, 'blue', array[8]);
    array1 = sumValuesCirclesOneStage(green_1, brown_1, blue_1);
    array2 = sumValuesCirclesOneStage(green_2, brown_2, blue_2);
    array3 = sumValuesCirclesOneStage(green_3, brown_3, blue_3);
};

function leaveUsedDifficulty(dif) {
    difficulty.forEach(item => {
        item.classList.add('hide');
    });
    dif.classList.remove('hide');
    dif.classList.add('show');
}

function leaveUsedCard(card) {
    cards.forEach(item => {
        item.classList.add('hide');
    });
    card.classList.remove('hide');
    card.classList.add('show');
}

card1.addEventListener('click', () => {
    document.querySelector('.difficulty-level').classList.add('show');
    cardsColorValue(0, 2, 2, 1, 3, 0, 3, 4, 0);
    let array = [0, 2, 2, 1, 3, 0, 3, 4, 0];
    veryEasy.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 0, 2, 2, 1, 3, 0, 3, 4, 0, 'easy');
        divisionToCircles(cards, array);
    })
    easy.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 0, 2, 2, 1, 3, 0, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    normal.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', cardsDataGreen, cardsDataBrown, cardsDataBlue, 0, 2, 2, 1, 3, 0, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    hard.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 0, 2, 2, 1, 3, 0, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    veryHard.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 0, 2, 2, 1, 3, 0, 3, 4, 0, 'hard');
        divisionToCircles(cards, array);
    })

});

card2.addEventListener('click', () => {
    document.querySelector('.difficulty-level').classList.add('show');
    cardsColorValue(1, 2, 1, 3, 2, 1, 2, 4, 0);
    let array = [1, 2, 1, 3, 2, 1, 2, 4, 0];
    veryEasy.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 1, 2, 1, 3, 2, 1, 2, 4, 0, 'easy');
        divisionToCircles(cards, array);
    })
    easy.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 1, 2, 1, 3, 2, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    normal.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', cardsDataGreen, cardsDataBrown, cardsDataBlue, 1, 2, 1, 3, 2, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    hard.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 1, 2, 1, 3, 2, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    veryHard.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 1, 2, 1, 3, 2, 1, 2, 4, 0, 'hard');
        divisionToCircles(cards, array);
    })
});

card3.addEventListener('click', () => {
    document.querySelector('.difficulty-level').classList.add('show');
    cardsColorValue(0, 2, 1, 2, 3, 1, 3, 4, 0);
    let array = [0, 2, 1, 2, 3, 1, 3, 4, 0];
    veryEasy.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 0, 2, 1, 2, 3, 1, 3, 4, 0, 'easy');
        divisionToCircles(cards, array);
    })
    easy.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 0, 2, 1, 2, 3, 1, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    normal.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', cardsDataGreen, cardsDataBrown, cardsDataBlue, 0, 2, 1, 2, 3, 1, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    hard.addEventListener('click', () => {
        let cards = createArrayOfStage('simple', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 0, 2, 1, 2, 3, 1, 3, 4, 0);
        divisionToCircles(cards, array);
    })
    veryHard.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 0, 2, 1, 2, 3, 1, 3, 4, 0, 'hard');
        divisionToCircles(cards, array);
    })
});

card4.addEventListener('click', () => {
    document.querySelector('.difficulty-level').classList.add('show');
    cardsColorValue(1, 2, 1, 2, 3, 1, 2, 4, 0);
    let array = [1, 2, 1, 2, 3, 1, 2, 4, 0];
    veryEasy.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 1, 2, 1, 2, 3, 1, 2, 4, 0, 'easy');
        divisionToCircles(cards, array);
    })
    easy.addEventListener('click', () => {
        let cards = createArrayOfStage(arrayEasyNormalGreen, arrayEasyNormalBrown, arrayEasyNormalBlue, 1, 2, 1, 2, 3, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    normal.addEventListener('click', () => {
        let cards = createArrayOfStage(cardsDataGreen, cardsDataBrown, cardsDataBlue, 1, 2, 1, 2, 3, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    hard.addEventListener('click', () => {
        let cards = createArrayOfStage(arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 1, 2, 1, 2, 3, 1, 2, 4, 0);
        divisionToCircles(cards, array);
    })
    veryHard.addEventListener('click', () => {
        let cards = createArrayOfStage('complex', arrayHardNormalGreen, arrayHardNormalBrown, arrayHardNormalBlue, 1, 2, 1, 2, 3, 1, 2, 4, 0, 'hard');
        divisionToCircles(cards, array);
    })
});

function sumValuesCirclesOneStage(circle_1, circle_2, circle_3) {
    return circle_1.concat(circle_2, circle_3);
}

document.querySelector('.deck').addEventListener('click', () => {

    randomCard.classList.add('show');
    shuffle(array1);
    shuffle(array2);
    shuffle(array3);
    if (array1.length > 0) {
        randomCard.style.background = `url(${array1[0].cardFace}) center/cover`;
        if (array1[0].color === 'green') {
            firstGreenValue.value--;
        }
        if (array1[0].color === 'brown') {
            firstBrownValue.value--;
        }
        if (array1[0].color === 'blue') {
            firstBlueValue.value--;
        }
        array1.shift();
    } else if (array1.length === 0 && array2.length > 0) {
        document.querySelector('.first-stage').classList.add('through');
        randomCard.style.background = `url(${array2[0].cardFace}) center/cover`;
        if (array2[0].color === 'green') {
            secondGreenValue.value--;
        }
        if (array2[0].color === 'brown') {
            secondBrownValue.value--;
        }
        if (array2[0].color === 'blue') {
            secondBlueValue.value--;
        }
        array2.shift();
    } else if (array2.length === 0 && array3.length > 0) {
        document.querySelector('.second-stage').classList.add('through');
        randomCard.style.background = `url(${array3[0].cardFace}) center/cover`;
        if (array3[0].color === 'green') {
            thirdGreenValue.value--;
        }
        if (array3[0].color === 'brown') {
            thirdBrownValue.value--;
        }
        if (array3[0].color === 'blue') {
            thirdBlueValue.value--;
        }
        array3.shift();
    }
    if (thirdGreenValue.value == 0 && thirdBrownValue.value == 0 && thirdBlueValue.value == 0) {
        document.querySelector('.third-stage').classList.add('through');
        document.querySelector('.deck').classList.add('hide');
        function hideBlock() {
            document.querySelector('.difficulty-level').classList.remove('show');
            document.querySelector('.deck-of-cards').classList.remove('show');
        }
        function reloadPage() {
            location.reload();
        }
        setTimeout(hideBlock, 5000);
        setTimeout(reloadPage, 10000);
        new Audio('./assets/Audio/film-ujasov-kino.mp3').play();
    }
});