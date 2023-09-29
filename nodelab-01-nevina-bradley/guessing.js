const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.random(minNumber, maxNumber);
let attempts = 0;

function askQuestion() {
    console.log("Can you guess the secret number in less than 10 guesses?")
    rl.question('Guess the secret number: ', (answer) => {
      attempts++;
  
      if (answer === secretNumber) {
        console.log('Congratulations! You guessed it right!');
        rl.close();
      } else {
        if (attempts < 10) {
          console.log('Oops! That is not the secret number. Try again!');
          console.log(10 - attempts + " left");
          askQuestion();
        } else {
          console.log('Sorry, you ran out of attempts. The secret number is ' + secretNumber + '.');
          rl.close();
        }
      }
    });
}

console.log('Welcome to the Secret Number Guessing Game!');
askQuestion();