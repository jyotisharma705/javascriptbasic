/*Operators and Conditional Statements */
// Arithmetic Operators

// Addition
let a = 5;
let b = 10;
let sum = a + b;
console.log("Sum:", sum); // Output: Sum: 15

// Subtraction
let difference = b - a;
console.log("Difference:", difference); // Output: Difference: 5

// Multiplication
let product = a * b;
console.log("Product:", product); // Output: Product: 50

// Division
let quotient = b / a;
console.log("Quotient:", quotient); // Output: Quotient: 2

// Modulus (Remainder)
let remainder = b % a;
console.log("Remainder:", remainder); // Output: Remainder: 0

// Exponentiation
let exponent = a ** 2;
console.log("Exponentiation:", exponent); // Output: Exponentiation: 25

// Unary Operators
// Unary plus (converts to number)
// Increment
a++;
console.log("Incremented a:", a); // Output: Incremented a: 6 // value of a is incress by 1

// Decrement
b--;
console.log("Decremented b:", b); // Output: Decremented b: 9 // value of b is decress by 1

//post increment
let c = 5;
console.log("c++", c++); // o/p = 5
console.log("c after post increment", c); // o/p = 6

let d = 5;
console.log("++d", ++d); // o/p = 6


// Unary negation (negates the value)
let negation = -a;
console.log("Negation of a:", negation); // Output: Negation of a: -6


// Assignment Operators
// Assignment
let x = 10;
let y = 5;

/* Assignment with addition*/

x += y; // x = x + y; // x becomes 15
console.log("x after +=:", x); // Output: x after +=: 15

/* Assignment with subtraction*/

x -= y; // x = x - y; // x becomes 10
console.log("x after -=:", x); // Output: x after -=: 10

/* Assignment with multiplication*/
x *= y; // x = x * y; // x becomes 50
console.log("x after *=", x); // Output: x after *=: 50

/* Assignment with division*/
x /= y; // x = x / y; // x becomes 10
console.log("x after /=", x); // Output: x after /=: 10

/* Assignment with modulus*/
x %= y; // x = x % y; // x becomes 0
console.log("x after %=", x); // Output: x after %=: 0  

/* Assignment with exponentiation*/
x **= y; // x = x ** y; // x becomes 0      
console.log("x after **=", x); // Output: x after **=: 0


// Comparison Operators
/* ==, ===, !=, !==, >, <, >=, <= */
// Equality (==) and Strict Equality (===)  

let num1 = 5;
let num2 = "5";
console.log("num1 == num2:", num1 == num2); // Output: true (loose equality)
console.log("num1 === num2:", num1 === num2); // Output: false (strict equality)

let x1 = 10;
let y1 = 10;
console.log("x1 == y1:", x1 == y1); // Output: true (loose equality)
console.log("x1 === y1:", x1 === y1); // Output: true (strict equality)

// Inequality (!=) and Strict Inequality (!==)
let st1 = 5;
let st2 = "5";
console.log("st1 != st2:", st1 != st2); // Output: true (loose inequality)
console.log("st1 !== st2:", st1 !== st2); // Output: true (strict inequality)

console.log("st1 != st2:", st1 != st2); // Output: true (loose inequality)
// console.log("st1 != st2:", st1 != st2); // Output: true (loose inequality)
// console.log("st1 !== st2:", st1 !== st2); // Output: true (strict inequality) 

// Greater than (>) and Less than (<)
let a1 = 10;

let b1 = 5;
console.log("a1 > b1:", a1 > b1); // Output: true
console.log("a1 < b1:", a1 < b1); // Output: false  


// Greater than or equal to (>=) and Less than or equal to (<=)
let a2 = 10;
let b2 = 10;
console.log("a2 >= b2:", a2 >= b2); // Output: true
console.log("a2 <= b2:", a2 <= b2); // Output: true

// Logical Operators
// AND (&&)


let aA = 23;
let bA = 45;

console.log("aA > bA && aA == bA:", aA > bA && aA == bA); // Output: false (both conditions must be true)
console.log("aA < bA && aA == bA:", aA < bA && aA == bA); // Output: false (both conditions must be true)
console.log("aA < bA && aA != bA:", aA < bA && aA != bA); // Output: true (both conditions must be true)

// OR (||)
let aO = 23;
let bO = 45;
console.log("aO > bO || aO == bO:", aO > bO || aO == bO); // Output: false (at least one condition must be true)
console.log("aO < bO || aO == bO:", aO < bO || aO == bO); // Output: true (at least one condition must be true)
console.log("aO < bO || aO != bO:", aO < bO || aO != bO); // Output: true (at least one condition must be true)
console.log("aO > bO || aO != bO:", aO > bO || aO != bO); // Output: true (at least one condition must be true)

// NOT (!)
let aN = 23;
let bN = 45;
console.log("!(aN > bN):", !(aN > bN)); // Output: true (negates the condition)
console.log("!(aN < bN):", !(aN < bN)); // Output: false (negates the condition)
console.log("!(aN == bN):", !(aN == bN)); // Output: true (negates the condition)
console.log("!(aN != bN):", !(aN != bN)); // Output: false (negates the condition)
console.log("!(aN >= bN):", !(aN >= bN)); // Output: true (negates the condition)
console.log("!(aN <= bN):", !(aN <= bN)); // Output: false (negates the condition)
