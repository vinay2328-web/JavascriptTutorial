console.log('#Tuts-59: Symbol in Javascript');

// Symbol: Premitive Type
const symb1 = Symbol('My Identifire');
const symb2 = Symbol('My Identifire');
// console.log("Symbol is: ", symb1);
// console.log("Type of Symbol is: ", typeof symb1);

console.log(symb1 === symb2);
console.log(null === null);
console.log(undefined === undefined);

const a = "this is";
const b = "this is";

console.log("a is equal to b: ",a === b);
console.log(null === null);
console.log(undefined === undefined);

let myObj = {};

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifire for k2');

myObj[k1] = "Vinay";
myObj[k2] = "Pallavi";

console.log('myObj is: ', myObj);