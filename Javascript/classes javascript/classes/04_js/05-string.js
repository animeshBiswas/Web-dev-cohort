const codeName = "Shadow Fox"
const backupName = String("Night Own")
const templateName = `Agent ${codeName}` // this template literal 


let intercepted = "Hello"
intercepted[0] = "J"; // Silent Fail means silent error
// console.log(intercepted);

//-------------------------------------------------------------------------

// const secretCode = "OMEGA-7"

// .length returns the total number of characters in the string
console.log(secretCode.length); // 7

// .charAt(index) returns the character at the given index
console.log(secretCode.charAt(0)); // "O"

// If index is out of range, charAt() returns an empty string ""
console.log(secretCode.charAt(99)); // ""

// Using bracket notation with an out-of-range index returns undefined
console.log(secretCode[99]); // undefined

// .at() supports negative indexing (counting from the end)
console.log(secretCode.at(-1)); // "7"

//-------------------------------------------------------------------------

const rawTransmission = "The Eagle has Landed"

// toLocaleLowerCase() converts the string to lowercase
// It is similar to toLowerCase(), but respects locale-specific rules
console.log(rawTransmission.toLocaleLowerCase()); 
// "the eagle has landed"


const message = "The drop point is at Dock 7. Repeat: Dock 7"

// indexOf() returns the index of the FIRST occurrence of the given substring
// If the substring is not found, it returns -1
console.log(message.indexOf("Dock")); 
// 21


// slice(start, end) extracts a part of the string
// start index is included, end index is excluded
console.log(message.slice(0, 12)); 
// "The drop poi"

//-------------------------------------------------------------------------

const orders = "  move-north|hold-position|extract-vip   "

// split() divides a string into an array based on a separator
let OrderList = orders.split("|")

console.log("Split", OrderList)
// ["  move-north", "hold-position", "extract-vip   "]
// Note: split() does NOT remove spaces. Leading and trailing spaces remain.

console.log(typeof OrderList)
// "object"
// In JavaScript, arrays are a type of object


const list = ['move-north', 'hold-position', 'extract-vip']

// join() combines array elements into a single string
// The given separator is placed between each element
let listjoin = list.join("|")

console.log(listjoin)
// "move-north|hold-position|extract-vip"

console.log(typeof listjoin)
// "string"

//-------------------------------------------------------------------------

// split("") splits the string into individual characters
const myDataValue = "SOS".split("");

console.log(myDataValue); 
// ['S', 'O', 'S']

console.log(typeof myDataValue); 
// "object"
// In JavaScript, arrays are technically a type of object

// Array.isArray() checks whether a value is actually an array
console.log(Array.isArray(myDataValue)); 
// true



const missionNumber = "42";

// padStart(targetLength) adds padding at the beginning of the string
// If no pad character is provided, spaces are used by default
console.log(missionNumber.padStart(6)); 
// "    42"

// padStart(targetLength, padString)
// Adds the specified character(s) at the start until the target length is reached
console.log(missionNumber.padStart(6, "0")); 
// "000042"

//-------------------------------------------------------------------------

// Strings in JavaScript are immutable.
// This means once a string is created, its value cannot be changed.

// Any string method (slice, toLowerCase, replace, etc.) does NOT modify
// the original string. Instead, it returns a NEW string.

let name = "ANIMESH";

let lower = name.toLowerCase();

console.log(name);   // "ANIMESH"  (original string unchanged)
console.log(lower);  // "animesh"  (new string created)


// JavaScript strings are primitives.
// Primitive values are stored in stack memory,
// and when we operate on them, JavaScript creates a new value.


// Template Literals (introduced in ES6)
// Use backticks ` ` instead of quotes.
// They allow multiline strings and variable interpolation.

const spellCard = `
+++++++++====================
| Spell: ${myDataValue}
`;


// Template literals support expressions like:
 // - variables
 // - conditionals
 // - function calls
 // - nested expressions

const profile = `
${checker ? "true-value" : "false-value"}
`;


// Tagged Template Literals
// A tagged template allows a function to process template literals.

function tag(strings, value) {
  console.log(strings);
  console.log(value);
}

let name = "Animesh";

tag`Hello ${name}`;

// The function receives:
// strings → ["Hello ", ""]
// value → "Animesh"

// Tagged templates are commonly used for:
// - safe HTML templating
// - internationalization (i18n)
// - styled-components in React

//-------------------------------------------------------------------------

// 'void' is a JavaScript operator.
// It evaluates the given expression and always returns undefined.

console.log(void 0); 
// undefined

console.log(void "Animesh"); 
// undefined


// Syntax:
// void expression

// JavaScript first evaluates the expression,
// then discards the result and returns undefined.


// Example:
console.log(void (2 + 3)); 
// undefined

// Even though (2 + 3) = 5,
// 'void' ignores the result and returns undefined.

//-------------------------------------------------------------------------

let generalStore = { name: "Kirana", goods: 2 }

console.log(generalStore);
// { name: "Kirana", goods: 2 }


// We can reassign the variable to null
// This removes the reference to the object

generalStore = null;

console.log(generalStore);
// null


// null means "intentional absence of value"
// It is often used to indicate that the variable should not point to any object anymore.


// undefined means:
// - a variable was declared but not assigned any value
// OR
// - a property does not exist


// Important:
// Setting a variable to null does NOT immediately destroy the object.
// It only removes the reference to it.

// If no other variables reference that object,
// the JavaScript Garbage Collector will eventually remove it from memory.


// Research about Arrays and objects methods which is easy to understand
