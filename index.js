import blueCardsAssets from '../assets/MythicCards/blue/index.js';
import brownCardsAssets from '../assets/MythicCards/brown/index.js';
import greenCardsAssets from '../assets/MythicCards/green/index.js';
import ancients from '../assets/Ancients/index.js';
import ancientsData from './data/ancients.js';
import difficulties from '../data/difficulties.js';
/*import cardsDataBlue from '../data/mythicCards/blue/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js';
import cardsDataGreen from './data/mythicCards/green/index.js';*/



const azathoth = document.querySelector('.first-card');
const IogSothoth = document.querySelector('.second-card');
const cthulthu = document.querySelector('.third-card');
const shubNiggurath = document.querySelector('.fourth-card');

const difficultyLevel = document.querySelector('.difficulty-level');
const normalLevel = document.querySelector('.normal');
const infoCards = document.querySelector('.info-cards');
const currentCard = document.querySelector('.current-card');
const mixUp = document.querySelector('.mix-up');
const stages = document.querySelector('.stages');
const deckCard = document.querySelector('.deck-card');

const firstStage= document.querySelector('.first-stage');
const secondStage = document.querySelector('.second-stage');
const thirdStage = document.querySelector('.third-stage');

/********** Activate card **********/

function activateNormal ()  {
    if (difficultyLevel.classList == 'difficulty-level') {
        difficultyLevel.classList.toggle('visibility');
    } else 
            if (difficultyLevel.classList == 'difficulty-level', 'visibility') {
            difficultyLevel.classList.remove('visibility');
    }
}


azathoth.addEventListener('click', () => {
    activateNormal ();
    azathoth.classList.toggle('active-card');
    IogSothoth.classList.remove('active-card');
    cthulthu.classList.remove('active-card');
    shubNiggurath.classList.remove('active-card');
});

/*IogSothoth.addEventListener('click', () => {
    activateNormal ();
    IogSothoth.classList.toggle('active-card');
    azathoth.classList.remove('active-card');
    cthulthu.classList.remove('active-card');
    shubNiggurath.classList.remove('active-card');
});

cthulthu.addEventListener('click', () => {
    activateNormal ();
    cthulthu.classList.toggle('active-card');
    azathoth.classList.remove('active-card');
    IogSothoth.classList.remove('active-card');
    shubNiggurath.classList.remove('active-card');
});

shubNiggurath.addEventListener('click', () => {
    activateNormal ();
    shubNiggurath.classList.toggle('active-card');
    azathoth.classList.remove('active-card');
    IogSothoth.classList.remove('active-card');
    cthulthu.classList.remove('active-card');
});
*/

/********** Activate difficulty **********/

normalLevel.addEventListener('click', () => {
    if (normalLevel.classList == 'normal') {
    normalLevel.classList.toggle('active-normal');
    mixUp.classList.toggle('visibility-mix-up');
    } else if (normalLevel.classList == 'normal', 'active-normal') {
        normalLevel.classList.remove('active-normal');
        stages.classList.remove('active-info');
        deckCard.classList.remove('active-info');
        mixUp.classList.remove('visibility-mix-up');
        mixUp.classList.remove('visibility-hidden');
    }
    if (currentCard.classList = 'current-card', 'visibility') {
        currentCard.classList.remove('visibility');
    }
});

mixUp.addEventListener('click', () => {
    mixUp.classList.toggle('visibility-hidden');
    stages.classList.toggle('active-info');
    deckCard.classList.toggle('active-info');
  
});


/*deckCard.addEventListener('click', () => {
    currentCard.style.backgroundImage = "url('./assets/MythicCards/blue/blue1.png')";
});*/

/********** Active stage dots  **********/




/********** Mythic cards activate azathoth **********/

let cardsGreenAll = [];
let cardsBrownAll = [];
let cardsBlueAll =[];

let firstStageGreen = [];
let firstStageBrown = [];
let firstStageBlue = [];

let secondStageGreen = [];
let secondStageBrown = [];
let secondStageBlue = [];

let thirdStageGreen = [];
let thirdStageBrown = [];
let thirdStageBlue = [];

const greenCardsLength = Object.keys(greenCardsAssets).length;
const brownCardsLength = Object.keys(brownCardsAssets).length;
const blueCardsLength = Object.keys(blueCardsAssets).length;


let allStageGreenAzathoth = ancientsData[0].firstStage.greenCards + ancientsData[0].secondStage.greenCards + ancientsData[0].thirdStage.greenCards;
let allStageBrownAzathoth = ancientsData[0].firstStage.brownCards + ancientsData[0].secondStage.brownCards + ancientsData[0].thirdStage.brownCards;
let allStageBlueAzathoth = ancientsData[0].firstStage.blueCards + ancientsData[0].secondStage.blueCards + ancientsData[0].thirdStage.blueCards;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function allStageColorAzathoth () {
    for (let i = 0; i < allStageGreenAzathoth; i++) {
        let randomNum = getRandomInt(0, 18);
        cardsGreenAll.push(Object.keys(greenCardsAssets)[randomNum]);
    }
    for (let i = 0; i < allStageBrownAzathoth; i++) {
        let randomNum = getRandomInt(0, 21);
        cardsBrownAll.push(Object.keys(brownCardsAssets)[randomNum]);
    }
    for (let i = 0; i < allStageBlueAzathoth; i++) {
        let randomNum = getRandomInt(0, 12);
        cardsBlueAll.push(Object.keys(blueCardsAssets)[randomNum]);
    }
}
allStageColorAzathoth ();


function firstStageAzathoth () {
    for (let i = 0; i < ancientsData[0].firstStage.greenCards; i++) {
        let randomNum = getRandomInt(0, 5);
        firstStageGreen.push(cardsGreenAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].firstStage.brownCards; i++) {
        let randomNum = getRandomInt(0, 9);
        firstStageBrown.push(cardsBrownAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].firstStage.blueCards; i++) {
        let randomNum = getRandomInt(0, 2);
        firstStageBlue.push(cardsBlueAll[randomNum]);
    }
}
firstStageAzathoth ();


function secondStageAzathoth () {
    for (let i = 0; i < ancientsData[0].secondStage.greenCards; i++) {
        let randomNum = getRandomInt(0, 5);
        secondStageGreen.push(cardsGreenAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].secondStage.brownCards; i++) {
        let randomNum = getRandomInt(0, 9);
        secondStageBrown.push(cardsBrownAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].secondStage.blueCards; i++) {
        let randomNum = getRandomInt(0, 2);
        secondStageBlue.push(cardsBlueAll[randomNum]);
    }
}
secondStageAzathoth ();


function thirdStageAzathoth () {
    for (let i = 0; i < ancientsData[0].thirdStage.greenCards; i++) {
        let randomNum = getRandomInt(0, 5);
        thirdStageGreen.push(cardsGreenAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].thirdStage.brownCards; i++) {
        let randomNum = getRandomInt(0, 9);
        thirdStageBrown.push(cardsBrownAll[randomNum]);
    }
    for (let i = 0; i < ancientsData[0].thirdStage.blueCards; i++) {
        let randomNum = getRandomInt(0, 2);
        thirdStageBlue.push(cardsBlueAll[randomNum]);
    }
}
thirdStageAzathoth ();

mixUp.addEventListener('click', () => {
    
    if (azathoth == 'first-card', 'active-card' && normalLevel.classList == 'normal', 'active-normal') {
        firstStage.children[1].children[0].textContent = (ancientsData[0].firstStage.greenCards);
        firstStage.children[1].children[1].textContent = (ancientsData[0].firstStage.brownCards);
        firstStage.children[1].children[2].textContent = (ancientsData[0].firstStage.blueCards);

        secondStage.children[1].children[0].textContent = (ancientsData[0].secondStage.greenCards);
        secondStage.children[1].children[1].textContent = (ancientsData[0].secondStage.brownCards);
        secondStage.children[1].children[2].textContent = (ancientsData[0].secondStage.blueCards);

        thirdStage.children[1].children[0].textContent = (ancientsData[0].thirdStage.greenCards);
        thirdStage.children[1].children[1].textContent = (ancientsData[0].thirdStage.brownCards);
        thirdStage.children[1].children[2].textContent = (ancientsData[0].thirdStage.blueCards);
    } else 

    if (cthulthu == 'third-card', 'active-card' && normalLevel.classList == 'normal', 'active-normal') {
        firstStage.children[1].children[0].textContent = (ancientsData[1].firstStage.greenCards);
        firstStage.children[1].children[1].textContent = (ancientsData[1].firstStage.brownCards);
        firstStage.children[1].children[2].textContent = (ancientsData[1].firstStage.blueCards);

        secondStage.children[1].children[0].textContent = (ancientsData[1].secondStage.greenCards);
        secondStage.children[1].children[1].textContent = (ancientsData[1].secondStage.brownCards);
        secondStage.children[1].children[2].textContent = (ancientsData[1].secondStage.blueCards);

        thirdStage.children[1].children[0].textContent = (ancientsData[1].thirdStage.greenCards);
        thirdStage.children[1].children[1].textContent = (ancientsData[1].thirdStage.brownCards);
        thirdStage.children[1].children[2].textContent = (ancientsData[1].thirdStage.blueCards);
    } else

    if (IogSothoth == 'second-card', 'active-card' && normalLevel.classList == 'normal', 'active-normal') {
        firstStage.children[1].children[0].textContent = (ancientsData[2].firstStage.greenCards);
        firstStage.children[1].children[1].textContent = (ancientsData[2].firstStage.brownCards);
        firstStage.children[1].children[2].textContent = (ancientsData[2].firstStage.blueCards);

        secondStage.children[1].children[0].textContent = (ancientsData[2].secondStage.greenCards);
        secondStage.children[1].children[1].textContent = (ancientsData[2].secondStage.brownCards);
        secondStage.children[1].children[2].textContent = (ancientsData[2].secondStage.blueCards);

        thirdStage.children[1].children[0].textContent = (ancientsData[2].thirdStage.greenCards);
        thirdStage.children[1].children[1].textContent = (ancientsData[2].thirdStage.brownCards);
        thirdStage.children[1].children[2].textContent = (ancientsData[3].thirdStage.blueCards);
    } else

    if (shubNiggurath == 'fourth-card', 'active-card' && normalLevel.classList == 'normal', 'active-normal') {
        firstStage.children[1].children[0].textContent = (ancientsData[3].firstStage.greenCards);
        firstStage.children[1].children[1].textContent = (ancientsData[3].firstStage.brownCards);
        firstStage.children[1].children[2].textContent = (ancientsData[3].firstStage.blueCards);

        secondStage.children[1].children[0].textContent = (ancientsData[3].secondStage.greenCards);
        secondStage.children[1].children[1].textContent = (ancientsData[3].secondStage.brownCards);
        secondStage.children[1].children[2].textContent = (ancientsData[3].secondStage.blueCards);

        thirdStage.children[1].children[0].textContent = (ancientsData[3].thirdStage.greenCards);
        thirdStage.children[1].children[1].textContent = (ancientsData[3].thirdStage.brownCards);
        thirdStage.children[1].children[2].textContent = (ancientsData[3].thirdStage.blueCards);
    } else {
        firstStage.children[1].children[0].textContent = '';
        firstStage.children[1].children[1].textContent = '';
        firstStage.children[1].children[2].textContent = '';

        secondStage.children[1].children[0].textContent = '';
        secondStage.children[1].children[1].textContent = '';
        secondStage.children[1].children[2].textContent = '';

        thirdStage.children[1].children[0].textContent = '';
        thirdStage.children[1].children[1].textContent = '';
        thirdStage.children[1].children[2].textContent = '';
    }
});

let arrColor = ['green', 'brown', 'blue'];
let color = '';
function  colorBg () {
    if (arrColor.length > 0) {
    let randomNum =  getRandomInt (0, 3);
    return  color = arrColor[randomNum]; 
}
}

let colorNumBg = '';
function colorNum () {
    if (color  === 'green') {
        let randomNum = getRandomInt (0, 0);
        firstStage.children[1].children[0].textContent = ancientsData[0].firstStage.greenCards - 1;
        return colorNumBg = firstStageGreen[randomNum];
        
    } else if (color  === 'brown') {
        let randomNum = getRandomInt (0, 1);
        firstStage.children[1].children[1].textContent = ancientsData[0].firstStage.brownCards - 1;
        return colorNumBg = firstStageBrown[randomNum];
    } else if (color  === 'blue') {
        let randomNum = getRandomInt (0, 0);
        firstStage.children[1].children[2].textContent = ancientsData[0].firstStage.blueCards - 1;
        return colorNumBg =  firstStageBlue[randomNum];
    }
}




deckCard.addEventListener('click', () => {
    colorBg ();
    colorNum();
    currentCard.style.backgroundImage = `url('./assets/MythicCards/${color}/${colorNumBg}.png')`; 
});




/*console.log(firstStageGreen);
console.log(firstStageBrown);
console.log(firstStageBlue);

console.log(secondStageGreen);
console.log(secondStageBrown);
console.log(secondStageBlue);

console.log(thirdStageGreen);
console.log(thirdStageBrown);
console.log(thirdStageBlue);





console.log(cardsGreenAll);
console.log(cardsBrownAll);
console.log(cardsBlueAll);*/








