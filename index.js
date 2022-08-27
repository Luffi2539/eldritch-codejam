// import ancients from '../eldritch-codejam/assets/Ancients/index.js';
const ancientsCards = document.querySelector('.ancients-container');

//Ancients
const azathoth = '../eldritch-codejam/assets/Ancients/Azathoth.png';
const cthulhu = '../eldritch-codejam/assets/Ancients/Cthulthu.png';
const iogSothoth = '../eldritch-codejam/assets/Ancients/IogSothoth.png';
const shubNiggurath = '../eldritch-codejam/assets/Ancients/ShubNiggurath.png';

const ancients = {
  azathoth,
  cthulhu,
  iogSothoth,
  shubNiggurath
}


function setAncients () {
  ancientsCards.children[0].style.backgroundImage = `url(${ancients.azathoth})`;
  ancientsCards.children[1].style.backgroundImage = `url(${ancients.cthulhu})`;
  ancientsCards.children[2].style.backgroundImage = `url(${ancients.iogSothoth})`;
  ancientsCards.children[3].style.backgroundImage = `url(${ancients.shubNiggurath})`;
}
setAncients ();

//AncientsData
const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: ancients.azathoth,
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
    cardFace: ancients.cthulhu,
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
    cardFace: ancients.iogSothoth,
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
    cardFace: ancients.shubNiggurath,
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

//Deck
const blue1 = '../eldritch-codejam/assets/MythicCards/blue/blue1.png';
const blue2 = '../eldritch-codejam/assets/MythicCards/blue/blue2.png';
const blue3 = '../eldritch-codejam/assets/MythicCards/blue/blue3.png';
const blue4 = '../eldritch-codejam/assets/MythicCards/blue/blue4.png';
const blue5 = '../eldritch-codejam/assets/MythicCards/blue/blue5.png';
const blue6 = '../eldritch-codejam/assets/MythicCards/blue/blue6.png';
const blue7 = '../eldritch-codejam/assets/MythicCards/blue/blue7.png';
const blue8 = '../eldritch-codejam/assets/MythicCards/blue/blue8.png';
const blue9 = '../eldritch-codejam/assets/MythicCards/blue/blue9.png';
const blue10 = '../eldritch-codejam/assets/MythicCards/blue/blue10.png';
const blue11 = '../eldritch-codejam/assets/MythicCards/blue/blue11.png';
const blue12 = '../eldritch-codejam/assets/MythicCards/blue/blue12.png';

const blueCardsAssets = {
  blue1,
  blue2,
  blue3,
  blue4,
  blue5,
  blue6,
  blue7,
  blue8,
  blue9,
  blue10,
  blue11,
  blue12,
};

const blueCardsData = [
  {
    id: 'blue1',
    cardFace: blueCardsAssets.blue1,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue2',
    cardFace: blueCardsAssets.blue2,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue3',
    cardFace: blueCardsAssets.blue3,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue4',
    cardFace: blueCardsAssets.blue4,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue5',
    cardFace: blueCardsAssets.blue5,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue6',
    cardFace: blueCardsAssets.blue6,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue7',
    cardFace: blueCardsAssets.blue7,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue8',
    cardFace: blueCardsAssets.blue8,
    difficulty: 'hard',
    color:'blue'
  },
  {
    id: 'blue9',
    cardFace: blueCardsAssets.blue9,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue10',
    cardFace: blueCardsAssets.blue10,
    difficulty: 'easy',
    color:'blue'
  },
  {
    id: 'blue11',
    cardFace: blueCardsAssets.blue11,
    difficulty: 'normal',
    color:'blue'
  },
  {
    id: 'blue12',
    cardFace: blueCardsAssets.blue12,
    difficulty: 'normal',
    color:'blue'
  },
];

const brown1 = '../eldritch-codejam/assets/MythicCards/brown/brown1.png';
const brown2 = '../eldritch-codejam/assets/MythicCards/brown/brown2.png';
const brown3 = '../eldritch-codejam/assets/MythicCards/brown/brown3.png';
const brown4 = '../eldritch-codejam/assets/MythicCards/brown/brown4.png';
const brown5 = '../eldritch-codejam/assets/MythicCards/brown/brown5.png';
const brown6 = '../eldritch-codejam/assets/MythicCards/brown/brown6.png';
const brown7 = '../eldritch-codejam/assets/MythicCards/brown/brown7.png';
const brown8 = '../eldritch-codejam/assets/MythicCards/brown/brown8.png';
const brown9 = '../eldritch-codejam/assets/MythicCards/brown/brown9.png';
const brown10 = '../eldritch-codejam/assets/MythicCards/brown/brown10.png';
const brown11 = '../eldritch-codejam/assets/MythicCards/brown/brown11.png';
const brown12 = '../eldritch-codejam/assets/MythicCards/brown/brown12.png';
const brown13 = '../eldritch-codejam/assets/MythicCards/brown/brown13.png';
const brown14 = '../eldritch-codejam/assets/MythicCards/brown/brown14.png';
const brown15 = '../eldritch-codejam/assets/MythicCards/brown/brown15.png';
const brown16 = '../eldritch-codejam/assets/MythicCards/brown/brown16.png';
const brown17 = '../eldritch-codejam/assets/MythicCards/brown/brown17.png';
const brown18 = '../eldritch-codejam/assets/MythicCards/brown/brown18.png';
const brown19 = '../eldritch-codejam/assets/MythicCards/brown/brown19.png';
const brown20 = '../eldritch-codejam/assets/MythicCards/brown/brown20.png';
const brown21 = '../eldritch-codejam/assets/MythicCards/brown/brown21.png';

const brownCardsAssets = {
  brown1,
  brown2,
  brown3,
  brown4,
  brown5,
  brown6,
  brown7,
  brown8,
  brown9,
  brown10,
  brown11,
  brown12,
  brown13,
  brown14,
  brown15,
  brown16,
  brown17,
  brown18,
  brown19,
  brown20,
  brown21,
};

const brownCardsData = [
  {
    id: 'brown1',
    cardFace: brownCardsAssets.brown1,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown2',
    cardFace: brownCardsAssets.brown2,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown3',
    cardFace: brownCardsAssets.brown3,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown4',
    cardFace: brownCardsAssets.brown4,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown5',
    cardFace: brownCardsAssets.brown5,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown6',
    cardFace: brownCardsAssets.brown6,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown7',
    cardFace: brownCardsAssets.brown7,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown8',
    cardFace: brownCardsAssets.brown8,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown9',
    cardFace: brownCardsAssets.brown9,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown10',
    cardFace: brownCardsAssets.brown10,
    difficulty: 'hard',
    color:'brown'
  },
  {
    id: 'brown11',
    cardFace: brownCardsAssets.brown11,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown12',
    cardFace: brownCardsAssets.brown12,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown13',
    cardFace: brownCardsAssets.brown13,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown14',
    cardFace: brownCardsAssets.brown14,
    difficulty: 'easy',
    color:'brown'
  },
  {
    id: 'brown15',
    cardFace: brownCardsAssets.brown15,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown16',
    cardFace: brownCardsAssets.brown16,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown17',
    cardFace: brownCardsAssets.brown17,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown18',
    cardFace: brownCardsAssets.brown18,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown19',
    cardFace: brownCardsAssets.brown19,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown20',
    cardFace: brownCardsAssets.brown20,
    difficulty: 'normal',
    color:'brown'
  },
  {
    id: 'brown21',
    cardFace: brownCardsAssets.brown21,
    difficulty: 'easy',
    color:'brown'
  },
];

const green1 = '../eldritch-codejam/assets/MythicCards/green/green1.png';
const green2 = '../eldritch-codejam/assets/MythicCards/green/green2.png';
const green3 = '../eldritch-codejam/assets/MythicCards/green/green3.png';
const green4 = '../eldritch-codejam/assets/MythicCards/green/green4.png';
const green5 = '../eldritch-codejam/assets/MythicCards/green/green5.png';
const green6 = '../eldritch-codejam/assets/MythicCards/green/green6.png';
const green7 = '../eldritch-codejam/assets/MythicCards/green/green7.png';
const green8 = '../eldritch-codejam/assets/MythicCards/green/green8.png';
const green9 = '../eldritch-codejam/assets/MythicCards/green/green9.png';
const green10 = '../eldritch-codejam/assets/MythicCards/green/green10.png';
const green11 = '../eldritch-codejam/assets/MythicCards/green/green11.png';
const green12 = '../eldritch-codejam/assets/MythicCards/green/green12.png';
const green13 = '../eldritch-codejam/assets/MythicCards/green/green13.png';
const green14 = '../eldritch-codejam/assets/MythicCards/green/green14.png';
const green15 = '../eldritch-codejam/assets/MythicCards/green/green15.png';
const green16 = '../eldritch-codejam/assets/MythicCards/green/green16.png';
const green17 = '../eldritch-codejam/assets/MythicCards/green/green17.png';
const green18 = '../eldritch-codejam/assets/MythicCards/green/green18.png';

const greenCardsAssets = {
  green1,
  green2,
  green3,
  green4,
  green5,
  green6,
  green7,
  green8,
  green9,
  green10,
  green11,
  green12,
  green13,
  green14,
  green15,
  green16,
  green17,
  green18,
};

const greenCardsData = [
  {
    id: 'green1',
    cardFace: greenCardsAssets.green1,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green2',
    cardFace: greenCardsAssets.green2,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green3',
    cardFace: greenCardsAssets.green3,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green4',
    cardFace: greenCardsAssets.green4,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green5',
    cardFace: greenCardsAssets.green5,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green6',
    cardFace: greenCardsAssets.green6,
    difficulty: 'hard',
    color:'green'
  },
  {
    id: 'green7',
    cardFace: greenCardsAssets.green7,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green8',
    cardFace: greenCardsAssets.green8,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green9',
    cardFace: greenCardsAssets.green9,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green10',
    cardFace: greenCardsAssets.green10,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green11',
    cardFace: greenCardsAssets.green11,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green12',
    cardFace: greenCardsAssets.green12,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green13',
    cardFace: greenCardsAssets.green13,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green14',
    cardFace: greenCardsAssets.green14,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green15',
    cardFace: greenCardsAssets.green15,
    difficulty: 'normal',
    color:'green'
  },
  {
    id: 'green16',
    cardFace: greenCardsAssets.green16,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green17',
    cardFace: greenCardsAssets.green17,
    difficulty: 'easy',
    color:'green'
  },
  {
    id: 'green18',
    cardFace: greenCardsAssets.green18,
    difficulty: 'easy',
    color:'green'
  },
];

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
  let greenFirst = ancient.firstStage.greenCards;
  let blueFirst = ancient.firstStage.blueCards;
  let brownFirst = ancient.firstStage.brownCards;
  return [newDeck[0].splice(0, greenFirst), newDeck[1].splice(0, blueFirst), newDeck[2].splice(0, brownFirst)];
}
function collectSecondStage() {
  let greenFirst = ancient.secondStage.greenCards;
  let blueFirst = ancient.secondStage.blueCards;
  let brownFirst = ancient.secondStage.brownCards;
  return [newDeck[0].splice(0, greenFirst), newDeck[1].splice(0, blueFirst), newDeck[2].splice(0, brownFirst)];
}
function collectThirdStage() {
  let greenFirst = ancient.thirdStage.greenCards;
  let blueFirst = ancient.thirdStage.blueCards;
  let brownFirst = ancient.thirdStage.brownCards;
  return [newDeck[0].splice(0, greenFirst), newDeck[1].splice(0, blueFirst), newDeck[2].splice(0, brownFirst)];
}

function collectDeck () {
  let arr1 = collectFirstStage();
  let arr2 = collectSecondStage();
  let arr3 = collectThirdStage();
  fc1.innerHTML = `${arr1[0].length}`;
  fc2.innerHTML = `${arr1[1].length}`;
  fc3.innerHTML = `${arr1[2].length}`;
  fc4.innerHTML = `${arr2[0].length}`;
  fc5.innerHTML = `${arr2[1].length}`;
  fc6.innerHTML = `${arr2[2].length}`;
  fc7.innerHTML = `${arr3[0].length}`;
  fc8.innerHTML = `${arr3[1].length}`;
  fc9.innerHTML = `${arr3[2].length}`;
  let ar1 = arr1.flat(2);
  shuffle(ar1);
  let ar2 = arr2.flat(2);
  shuffle(ar2);
  let ar3 = arr3.flat(2);
  shuffle(ar3);
  // console.log(ar1, ar2, ar3);
  return finalDeck = ar1.concat(ar2, ar3);
}


shuffleDeck.addEventListener('click', collectDeck);
//
// LastCard
const lastCard = document.querySelector('.last-card');

function showLastCard () {
  console.log('final',finalDeck);
  let arr = finalDeck.shift();
  
  console.log('arr', arr);
  lastCard.style.backgroundImage = `url(${arr.cardFace})`;
}

lastCard.addEventListener('click', showLastCard)
//Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
