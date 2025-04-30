/*Get user to input a number using prompt ("Enter a number:"). check if the number is a multiple of 5  or not .*/

let num = prompt("Enter a number:");

if (num % 5 === 0) {
    console.log(num, "The number is a multiple of 5.");
}
else {
    console.log(num, "The number is Not a multiple of 5.");
}

/* write a code which can give grades to student accourding to their scores: 

80-100 = A
70-79 = B
60-69 = C
50-59 = D
40-49 = E
0-39 = F
*/

let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score <= 79) {
    console.log("Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C");
}
else if (score >= 50 && score <= 59) {
    console.log("Grade D");
} else if (score >= 40 && score <= 49) {
    console.log("Grade E");
}
else if (score >= 0 && score <= 39) {
    console.log("Grade F");
}
else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}