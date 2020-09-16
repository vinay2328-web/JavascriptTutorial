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
myObj['name'] = 'Good people';
myObj[4] = 'Good int';

console.log('myObj is: ', myObj);
console.log('myObj is: ', myObj[k1]);
console.log('myObj is: ', myObj[k2]);
console.log('myObj is: ', myObj.k2); // !! Alert !! :- Cannot do this to get Pallvali because it is same as myObj["k2"]

// Symbols are ignored in for-in loops
for(key in myObj){
    console.log('Symbols are in for-in loop: ', key, myObj[key]);
}

// Convertion: Object to string convertion
console.log('Obj to String convertion: ', JSON.stringify(myObj)); // Symbols are cannot be converted