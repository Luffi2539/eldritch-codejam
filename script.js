const Azathoth = document.querySelector('.Azathoth');
const Cthulthu = document.querySelector('.Cthulthu');
const IogSothoth = document.querySelector('.IogSothoth');
const ShubNiggurath = document.querySelector('.ShubNiggurath');
let stage = [];
let stageAzathoth = [1, 2, 1, 2, 3, 1, 2, 4, 0]
let stageCthulthu = [0, 2, 2, 1, 3, 0, 3, 4, 0];
let stageIogSothoth = [0, 2, 1, 2, 3, 1, 3, 4, 0];
let stageShubNiggurath = [1, 2, 1, 3, 2, 1, 2, 4, 0];
let greenCards = [];
let brownCards = [];
let blueCards = [];
let n = 1;

Azathoth.addEventListener('click', AzathothGame);
Cthulthu.addEventListener('click', CthulthuGame);
IogSothoth.addEventListener('click', IogSothothGame);
ShubNiggurath.addEventListener('click', ShubNiggurathGame);
const round1Green = document.getElementById('1roundGreen');
const round1Brown = document.getElementById('1roundBrown');
const round1Blue = document.getElementById('1roundBlue');
const round2Green = document.getElementById('2roundGreen');
const round2Brown = document.getElementById('2roundBrown');
const round2Blue = document.getElementById('2roundBlue');
const round3Green = document.getElementById('3roundGreen');
const round3Brown = document.getElementById('3roundBrown');
const round3Blue = document.getElementById('3roundBlue');

function  bollsFunction (stage) {
    let bolls = [round1Green, round1Brown, round1Blue, round2Green, round2Brown, round2Blue, round3Green, round3Brown, round3Blue]
    for (let i = 0; i < 9; i++) {
        bolls[i].textContent = stage[i];
    }
}
function colods (x,y,l) {
    let count = 0;
    let length = stage[y] + stage[y+3] + stage[y+6];
    for (let i = 0; i < length; i++) {
        count = getRandomNum(1, l);
        if (x.indexOf(count) === -1) {
            x[i] = count
        }
        else {
            i--
        }
    }
}
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
AzathothGame();
function AzathothGame () {
    IogSothoth.classList.remove('active');
    ShubNiggurath.classList.remove('active');
    Cthulthu.classList.remove('active');
    Azathoth.classList.add('active');
    stage = stageAzathoth;
    bollsFunction(stage)
    colods(greenCards, 0, 19)
    colods(brownCards, 1, 22)
    colods(blueCards, 2, 13)
    n = 1;
    return n

}
function CthulthuGame () {
    IogSothoth.classList.remove('active');
    ShubNiggurath.classList.remove('active');
    Cthulthu.classList.add('active');
    Azathoth.classList.remove('active');
    stage = stageCthulthu;
    bollsFunction(stage)
    colods(greenCards, 0, 19)
    colods(brownCards, 1, 22)
    colods(blueCards, 2, 13)
    n = 2;
    return n
}
function IogSothothGame () {
    IogSothoth.classList.add('active');
    ShubNiggurath.classList.remove('active');
    Cthulthu.classList.remove('active');
    Azathoth.classList.remove('active');
    stage = stageIogSothoth;
    bollsFunction(stage)
    colods(greenCards, 0, 19)
    colods(brownCards, 1, 22)
    colods(blueCards, 2, 13)
    n = 3;
    return n
}
function ShubNiggurathGame () {
    IogSothoth.classList.remove('active');
    ShubNiggurath.classList.add('active');
    Cthulthu.classList.remove('active');
    Azathoth.classList.remove('active');
    stage = stageShubNiggurath;
    bollsFunction(stage)
    colods(greenCards, 0, 19)
    colods(brownCards, 1, 22)
    colods(blueCards, 2, 13)
    n = 4;
    return n
}

const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');
const level5 = document.querySelector('.level5');
level1.addEventListener('click', level1Game);
level2.addEventListener('click', level2Game);
level3.addEventListener('click', level3Game);
level4.addEventListener('click', level4Game);
level5.addEventListener('click', level5Game);

function level1Game () {
    level2.classList.remove('active');
    level3.classList.remove('active');
    level4.classList.remove('active');
    level5.classList.remove('active');
    level1.classList.add('active');
}
function level2Game () {
    level2.classList.add('active');
    level3.classList.remove('active');
    level4.classList.remove('active');
    level5.classList.remove('active');
    level1.classList.remove('active');
}
function level3Game () {
    level2.classList.remove('active');
    level3.classList.add('active');
    level4.classList.remove('active');
    level5.classList.remove('active');
    level1.classList.remove('active');
}
function level4Game () {
    level2.classList.remove('active');
    level3.classList.remove('active');
    level4.classList.add('active');
    level5.classList.remove('active');
    level1.classList.remove('active');
}
function level5Game () {
    level2.classList.remove('active');
    level3.classList.remove('active');
    level4.classList.remove('active');
    level5.classList.add('active');
    level1.classList.remove('active');
}

const cardBack = document.querySelector('.card-back');
const cardFront = document.querySelector('.card-front');
cardBack.addEventListener('click', cardChange);
let countGreenCards = 0;
let countBrownCards = 0;
let countBlueCards = 0;
let round = 1;
let countGreen
let countBrown
let countBlue
switch (n) {
    case 1:
        stage = stageAzathoth
        break;
    case 2:
        stage = stageCthulthu
        break;
    case 3:
        stage = stageIogSothoth
        break;
    case 4:
        stage = stageShubNiggurath
        break;
}
countGreen = stage[0];
countBrown = stage[1];
countBlue = stage[2];
console.log(countGreen)
console.log(stage[0])
console.log(n)

 function cardChange () {

     switch (round) {
         case 1:
             if (countGreen !== 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${greenCards[countGreenCards]}.png")`;
                 countGreenCards++;
                 countGreen--;
                 round1Green.textContent = countGreen;
                 return 0
             }
             if (countBrown !== 0 && countGreen === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${brownCards[countBrownCards]}.png")`;
                 countBrownCards++;
                 countBrown--;
                 round1Brown.textContent = countBrown;
                 return 0
             }
             if (countBlue !== 0 && countGreen === 0 && countBrown === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${blueCards[countBlueCards]}.png")`;
                 countBlueCards++;
                 countBlue--;
                 round1Blue.textContent = countBlue;
                 return 0
             }
             if (countBlue === 0 && countGreen === 0 && countBrown === 0) {
                 countGreen = stage[3];
                 countBrown = stage[4];
                 countBlue = stage[5];
                 round = 2
             }
             break;
         case 2:
             if (countGreen !== 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${greenCards[countGreenCards]}.png")`;
                 countGreenCards++;
                 countGreen--;
                 round2Green.textContent = countGreen;
                 return 0
             }
             if (countBrown !== 0 && countGreen === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${brownCards[countBrownCards]}.png")`;
                 countBrownCards++;
                 countBrown--;
                 round2Brown.textContent = countBrown;
                 return 0
             }
             if (countBlue !== 0 && countGreen === 0 && countBrown === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${blueCards[countBlueCards]}.png")`;
                 countBlueCards++;
                 countBlue--;
                 round2Blue.textContent = countBlue;
                 return 0
             }
             if (countBlue === 0 && countGreen === 0 && countBrown === 0) {
                 countGreen = stage[6];
                 countBrown = stage[7];
                 countBlue = stage[8];
                 round = 3
             }
             break;
         case 3:
             if (countGreen !== 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${greenCards[countGreenCards]}.png")`;
                 countGreenCards++;
                 countGreen--;
                 round3Green.textContent = countGreen;
                 return 0
             }
             if (countBrown !== 0 && countGreen === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${brownCards[countBrownCards]}.png")`;
                 countBrownCards++;
                 countBrown--;
                 round3Brown.textContent = countBrown;
                 return 0
             }
             if (countBlue !== 0 && countGreen === 0 && countBrown === 0) {
                 cardFront.style.backgroundImage = `url("assets/MythicCards/green/green${blueCards[countBlueCards]}.png")`;
                 countBlueCards++;
                 countBlue--;
                 round3Blue.textContent = countBlue;
                 return 0
             }
             break;
     }





 }

