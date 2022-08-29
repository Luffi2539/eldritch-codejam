const cardButton = document.querySelector('.cards');
const popup = document.querySelector('.levels');
const levelButton = document.querySelector('.level-1');
const popup2 = document.querySelector('.result-button');
const resultButton = document.querySelector('.result-button');
const popup3 = document.querySelector('.result-img');
const finish = document.querySelector('.images');

cardButton.addEventListener('click', () => {
    popup.style.visibility = 'visible';
})

levelButton.addEventListener('click', () => {
    popup2.style.visibility = 'visible';
})

resultButton.addEventListener('click', () => {
    popup3.style.visibility= 'visible';
    resultButton.style.visibility = 'hidden';
})

popup3.addEventListener('click', () => {
    finish.style.visibility = 'visible';
})