console.log('#Tuts-60: Destructing in Javascript');

// Destructing in Javascript

let a, b;
[a, b] = [34, 456];
// console.log(a ,b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log('a: ', a);
// console.log('b: ', b);
// console.log('c: ', c);
// console.log('d: ', d);

// Array Destructuring
({a, b, c, ...d} = {a: 34, b: 23, c: 05, d: 28, e: 10});
// console.log(a, b, c, d);

const friuts = ['Apple', 'Bananas', 'Mango'];
[a, b, c] = friuts;
// console.log(a, b, c);

// Object Destructuring

const cars = {
    name: 'Nexa',
    color: 'Sea - Green',
    topSpeed: '240 Kmph',
    mailage: '34 kmpl',
    startCar: ()=>{
        console.log(`${name} is in ${color} color. And having mailage ${mailage} km/lit with ${topSpeed} km/hr topspeed`)
    }
}

const {name, color, topSpeed, mailage, startCar} = cars;
console.log(name, color, topSpeed, startCar);
startCar();