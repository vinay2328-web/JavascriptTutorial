console.log('#Tuts-58: Sets in JavaScript');

// Set stors unique values

let mySet = new Set();
console.log('This is mySet: ',mySet); // Initilize an empty set

// Adding values to the Set
mySet.add('This');
mySet.add('My Name');
mySet.add('Thiss');
console.log('This is mySet looks now: ',mySet); // Initilize an empty set

// Use the constructor to initilize the set
let genSet = new Set(["Vinay", 28, {a: "Kuhoo", b: "Pallavi"}, true, false]);
console.log('This is genSet: ', genSet);

// Geting size of Set
console.log(genSet.size);

// Using .has() to find the unique value from Set
console.log("Is myName is available: ", mySet.has('My Name')); // Check whether set has 'My Name' or not
console.log("Is 343 is available: ", mySet.has(343)); // Check whether set has 343 or not

// Using .delete() to remove unique value from Set
console.log('b4 removal: ', mySet.has('Thiss'), mySet);
mySet.delete('Thiss'); // Remove an element from the set
console.log('after removal: ', mySet.has('Thiss'), mySet);

// Iterating Set
for(let item of mySet){ // Using for-of loop
    console.log('For-of Item is: ', item);
}

mySet.forEach((item)=>{
    console.log('ForEach Item is: ', item);
});

// Coverting Sets to an Array

let myArray = Array.from(mySet);
console.log("Converting Sets to an Array is: ", myArray);