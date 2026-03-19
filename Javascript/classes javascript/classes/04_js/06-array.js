// Arrays can be created in multiple ways

const carriage1 = ["Animesh", "Govind", "Biswas"]
// Standard array literal (most common and preferred)

const emptyCarriage = []
// Empty array


// Array constructor with a number
const threeEmptySeats = Array(3)
// Array(3) → creates empty slots (sparse array)

// Creates an array with 3 EMPTY slots (not actual values)
console.log(threeEmptySeats); 
// [ <3 empty items> ]
// Empty slots behave differently from undefined
// Most real-world code avoids sparse arrays

console.log(threeEmptySeats.length); 
// 3

// Important:
// These are NOT undefined values, they are "empty slots"
// Many array methods (map, forEach) will skip them


// Array constructor with multiple values
const passenger = Array("Animesh", "Govind", "Biswas")
// Works like array literal → ["Animesh", "Govind", "Biswas"]


// Array.of() creates an array from given arguments
const singlePassenger = Array.of(3)
// Array.of(3) → creates array with value [3]
const anotherPassenger = Array.of("Animesh")

console.log(singlePassenger); 
// [3]

console.log(anotherPassenger); 
// ["Animesh"]


// 🔥 KEY DIFFERENCE: Array() vs Array.of()

// Case 1: Single number argument
Array(3)     
// creates empty slots → [ <3 empty items> ]

Array.of(3)  
// creates actual value → [3]


// Case 2: Multiple arguments
Array(1, 2, 3)    
// [1, 2, 3]

Array.of(1, 2, 3) 
// [1, 2, 3]


// ⚠️ Important Interview Insight:

// Empty slots vs undefined
const arr = Array(3)

console.log(arr[0]); 
// undefined (but slot actually empty)

console.log(0 in arr); 
// false (means slot does not exist)


// Compare with:
const arr2 = [undefined, undefined, undefined]

console.log(0 in arr2); 
// true (slots exist, values are undefined)


// 🔥 Best Practice:

// Avoid using Array(number) unless you specifically need empty slots
// Prefer:

Array.from({ length: 3 })
// [undefined, undefined, undefined]

// or

Array(3).fill(null)
// [null, null, null]

// Array(n) creates a sparse array with empty slots, while Array.of(n) creates an array with actual values.

//---------------------------------------------------------------------------------------------------

// Array.from() converts iterable or array-like values into a real array

const traincode = Array.from("DUST");

console.log(traincode);
// ['D', 'U', 'S', 'T']
// Each character becomes an element


// -----------------------------

const tempTrain = ["A", "B", "C", "D", "E"];

console.log(tempTrain);
// ['A', 'B', 'C', 'D', 'E']


// Changing length to a smaller value truncates the array
// Truncate means: to cut off or remove a part of something without rounding or adjusting it
tempTrain.length = 3;

console.log(tempTrain);
// ['A', 'B', 'C']
// Elements beyond index 2 are removed


// Increasing length creates empty slots (holes), NOT undefined values
tempTrain.length = 5;

console.log(tempTrain);
// ['A', 'B', 'C', <2 empty items>]


// Important difference:

console.log(tempTrain[3]); 
// undefined (but slot is actually empty)

console.log(3 in tempTrain); 
// false (slot does NOT exist)


// -----------------------------
// Key Concepts:

// 1. Array.from()
// - Converts iterable (string, set, etc.) into array
// - Creates actual values (no empty slots)

// Example:
Array.from({ length: 3 });
// [undefined, undefined, undefined]


// 2. Changing .length

// Reduce length → removes elements
// Increase length → creates empty slots (holes)


// -----------------------------
// ⚠️ Interview Insight:

// Empty slots vs undefined

const arr1 = Array(2); 
// [ <2 empty items> ]

const arr2 = [undefined, undefined]; 
// [undefined, undefined]

console.log(0 in arr1); // false
console.log(0 in arr2); // true


// -----------------------------
// 🔥 Best Practice:

// Avoid relying on empty slots
// Prefer explicit values:

Array(5).fill(null);
// [null, null, null, null, null]

//---------------------------------------------------------------------------------------------------

// instead of Directly doing console log, try to visualise what output will be then after sometimes do console log

// push, pop, shift, unshift, splice :- methods of arrays
//
// concat, slice, flat :- non mutating which means returns new array without changing the original array and mostly used in react and redux 

// const trainCopy = wholeTrain.slice() // commonly used to copy the data because it returns the new data without changing the original data
//
// Searching: indexOf, includes, find, findIndex

// ==============================
// ARRAY METHODS (MUTATING)
// ==============================

// These methods MODIFY the original array

let arr = [1, 2, 3];

// push() → adds element at the end
arr.push(4);
// [1, 2, 3, 4]

// pop() → removes last element
arr.pop();
// [1, 2, 3]

// unshift() → adds element at the beginning
arr.unshift(0);
// [0, 1, 2, 3]

// shift() → removes first element
arr.shift();
// [1, 2, 3]

// splice(start, deleteCount, ...items)
// → can add/remove elements anywhere (mutates array)

let nums = [1, 2, 3, 4];

nums.splice(1, 2); 
// removes 2 elements from index 1 → [1, 4]

nums.splice(1, 0, 99); 
// inserts 99 at index 1 → [1, 99, 4]



// ==============================
// NON-MUTATING METHODS
// ==============================

// These methods DO NOT change original array
// They return a NEW array (important in React/Redux)

let original = [1, 2, 3];

// concat() → merges arrays
let merged = original.concat([4, 5]);
// original → [1,2,3]
// merged   → [1,2,3,4,5]

// slice(start, end)
// → extracts portion (end not included)

let part = original.slice(0, 2);
// [1, 2]

// 🔥 Common use: cloning array
const trainCopy = original.slice();
// shallow copy of array

// spread alternative (modern)
const copy = [...original];


// flat(depth) flattens nested arrays up to given depth

let nested = [1, [2, [3]]];

nested.flat(1);
// [1, 2, [3]] → removes 1 level

nested.flat(2);
// [1, 2, 3] → removes 2 levels (fully flat)


// depth = how many levels to flatten

// flat(Infinity) → completely flattens array

// flat(depth)
// → flattens nested arrays up to given depth

[1, [2, [3]]].flat(1);
// [1, 2, [3]]

[1, [2, [3]]].flat(2);
// [1, 2, 3]


// flatMap(callback)
// → map + flat(1)

[1, 2, 3].flatMap(x => [x, x * 2]);
// [1,2,2,4,3,6]


// Difference:

// flat() → only flattens
// flatMap() → transforms + flattens


// Equivalent:

arr.map(fn).flat(1) === arr.flatMap(fn)


// ==============================
// SEARCHING METHODS
// ==============================

// indexOf() → returns index or -1
let data = [10, 20, 30];

data.indexOf(20); // 1
data.indexOf(99); // -1


// includes() → returns true/false

data.includes(20); // true
data.includes(99); // false


// find() → returns FIRST matching element

let users = [{id:1}, {id:2}];

users.find(u => u.id === 2);
// {id:2}


// findIndex() → returns index of first match

users.findIndex(u => u.id === 2);
// 1



// ==============================
// IMPORTANT DIFFERENCES
// ==============================

// indexOf vs find

let arr2 = [5, 10, 15];

arr2.indexOf(10); // 1 (index)
arr2.find(x => x > 10); // 15 (value)


// includes vs indexOf

arr2.includes(10); // true
arr2.indexOf(10);  // 1



// ==============================
// INTERVIEW INSIGHTS
// ==============================

// 1. Mutating methods change original array
// 2. Non-mutating methods return new array (important for immutability)
// 3. slice() is commonly used for shallow copy
// 4. find() works with conditions (better for objects)
// 5. includes() is cleaner than indexOf for existence check


-------------------------------------------------------------------------------------------------------

console.log(typeof []);
// to check a given array is array or not then use .isArray() not typeof becuase it will give you object
console.log(Array.isArray([])); // true
console.log(Array.isArray("Ravi")); // false
// if you dug deeper Strings are array-like (iterable), but NOT actual arrays meaning is different its for thr knowledge but in conditional checks its very different, knowledge and wisdom should be their on there own places like for knowledge tomato is a fruit but wisdom is that dont put in the fruit salad just like for strings dont put knowledge in wisdom

------------------------------------------------------------------------------------------------------------
// ==============================
// SHALLOW COPY vs DEEP COPY
// ==============================


// ------------------------------
// 🔹 SHALLOW COPY
// ------------------------------

// Definition:
// Copies only top-level properties
// Nested objects are still shared (same reference)

let user = {
  name: "Animesh",
  address: { city: "Mumbai" }
};

// Shallow copy using spread
let shallowCopy = { ...user };

shallowCopy.name = "Rahul"; // only affects copy
shallowCopy.address.city = "Delhi"; // affects original too ❌

console.log(user.name);          // "Animesh" ✅
console.log(user.address.city);  // "Delhi" ❌ (changed)


// Reason:
// Nested object (address) is NOT copied, only reference is copied


// ------------------------------
// 🔹 WAYS TO CREATE SHALLOW COPY
// ------------------------------

// Object
const copy1 = { ...user };
const copy2 = Object.assign({}, user);

// Array
const arr = [1, 2, 3];
const arrCopy1 = arr.slice();
const arrCopy2 = [...arr];


// ------------------------------
// 🔹 DEEP COPY
// ------------------------------

// Definition:
// Copies everything including nested objects
// Creates completely independent copy

let deepCopy = structuredClone(user);

deepCopy.address.city = "Delhi";

console.log(user.address.city); 
// "Mumbai" ✅ (unchanged)


// ------------------------------
// 🔹 WAYS TO CREATE DEEP COPY
// ------------------------------

// Best modern method
const deep1 = structuredClone(user);

// Older method (has limitations)
const deep2 = JSON.parse(JSON.stringify(user));


// ------------------------------
// ⚠️ JSON METHOD LIMITATIONS
// ------------------------------

// - Removes functions
// - Removes undefined
// - Converts Date to string

const obj = {
  date: new Date(),
  fn: () => {},
  value: undefined
};

const copy = JSON.parse(JSON.stringify(obj));
// data loss happens ❌


// ------------------------------
// 🔹 KEY DIFFERENCE
// ------------------------------

// Shallow copy → nested objects are shared
// Deep copy → everything is independent


// ------------------------------
// 🔥 INTERVIEW INSIGHT
// ------------------------------

// Shallow copy problem:

let a = { x: { y: 1 } };
let b = { ...a };

b.x.y = 99;

console.log(a.x.y); 
// 99 ❌ (unexpected mutation)


// ------------------------------
// 🧠 BEST PRACTICE
// ------------------------------

// Use shallow copy when:
// - no nested objects
// - performance matters

// Use deep copy when:
// - nested structures exist
// - data integrity is important


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// Shallow copy copies references for nested objects,
// while deep copy creates completely independent copies.

//key points
// 1. Try to use Array in literals i.e. [] not this => Array(n) because its create empty slot means its create a fixed slot in the memory so basically dont try to hardcode array
// 2. array are 0 based
// 3. array throws undefined as a errors if you try access the element of the array which doesnt exists
// 4. Mutating methods: push, pop, shift, unshift, splice
// 5. Non Mutating Methods: concat, slice, flat, flatmap [1, 2, 3, [5,6]]
// 6. Searching: includes (most used methods) and others which are commonly used
// 7. Array.isArray() => to find is array or not
