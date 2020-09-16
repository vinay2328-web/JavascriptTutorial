console.log('#Tuts-44: Error Handling & Try Catch in Javascript');

// Pretent this is coming from server as response

let a = "Kuhoo didi";
a = undefined;
if(a != undefined){
    // Create custom error
    throw new Error('This is not undefined');
}
else {
    console.log('This is undefined');
}

// try catch

try {
    // null.console;
    console.log('We are in try block');
    eval(alert('How dare!'));
    eval(a);
    functionKuhoo();

}catch(error){
    console.log('Are you okay?');
    console.log(error);
    console.log('Error Name: ', error.name);
    console.log('Error Message: ', error.message);
} finally {
    console.log('We are run this');
}