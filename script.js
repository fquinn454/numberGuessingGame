let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate random number between 1 and 10
const generateTarget = () =>
    Math.floor(Math.random() * 10);

// Get the absolute distance between two numbers
const getAbsoluteDistance = (num1, num2) =>
    Math.abs(num1 - num2); 

    // Compare user and computer guess to determine which is nearest the target
const compareGuesses = (userGuess, computerGuess, target) =>
    getAbsoluteDistance(userGuess, target) > getAbsoluteDistance(computerGuess, target) ? false : true;

// Increase the winner's score after each round
const updateScore = (winner) =>
    winner === 'human' ? humanScore++ : computerScore++;

// Increase currentRoundNumber after each round
const advanceRound = () => currentRoundNumber++;

// Generate alert if user guess is out of range
const generateAlert = (userGuess) => {
    if (userGuess < 0 || userGuess > 9) {
        window.alert('Guess must be between 0 - 9 inclusive');
        humanGuessInputdocument.getElementById('human-guess').reset();
        document.getElementById('human-guess').value = 0;
    }
}
    
