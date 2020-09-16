console.log("#Tuts-30: Prototype Inheritance in Javascript");
// Prototype Inheritance
const proto = {
    slogan: function(){
        return `This Company is the best`;
    }
    , changeName: function(newName){
        this.name = newName;
    }
}
// Create Object
// This create kuhoo object
let kuhoo = Object.create(proto);
kuhoo.name = "Pallavi";
kuhoo.role = "Analytics";

// This also create kuhoo object
const kuhoo1 = Object.create(proto, {
    name: {value: "Pallavi", writable: true},
    role: {value: "Analytics"}
});
kuhoo1.changeName("Vinay");
// console.log(kuhoo, kuhoo1);

// Employee Constructor
function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
// Employee Prototype Slogan
Employee.prototype.slogan = function(){
    return `This Company is best. Regards, ${this.name}`;
}
// Create an object for this constructor now
let emplObj = new Employee("Vinay", 85550, 8);
// console.log(emplObj, "\n", emplObj.slogan());

// Programmer Constructor
function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}
// Inherit the Prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the Constructor
Programmer.prototype.constructor = Programmer;

let hary = new Programmer("Hari", 78900, 5, "C/C++");
// console.log(hary);

/*
Assignment:
Create flour and cake constructors
Inherit flour constructor into the cake constructor
*/
//Flour Constructor
function Flour(material, water){
    this.cakeMaterial = material;
    this.cakeWater = water;
}
Flour.prototype.setMateiral = function(newMaterial){
    this.cakeMaterial = newMaterial;
    return this.cakeMaterial;
}
Flour.prototype.getMaterial = function(){
    return this.cakeMaterial;
}
function CakeIngradients(material, water, price, type){
    // Inherit flour constructor
    Flour.call(this, material, water);
    this.cakePrice = price;
    this.cakeType = type;
}
CakeIngradients.prototype = Object.create(Flour.prototype);
CakeIngradients.prototype.constructor = CakeIngradients;
let myCake = new CakeIngradients("Floor", "Hot Water", 350, "Butter-Scotch");
let myCake2 = new CakeIngradients("Thali");
console.log(myCake);