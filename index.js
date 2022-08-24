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
console.log(difficultyLevel.classList == 'difficulty-level', 'visibility');

azathoth.addEventListener('click', () => {
    activateNormal ();
    azathoth.classList.toggle('active-card');
    IogSothoth.classList.remove('active-card');
    cthulthu.classList.remove('active-card');
    shubNiggurath.classList.remove('active-card');
});

IogSothoth.addEventListener('click', () => {
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



/********** Active stage dots **********/

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







