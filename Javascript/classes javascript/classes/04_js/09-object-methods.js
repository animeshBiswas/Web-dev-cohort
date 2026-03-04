const artifact = {
    name: "Obsidian Crown",
    era: "Ancient",
    value: 50000,
    material: "volvanic glass",
};

const keys = Object.keys(artifact)
const Values = Object.values(artifact)
const entries = Object.entries(artifact)

// console.log(keys);
// [ 'name', 'era', 'value', 'material' ]
// console.log(Values);
// [ 'Obsidian Crown', 'Ancient', 50000, 'volvanic glass' ]
// console.log(entries);
/* 
[
  [ 'name', 'Obsidian Crown' ],
  [ 'era', 'Ancient' ],
  [ 'value', 50000 ],
  [ 'material', 'volvanic glass' ]
]
so the o/p is array of array and is also knows  as entries
*/

for (const [key, value] of Object.entries(artifact)) {
    console.log(` ${key}: ${value} `);
}
/*
O/P :-
 name: Obsidian Crown 
 era: Ancient 
 value: 50000 
 material: volvanic glass 
*/

const priceList = [
    ["Obsidian Crown", 50000],
    ["Ruby Pendant", 30000],
    ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList)

const displayCase = {
    artifact: "Obsidian",
    location: "Hall A, Case 3",
    locked: true,
};

Object.freeze(displayCase); // It used to lock the object to not to add or change the property anymore
delete displayCase.locked; // after its freeze it dont delete the property due to locking the object
displayCase.newProp = "test"; // after its freeze it dont add the property due to locking the object
// console.log(displayCase);


const catalogEntry = {
    id: "ART-001",
    description: "Ancient Crows",
    verified: true 
};

Object.seal(catalogEntry);

/*  Interview Questions :-
What is the difference between Object.freeze() and Object.seal()
Only difference is that seal is used when you allow to edit  existing property but you cant do the structural changes like add or delete
*/

// Intervirw related questions asked to this topic 
const secureArtificats = { name: "Ruby Pendant" }

Object.defineProperty(secureArtificats, "catelogId", {
    value: "SEC-999",
    writable: false,
    enumerable: false, // it used to allow to do loop or not 
    configurable: false,

}) // customizing the propery with help of writable, enumerable, configurable its does what is allow or not.
// defineProperty is used to add property on the object by giving the object name and key-name and we have also know and seen that we can loop the object but thats not how its works each object is not loopable 

console.log(secureArtificats.catelogId); // SEC-999
secureArtificats.catelogId = "HACKED";
console.log(secureArtificats.catelogId); // SEC-999

// for (const [key, value] of Object.entries(secureArtificats)) {
//     console.log(`${key}: ${value}`);
// }
/*
name: Ruby Pendant
catelogId: SEC-999
*/

// if enumerable: false
for (const [key, value] of Object.entries(secureArtificats)) {
    console.log(`${key}: ${value}`);
}
/*  
name: Ruby Pendant
*/

const desc = Object.getOwnPropertyDescriptor(secureArtificats, "catelogId")
console.log(desc);
/* It gives list of property of the mentioned key of the object
{
  value: 'SEC-999',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
const desc1 = Object.getOwnPropertyDescriptor(secureArtificats, "name")
console.log(desc1);
/* It gives list of property of the mentioned key of the object
{
  value: 'Ruby Pendant',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// loop key points
//
// 1. for loop :- one of the optimised loops how much optimisation you can apply from v8 engine or others etc is applied more to for loop. 
// 2. while loop :- when you dont know how iterations will be so it will continue until it becomes false it'll stop
// 3. do while :- it gurantees that it will run one time even if its fals
// 4. for...in :- mostly used in Objects so avoid using in array
// 5. for..of :- used in arrays and string 
// 6. map, foreach, filter, reduce these are customized implementations of loops