import * as Ancients from "./data/ancients.js";
import * as Green from "./data/mythicCards/green/index.js";
import * as Brown from "./data/mythicCards/brown/index.js";
import * as Blue from "./data/mythicCards/blue/index.js";


const targetAncient = document.querySelector('.ancient-card');
//const difficulty = document.querySelector('.difficulty');
const difficultyContainer = document.querySelector('.difficulty-container');
const shuffleBtn = document.querySelector('.shuffle-button');
const currentState = document.querySelector('.current-state');
const deck = document.querySelector('.deck');
const lastCard = document.querySelector('.last-card');
const newgame = document.querySelector('.new-game');
const s1g = document.querySelector('.s1g');
const s1br = document.querySelector('.s1br');
const s1b = document.querySelector('.s1b');
const s2g = document.querySelector('.s2g');
const s2br = document.querySelector('.s2br');
const s2b = document.querySelector('.s2b');
const s3g = document.querySelector('.s3g');
const s3br = document.querySelector('.s3br');
const s3b = document.querySelector('.s3b');
const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const normalGame = document.querySelector('.normal');
const chillGame = document.querySelector('.just-chill');
const easyGame = document.querySelector('.easy');
const hardGame = document.querySelector('.hard');
const hellGame = document.querySelector('.hell');
const aza = document.querySelector('.aza');
const cthul = document.querySelector('.cthul');
const iog = document.querySelector('.iog');
const shub = document.querySelector('.shub');

let difficultyGame;

let deckStack = [];
/*
let deckStackGreen = [];
let deckStackBrown = [];
let deckStackBlue = [];
*/

//количество карт по стадиям
let colGreenCardS1;
let colGreenCardS2;
let colGreenCardS3;

let colBrownCardS1;
let colBrownCardS2;
let colBrownCardS3;

let colBlueCardS1;
let colBlueCardS2;
let colBlueCardS3;



/*
function addActiveAncient() {
  targetAncient.classList.add('active');
  targetAncient.style.width = '80%';
  targetAncient.style.height = '55%';
  //difficulty.style.visibility = "visible";
  difficultyContainer.style.visibility = "visible";
}*/


//выделение древнего, скрыть лишних, видимый блок сложности,
//увеличение древнего, подготовка трекера
aza.addEventListener('click', function() {
  aza.classList.add('active');
  aza.style.width = '80%';
  aza.style.height = '55%';
  cthul.style.display = 'none';
  iog.style.display = 'none';
  shub.style.display = 'none';
  difficultyContainer.style.visibility = "visible";

  colGreenCardS1 = Ancients.ancientsData[0].firstStage.greenCards;
  colGreenCardS2 = Ancients.ancientsData[0].secondStage.greenCards;
  colGreenCardS3 = Ancients.ancientsData[0].thirdStage.greenCards;

  colBrownCardS1 = Ancients.ancientsData[0].firstStage.brownCards;
  colBrownCardS2 = Ancients.ancientsData[0].secondStage.brownCards;
  colBrownCardS3 = Ancients.ancientsData[0].thirdStage.brownCards;

  colBlueCardS1 = Ancients.ancientsData[0].firstStage.blueCards;
  colBlueCardS2 = Ancients.ancientsData[0].secondStage.blueCards;
  colBlueCardS3 = Ancients.ancientsData[0].thirdStage.blueCards;
});
cthul.addEventListener('click', function() {
  cthul.classList.add('active');
  cthul.style.width = '80%';
  cthul.style.height = '55%';
  aza.style.display = 'none';
  iog.style.display = 'none';
  shub.style.display = 'none';
  difficultyContainer.style.visibility = "visible";

  colGreenCardS1 = Ancients.ancientsData[1].firstStage.greenCards;
  colGreenCardS2 = Ancients.ancientsData[1].secondStage.greenCards;
  colGreenCardS3 = Ancients.ancientsData[1].thirdStage.greenCards;

  colBrownCardS1 = Ancients.ancientsData[1].firstStage.brownCards;
  colBrownCardS2 = Ancients.ancientsData[1].secondStage.brownCards;
  colBrownCardS3 = Ancients.ancientsData[1].thirdStage.brownCards;

  colBlueCardS1 = Ancients.ancientsData[1].firstStage.blueCards;
  colBlueCardS2 = Ancients.ancientsData[1].secondStage.blueCards;
  colBlueCardS3 = Ancients.ancientsData[1].thirdStage.blueCards;
});
iog.addEventListener('click', function() {
  iog.classList.add('active');
  iog.style.width = '80%';
  iog.style.height = '55%';
  aza.style.display = 'none';
  cthul.style.display = 'none';
  shub.style.display = 'none';
  difficultyContainer.style.visibility = "visible";

  colGreenCardS1 = Ancients.ancientsData[2].firstStage.greenCards;
  colGreenCardS2 = Ancients.ancientsData[2].secondStage.greenCards;
  colGreenCardS3 = Ancients.ancientsData[2].thirdStage.greenCards;

  colBrownCardS1 = Ancients.ancientsData[2].firstStage.brownCards;
  colBrownCardS2 = Ancients.ancientsData[2].secondStage.brownCards;
  colBrownCardS3 = Ancients.ancientsData[2].thirdStage.brownCards;

  colBlueCardS1 = Ancients.ancientsData[2].firstStage.blueCards;
  colBlueCardS2 = Ancients.ancientsData[2].secondStage.blueCards;
  colBlueCardS3 = Ancients.ancientsData[2].thirdStage.blueCards;
});
shub.addEventListener('click', function() {
  shub.classList.add('active');
  shub.style.width = '80%';
  shub.style.height = '55%';
  aza.style.display = 'none';
  cthul.style.display = 'none';
  iog.style.display = 'none';
  difficultyContainer.style.visibility = "visible";

  colGreenCardS1 = Ancients.ancientsData[3].firstStage.greenCards;
  colGreenCardS2 = Ancients.ancientsData[3].secondStage.greenCards;
  colGreenCardS3 = Ancients.ancientsData[3].thirdStage.greenCards;

  colBrownCardS1 = Ancients.ancientsData[3].firstStage.brownCards;
  colBrownCardS2 = Ancients.ancientsData[3].secondStage.brownCards;
  colBrownCardS3 = Ancients.ancientsData[3].thirdStage.brownCards;

  colBlueCardS1 = Ancients.ancientsData[3].firstStage.blueCards;
  colBlueCardS2 = Ancients.ancientsData[3].secondStage.blueCards;
  colBlueCardS3 = Ancients.ancientsData[3].thirdStage.blueCards;
});


//клик по кнопке сложн и создание замеса колоды,
//задать уровень сложности, скрыть лишние уровни, выделить текущий
document.addEventListener('click', function(e) {
  if(e.target.className === 'just-chill') {
    e.target.classList.add('active');
    easyGame.style.visibility = 'hidden';
    normalGame.style.visibility = 'hidden';
    hardGame.style.visibility = 'hidden';
    hellGame.style.visibility = 'hidden';
    difficultyGame = 'just-chill';
    shuffleBtn.style.visibility = "visible";
  }
  if(e.target.className === 'easy') {
    e.target.classList.add('active');
    chillGame.style.visibility = 'hidden';
    normalGame.style.visibility = 'hidden';
    hardGame.style.visibility = 'hidden';
    hellGame.style.visibility = 'hidden';
    difficultyGame = 'easy';
    shuffleBtn.style.visibility = "visible";
  }
  else if(e.target.className === 'normal') {
    e.target.classList.add('active');
    chillGame.style.visibility = 'hidden';
    easyGame.style.visibility = 'hidden';
    hardGame.style.visibility = 'hidden';
    hellGame.style.visibility = 'hidden';
    difficultyGame = 'normal';
    shuffleBtn.style.visibility = "visible";
  }
  else if(e.target.className === 'hard') {
    e.target.classList.add('active');
    chillGame.style.visibility = 'hidden';
    normalGame.style.visibility = 'hidden';
    easyGame.style.visibility = 'hidden';
    hellGame.style.visibility = 'hidden';
    difficultyGame = 'hard';
    shuffleBtn.style.visibility = "visible";
  }
  else if(e.target.className === 'hell') {
    e.target.classList.add('active');
    chillGame.style.visibility = 'hidden';
    hardGame.style.visibility = 'hidden';
    normalGame.style.visibility = 'hidden';
    easyGame.style.visibility = 'hidden';
    difficultyGame = 'hell';
    shuffleBtn.style.visibility = "visible";
  }
});


//количество карт для стадий, подготовка к игре
function colStage() {
  s1g.textContent = colGreenCardS1;
  s1br.textContent = colBrownCardS1;
  s1b.textContent = colBlueCardS1;
  s2g.textContent = colGreenCardS2;
  s2br.textContent = colBrownCardS2;
  s2b.textContent = colBlueCardS2;
  s3g.textContent = colGreenCardS3;
  s3br.textContent = colBrownCardS3;
  s3b.textContent = colBlueCardS3;
  countGreenCardS1 = colGreenCardS1;
  countBrownCardS1 = colBrownCardS1;
  countBlueCardS1 = colBlueCardS1;
  countGreenCardS2 = colGreenCardS2;
  countBrownCardS2 = colBrownCardS2;
  countBlueCardS2 = colBlueCardS2;
  countGreenCardS3 = colGreenCardS3;
  countBrownCardS3 = colBrownCardS3;
  countBlueCardS3 = colBlueCardS3;
}

//клик по замесу колоды, сброс кнопки, видимые карты и трекер
//создание и рандомный замес карт
document.addEventListener('click', function(e) {
  if(e.target.className === 'shuffle-button') {
    shuffleBtn.style.visibility = "hidden";
    currentState.style.visibility = "visible";
    deck.style.visibility = "visible";
    lastCard.style.visibility = "visible";
    newgame.style.visibility = "visible";
    colStage();
    deckStack = shuffle(createDeckStack(Green, Brown, Blue));
    /*
    deckStackGreen = shuffle(createDeckStack(Green));
    deckStackBrown = shuffle(createDeckStack(Brown));
    deckStackBlue = shuffle(createDeckStack(Blue));
    */
  }
});

//создание колоды
function createDeckStack() {
  let allCards = [...Green.cardsData, ...Brown.cardsData, ...Blue.cardsData];
  /*
  let allCardsGreen = [...Green.cardsData];
  let allCardsBrown = [...Brown.cardsData];
  let allCardsBlue = [...Blue.cardsData];
  */
  //console.log(allCardsGreen)
  let nomralCards = [];
  /*
  let nomralCardsGreen = [];
  let nomralCardsBrown = [];
  let nomralCardsBlue = [];
*/
  if(difficultyGame  === 'just-chill') {
    allCards.forEach(e => {
      if(e.difficulty === 'easy' || e.difficulty === 'normal') {
        nomralCards.push(e);
      }
    });
  }
  if(difficultyGame  === 'easy') {
    allCards.forEach(e => {
      if(e.difficulty === 'easy' || e.difficulty === 'normal') {
        nomralCards.push(e);
      }
    });
  }
  if(difficultyGame  === 'normal') {
    allCards.forEach(e => {
      if(e.difficulty === 'normal' || e.difficulty === 'hard') {
        nomralCards.push(e);
      }
    });
  }
  if(difficultyGame  === 'hard') {
    allCards.forEach(e => {
      if(e.difficulty === 'hard' || e.difficulty === 'normal') {
        nomralCards.push(e);
      }
    });
  }
  if(difficultyGame  === 'hell') {
    allCards.forEach(e => {
      if(e.difficulty === 'hard' || e.difficulty === 'normal') {
        nomralCards.push(e);
      }
    });
  }
  return nomralCards;
  //return nomralCardsGreen, nomralCardsBrown, nomralCardsBlue;
}

//рандомайзер тосовки
function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

//трекер стадий
let countGreenCardS1;
let countBrownCardS1;
let countBlueCardS1;
let countGreenCardS2;
let countBrownCardS2;
let countBlueCardS2;
let countGreenCardS3;
let countBrownCardS3;
let countBlueCardS3;


//условия стадий и конца игры
let stageGame = 1;
function trackStage() {
  if(stageGame === 1 && countGreenCardS1 === 0 && countBrownCardS1 === 0 && countBlueCardS1 === 0) {
    stageGame = 2;
    s1.classList.add('done');
    console.log(`stage ${stageGame}`);
  }
  else if(stageGame === 2 && countGreenCardS2 === 0 && countBrownCardS2 === 0 && countBlueCardS2 === 0) {
    stageGame = 3;
    s2.classList.add('done');
    console.log(`stage ${stageGame}`);
  }
  else if(stageGame === 3 && countGreenCardS3 === 0 && countBrownCardS3 === 0 && countBlueCardS3 === 0) {
    lastCard.style.background = 'none';
    lastCard.textContent = 'The end of the game. Click "New Game" to try again';
    lastCard.style.color = 'white';
    lastCard.style.fontSize = '25px';
    s3.classList.add('done');
  }
}
console.log(`stage ${stageGame}`);


//клик по закрытой колоде и открытие карты через проверку условий и смена стадий
function takeCard() {
  trackStage();
  trackCard();
}

deck.addEventListener('click', takeCard);

//проверка карты в руке: цвет, счетчикигры, если подходит - забор с колоды
//если нет - тосую карты и достаю снова
function trackCard() {
  if(stageGame === 1 && deckStack[deckStack.length - 1].color === 'green') {
    if(countGreenCardS1 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countGreenCardS1--;
      s1g.textContent = countGreenCardS1;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countGreenCardS1 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 1 && deckStack[deckStack.length - 1].color === 'brown') {
    if(countBrownCardS1 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBrownCardS1--;
      s1br.textContent = countBrownCardS1;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBrownCardS1 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 1 && deckStack[deckStack.length - 1].color === 'blue') {
    if(countBlueCardS1 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBlueCardS1--;
      s1b.textContent = countBlueCardS1;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBlueCardS1 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 2 && deckStack[deckStack.length - 1].color === 'green') {
    if(countGreenCardS2 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countGreenCardS2--;
      s2g.textContent = countGreenCardS2;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countGreenCardS2 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 2 && deckStack[deckStack.length - 1].color === 'brown') {
    if(countBrownCardS2 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBrownCardS2--;
      s2br.textContent = countBrownCardS2;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBrownCardS2 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 2 && deckStack[deckStack.length - 1].color === 'blue') {
    if(countBlueCardS2 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBlueCardS2--;
      s2b.textContent = countBlueCardS2;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBlueCardS2 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 3 && deckStack[deckStack.length - 1].color === 'green') {
    if(countGreenCardS3 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countGreenCardS3--;
      s3g.textContent = countGreenCardS3;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countGreenCardS3 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 3 && deckStack[deckStack.length - 1].color === 'brown') {
    if(countBrownCardS3 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBrownCardS3--;
      s3br.textContent = countBrownCardS3
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBrownCardS3 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
  else if(stageGame === 3 && deckStack[deckStack.length - 1].color === 'blue') {
    if(countBlueCardS3 > 0) {
      let currentCard = deckStack[deckStack.length - 1].cardFace;
      deckStack.pop();
      countBlueCardS3--;
      s3b.textContent = countBlueCardS3;
      lastCard.style.background = `url(${currentCard})`;
      lastCard.style.backgroundSize = 'contain';
    } else if(countBlueCardS3 === 0) {
      shuffle(deckStack);
      takeCard();
    }
  }
}


//костыль - новая игра
newgame.addEventListener('click', () => window.location.reload())

