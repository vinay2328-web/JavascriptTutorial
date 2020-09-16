console.log("Functions in Javascript");
// // function in JavaScript
// function greet(name, thank = 'Thnak you !'){
//     let msg = `Happy Birthday ${name}, How I wish I could fly to
//     you right now and be with you on this special day of yours.
//     ${thank}`;
//     return msg;
// }
// let name = 'Vinay';
// // greet(name, 'Thanks a lot!');
// let val = greet(name);
// console.log('val: ', val);

const stdInfo = function(name, rollNum, grade){
    let clsDetails = `Student Name: ${name}, Roll Number: ${rollNum}, Grade: ${grade}`;
    return clsDetails;
}

let name = 'Pallavi', rollNum = 23, grade = 'A+';
const myObj = {
    name: 'Vinay',
    game: function(){
        return "Kusti";
    }
}
let StudentDetails = stdInfo(name, rollNum, grade);
console.log('Student Details: ', StudentDetails, myObj.game());