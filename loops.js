/* for loop */

for (let i = 0; i < 10; i++) {
    console.log(i);
} // Output: 0, 1, 2, 3, 4


//Calculate sum of  1 to 5 

let sum = 0;
let n = 5; // number to calculate sum
for (let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("sum of number :", sum); // Output: 15

//infinite loop

//while loop

let i = 1;
while (i <= 5) {

    console.log("i ki value for while loop ", i); i++;
}

//do while loop
// loop run at least once

let j = 1;

do {
    console.log("j ki value for do while loop ", j);
    j++;
}
while (j <= 5);

//for-of loop


let str = "hello world";

let size = 0;
for (let char of str) {

    console.log("charachter of a string :", char); // Output: h, e, l, l, o,  , w, o, r, l, d
    size++;

}

console.log("size of string is :", size); // Output: 11

//for-in loop
// loop through object properties
// for-in loop is used to iterate over the properties of an object
// key is the property name and value is the property value
// for-in loop is used to iterate over the properties of an object


let obj = {
    name: "radha",
    age: 20,
    city: "delhi"
}

for (let key in obj) {

    console.log("key of object is :", key); // Output: name, age, city
    console.log("value of object is :", obj[key]); // Output: radha, 20, delhi
}