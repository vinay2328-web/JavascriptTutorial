console.log('#Tuts-48: Regular Experssions Character Sets in Javascript');

let regex = /\wood/;    // "\w"  : word character -  "_" or "alphabet" or "number"
regex = /\w+od/;        // "\w+" : word character plus -  one or more word character
regex = /\W05-19/;      // "\W"  : Non word character
regex = /\W+he/;        // "\W+" : More than one Non word character
regex = /\d019/;        // "\d"  : means match digit
regex = /DOB \d+/;      // "\d+" : means match more than one digit
regex = /\D2019/;       // "\D"  : means match Non digit
regex = /\D+2019/;      // "\D+" : means match more than one Non digit
regex = /\sgirl/;       // "\s"  : means match whitespace character
regex = /\s+girl/;      // "\s+" : means match one or more than one whitespace characters
regex = /\Srl/;         // "\S"  : means match non whitespace characters
regex = /\S+d/;         // "\S+" : means match one or more than one non whitespace characters
regex = /kuhoo\b/;      // "\b"  : means word boundry - matches next word

// Asserssions
regex = /k(?=u)/;
regex = /oo(?!d)/;

let str = "kuhoo is good girl. DOB 0205KVP2019";

let result = regex.exec(str);
console.log('The result is: ', result);

if(regex.test(str)){
    console.log(`The string "${str}" is matches expression ${regex.source}`);
}
else{
    console.log(`The string "${str}" is does not match expression ${regex.source}`);
}