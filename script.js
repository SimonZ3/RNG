let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const loworHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {

const userGuess = Number(guessField.value);

if (guessCount === 1) {
    guesses.textContent = "Previous guesses";

}
guesses.textContent = `${guesses.textContent} ${userGuess}`;

if (userGuess === randomNumber) {
    lastResult.textContent = "You just wasted your luck, getting a 1% chance. wow"
    lastResult.stylebackgroundColor = "green";
    loworHi.textContent = ""
    setGameOver();
}
else if (guessCount === 10) {
    lastResult.textContent = "L Bozo NO LUCK COULD NOT BE ME"
    loworHi.textContent = ""
    setGameOver();

}
else {
    lastResult.textContent = "Skill Issue"
    lastResult.stylebackgroundColor = "red"
    if (userGuess < randomNumber) {
        loworHi.textContent = "Too high buddy"

    }
    if (userGuess > randomNumber) {
        loworHi.textContent = "Too low buddy"

    }

}

guessCount++;
guessField.value = "";
guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Waste more time";
    document.body.append(resetButton)
    resetButton.addEventListener("click", resetGame)

}

function resetGame(){
    guessCount = 1;
    const resetPara = document.querySelectorAll("resultParas p");

    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    lastResult.style.backgroundColor = "white"
    randomNumber = Math.floor(Math.random() * 100) + 1;

}