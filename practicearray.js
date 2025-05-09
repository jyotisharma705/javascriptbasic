let fname = ["radha", "krishna", "gopi", "meera"]

// for (let index = 0; index < fname.length; index++) {

//     console.log(fname[index]);
// }

// for of loop 
// for (let el of fname) {
//     console.log(el);
// }

// for in loop

// for (let el in fname) {
//     console.log(el);
// }



// let cities = ["indore", "jaipur", "rishikase", "delhi", "mumbai"]

// for (let ci of cities) {
//     console.log(ci.toUpperCase());
// }


//Q1: For a given array with marks of students -> [85,97,44,37,76,60]
// Find the average marks of the entire class.

let studentm = [85, 97, 44, 37, 76, 60]

let sum = 0;

for (let i = 0; i < studentm.length; i++) {
    sum = sum + studentm[i]
}

console.log(sum);

let Avg = sum / studentm.length

console.log(`Avg marks of of the class = ${Avg}`);

// for (let val of studentm) {
//     //  console.log(val);
//     sum = sum + val;
// }

// let Avg = sum / studentm.length;

// console.log(`Avg marks of the class = ${Avg}`);


// Q2 : For a given array with prices of 5 items -> [250,645,300,900,50]
// All items have an offer of 10% OFF on them. Change the array to store final price
// after applying offer.

let prices = [250, 645, 300, 900, 50];

// let i = 0;

// for (let val of prices) {
//     console.log(`Value at index ${i} : ${val}`);
//     let offer = val / 10;
//     prices[i] = prices[i] - offer;
//     console.log(`Value after discount = ${prices[i]}`);
//     i++;
// }


for (let i = 0; i < prices.length; i++) {


    console.log(`Value at index ${i} : ${prices[i]}`);

    let offer = prices[i] / 10;

    console.log(`Offer Value :  ${offer} `);

    prices[i] -= offer;

    console.log(`Value after discount = ${prices[i]}`);

}

// push Methods 

let foodItems = ["potato", "apple", "banana", "tomato"];

// push : Insert value at the end of array. change main array.
console.log(foodItems);

foodItems.push("paratha", "dosa");
console.log(foodItems);

// pop : Delete value at the end of array. change main array.
let deletedItem = foodItems.pop();
console.log(`Deleted Item from the list : ${deletedItem}`);
console.log(foodItems);

//toString : Change Array on to string but dont change value in Array

console.log(foodItems.toString());

//Concat(): joins multiple arrays & returns result
let vegi = ["patato", "tomato", "garlic", "ginger", "chili", "mushroom"];

let fruit = ["apple", "banana", "orange", "grapes"];

let mix = vegi.concat(fruit);

console.log(`Mix of a fruit and vegitable : ${mix}`);

//Unshift() : add to start

fruit.unshift("litchi", "pear");
console.log(`Add item in fruit : ${fruit}`);

//shift() : delete from start & return 

let sDelete = fruit.shift();
console.log(`Deleted item form start ${sDelete}`);


//slice() : returns a piece of the array
//we use it createing copy array
console.log(vegi.slice(1, 4));

//splice() : change original array(add, remove, replace)

let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 2, 101, 102);

//Add Element
//arr.splice(2, 0, 101);

//Delete Element
//arr.splice(3, 1);

//Replace Element
arr.splice(3, 1, 101);

console.log(arr);
