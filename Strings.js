// Strings is a sequence of characters used to represent text

// Create String
let str = "Radha";

//String Length (Property)

str.length

// String Indices

str[0], str[1], str[2]


// Template Literals in JS
// A way to have embedded expressions in strings

//  `this is a template literal`

// String Interpolation
// To create strings by doing substitution of placeholders

//`string text  ${expression} string text`


// Example  of Literals 

let obj = {
    item: "pen",
    price: 10
};

console.log(`This is the item ${obj.item}. Cost of this item is ${obj.price} rupees.`);

console.log("This is the item of a object", obj.item, "Price of object", obj.price);

//Example 

let specialString = `This is a template literal ${1 + 2 + 3}`;
console.log(specialString);

//Escape Character

\n -> Next Line

\t -> Tab Character

// String Methods in JS
These are built -in functions to manipulate a String

str.toUpperCase()
str.toLowerCase()
str.trim() //remove whitespaces  // from starting and end from the string
str.slice(start, end ? ) //returns part of string
str1.concat(str2) //joins str 2 with str1
str.replace(searchVal, newVal)
str.charAt(idx)


let str = "123456";
console.log(str.slice(0, 4));


let str = "radha";

let str = "krishna";

let res = str1.concat(str2);
//let res = str1 + str2 ;
console.log(res);


str.replace(searchVal, newVal)  // replace value in string 

let str = "hello";

console.log(str.replace("h", "y"));
console.log(str.replaceAll("h", "y"));


str.charAt(idx);

let str = " I love JS";

console.log(str.charAt(3));