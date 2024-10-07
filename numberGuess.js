function numberGuess() {
    let correctNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;

    while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 to 10:"));

    if (guess > correctNumber) {
       alert("Too high!");
    } else if (guess < correctNumber) {
        alert("Too low!");
    } else {
        alert("Correct!");
    }
    }
}