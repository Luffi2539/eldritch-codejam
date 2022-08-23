// import difficulties from './data/difficulties.js';

// console.log(difficulties)


import cardsDataBlue from './data/mythicCards/blue/index.js';
console.log('cardsDataBlue', cardsDataBlue)
import cardsDataBrown from './data/mythicCards/brown/index.js';
console.log('cardsDataBrown', cardsDataBrown)
import cardsDataGreen from './data/mythicCards/green/index.js';
console.log('cardsDataGreen', cardsDataGreen)

import ancientsData from './data/ancients.js';
console.log('ancientsData', ancientsData)








document.querySelector('.game__card-item').style.backgroundImage = 'url(../assets/MythicCards/blue/blue5.png)'
// document.querySelector('.game__card-item').style.backgroundSize = 'cover'

// background: url(../assets/MythicCards/blue/blue1.png);


// START Сhoice Ancients

document.querySelector('.ancients').addEventListener('click', (e)=> {
    removeAncientsItemActive();

    
    if (e.target.classList.contains('ancients__item')) {

            let classes = e.target.classList;
            if(classes.contains('ancients__item_1')) {
                document.querySelector('.ancients__item_1').classList.add('ancients__item_active');              console.log(1)
            }
            if(classes.contains('ancients__item_2')) {
                document.querySelector('.ancients__item_2').classList.add('ancients__item_active');              console.log(1)

            }
            if(classes.contains('ancients__item_3')) {
                document.querySelector('.ancients__item_3').classList.add('ancients__item_active');              console.log(1)

            }
            if(classes.contains('ancients__item_4')) {
                document.querySelector('.ancients__item_4').classList.add('ancients__item_active');              console.log(1)

            }
        }


});


const removeAncientsItemActive = () => {
    let items = document.querySelectorAll('.ancients__item');
    items.forEach(item => {
        item.classList.remove('ancients__item_active');
        // item.classList.add('tag_bordered');
    })
}



// END Сhoice Ancients

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
        }
    })
}



let ancientItem = 0;
let difficultItem = 1;

// START MAIN SORT
let greenArray = [];


function sortArray (ancient = 0, difficult = 1) {

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

        // let greenArray = [];
        if (difficult = 1) {
            cardsDataGreen.forEach(element => {
                if (element.difficulty === 'easy') {
                    greenArray.push(element.cardFace)
                }
            });
        }
        console.log('greenArray1111', greenArray)
        
        // if (greenArray.length === greenCards) {
        //    let greenArray1 = shuffle(greenArray);
        // }
        // console.log('greenArray22222', greenArray1)
    
}
sortArray()


function shuffle(array) {
    return   array.sort(() => Math.random() - 0.5);
   }

  setTimeout(() => {
    console.log(shuffle(greenArray))
  }, 5000);

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