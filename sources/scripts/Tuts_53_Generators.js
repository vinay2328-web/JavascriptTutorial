console.log('#Tuts-53: Generators in Javascript');

// GENERATORS:
// Syntax: function* nameOfFunc(){}

function* numbersGen(){
    let i = 0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true){
        // yield i;
        // i++;
        // yield i++;
        yield (i++).toString();
    }
}

let generat = numbersGen();
console.log(generat.next().value);