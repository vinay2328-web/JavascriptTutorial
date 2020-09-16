console.log("#Tuts-31: ES6 Classes and Inheritance in Javascript");
// Create Employee class: template
// Constructor : object parameter
class Employee {
    constructor(givenName, givenExp, givenDivision){
        this.name = givenName;
        this.experience = givenExp;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    static add(a, b){ // Will use without creating object
        return a + b;
    }
}
harry = new Employee("Hari", 8, "Machanics");
console.log(harry.joiningYear());
// Call static method without using object
// console.log(Employee.add(23, 28));

// Class Inheritance in JavaScript
class Programmer extends Employee { // extends = empl class is inherited in progrmmer class
    constructor(givenName, givenExp, givenDivision, language, gitHub){
        super(givenName, givenExp, givenDivision); // Inherited empl constructor in programmer constructor
        this.language = language;
        this.gitHub = gitHub;
    }
    faviorateLanguage(){
        if(this.language == "Python"){
            return `Python`;
        }
        else {
            return `Javascript`;
        }
    }

    static multiply(a, b){
        return a * b;
    }
}
tinu = new Programmer("Tinu", 5, "Parlay", "C", "Tinu2328");
console.log(tinu);