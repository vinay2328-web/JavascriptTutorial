console.log('#Tuts-46: Regular Experssions in Javascript');

let reg = /vinay/; // This is regular expression literal in js
// reg = /vinay/g; // g means global
// reg = /vinay/i; // i means case insensitive

// console.log(reg);
// console.log(reg.source);


let s = "This is great code with vinay and also with vinay";

// Function to the match expressions
// 1. exec() - This function will return an array for match or null for no match

let results = reg.exec(s);
// console.log(results);
// results = reg.exec(s);
// console.log(results); ---> we can use multiple exec() with global flag

// if (results) {
//     console.log(results);
//     console.log(results.input);
//     console.log(results.index);
// }

// 2. test() - Returns true or false
let result2 = reg.test(s);
// console.log(result2); ---> This will only print if the "reg" is there in the string "s"

// 3. match() - It will returns array of results or null

// let result3 = reg.match(s); ---> !This is wrong!!
let results3 = s.match(reg); // ---> ! This is write!!
// console.log(results3);

// 4. seach() - It will returns index of first else -1
// let result4 = reg.search(s); ---> !This is wrong!!
let results4 = s.search(reg); // ---> ! This is write!!
// console.log(results4);

// 5. replace() - It will returns new replaced string with all replacement (if no flag is given then first match will be replaced)
let results5 = s.replace(reg, "Kuhoo");
console.log(results5);