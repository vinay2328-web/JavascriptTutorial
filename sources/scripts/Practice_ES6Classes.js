console.log("Practice: ES6 Class in Javascript....");
let lineBreak = "\n";
// Implement ES6 Class
// Class is the template 
class Employee { 
    constructor(givenName, givenExperience, givenDivision, givenId){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
        this.id = givenId;
    }

    slogan(){
        return `This is best company. Regards ${this.name}`;
    }

    joinYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

let tinu = new Employee("Tinu", 8, "Development", 7890);
let sweety = new Employee("Sweety", 5, "Testing", 2328);
console.log("tinu", tinu, lineBreak, "sweety: ", sweety);

// Implement Programmer class using Employee class
class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, givenId, givenSalry, givenLang){
        super(givenName, givenExperience, givenDivision, givenId);
        this.salary = givenSalry;
        this.language = givenLang;
    }

    favoriteLang(){
        if(this.language == "Python"){
            return "Python";
        }
        else {
            return "Javascript";
        }
    }
}

class TestManager extends Programmer {
    constructor(givenName, givenExperience, givenDivision, givenId, givenSalry, givenLang, givenProject){
        super(givenName, givenExperience, givenDivision, givenId, givenSalry, givenLang);
        this.project = givenProject;
    }
    
}

let harry = new Programmer("Hary", 6, "Mechanical", 2810, 54780, "Python");
let mau = new Programmer("Pallavi", 5, "Management", 2305, 65470, "CPP");
let manager = new TestManager("Kuhoo", 12, "QA", 1905, 78650, "Selenium", "La La La");
console.log("Hary: ", harry, lineBreak, "Mau: ", mau, lineBreak, "Manager: ", manager);