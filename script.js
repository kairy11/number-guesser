let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanResult = Math.abs(humanGuess - target)
    let computerResult = Math.abs(computerGuess - target)

    if (humanResult <= computerResult) {
        return true;
    } else {
        return false;
    }
}