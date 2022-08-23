// ---------------------------------------

const rain = document.querySelector('.rain');

const knife = new Audio('./assets/Audio/6802dff441a6d4e (mp3cut.net).mp3');
const soundCard = new Audio('./assets/Audio/mb_card_deal_08.mp3');
const scream1 = new Audio('./assets/Audio/monster1.mp3');
const scream2 = new Audio('./assets/Audio/monster2.mp3');
const scream3 = new Audio('./assets/Audio/monster3.mp3');
const scream4 = new Audio('./assets/Audio/monster4.mp3');

const choiceDifficulty = document.querySelectorAll(".difficulty");
const takeCard = document.querySelectorAll(".deck");
const monster1 = document.querySelectorAll(".card1");
const monster2 = document.querySelectorAll(".card2");
const monster3 = document.querySelectorAll(".card3");
const monster4 = document.querySelectorAll(".card4");

choiceDifficulty.forEach(difficult => {
    difficult.addEventListener("click", () => {
        knife.play();
    });
});
takeCard.forEach(card => {
    card.addEventListener("click", () => {
        soundCard.play();
    });
});
monster1.forEach(card => {
    card.addEventListener("click", () => {
        scream1.play();
    });
});
monster2.forEach(card => {
    card.addEventListener("click", () => {
        scream2.play();
    });
});
monster3.forEach(card => {
    card.addEventListener("click", () => {
        scream3.play();
    });
});
monster4.forEach(card => {
    card.addEventListener("click", () => {
        scream4.play();
    });
});

rain.volume = 0;
knife.volume = .1;
scream1.volume = .0;
scream2.volume = .0;
scream3.volume = .0;
scream4.volume = .0;

// ---------------------------------------

// ---------------------------------------

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');

const cards = document.querySelectorAll('.ancient-cards img')

const deck = document.querySelector('.deck-of-cards');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('fire-border'));
        card.classList.add('fire-border');
    })
});

const difficulty = document.querySelectorAll('.difficulty')

difficulty.forEach(item => {
    item.addEventListener('click', () => {
        difficulty.forEach(item => item.classList.remove('fire-border'));
        item.classList.add('fire-border');
        deck.classList.add('show');
    })
});

// ---------------------------------------

// ---------------------------------------

const firstGreen = document.querySelector('.first-green');
const firstBrown = document.querySelector('.first-brown');
const firstBlue = document.querySelector('.first-blue');
const secondGreen = document.querySelector('.second-green');
const secondBrown = document.querySelector('.second-brown');
const secondBlue = document.querySelector('.second-blue');
const thirdGreen = document.querySelector('.third-green');
const thirdBrown = document.querySelector('.third-brown');
const thirdBlue = document.querySelector('.third-blue');

const difficultyBlock = document.querySelector('.difficulty-level');

card1.addEventListener('click', () => {
    firstGreen.value = 0;
    firstBrown.value = 2;
    firstBlue.value = 2;
    secondGreen.value = 1;
    secondBrown.value = 3;
    thirdGreen.value = 3;
    thirdBrown.value = 4;
    difficultyBlock.classList.add('show');
});

card2.addEventListener('click', () => {
    firstGreen.value = 1;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 3;
    secondBrown.value = 2;
    secondBlue.value = 1;
    thirdGreen.value = 2;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
});

card3.addEventListener('click', () => {
    firstGreen.value = 0;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 2;
    secondBrown.value = 3;
    secondBlue.value = 1;
    thirdGreen.value = 3;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
});

card4.addEventListener('click', () => {
    firstGreen.value = 1;
    firstBrown.value = 2;
    firstBlue.value = 1;
    secondGreen.value = 2;
    secondBrown.value = 3;
    secondBlue.value = 1;
    thirdGreen.value = 2;
    thirdBrown.value = 4;
    thirdBlue.value = 0;
    difficultyBlock.classList.add('show');
});

// ---------------------------------------

// ---------------------------------------

