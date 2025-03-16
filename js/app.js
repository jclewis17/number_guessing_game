// Variables
const startButton = document.querySelector('.btn_reset');
const rulesButton = document.querySelector('.rules');
const overlay = document.querySelector('#overlay');
const rulesOverlay = document.querySelector('#rulesOverlay'); 
const closeRulesButton = document.querySelector('#closeRules'); 
const gameContainer = document.querySelector('.main-container');
const footer = document.querySelector('#pageFooter');
let wrongGuessCounter = 0;

//Start Button on Main Overlay
startButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    footer.classList.add('hidden');
    gameContainer.style.display = 'block';
});

//How to Play Button
rulesButton.addEventListener('click', () => {
    rulesOverlay.classList.add('active');
});

//X Button to close the rules
closeRulesButton.addEventListener('click', () => {
    rulesOverlay.classList.remove('active');
});


