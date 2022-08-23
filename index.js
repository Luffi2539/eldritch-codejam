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
scream1.volume = .5;
scream2.volume = .5;
scream3.volume = .5;
scream4.volume = .5;
