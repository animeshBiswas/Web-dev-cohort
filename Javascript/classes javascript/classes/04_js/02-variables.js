var shipName = "The Amber"
console.log("Shipname: ", shipName);

let crewCount = 12
console.log("crew count: ", crewCount);
crewCount = 14

const captainName = "Jack Sparrow"
console.log("Captain Name: ", captainName);
// captainName = "Animesh" // error

/*
one and one rule in software dev is that its better to declare with const but if its require where value needed to be change then use let and its good practise because it'll be bug free where there will not be any  or minimal changes and it'll be predictable 
*/

if (true) {
    var leakyTreasure = "Gold coin"
}

// for (var i = 0; i < 10; i++) {
//     // 
// }
// for (let i = 0; i < 10; i++) {
//     // 
// }

console.log(leakyTreasure);

// type of variable decl.

// let shipSpeed = 22
// let _privatelog = "secret"
// let _ = a 
// let MONGO_URI = ""
// LET $name = "Animesh"

const treasureChest = {  
    // const makes the reference constant, not the object’s properties.
    // You can modify, add, or delete properties.
    // You cannot reassign the object variable to a new object.
    // when you use const its means that the spaces or memory will be constant not the values or properties, mutating content is allowed
    gold : 100,
    rubies : 50,
    maps : 2,
}

treasureChest.gold = 150 // changing the values or properties
// treasureChest = {gold: 50}; // TypeError: Assignment to constant variable OR complete reference change

const crewRoster = ["Alok", "Abhinav", "Tasnish"]
// The variable name cannot be reassigned to a different array.
// You can modify the elements inside the array because the object itself is mutable.
crewRoster.push("Animesh");
crewRoster[0] = "Shubham";
console.log(crewRoster);

crewCount = ["Someone"];
// If you want true immutability
// Use methods like: Object.freeze(arr);
