// Variables
const startButton = document.querySelector('.btn_reset');
const overlay = document.querySelector('#overlay');
const gameContainer = document.querySelector('.main-container');
const footer = document.querySelector('#pageFooter');
let wrongGuessCounter = 0;

//Start Button on Overlay
startButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    footer.classList.add('hidden');
    gameContainer.style.display = 'block';
});
