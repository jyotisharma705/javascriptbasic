/*Conditional Statements */
// Conditional statements are used to perform different actions based on different conditions.
// In JavaScript, we have the following conditional statements:
// if statement


a = 10;
if (a == 10) {
    console.log("a is equal to 10");
}


// if...else statement

let Age = 16;
if (Age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}


//number is even or odd
// The modulus operator (%) is used to find the remainder of a division operation.
let num = 2;
if (num % 2 === 0) {
    console.log(num + " is even.");
}
else {
    console.log(num + " is odd.");
}

//else if statement


let color = "white";

if (color == "red") {

    console.log("The color is red.");

}
else if (color == "blue") {

    console.log("The color is blue.");
}

else {
    console.log("The color is neither red nor blue.");
}


//mode example

let mode = "dark";
let color1;

if (mode == "dark") {
    color1 = "black";

}
else if (mode == "light") {
    color1 = "white";
}

else if (mode == "pink") {
    color1 = "pink";
}
else {
    color1 = "blue";

}
console.log("color mode : ", color1);

//ternary operator

let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote);

// Switch statement

let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("You chose an apple.");
        break;
    case "banana":
        console.log("You chose a banana.");
        break;
    case "orange":
        console.log("You chose an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
// The switch statement is used to perform different actions based on different conditions.