// import difficulties from './data/difficulties.js';

// console.log(difficulties)

import cardsDataBlue from './data/mythicCards/blue/index.js';
console.log('55555555', cardsDataBlue)
import cardsDataBrown from './data/mythicCards/brown/index.js';
console.log('666666666', cardsDataBrown)
import cardsDataGreen from './data/mythicCards/green/index.js';
console.log('7777777', cardsDataGreen)






function shuffle(array) {
 return   array.sort(() => Math.random() - 0.5);
  }
console.log(shuffle(['111111111','222222222','333333333']))


document.querySelector('.game__card-item').style.backgroundImage = 'url(../assets/MythicCards/blue/blue5.png)'
// document.querySelector('.game__card-item').style.backgroundSize = 'cover'

// background: url(../assets/MythicCards/blue/blue1.png);