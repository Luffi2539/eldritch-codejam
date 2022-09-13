//AncientsData
const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: '../eldritch-codejam/assets/Ancients/Azathoth.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: '../eldritch-codejam/assets/Ancients/Cthulthu.png',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: '../eldritch-codejam/assets/Ancients/IogSothoth.png',
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: '../eldritch-codejam/assets/Ancients/ShubNiggurath.png',
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
];
//Deck data
const blueCardsData = [
  {
    id: 'blue1',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue1.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue2.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue3.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue4.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue5.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue6.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue7.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue8.png',
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue9.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue10.png',
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue11.png',
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: '../eldritch-codejam/assets/MythicCards/blue/blue12.png',
    difficulty: 'normal',
    color:'blue'
  },
];

const brownCardsData = [
  {
    id: 'brown1',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown1.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown2.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown3.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown4.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown5.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown6.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown7.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown8.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown9.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown10.png',
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown11.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown12.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown13.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown14.png',
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown15.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown16.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown17.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown18.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown19.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown20.png',
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    cardFace: '../eldritch-codejam/assets/MythicCards/brown/brown21.png',
    difficulty: 'easy',
    color:'brown'
  },
];

const greenCardsData = [
  {
    id: 'green1',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green1.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green2.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green3.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green4.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green5.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green6.png',
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green7.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green8.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green9.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green10.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green11.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green12.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green13.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green14.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green15.png',
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green16.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green17.png',
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    cardFace: '../eldritch-codejam/assets/MythicCards/green/green18.png',
    difficulty: 'easy',
    color:'green'
  },
];
//
//Set img ancients
const ancientsCards = document.querySelector('.ancients-container');

function setAncients () {
  for (let i = 0; i < ancientsData.length; i++) {
    ancientsCards.children[i].style.backgroundImage = `url(${ancientsData[i].cardFace})`;
  }
}
setAncients ();
//
// Summ cards
let sumGreenCards;
let sumBlueCards;
let sumBrownCards;

function sumCard(value) {
  sumGreenCards = value.firstStage.greenCards + value.secondStage.greenCards + value.thirdStage.greenCards;
  sumBlueCards = value.firstStage.blueCards + value.secondStage.blueCards + value.thirdStage.blueCards;
  sumBrownCards = value.firstStage.brownCards + value.secondStage.brownCards + value.thirdStage.brownCards;
  console.log(sumGreenCards, sumBrownCards, sumBlueCards)
};

//Select of ancient
const selectOfAzathoth = document.querySelector('.azathoth');
const selectOfCthulhu = document.querySelector('.cthulhu');
const selectOfIogSothoth = document.querySelector('.iogSothoth');
const selectOfShubNiggurath = document.querySelector('.shubNiggurath');
let ancient;

function selectAzathoth() {
  selectOfAzathoth.classList.add('ancient-active');
  selectOfCthulhu.classList.remove('ancient-active');
  selectOfIogSothoth.classList.remove('ancient-active');
  selectOfShubNiggurath.classList.remove('ancient-active');
  
  ancient = ancientsData[0];
  sumCard(ancient);
  return ancient;
};

function selectCthulhu() {
  selectOfAzathoth.classList.remove('ancient-active');
  selectOfCthulhu.classList.add('ancient-active');
  selectOfIogSothoth.classList.remove('ancient-active');
  selectOfShubNiggurath.classList.remove('ancient-active');
  ancient = ancientsData[1];
  sumCard(ancient);
  return ancient;
};

function selectIogSothoth() {
  selectOfAzathoth.classList.remove('ancient-active');
  selectOfCthulhu.classList.remove('ancient-active');
  selectOfIogSothoth.classList.add('ancient-active');
  selectOfShubNiggurath.classList.remove('ancient-active');
  ancient = ancientsData[2];
  sumCard(ancient);
  return ancient;
};

function selectShubNiggurath() {
  selectOfAzathoth.classList.remove('ancient-active');
  selectOfCthulhu.classList.remove('ancient-active');
  selectOfIogSothoth.classList.remove('ancient-active');
  selectOfShubNiggurath.classList.add('ancient-active');
  ancient = ancientsData[3];
  sumCard(ancient);
  return ancient;
};

selectOfAzathoth.addEventListener('click',selectAzathoth);
selectOfCthulhu.addEventListener('click',selectCthulhu);
selectOfIogSothoth.addEventListener('click',selectIogSothoth);
selectOfShubNiggurath.addEventListener('click',selectShubNiggurath);
//
//Selec difficulity

//Normal
const selectEasy = document.querySelector('.easy');
const selectNormal = document.querySelector('.normal');
const selectHard = document.querySelector('.hard');
let newDeck = [];

function normalDeck() {
  selectEasy.classList.remove('active');
  selectNormal.classList.add('active');
  selectHard.classList.remove('active');
  shuffle(greenCardsData);
  shuffle(blueCardsData);
  shuffle(brownCardsData);
  return newDeck = [greenCardsData.slice(0, sumGreenCards), blueCardsData.slice(0, sumBlueCards), brownCardsData.slice(0, sumBrownCards) ] 
}

selectNormal.addEventListener('click', normalDeck);
//
//Easy
function easyDeck() {
  selectEasy.classList.add('active');
  selectNormal.classList.remove('active');
  selectHard.classList.remove('active');
  shuffle(greenCardsData);
  shuffle(blueCardsData);
  shuffle(brownCardsData);
  let arr1 = greenCardsData.filter((value) => {
    if (value.difficulty === 'hard') {
      return false } return true
  }).slice(0, sumGreenCards);
  let arr2 = blueCardsData.filter((value) => {
    if (value.difficulty === 'hard') {
      return false } return true
  }).slice(0, sumBlueCards);
  let arr3 = brownCardsData.filter((value) => {
    if (value.difficulty === 'hard') {
      return false } return true
  }).slice(0, sumBrownCards);
  return newDeck = [arr1, arr2, arr3];
}
selectEasy.addEventListener('click', easyDeck);
//
// Hard
function hardDeck() {
  selectEasy.classList.remove('active');
  selectNormal.classList.remove('active');
  selectHard.classList.add('active');
  shuffle(greenCardsData);
  shuffle(blueCardsData);
  shuffle(brownCardsData);
  let arr1 = greenCardsData.filter((value) => {
    if (value.difficulty === 'easy') {
      return false } return true
  }).slice(0, sumGreenCards);
  let arr2 = blueCardsData.filter((value) => {
    if (value.difficulty === 'easy') {
      return false } return true
  }).slice(0, sumBlueCards);
  let arr3 = brownCardsData.filter((value) => {
    if (value.difficulty === 'easy') {
      return false } return true
  }).slice(0, sumBrownCards);
  return newDeck = [arr1, arr2, arr3];
}
selectHard.addEventListener('click', hardDeck);
//
//Set final Deck
const shuffleDeck = document.querySelector('.shuffle')
const fc1 = document.querySelector('.f1')
const fc2 = document.querySelector('.f2')
const fc3 = document.querySelector('.f3')
const fc4 = document.querySelector('.f4')
const fc5 = document.querySelector('.f5')
const fc6 = document.querySelector('.f6')
const fc7 = document.querySelector('.f7')
const fc8 = document.querySelector('.f8')
const fc9 = document.querySelector('.f9')
let finalDeck =[];

function collectFirstStage() {
  let greenCardsNumber = ancient.firstStage.greenCards;
  let blueCardsNumber = ancient.firstStage.blueCards;
  let brownCardNumber = ancient.firstStage.brownCards;
  return [newDeck[0].splice(0, greenCardsNumber), newDeck[1].splice(0, blueCardsNumber), newDeck[2].splice(0, brownCardNumber)];
}
function collectSecondStage() {
  let greenCardsNumber = ancient.secondStage.greenCards;
  let blueCardsNumber = ancient.secondStage.blueCards;
  let brownCardNumber = ancient.secondStage.brownCards;
  return [newDeck[0].splice(0, greenCardsNumber), newDeck[1].splice(0, blueCardsNumber), newDeck[2].splice(0, brownCardNumber)];
}
function collectThirdStage() {
  let greenCardsNumber = ancient.thirdStage.greenCards;
  let blueCardsNumber = ancient.thirdStage.blueCards;
  let brownCardNumber = ancient.thirdStage.brownCards;
  return [newDeck[0].splice(0, greenCardsNumber), newDeck[1].splice(0, blueCardsNumber), newDeck[2].splice(0, brownCardNumber)];
}

let arrFirstStage = [];
let arrSecondStage = [];
let arrThirdStage = [];
const circlesFirstStage = document.querySelector('.first-stage');
const circlesSecondStage = document.querySelector('.second-stage');
const circlesThirdStage = document.querySelector('.third-stage');

function collectDeck () {
  arrFirstStage = collectFirstStage();
  arrSecondStage = collectSecondStage();
  arrThirdStage = collectThirdStage();
  fc1.innerHTML = `${arrFirstStage[0].length}`;
  fc2.innerHTML = `${arrFirstStage[1].length}`;
  fc3.innerHTML = `${arrFirstStage[2].length}`;
  fc4.innerHTML = `${arrSecondStage[0].length}`;
  fc5.innerHTML = `${arrSecondStage[1].length}`;
  fc6.innerHTML = `${arrSecondStage[2].length}`;
  fc7.innerHTML = `${arrThirdStage[0].length}`;
  fc8.innerHTML = `${arrThirdStage[1].length}`;
  fc9.innerHTML = `${arrThirdStage[2].length}`;
  let ar1 = arrFirstStage.flat(2);
  shuffle(ar1);
  let ar2 = arrSecondStage.flat(2);
  shuffle(ar2);
  let ar3 = arrThirdStage.flat(2);
  shuffle(ar3);
  lastCard.style.backgroundImage = `url(../eldritch-codejam/assets/mythicCardBackground.png)`;
  return finalDeck = ar1.concat(ar2, ar3);
}

shuffleDeck.addEventListener('click',collectDeck );
//
// LastCard
const lastCard = document.querySelector('.last-card');

function fillCircle(array, selector) {
  // selector.children[0].innerHTML = `${array[0].length}`;
  for (let i = 0; i <= 3; i++){
    selector.children[i].innerHTML = `${array[i].length}`;
  }
}

function showLastCard () {
  console.log(arrFirstStage)
  let arr = finalDeck.shift();
  lastCard.style.backgroundImage = `url(${arr.cardFace})`;
  if (finalDeck.length === 0) {
    // lastCard.style.backgroundImage = `url(../eldritch-codejam/assets/no_card.jpg)`;
    document.location.reload();
  }
  fillCircle(arrFirstStage, circlesFirstStage);
}

lastCard.addEventListener('click', showLastCard)
//
//Counter
// const stage = document.querySelector('.dots-container');





//Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
