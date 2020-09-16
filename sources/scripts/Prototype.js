console.log('#Tuts-28: Prototype in Javascript');
// // Object literals Object.prototype
// let myObj = {
//     name: "Kuhoo",
//     age: 1,
//     dob: new Date(),
//     action: function(){
//         console.log(`${this.name} is doing "Gheeeee...."`)
//     }
// }
// // Object Constructor
// function newObj(givenName, givenAge){
//     this.age = givenAge;
//     this.name = givenName;
//     return (this.name, this.age, this.dob, this.action);
// }
// // // Object Prototype
// newObj.prototype.getName = function(){
//     return this.name;
// }
// newObj.prototype.getAge = function(){
//     return this.age;
// }
// newObj.prototype.getAction = function(givenAction){
//     this.action = givenAction;
//     return this.action;
// }

// let obj = new newObj("Pallavi", 20);
// // console.log(obj, myObj);

// delete myObj.dob;
// // console.log(myObj);

// function getAll(){
//     alert('this is gellAll function');
//     let getAll = [];
//     getAll.push(myObj);
//     return getAll;
// }

// function Mobile(){
//     this.model = "Sony";
//     this.price = function(){
//         return document.write(this.model + " Price Rs. 34000");
//     }
// }

// let model = new Mobile("Samsung");
// // model.price();
// Mobile.prototype.getModel = function(){
//     console.log("model: ", model);
//     return this.model;
// }

// function HandSets(model_no, model_price){
//     this.model = model_no;
//     this.modelPrice = model_price;
//     this.price = function(){
//         console.log(`${this.model} price is Rs. ${this.modelPrice}`);
//     }
// }

// let sony = new HandSets("SONY", 44000);
// sony.price();
// let samsung = new HandSets("SamSung", 28900);
// samsung.price();
// HandSets.prototype.getName = function(){
//     console.log('this function is used for to get name from HandSet object');
//     return this.model;
// }
// console.log("sony: ", sony);
// console.log("samsung: ", samsung);

// Object literal Object.prototype
let modelDetails = {
    name: "Maruti Alto 800",
    topSpeed: 90,
    color: "White",
    price: function(){
        return(this.name + " "+ this.color + " is in color" + " and having top speed " + this.topSpeed + "Km/H " );
    }
}
console.log(modelDetails);

// Constructor
function ModelDetails(givenName){
    this.name = givenName;
}
// Prototype function

ModelDetails.prototype.setName = function(newName){
    this.name = newName;
}
ModelDetails.prototype.setColor = function(newColor){
    this.color = newColor;
}
ModelDetails.prototype.getName = function(){
    return this.name;
}
let carDetails = new ModelDetails("Skoda");
console.log("skoda: ", carDetails);