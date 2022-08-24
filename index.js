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
const difficultyLevel = document.querySelector('.difficulty-level');
const normalLevel = document.querySelector('.normal');
const infoCards = document.querySelector('.info-cards');
const currentCard = document.querySelector('.current-card');
const mixUp = document.querySelector('.mix-up');
const stages = document.querySelector('.stages');
const deckCard = document.querySelector('.deck-card');

azathoth.addEventListener('click', () => {
    difficultyLevel.classList.toggle('visibility');
    azathoth.classList.toggle('active-card');
});

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

let azathothNormalFirstStage = [];

mixUp.addEventListener('click', () => {
    if ( azathoth == 'first-card', 'active-card' && normalLevel.classList == 'normal', 'active-normal') {
        azathothNormalFirstStage.push(ancientsData[0].firstStage);
    }
    
});







