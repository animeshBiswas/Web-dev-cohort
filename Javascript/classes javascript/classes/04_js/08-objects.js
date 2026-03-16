const hero = {
    name: "Luna the Brave",
    class: "Mage",
    level: 12,
    health: 85,
    mana: 120,
    isAlive: true,
};

// There are two types to access values inside a objects :-
// 1. hero. or hero[dot] (just for understanding) to access any properties, when you know 100% that this is the only values is not coming from a API or dynamically then use hero[dot] when you hardcode the values
// 2. hero[] :- its coming from response, accumulator or you're processing from the data then use hero[]

hero.weapon = "Fire"

delete hero.level // if you want to delete property inside the object then use "delete hero.level"

const ranger = {
    name: "Lakshya the swift",
    agility: 80,
    stealth: undefined
};

console.log("name" in ranger);
console.log("stealth" in ranger);
console.log("toString" in ranger); // o/p is true and the reasons behind is the prototype chaining and when you write the objects in the above is also comes from the further objects also know nested objects and "ranger" inherits other properties too and thats why "toString" key is true
// to check without any issues then use the .hasOwnProprty() to get reliable answers
console.log(ranger.hasOwnProperty("toString"));
