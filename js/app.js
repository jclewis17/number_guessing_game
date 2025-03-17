// Variables
const startButton = document.querySelector('.btn_reset');
const rulesButton = document.querySelector('.rules');
const overlay = document.querySelector('#overlay');
const rulesOverlay = document.querySelector('#rulesOverlay'); 
const closeRulesButton = document.querySelector('#closeRules'); 
const submitButton = document.querySelector('input[type="submit"]');
const gameContainer = document.querySelector('.main-container');
const footer = document.querySelector('#pageFooter');
let textInput = document.querySelector('input[type="text"]');
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
    overlay.classList.add('dim');
});

//X Button to close the rules
    closeRulesButton.addEventListener('click', () => {
    rulesOverlay.classList.remove('active');
    overlay.classList.remove('dim');
});

// Generates a random number between 0 and 99
let randomTargetNumber = Math.floor(Math.random() * 100);

// Handles the players guess and checks it against the randomly generated number
submitButton.addEventListener('click', () => {
    let userGuess = parseInt(textInput.value);

    textInput.value = '';

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
        alert("That is not a vlid guess. Your guess must be a number between 0 and 99.");
        console.log(wrongGuessCounter);
        return;
    }

    if (userGuess > randomTargetNumber) {
        console.log("Lower", userGuess);
        wrongGuessCounter++;
        console.log(wrongGuessCounter);
    } else if (userGuess < randomTargetNumber) {
        console.log("Higher", userGuess);
        wrongGuessCounter++;
        console.log(wrongGuessCounter);;
    } else {
        console.log("You guessed the number!", userGuess);
        console.log(wrongGuessCounter);;
    }
});

