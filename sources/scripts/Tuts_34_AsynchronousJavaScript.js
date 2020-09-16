console.log("#Tuts-34: Asynchronous Javascript");

// Asynchronous call many actions performed at a time
setTimeout(function(){
    for(let index = 0; index < 405; index++){
        const element = index;
        console.log("This is index number: ", "Asynchronous " + index);
    }
}, 300);

console.log("Done.. Asynchronous call is performed!");

// Synchronous call many actions performed back to back 
for(let num = 0; num < 405; num++){
    const element = num;
    console.log("This is num: ", "Synchronous " + num);
}
console.log("Done.. Synchronous call is performed!")