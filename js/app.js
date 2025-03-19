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
const body = document.querySelector('body');
let wrongGuessCounter = 0;

// Functions
function lowerOrHigher(guess) {
    if (guess > randomTargetNumber) {
        return "Lower";
    } else if (guess < randomTargetNumber) {
        return "Higher";
    } else {
        return "Correct!";
    }
}

function addGuessToScreen(guess) {
    let guessHistoryDiv = document.querySelector('#guessHistory');
    let newGuess = document.createElement('p');
    newGuess.textContent = `${wrongGuessCounter}. ${guess} - ${lowerOrHigher(guess)}`;
    newGuess.classList.add('guess-item');
    guessHistoryDiv.appendChild(newGuess);
}

//Start Button on Main Overlay
    startButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
    footer.classList.add('hidden');
    gameContainer.style.display = 'block';
    body.classList.add('scrolling-active');
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
console.log(randomTargetNumber);

// Handles the players guess and checks it against the randomly generated number
submitButton.addEventListener('click', () => {
    let userGuess = parseInt(textInput.value);

    if (wrongGuessCounter >= 4 && userGuess !== randomTargetNumber) {
        wrongGuessCounter++;
        textInput.value = '';
        addGuessToScreen(userGuess);
        if (userGuess > randomTargetNumber) {
            console.log("Lower", userGuess)
        } else {
            console.log("Higher", userGuess)
        }
        console.log(`You ran out of guesses. The random number was ${randomTargetNumber}`)
        return;
    }

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
        addGuessToScreen(userGuess);
    } else if (userGuess < randomTargetNumber) {
        console.log("Higher", userGuess);
        wrongGuessCounter++;
        console.log(wrongGuessCounter);
        addGuessToScreen(userGuess);
    } else {
        wrongGuessCounter++;
        addGuessToScreen(userGuess);
    }
});

