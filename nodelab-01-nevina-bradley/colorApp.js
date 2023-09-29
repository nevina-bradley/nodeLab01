const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const favoriteColor = 'blue';
let attempts = 0;

function askQuestion() {
    console.log("Can you guess my favorite color in less than 10 guesses?")
    rl.question('Guess my favorite color: ', (answer) => {
      attempts++;
  
      if (answer.toLowerCase() === favoriteColor) {
        console.log('Congratulations! You guessed it right!');
        rl.close();
      } else {
        if (attempts < 10) {
          console.log('Oops! That is not my favorite color. Try again!');
          console.log(10 - attempts + " left");
          askQuestion();
        } else {
          console.log('Sorry, you ran out of attempts. My favorite color is blue.');
          rl.close();
        }
      }
    });
}

console.log('Welcome to the Favorite Color Guessing Game!');
askQuestion();