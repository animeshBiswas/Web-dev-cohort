// What "this" actually does? when you use "this" keyword it creates a empty object i.e. { } and every functions has a prototype but now object you have created it will also have a prototype and not just object, everything will have a prototype
function TataCar(chessisNumber, modelName) {
// step 1 =>  { } (empty object)  
// step 2 => { } (empty object) and TataCar  both are a prototype so both will be linked

    this.modelName = modelName;
    this.fuelLevel = 100;
}

/*
if you run "TataCar" in the browser console it will return a whole function i.e.
f TataCar(chessisNumber, modelName) {
    this.chassisNumber = chessisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}
Surprisingly almost sabhi haar cheezo ke pass prototype hota hai

TataCar.prototype

What is prototype? Is a Object and we can add more properties in the objects 
*/
TataCar.prototype.status = function () {
    return `Tata ${this.modelName} #${this.chassisNumber} | Fuel: ${this.fuelLevel}`;
};
// step 3 => "this" keyword will be activated and what "this" keyword does that whoever calls them it will bind them
// so Here car1 whatever values is providing it will  put them in "this" keyword so car1 will get "this" and same as car2, "this" means reference to that variables whatever variables you have passed
// step 4 => in the TataCar fn object is never been returned so instead "new" keyword automatically does the the job to return the object explicity
// if the constructor explicity doesnt return the object then new explicity does that instead
const car1 = new TataCar("MH-101", "Nexon");
const car2 = new TataCar("DL-202", "Harrier");
// if you use without new
const car3 =  TataCar("DL-202", "Harrier");
// console.log(car3.modelName);
// TypeError: Cannot read properties of undefined (reading 'modelName' at Object



console.log(car1.modelName);
console.log(car2.modelName);
console.log(car1.status());
console.log(car2.status());

// Gotcha and asked in the interview
// this is not same as above
// This is also called a factory functions
function createAutoRickshaw(id, route){
    return {
        id,
        route,
        run() {
            return `Auto ${this.id} running on ${this.route}`;
        },
    };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-kanpu");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());

// its runs the program without using new keyword so whats the need of new keyword?
// in auto1 got the returned of id, route and reference of run() and same goes to auto2
// so each instances i.e. auto1, and auto2 getting the own copy of the  method
// just imagine one instances got 1000s of copy it will be expensive and its also called as factory functions and its also expensive due to each instances getting whole references
// As compared to the TataCar class its creates a  instances instead of giving a references  and also doesnt hogged the memory
// In constructor new keyword is involved and when you use constructor or new keyword you use share the memory
// In factory fucntion per instances


// both are written in different purpose