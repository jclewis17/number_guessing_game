// Variables
const body = document.querySelector('body');
const startButton = document.querySelector('.btn_reset');
const rulesButton = document.querySelector('.rules');
const overlay = document.querySelector('#overlay');
const rulesOverlay = document.querySelector('#rulesOverlay'); 
const closeRulesButton = document.querySelector('#closeRules'); 
const submitButton = document.querySelector('input[type="submit"]');
const gameContainer = document.querySelector('.main-container');
const footer = document.querySelector('#pageFooter');
let textInput = document.querySelector('input[type="text"]');
const endGameHeader = document.querySelector('h3');
const endGameButtons = document.querySelector('.endGameButtons');
const playAgainButton = document.querySelector('#playAgain');
const mainMenuButton = document.querySelector('#mainMenu');
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

// Handles the players guess and checks it against the randomly generated number
submitButton.addEventListener('click', () => {
    let userGuess = parseInt(textInput.value);

    if (wrongGuessCounter >= 4 && userGuess !== randomTargetNumber) {
        textInput.value = '';
        endGameHeader.classList.remove('endGameHeader-hidden');
        endGameHeader.classList.add('endGameHeader-appear');
        endGameHeader.textContent = `You ran out of guesses. The random number was ${randomTargetNumber}`; // Handles end game results for loss
        submitButton.disabled = true;
        textInput.disabled = true;
        endGameButtons.classList.remove('hidden');
    }

    textInput.value = ''; // Resets input

    // Checks if valid number is guessed
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
        alert("That is not a vlid guess. Your guess must be a number between 0 and 99.");
        return;
    }
    
    // Checks if number is too high, too low or correct
    if (userGuess > randomTargetNumber) {
        wrongGuessCounter++;
        addGuessToScreen(userGuess);
    } else if (userGuess < randomTargetNumber) {
        wrongGuessCounter++;
        addGuessToScreen(userGuess);
    } else {
        wrongGuessCounter++;
        addGuessToScreen(userGuess);
    }

    // Handles end game results for win
    if (userGuess === randomTargetNumber) {
        endGameHeader.classList.remove('endGameHeader-hidden');
        endGameHeader.classList.add('endGameHeader-appear');
        endGameHeader.textContent = "Congrats. You Win!";
        submitButton.disabled = true;
        textInput.disabled = true;
        endGameButtons.classList.remove('hidden');
    }
});

textInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents accidental form submission (if applicable)
        submitButton.click(); // Triggers the click event on the submit button
    }
});



// Resets the game when clicked
playAgainButton.addEventListener('click', () => {
    endGameHeader.classList.add('endGameHeader-hidden');
    endGameHeader.classList.remove('endGameHeader-appear');
    endGameHeader.textContent = "";
    submitButton.disabled = false;
    textInput.disabled = false;
    endGameButtons.classList.add('hidden');
    wrongGuessCounter = 0;
    document.querySelector('#guessHistory').innerHTML = '';
    randomTargetNumber = Math.floor(Math.random() * 100);
});

mainMenuButton.addEventListener('click', () => {
    endGameHeader.classList.add('endGameHeader-hidden');
    endGameHeader.classList.remove('endGameHeader-appear');
    endGameHeader.textContent = "";
    submitButton.disabled = false;
    textInput.disabled = false;
    endGameButtons.classList.add('hidden');
    wrongGuessCounter = 0;
    document.querySelector('#guessHistory').innerHTML = '';
    randomTargetNumber = Math.floor(Math.random() * 100);

    gameContainer.style.display = 'none';
    overlay.classList.remove('hidden');
    footer.classList.remove('hidden');
    body.classList.remove('scrolling-active');    
});



 
