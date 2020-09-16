console.log('#Tuts-41: Arrow Function in Javascript');

// ARROW FUNCTIONS

// Creating regular function
// const vin = function(){
//     console.log('This is common function');
// };

// Coverting it to an Arrow Function
// const pal = ()=> {
//     console.log('This is arrow pal function');
// }

// vin();
// pal();

// Function returning something
// const greet = function(){
//     return "Good Morning";
// }

// Converting to an arrow function
// const greet = ()=> {
//     return "Good Morning"
// }

// One liner does not requried curly braces/return
// One liner automatically return
// const greet = ()=>"Good Morning...";

// Creating function to returning the object 
// const greet = () => ({name: "Vinay"});

// Single parameter do not need paranthesis ()
// const greet = name => "Good Morning " + name; 
// but you will have to put paranthesis if there are multiple parameters
const greet = (name, age) => "Good Morning " + name + " I am " + age + " yrs old."; 
// console.log(greet('Vinay', 30));

// PRACTICE:

// Create regular function
// const kuhoo = function(name, hobby){
//     return "Hey Welcome.. My name is " + name + " and I like " + hobby;
// }

// console.log(kuhoo('Kuhoo', 'Dancing'));

// Converting it to an Arrow function
const kuhoo = (name, hobby) => "Hey Welcome.. My name is " + name + " and I like " + hobby;
// console.log(kuhoo('Pallavi', 'Drawing'));

let students = [
    { name: "Pallavi", age: 28, designation: "Software Engineer" },
    { name: "Harry", age: 25, designation: "Machanical Engineer" },
    { name: "Kuhoo", age: 3, designation: "Head Girl" },
    
];

let stdList = document.getElementById('stdList');

// Create regular function
let studentsList = function(){
    let str = "";
    Array.from(students).forEach(function(element){ // regular function
        let students = `<li><span><b>Name: </b> ${element['name']}</span></li>
                        <li><span><b>Age: </b> ${element['age']}</span></li>
                        <li><span><b>Designation: </b> ${element['designation']}</span></li>`;
        str += students;
    });
    stdList.innerHTML = str;
}
// studentsList();

// Converting it to an Arrow function
let myStud = () => {
    let str = "";
    Array.from(students).forEach(element => { // arrow function
        let students = `<li><span><b>Name: </b> ${element.name}</span></li>
                        <li><span><b>Age: </b> ${element.age}</span></li>
                        <li><span><b>Designation: </b> ${element.designation}</span></li>`;
        str += students;
    });

    stdList.innerHTML = str;
};
myStud();