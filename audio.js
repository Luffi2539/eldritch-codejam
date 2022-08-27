const knife = new Audio('./assets/Audio/6802dff441a6d4e (mp3cut.net).mp3');
const rain = new Audio('./assets/Audio/01890.mp3');
const takeCard = document.querySelector(".deck");
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const difficulty = document.querySelectorAll(".difficulty");

function playAudio(item, audio, volume) {
    item.addEventListener("click", () => {
        audio.play();
    });
    audio.volume = volume;
}

difficulty.forEach(item => {
    item.addEventListener("click", () => {
        knife.play();
        knife.volume = .1;
    });
});

playAudio(card1, new Audio('./assets/Audio/monster1.mp3'), .5);
playAudio(card2, new Audio('./assets/Audio/monster2.mp3'), .5);
playAudio(card3, new Audio('./assets/Audio/monster3.mp3'), .5);
playAudio(card4, new Audio('./assets/Audio/monster4.mp3'), .5);
playAudio(takeCard, new Audio('./assets/Audio/mb_card_deal_08.mp3'), .5);

rain.play();
rain.loop = true;
rain.volume = .5;