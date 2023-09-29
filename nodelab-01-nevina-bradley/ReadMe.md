# Getting started with Node

## Building a Console-Based App with Node.js

In this tutorial, we'll walk through the process of building a console-based application using Node.js. The app will take user input from the command line, process it, and provide appropriate responses.

### Prerequisites

Before we begin, make sure you have Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org) and follow the installation instructions for your operating system.

### Step 1: Set Up the Project

1. Open a command prompt or terminal, navigate to the project directory, and run the following command to initialize a new Node.js project:

   ```
   npm init -y
   ```

   This command will create a `package.json` file that tracks your project's dependencies and other configurations.

### Step 2: Install Dependencies

For this tutorial, we'll use the `readline` module from Node.js to handle user input in the console. Run the following command in the project directory to install the `readline` module:

```
npm install readline
```

### Step 3: Write the Code

1. Create a new file in the project directory. Name it `app.js`.

2. Open `app.js` in a text editor and add the following code:

   ```javascript
   const readline = require('readline');

   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });

   rl.question('What is your name? ', (name) => {
     console.log(`Hello, ${name}! Welcome to the console app.`);
     rl.close();
   });
   ```

   In this code snippet, we import the `readline` module and create an interface (`rl`) using `readline.createInterface()`. We use this interface to ask the user for their name and print a welcome message.

3. Save the file.

### Step 4: Run the App

* Open a command prompt or terminal and navigate to the project directory.

* Run the following command to start the console app: `node app.js`

* The app will prompt you with the question, "What is your name?" Enter your name and press Enter.

* The app will respond with a welcome message, using the name you entered.

Congratulations! You have built a console-based app using Node.js. You can now customize and expand the functionality of your app based on your requirements.

## Functions as First-Class Citizens in JavaScript

In JavaScript, functions are considered "first-class citizens." This means that functions are treated as regular objects and can be assigned to variables, passed as arguments to other functions, and returned as values from other functions. In simpler terms, functions can be used just like any other data type in JavaScript.

As a result of this first-class nature, JavaScript functions have the following properties:

1. Functions can be assigned to variables.
2. Functions can be passed as arguments to other functions.
3. Functions can be returned as values from other functions.
4. Functions can be stored in data structures such as arrays or objects.

This flexibility allows functions to be highly versatile and empowers developers to use functions in a variety of ways, enabling powerful programming techniques such as higher-order functions, callbacks, and functional programming paradigms.

## Introduction to Arrow Functions

Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for defining functions in JavaScript. They offer a shorthand way of writing functions and have some unique characteristics.

Here's an example of an arrow function:

```javascript
const add = (a, b) => a + b;
```

In this example, `add` is an arrow function that takes two parameters (`a` and `b`) and returns their sum (`a + b`).

## Benefits of Arrow Functions

Arrow functions provide several benefits:

1. **Concise Syntax**: Arrow functions have a more compact syntax compared to traditional function expressions, making the code more readable and reducing boilerplate.
2. **Implicit Return**: If the function body consists of a single expression, the arrow function automatically returns the result of that expression without requiring an explicit `return` statement.
3. **Lexical `this` Binding**: Arrow functions inherit the `this` value from their surrounding context. This eliminates the need to use `bind`, `apply`, or `call` to preserve the value of `this` in different execution contexts.

## Considerations for Developers

While arrow functions offer many advantages, it's essential to consider a few factors as an entry-level developer:

1. **Function Context**: Due to the lexical `this` binding of arrow functions, they are not suitable for methods within objects that require dynamic binding of `this`. Regular functions with their own `this` context should be used in those cases.
2. **Readability**: Although arrow functions provide a concise syntax, it's important to balance brevity with readability. Sometimes, a traditional function expression with a clear name and explicit `return` statement might be more comprehensible, especially for complex or lengthy functions.
3. **Browser Compatibility**: While arrow functions are widely supported in modern browsers and Node.js, they might not work in older environments or legacy projects. Consider the target environment and transpilation options if broader compatibility is required.

As a developer, it's crucial to understand the concept of functions as first-class citizens and be familiar with arrow functions' syntax, benefits, and considerations. Practice using arrow functions where appropriate, gradually gaining experience to make informed decisions based on code readability, context, and project requirements.

## Favorite Color App

Let's try and build a app that will guess our favorite color:


**Part 1:**

1. Create a new file in the project directory. Name it `colorApp.js`.

```javascript
const readline = require('readline');
```
- We import the `readline` module from Node.js. This module provides an interface for reading input from the user.

**Part 2:**

```javascript
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

- We create an instance of `readline.Interface` using the `createInterface` method. This allows us to interact with the console and read input from the user (`input`) and write output to the console (`output`).

**Part 3:**

```javascript
const favoriteColor = 'blue';
let attempts = 0;
```

- We define a constant variable `favoriteColor` and set its value to `'blue'`. This represents the color the user needs to guess. We also declare a variable `attempts` and initialize it with a value of 0. This variable will keep track of the number of attempts the user has made.

**Part 4:**

```javascript
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
```

- We define a function `askQuestion` that handles asking the user to guess the favorite color.
- Inside the function, we display a message to the console asking the user to guess the favorite color.
- We use `rl.question` to wait for user input. The user's answer is passed as a parameter to the callback function `(answer) => { ... }`.
- We increment the `attempts` variable to keep track of the number of attempts the user has made.
- We check if the user's answer matches the `favoriteColor`. If it does, we display a congratulatory message and close the readline interface with `rl.close()`.
- If the user's answer is incorrect, we check if the number of attempts is less than 10. If so, we display a message to try again and indicate the number of attempts remaining. We then call the `askQuestion` function recursively to ask the question again.
- If the number of attempts reaches 10, we inform the user that they have run out of attempts and reveal the correct favorite color. We close the readline interface with `rl.close()`.

**Part 5:**

```javascript
console.log('Welcome to the Favorite Color Guessing Game!');
askQuestion();
```

- We display a welcome message to the console, introducing the Favorite Color Guessing Game.
- We call the `askQuestion` function to start the game by asking the user to guess the favorite color.

This tutorial provides an overview of how to create a simple console-based guessing game using the readline module in Node.js. It demonstrates how to prompt the user for input, validate their answer, and provide appropriate feedback based on the guessed color.

## Challenge: Create a Number Guessing Game

Create a file called `guessing.js`

**Instructions:**

1. You will be building a number guessing game using the provided code as a reference.
2. Modify the existing code to transform it into a game where the user has to guess a randomly generated number within a certain range.
3. Set the range for the game by defining a `minNumber` and `maxNumber` variable with values of your choice.
4. Generate a random number within the defined range and store it in a variable called `secretNumber`.
5. Update the `askQuestion` function to prompt the user to guess the secret number.
6. Keep track of the number of attempts made by the user.
7. If the user's guess matches the secret number, display a congratulatory message and end the game.
8. If the user's guess is incorrect, provide feedback and indicate the number of attempts remaining.
9. Limit the number of attempts to a maximum of 10.
10. If the user exhausts all attempts without guessing the correct number, display a message revealing the secret number.
11. Close the readline interface and end the game when appropriate.
12. Display a welcome message at the start of the game.

**Context:**

You are tasked with creating a number guessing game that challenges the user to guess a secret number within a specific range. The game should provide feedback to the user after each guess, indicating whether the guess is correct or incorrect. The user will have a maximum of 10 attempts to guess the number. If they are unable to guess correctly within the given attempts, the game will reveal the secret number. Your goal is to modify the existing code provided to implement this game logic. Remember to follow good programming practices and ensure your code is readable and well-structured.

**Note:** You can modify the `minNumber` and `maxNumber` variables to set a range suitable for your game. For example, you can set `minNumber` to 1 and `maxNumber` to 100 to create a game where the user has to guess a number between 1 and 100.