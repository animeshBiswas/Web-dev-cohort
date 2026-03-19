const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volcanic glass",
};


// ==============================
// 🔹 OBJECT METHODS
// ==============================

// Object.keys() → returns array of keys

const keys = Object.keys(artifact);

console.log(keys);
// ['name', 'era', 'value', 'material']


// Object.values() → returns array of values

const values = Object.values(artifact);

console.log(values);
// ['Obsidian Crown', 'Ancient', 50000, 'volcanic glass']


// Object.entries() → returns array of [key, value] pairs

const entries = Object.entries(artifact);

console.log(entries);
/*
[
  ['name', 'Obsidian Crown'],
  ['era', 'Ancient'],
  ['value', 50000],
  ['material', 'volcanic glass']
]
*/

// Each item is a [key, value] pair
// Also called "entries" (array of arrays)


// ------------------------------
// 🔹 LOOPING USING entries()
// ------------------------------

// Destructuring [key, value] while looping

for (const [key, value] of Object.entries(artifact)) {
  console.log(`${key}: ${value}`);
}

/*
name: Obsidian Crown
era: Ancient
value: 50000
material: volcanic glass
*/


// ==============================
// 🔹 Object.fromEntries()
// ==============================

// Converts array of [key, value] pairs into an object

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);

console.log(priceObject);
// {
//   "Obsidian Crown": 50000,
//   "Ruby Pendant": 30000,
//   "Iron Shield": 5000
// }


// ==============================
// 🔹 Object.freeze()
// ==============================

// freeze() makes object immutable (shallow)

// - cannot add new properties
// - cannot delete properties
// - cannot modify existing values

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);


// Attempts to modify after freeze:

delete displayCase.locked; 
// ❌ fails (no deletion)

displayCase.newProp = "test"; 
// ❌ fails (no addition)

displayCase.locked = false; 
// ❌ fails (no modification)

console.log(displayCase);
// remains unchanged


// ------------------------------
// 🔹 IMPORTANT NOTE
// ------------------------------

// freeze() is SHALLOW

const obj = {
  nested: { value: 1 }
};

Object.freeze(obj);

obj.nested.value = 2;
// ✅ allowed (nested object is NOT frozen)


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// Object.keys/values/entries → extract data from objects
// Object.fromEntries → build object from key-value pairs
// Object.freeze → prevents modification (shallow)

const catalogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true 
};


// ==============================
// 🔹 Object.seal()
// ==============================

// seal() locks the structure of the object

Object.seal(catalogEntry);

// After sealing:
// - ❌ cannot add new properties
// - ❌ cannot delete properties
// - ✅ can modify existing properties (if writable)


// ------------------------------
// 🔥 INTERVIEW DIFFERENCE
// ------------------------------

// Object.freeze()
// - ❌ cannot add
// - ❌ cannot delete
// - ❌ cannot modify

// Object.seal()
// - ❌ cannot add
// - ❌ cannot delete
// - ✅ can modify existing properties

// ✔ One-liner:
// freeze = fully immutable
// seal   = structure locked, values editable


// ==============================
// 🔹 Object.defineProperty()
// ==============================

const secureArtifacts = { name: "Ruby Pendant" };

// defineProperty() is used to define or customize a property
// with specific rules (descriptors)

Object.defineProperty(secureArtifacts, "catalogId", {
  value: "SEC-999",
  writable: false,     // cannot change value
  enumerable: false,   // will not appear in loops
  configurable: false  // cannot delete or reconfigure
});


// ------------------------------
// 🔹 PROPERTY BEHAVIOR
// ------------------------------

console.log(secureArtifacts.catalogId);
// "SEC-999"

secureArtifacts.catalogId = "HACKED";

console.log(secureArtifacts.catalogId);
// still "SEC-999" (because writable: false)


// ------------------------------
// 🔹 ENUMERABLE BEHAVIOR
// ------------------------------

// enumerable: false → hidden from loops

for (const [key, value] of Object.entries(secureArtifacts)) {
  console.log(`${key}: ${value}`);
}

/*
name: Ruby Pendant
*/

// catalogId is NOT shown because enumerable is false


// ------------------------------
// 🔹 IMPORTANT CLARIFICATION
// ------------------------------

// Objects are NOT directly iterable
// But we can use Object.entries(), Object.keys(), etc.


// ==============================
// 🔹 PROPERTY DESCRIPTORS
// ==============================

// getOwnPropertyDescriptor() shows property settings

const desc = Object.getOwnPropertyDescriptor(secureArtifacts, "catalogId");

console.log(desc);
/*
{
  value: 'SEC-999',
  writable: false,
  enumerable: false,
  configurable: false
}
*/


const desc1 = Object.getOwnPropertyDescriptor(secureArtifacts, "name");

console.log(desc1);
/*
{
  value: 'Ruby Pendant',
  writable: true,
  enumerable: true,
  configurable: true
}
*/


// ------------------------------
// 🔹 DEFAULT BEHAVIOR
// ------------------------------

// Normal object properties have:
// writable: true
// enumerable: true
// configurable: true


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// defineProperty() lets you control how a property behaves (editable, visible, deletable).



// loop key points
//
// 1. for loop :- one of the optimised loops how much optimisation you can apply from v8 engine or others etc is applied more to for loop. 
// 2. while loop :- when you dont know how iterations will be so it will continue until it becomes false it'll stop
// 3. do while :- it gurantees that it will run one time even if its fals
// 4. for...in :- mostly used in Objects so avoid using in array
// 5. for..of :- used in arrays and string 
// 6. map, foreach, filter, reduce these are customized implementations of loops
