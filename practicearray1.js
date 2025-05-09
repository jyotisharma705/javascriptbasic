// Q1 : Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add ola in its Place
// c. 

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


let fRemove = companies.shift();

console.log(`first company Remove : ${fRemove}`);

companies.splice(1, 1, "Ola");

companies.push("Amazon");

console.log(`final companies Array : ${companies}`);