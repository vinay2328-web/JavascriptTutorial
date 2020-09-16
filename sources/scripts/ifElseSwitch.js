console.log('If-Else & Switch Statment in Javascript');
const age = 28;
// const vari = 34;
const doesDrive = false;

// if(age == 19){
//     console.log('Age is 19');
// }
// else if(age == 23){
//     console.log('Age is 23');
// }
// else {
//     console.log('Age is not 19');
// }
// if(typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }
// else {
//     console.log('Vari is not defined');
// }

// if(doesDrive && age > 18){
//     console.log('You can drive');
// }
// else {
//     console.log('You can not drive');
// }

/* Turnary Operator (condition ? true : false) */
// console.log(age == 34 ? 'Age is 34' : 'Age is not 34');
switch(age){
    case 18 :
        console.log('You are 18');
        break;
    case 28 :
        console.log('You are 28');
        break;
    case 38 :
        console.log('You are 38');
        break;
    default :
        console.log('Unknown Age');
        break;
}