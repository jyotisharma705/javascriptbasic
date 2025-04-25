console.log("radha");
fullname = "radhakrishna";
age = 35;
price = 32.5;
x = null;
y = undefined;
isFollow = true;
isnotFollow = false;
console.log(fullname);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(isnotFollow);
/* type of operator */
/* it will give the data type of the variable */
console.log(typeof fullname);

/*variable in java script*/
/*var u can decalre same vaible with differnt valuse we cant use this frequantly */

var age = 35;
var age = 40;
var age = 45;

console.log(age);

/* let variable most of the time we use this variable in js*/
/*let is block scope variable*/
/* can not be redicalre varible again u can update value */
let age1 = 35;
let lastname = "krishna";
console.log(age1);

/* const  varibale  we cont change value */
const PI = 3.14;
console.log(PI);

/* Data type in JS */
/* primitive data type 
 1. String
   2. Number
   3. Boolean
   4. Null
   5. Undefined
   6. Symbol (ES6)
   7. BigInt (ES11) */
let a = 12;
let b = "som";
//let isFollow = true;
//let x = null;
//let y = undefined;
let z = Symbol("som");
let bigInt = BigInt(1234567890123456789012345678901234567890);
console.log(a);
console.log(b);
//console.log(isFollow);
//console.log(x);
//console.log(y);
console.log(z);



/* Non- primitive data type  8. Object */

/*object in js*/
/* object is a collection of key and value pair */
/* object is a non-primitive data type */
/* object is a reference type */
/* object is mutable */
/* object is dynamic */
/* object is a collection of properties */
/* object is a collection of methods */
/* object is a collection of key and value pair */
const student = {
    fullName: "radha", age: 35, ispass: true

};

console.log(student);
console.log(student.fullName);// accessing object property using dot notation
console.log(student["fullName"]);// accessing object property using bracket notation

student.age = student.age + 1; //updating object property
console.log(student.age); // accessing object property using dot notation