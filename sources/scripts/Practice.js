console.log('Practice in JavaScript');
// Create Object litrales

let userOne = {
    name: 'Vinay',
    email: 'vinay.pathrikar28@gmail.com',
    login(){
        console.log(this.email, " has logged in");
    },
    logout(){
        console.log(this.email, " has logged out");
    },
    age: 30
}

console.log(userOne);

// Updating Object properties

userOne.name = 'Tinu';
userOne['email'] = 'vinay2328@gmail.com';

let prop = 'email';
console.log(userOne[prop]);

// Creating multiple object of same type
/* the new keyword
    1] create a new empty object
    2] sets the value of 'this' to be the new empty object
    3] calls the constructor method
 */
class User {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    login(){
        console.log(this.name, ' has logged in');
    }

    logout(){
        console.log(this.name, ' has logged out');
    }

}

let userTwo = new User('Hari', 'hari@agbc.com', 25);
let userThree = new User('Pallavi', 'pal@xyz.com', 28);

console.log(userTwo);
