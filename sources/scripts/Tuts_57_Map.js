console.log('#Tuts-57: Maps in Javascript');

// Maps in JavaScript: We can use any type of key or value 
const myMap = new Map();


const key1 = "myString", key2 = {}, key3 = function(){};

// Setting Map values
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function");
console.log(myMap);

// Geting Map values

let val1 = myMap.get(key1);
let val2 = myMap.get(key2);
let val3 = myMap.get(key3);

console.log("Value1: ", val1, "\n", "Value2: ", val2, "\n", "Value3: ", val3, "\n",);

// Get the size of Map
console.log(myMap.size);

console.log('***Maps using For-of loops Started***');
// You can loop using for-of to get keys and values
for(let [key, value] of myMap){
    console.log("key: ", key);
    console.log("value: ", value);
}

// Get only keys
for(let key of myMap.keys()){
    console.log('Key is: ', key);
}

// Get only values
for(let value of myMap.values()){
    console.log('value is: ', value);
}

// You can loop using throug for - each to get value and key
console.log('***Maps using For-each loops Started***');
myMap.forEach((value, key)=>{ // *Note: value parameter is in first position then second is key
    console.log("key: ", key);
    console.log("value: ", value);
});

//Converting map to an array
let myArray = Array.from(myMap);
console.log("map to array is: ", myArray);

//Converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log("Coverting myMap keys to an array is: ",myKeysArray);

//Converting map to an array
let myValuesArray = Array.from(myMap.values());
console.log("Coverting myMap values to an array is: ", myValuesArray);