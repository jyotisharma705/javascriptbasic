// Q 1 : Prompt the user to enter their full name. Generate a username
//for them based on the input . Start username with @AbortController, followed by their
//full name and ending with the full name length.

//eg: user name = "radhakrishna" , username should be "@radhakrishna12"


let fullname = prompt("Enter Your Full Name");

//console.log(fullname);

//let FL = fullname.length;

let smbol = "@" + fullname + fullname.length

//let smbol = "@" + fullname + FL


console.log(smbol);