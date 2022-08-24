// import difficulties from './dacardsDataGreenta/difficulties.js';

import cardsDataBlue from './data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';

import ancientsData from './data/ancients.js';

let greenArray = [];
let brownArray = [];
let bluArray = [];
let stage = 0;
let matrix = [
    [],
    [],
    [],
];

const gameTableStack = document.querySelectorAll('.game__table__stack');
const gameCardBackground = document.querySelector('.game__card-background');
const gameCardItem = document.querySelector('.game__card-item')

let ancientItem = 0;
let difficult = 1;

createMatrix(ancientItem);
addgameTableStack(matrix);
sortArray (ancientItem, difficult)

// START game__table

function addgameTableStack(matrix) {
    let i = 0
    matrix.forEach(element => {
    element.forEach(e => {
        gameTableStack[i].textContent = e;
        i++
    });
});
}

// End game__table

// Создание матрицы

function createMatrix (ancient) {
    matrix[0] = Object.values(ancientsData[ancient].firstStage);
    matrix[1] = Object.values(ancientsData[ancient].secondStage);
    matrix[2] = Object.values(ancientsData[ancient].thirdStage);
}

// Конец матрицы

// START Сhoice Ancients

document.querySelector('.ancients').addEventListener('click', (e)=> {
    stage = 0;
    removeAncientsItemActive();
    gameCardItem.style.backgroundImage = '';
    
    if (e.target.classList.contains('ancients__item')) {

            let classes = e.target.classList;
            if(classes.contains('ancients__item_1')) {
                ancientItem = 0;
                document.querySelector('.ancients__item_1').classList.add('ancients__item_active');
            }
            if(classes.contains('ancients__item_2')) {
                ancientItem = 1;
                document.querySelector('.ancients__item_2').classList.add('ancients__item_active');
            }
            if(classes.contains('ancients__item_3')) {
                ancientItem = 2;
                document.querySelector('.ancients__item_3').classList.add('ancients__item_active');
            }
            if(classes.contains('ancients__item_4')) {
                ancientItem = 3;
                document.querySelector('.ancients__item_4').classList.add('ancients__item_active');
            }
        }

        createMatrix(ancientItem);
        addgameTableStack(matrix);
        sortArray (ancientItem, difficult);

console.log('greenArray',greenArray);
console.log('brownArray',brownArray);
console.log('bluArray',bluArray);
console.log('matrix',matrix);


});

function removeAncientsItemActive () {
    let items = document.querySelectorAll('.ancients__item');
    items.forEach(item => {
        item.classList.remove('ancients__item_active');
    })
}

// END Сhoice Ancients

// START Сhoice difficult


document.querySelector('.difficulty-selection').addEventListener('click', (e)=> {
    stage = 0;
    removeDifficultyItemActive();
    gameCardItem.style.backgroundImage = ''
    
    if (e.target.classList.contains('difficulty-selection__item')) {

            let classes = e.target.classList;
            if(classes.contains('difficulty-selection__item_1')) {
                difficult = 1;
                document.querySelector('.difficulty-selection__item_1').classList.add('difficulty-selection__item_active');
            }
            if(classes.contains('difficulty-selection__item_2')) {
                difficult = 2;
                document.querySelector('.difficulty-selection__item_2').classList.add('difficulty-selection__item_active');
            }
            if(classes.contains('difficulty-selection__item_3')) {
                difficult = 3;
                document.querySelector('.difficulty-selection__item_3').classList.add('difficulty-selection__item_active');
            }
            if(classes.contains('difficulty-selection__item_4')) {
                difficult = 4;
                document.querySelector('.difficulty-selection__item_4').classList.add('difficulty-selection__item_active');
            }
            if(classes.contains('difficulty-selection__item_5')) {
                difficult = 5;
                document.querySelector('.difficulty-selection__item_5').classList.add('difficulty-selection__item_active');
            }
        }

        createMatrix(ancientItem);
        addgameTableStack(matrix);
        sortArray (ancientItem, difficult);



console.log('greenArray',greenArray);
console.log('brownArray',brownArray);
console.log('bluArray',bluArray);
console.log('matrix',matrix);

});

function removeDifficultyItemActive () {
    let items = document.querySelectorAll('.difficulty-selection__item');
    items.forEach(item => {
        item.classList.remove('difficulty-selection__item_active');
    })
}

// END Сhoice difficult

// START MAIN SORT


function sortArray (ancient, difficult) {

        let greenArrayEasy = [];
        let greenArrayNormal = [];
        let greenArrayHard = [];      
        let brownArrayEasy = [];
        let brownArrayNormal = [];
        let brownArrayHard = [];      
        let bluArrayEasy = [];
        let bluArrayNormal = [];
        let bluArrayHard = [];      

        let greenCards = ancientsData[ancient].firstStage.greenCards
        + ancientsData[ancient].secondStage.greenCards
        + ancientsData[ancient].thirdStage.greenCards;

        let blueCards = ancientsData[ancient].firstStage.blueCards
        + ancientsData[ancient].secondStage.blueCards
        + ancientsData[ancient].thirdStage.blueCards;

        let brownCards = ancientsData[ancient].firstStage.brownCards
        + ancientsData[ancient].secondStage.brownCards
        + ancientsData[ancient].thirdStage.brownCards;

        addArrayWithDifficult(cardsDataGreen, greenArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataGreen, greenArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataGreen, greenArrayHard, 'hard');

        addArrayWithDifficult(cardsDataBlue, bluArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataBlue, bluArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataBlue, bluArrayHard, 'hard');

        addArrayWithDifficult(cardsDataBrown, brownArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataBrown, brownArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataBrown, brownArrayHard, 'hard');

        if (difficult === 1) {
            greenArray = [...greenArrayEasy,...greenArrayNormal];
            brownArray = [...brownArrayEasy,...brownArrayNormal];
            bluArray = [...bluArrayEasy,...bluArrayNormal];

        }
        if (difficult === 2) {
            greenArray = [...greenArrayEasy,...greenArrayNormal];
            brownArray = [...brownArrayEasy,...brownArrayNormal];
            bluArray = [...bluArrayEasy,...bluArrayNormal];

        }
        if (difficult === 3) {

            greenArray = [...greenArrayEasy,...greenArrayNormal,...greenArrayHard];
            brownArray = [...brownArrayEasy,...brownArrayNormal,...brownArrayHard];
            bluArray = [...bluArrayEasy,...bluArrayNormal,...bluArrayHard];

            shuffle(greenArray);
            shuffle(brownArray);
            shuffle(bluArray);

        }
        if (difficult === 4) {

            greenArray = [...greenArrayNormal,...greenArrayHard];
            brownArray = [...brownArrayNormal,...brownArrayHard];
            bluArray = [...bluArrayNormal,...bluArrayHard];

        }
        if (difficult === 5) {

            greenArray = [...greenArrayHard,...greenArrayNormal];
            brownArray = [...brownArrayHard,...brownArrayNormal];
            bluArray = [...bluArrayHard,...bluArrayNormal,];

        }

        lengthСheckArray(greenCards, greenArray);
        lengthСheckArray(brownCards, brownArray);
        lengthСheckArray(blueCards, bluArray);

    
}


function addArrayWithDifficult(data,array,difficult) {
    data.forEach(element => {
        if (element.difficulty === difficult) {
            array.push(element.cardFace)
        }
    });
    shuffle(array);
}

function lengthСheckArray(cards, array) {
    if (array.length > cards) {
        while (array.length > cards) {
            array.pop()
        }
        return shuffle(array);
}
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
   }

// END MAIN SORT

// START REMOVE MATRIX
    
    function getRandomNum() {
        return Math.floor(Math.random() * (3 - 0));
     };

     function proofOfSummStageMatrix(array) {
        return array.reduce((acc, num) => acc + num, 0);
     };

gameCardBackground.addEventListener('click', () => {
    
    let summStageMatrix = proofOfSummStageMatrix(matrix[stage]);
    if (stage === 2 && summStageMatrix === 0) {
        gameCardItem.style.backgroundImage = ''
    } else {

    let random = getRandomNum();

    if (summStageMatrix === 0) {
        stage += 1;
    }
    console.log('stage',stage)
        showbackgroundImage(random);
        addgameTableStack(matrix);
    }

})

function showbackgroundImage (random) {
    // if(matrix[stage][random] === undefined) {
    //     return
    // } else
    if (random === 0 && matrix[stage][random] !== 0) {
        gameCardItem.style.backgroundImage = `${greenArray.pop()}`;
        matrix[stage][random] -= 1; 
    } else
    if (random === 1 && matrix[stage][random] !== 0) {
        gameCardItem.style.backgroundImage = `${bluArray.pop()}`;
        matrix[stage][random] -= 1;
    } else
    if (random === 2 && matrix[stage][random] !== 0) {
        gameCardItem.style.backgroundImage = `${brownArray.pop()}`;
        matrix[stage][random] -= 1;
    } else {
        showbackgroundImage(getRandomNum());
    }
}


// shuffle(greenArray);
// shuffle(brownArray);
// shuffle(bluArray);

// console.log('greenArray',greenArray);
// console.log('brownArray',brownArray);
// console.log('bluArray',bluArray);
// console.log('matrix',matrix);

// END REMOVE MATRIX



