console.log('Loops in Javascript');
// General loops: for, while, do-while
// for loop
// for(let i = 10; i > 5; i--){
//     console.log('Item Number: ', i);
// }

// for(let x = 1; x < 6; x++){
//     console.log('X value is: ', x);
// }

// while loop
// let j = 0;
// while(j < 10){
//     console.log('The value of J is: ', j);
//     j += 1;
// }

// let z = 10;
// while(z > 0){
//     console.log('Z is: ', z);
//     z -= 1;
// }

// do -- while loop
// let y = 0;
// do {
//     console.log('The Number is: ', y );
//     y++;
// } while (y < 5);

// break and continue
// let k = 0;
// do {
//     if(k === 5){
//         break;
//     }
//     console.log("K is: ", k + 1);
//     k++;
// }while(k < 10);
// console.log('Done with K');

// let s = 0;
// do {
//     if(s === 5){
//         s += 1;
//         continue;
//     }
//     console.log("S is: ", s);
//     s++;
// }while(s < 10);
// console.log('Done with s');

// foreach
let arr = [23,55,28,10,34,26,38];
// Old way
// for(b = 0; b < arr.length; b++){
//     const elements = arr[b];
//     console.log("b is: ", elements);
// }
// New way
// arr.forEach(function(element){
//     console.log('arr is: ', element);
// });

arr.forEach(function(elements, index, array){
    console.log("arr is: ", elements, '||', index);
});

// Objects
// let obj = {
//     name: 'Vinay',
//     age: 32,
//     type: 'Dengorus Proggrammer',
//     os: 'Ubantu'
// }

// for(let key in obj){
//     console.log(`The ${key} of the objects is ${obj[key]}`);
// }

// let studen = {
//     name: 'Pallavi',
//     age: 30,
//     class: 'MCA',
//     rollNumber: 23,
//     grade: 'A+'
// }

// for(let key in studen){
//     // console.log(key);
//     let html;
//     html = `The student ${key} is ${studen[key]}`;
//     console.log(html);
// }
