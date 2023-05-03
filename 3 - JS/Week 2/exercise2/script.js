function guessNumber() {
  const randomNumber = Math.ceil(Math.random() * 10);
  let userGuess;

  do {
    userGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);

    if (userGuess > randomNumber) {
      alert("Too high, try again!");
    } else if (userGuess < randomNumber) {
      alert("Too low, try again!");
    }
  } while (userGuess !== randomNumber);

  alert("You guessed it! The number was " + randomNumber);
}

console.log(guessNumber(""));
