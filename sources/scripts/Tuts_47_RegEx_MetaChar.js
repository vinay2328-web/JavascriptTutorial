console.log('#Tuts-47: Regular Experssions with Meta Characters in Javascript');

let regex = /vinay/;

// Lets looks some metacharecter Symbol
// ^ : Carret symbol. Meaning: Experession will match if string "Start with"
// $ : dollar symbol. Meaning: Expression at the end of the string "Ends with"
// . : dot symbol. Meaning: Expression match with "Any one" character
// * : star symbol. Meaning: Expression match with "0 to more" character
// ? : question mark symbol. Meaning: ? after character means character is optional
// ? : question mark symbol. Meaning: ? after character means character is optional
// \ : back slash symbol. Meaning: ? Escape or skipp the character

regex = /^vin/;
regex = /ay$/;
regex = /v.nay/;
regex = /v*nay/;
regex = /vi?naya?k/;
regex = /v\*nay/;

let str = 'vinay is code with';

let result = regex.exec(str);

console.log('The result from exec is ', result);

if(regex.test(str)){
    console.log(`The string ${str} is matches the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}