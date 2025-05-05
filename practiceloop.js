/* Print all even numbers from 0 to 100 */
for (let i = 0; i <= 100; i++) {

    if (i % 2 === 0) {  // Check if the number is even
        console.log("Print Even number =", i); // Print the even number  
    }

}

/* create a game where you start with any random game number.
Ask the user to keep guessing the game number until the user enters correct value.*/



let gamenumber = 25;

// propmpt may number sting form may aa rhe h so we use != instead of !==  to compare string and number.

let usernumber = prompt("Welcome to the Guessing Game! Please enter a number between 1 and 100:");

while (usernumber != gamenumber) {

    usernumber = prompt("Please try another number");

}

console.log("congratulations you enter correct number");



