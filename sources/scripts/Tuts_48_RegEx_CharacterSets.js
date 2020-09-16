console.log('#Tuts-48: Regular Experssions with Character Sets in Javascript');

// Character Set - we use []

let regex = /v[a-z]nay/; // can be any character from a to z
regex = /v[aty]nay/; // can be an a, t or y
regex = /v[^aty]nay/; // ^ : "Not" cannot be any of a, t or y
regex = /v[^aty]na[yk]/; // ^ : "Not" cannot be any of a, t or y + can be any of y or k
regex = /v[a-zA-Z]na[yk0-9][0-9]/; // we can have as many character sets as we want

// Quantifires - we use {}
regex = /kuho{2}/; // "o" can occur exactly 2 times
regex = /kuho{0, 2}/; // "o" can occur exactly 0 to 2 (0 or 1 or 2) times


// Grouping - we use paranthesis for grouping ()
regex = /(kuhoo){2}([0-9]v){3}/;

// const str = 'vInay8';
str = 'kuhookuhoo0v0v0v'; 

let result = regex.exec(str);
console.log('The result of expression is ', result);

if(regex.test(str)){
    console.log(`The string ${result} is matches with expression ${regex.source}`);
}
else {
    console.log(`The string ${result} does not match with expression ${regex.source}`);
}