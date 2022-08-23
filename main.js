// import difficulties from './dacardsDataGreenta/difficulties.js';

// console.log(difficulties)


import cardsDataBlue from './data/mythicCards/blue/index.js';
console.log('cardsDataBlue', cardsDataBlue)
import cardsDataBrown from './data/mythicCards/brown/index.js';
console.log('cardsDataBrown', cardsDataBrown)
import cardsDataGreen from './data/mythicCards/green/index.js';
console.log('cardsDataGreen', cardsDataGreen)

import ancientsData from './data/ancients.js';
console.log('ancientsData', ancientsData)



let ancientItem = 0;
// let difficultItem = 1;




document.querySelector('.game__card-item').style.backgroundImage = 'url(../assets/MythicCards/blue/blue5.png)'
// document.querySelector('.game__card-item').style.backgroundSize = 'cover'

// background: url(../assets/MythicCards/blue/blue1.png);


// START Сhoice Ancients

document.querySelector('.ancients').addEventListener('click', (e)=> {
    removeAncientsItemActive();

    
    if (e.target.classList.contains('ancients__item')) {

            let classes = e.target.classList;
            if(classes.contains('ancients__item_1')) {
                ancientItem = 0;
                document.querySelector('.ancients__item_1').classList.add('ancients__item_active');              console.log(1)
            }
            if(classes.contains('ancients__item_2')) {
                ancientItem = 1;
                document.querySelector('.ancients__item_2').classList.add('ancients__item_active');              console.log(1)

            }
            if(classes.contains('ancients__item_3')) {
                ancientItem = 2;
                document.querySelector('.ancients__item_3').classList.add('ancients__item_active');              console.log(1)

            }
            if(classes.contains('ancients__item_4')) {
                ancientItem = 3;
                document.querySelector('.ancients__item_4').classList.add('ancients__item_active');              console.log(1)

            }
        }


});

const removeAncientsItemActive = () => {
    let items = document.querySelectorAll('.ancients__item');
    items.forEach(item => {
        item.classList.remove('ancients__item_active');
    })
}



// END Сhoice Ancients

// const addTagsClickHandler = () => {
//     document.querySelector('.strategies__tags').addEventListener('click', (e) => {
//         if (e.target.classList.contains('tag')) {
//             let clickedTag = e.target;
//             removeSelectedTags();
//             selectClickedTag(clickedTag);
//             if (clickedTag.innerText === 'All') {
//                 showAllStrategies();
//             } else {
//                 filterStrategyBySelectedTag(clickedTag.innerText);
//             }
//         }
//     })
// }



// let ancientItem = 0;
// let difficultItem = 1;

// START MAIN SORT
let greenArray = [];
let brownArray = [];
let bluArray = [];


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
        console.log('greenCards', greenCards)

        let blueCards = ancientsData[ancient].firstStage.blueCards
        + ancientsData[ancient].secondStage.blueCards
        + ancientsData[ancient].thirdStage.blueCards;
        console.log('blueCards', blueCards)

        let brownCards = ancientsData[ancient].firstStage.brownCards
        + ancientsData[ancient].secondStage.brownCards
        + ancientsData[ancient].thirdStage.brownCards;
        console.log('brownCards', brownCards)

        addArrayWithDifficult(cardsDataGreen, greenArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataGreen, greenArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataGreen, greenArrayHard, 'hard');

        addArrayWithDifficult(cardsDataBlue, bluArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataBlue, bluArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataBlue, bluArrayHard, 'hard');

        addArrayWithDifficult(cardsDataBrown, brownArrayEasy, 'easy');
        addArrayWithDifficult(cardsDataBrown, brownArrayNormal, 'normal');
        addArrayWithDifficult(cardsDataBrown, brownArrayHard, 'hard');


        // console.log('greenArray88888', greenArrayEasy)
        // console.log('greenArray9999', greenArrayNormal)
        // console.log('greenArray1010101', greenArrayHard)
        // console.log('greenArray88888', brownArrayEasy)
        // console.log('greenArray9999', brownArrayNormal)
        // console.log('greenArray1010101', brownArrayHard)


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
sortArray(0,5)

            console.log('greenArray', greenArray)
            console.log('bluArray', bluArray)
            console.log('brownArray', brownArray)


function addArrayWithDifficult(data,array,difficult) {
    data.forEach(element => {
        if (element.difficulty === difficult) {
            array.push(element.cardFace)
        }
    });
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

//   setTimeout(() => {
//     console.log(shuffle(greenArray))
//   }, 5000);

// END MAIN SORT

// const ancientsData = [
//     {
//       id: 'azathoth',
//       name: 'azathoth',
//       // cardFace: Ancients.azathoth,
//       firstStage: {
//         greenCards: 1,
//         blueCards: 1,
//         brownCards: 2,
//       },
//       secondStage: {
//         greenCards: 2,
//         blueCards: 1,
//         brownCards: 3,
//       },
//       thirdStage: {
//         greenCards: 2,
//         blueCards: 0,
//         brownCards: 4,
//       },
//     },