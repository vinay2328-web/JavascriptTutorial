console.log('Today we are learning Javascript Array and Objects');
let marks = [36, 67,78,89,66,45];
const fruits = ['Orange', 'Mango', 'Apple', 'Kivi'];
const mixed = ['Vinay', 23, 'Kuhoo', ['Mau', 'Tinu', 10]];

const arr = new Array('Books', 'Files', 'Desk', 05, 28, ['Desk1', 'Desk2', 28]);
// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);
// console.log(arr.length);
// console.log(Array.isArray(arr));

// console.log(arr);
arr[0] = 'Vinay';
// console.log(arr);
let arrElement = arr[0];
// console.log(arrElement);

// console.log(marks);
let value = marks.indexOf(67);
// console.log(value);

// Mutating or Modifying Array
marks.push('vinay'); // inseting element at the end position
// console.log(marks);
marks.unshift(2328); // inserting element at the start position
// console.log(marks);
marks.pop(); // Deleting last element from an array
// console.log(marks);
marks.shift(); // Deleting first element from an array
// console.log(marks);
// marks.splice(3, 3); 
// marks.reverse(); 
marks = marks.concat(fruits); 
// console.log(marks);

let myObj = {
    name: 'Vinay',
    channelName: 'CodeWithVinay',
    isActive: true,
    marks: [56, 78, 98, 82]
};

console.log(myObj);
