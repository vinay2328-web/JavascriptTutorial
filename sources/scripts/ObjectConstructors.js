console.log('#Tuts-27: Object Literals, Constructors and Object Oriented Javascript');
// Object literals for creating objects
let car = {
    name: 'Maruti 800',
    color: 'Navi Blue',
    topSpeed: 80,
    run: function(){
        console.log('Car is running...');
    }
} // Object literals
console.log(car);
// we have already seen Constructor like these
// new Date();
// Creating Constructors for Cars
function generalCars(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is runnig...`);
    };
    this.analyze = function() {
        console.log(`${this.name} is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    }
}
let car1 = new generalCars('Nissan', 180);
let car2 = new generalCars('Maruti Alto', 80);
console.log("Car1: ",car1);