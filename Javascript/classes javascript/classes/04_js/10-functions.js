console.log(brewPotion("Healing Herbs", 3));

function brewPotion(ingredient, dose){
    return `Brewing potion with ${ingredient} (x${dose})... Potion ready`;
}

// ==============================
// 🔹 FUNCTION EXPRESSION
// ==============================

// Function expression → function stored in a variable

const mixElixir = function (ingredient) {
  return `Mixing elixir with ${ingredient}`;
};


// ==============================
// 🔹 ARROW FUNCTION
// ==============================

// Arrow function → shorter syntax

const distilEssence = (ingredient) => {
  return `Mixing elixir with ${ingredient}`;
};


// ------------------------------
// 🔥 IMPORTANT DIFFERENCE
// ------------------------------

// Regular functions:
// - have their own 'this'
// - have their own 'arguments' object

// Arrow functions:
// - do NOT have their own 'this'
// - do NOT have their own 'arguments'
// - they inherit from surrounding scope


// ==============================
// 🔹 ARGUMENTS OBJECT
// ==============================

function oldBrewingLogs() {
  console.log("Type:", typeof arguments); 
  // "object"

  console.log("Is Array:", Array.isArray(arguments)); 
  // false

  console.log(arguments); 
  // [Arguments] { '0': 'Sage', '1': 'Rosemary' }

  // Convert arguments object → real array
  const argsArray = Array.from(arguments);

  console.log(argsArray);
  // ["Sage", "Rosemary"]
}

// oldBrewingLogs("Sage", "Rosemary");


// ------------------------------
// 🔹 IMPORTANT NOTE
// ------------------------------

// arguments:
// - array-like object (not real array)
// - does NOT have array methods (map, filter, etc.)


// ==============================
// 🔹 ARROW FUNCTION + ARGUMENTS
// ==============================

const arrowBrew = () => {
  try {
    console.log(arguments);
  } catch (e) {
    console.log(e.message);
  }
};

arrowBrew();
// ReferenceError: arguments is not defined

console.log("Progress continue");


// ------------------------------
// 🔹 BETTER APPROACH (MODERN)
// ------------------------------

// Instead of arguments, use rest operator (...)

const modernBrew = (...args) => {
  console.log(args);
};

modernBrew("Sage", "Rosemary");
// ["Sage", "Rosemary"]


// ==============================
// 🔹 PURE vs IMPURE FUNCTIONS
// ==============================

// Impure function:
// - depends on external state
// - or modifies external variables

let globalCount = 0;

function brewAndCount(name) {
  globalCount++; // ❌ side effect
}


// Pure function:
// - no external dependency
// - no side effects
// - same input → same output

function pureBrewCount(count) {
  return count + 1; // ✅ no mutation
}


// ------------------------------
// 🔹 SIDE EFFECT
// ------------------------------

// Side effect = any change outside the function
// (modifying global variable, DOM, API call, etc.)


// ------------------------------
// 🎯 ONE-LINERS
// ------------------------------

// arguments → array-like object available only in regular functions
// arrow functions → no own this, no own arguments
// pure function → no side effects, predictable
// impure function → depends on or modifies external state

// ==============================
// 🔹 HIGHER ORDER FUNCTIONS (HOF)
// ==============================

// A Higher Order Function is a function that:
// 1. Takes another function as an argument
// OR
// 2. Returns a function


// ------------------------------
// 🔹 EXAMPLE (FROM YOUR CODE)
// ------------------------------

function anotherFunctionForClass(brewAndCount) {
  // brewAndCount → function passed as argument

  return function newBrew() {
    // new function returned
    // can use brewAndCount inside if needed
  };
}


// ------------------------------
// 🔹 UNDERSTANDING
// ------------------------------

// anotherFunctionForClass is a HOF because:
// - it accepts a function (brewAndCount)
// - it returns another function (newBrew)


// ------------------------------
// 🔹 PRACTICAL EXAMPLE
// ------------------------------

function greet(name) {
  return `Hello ${name}`;
}

function wrapper(fn) {
  return function (name) {
    return fn(name).toUpperCase();
  };
}

const newGreet = wrapper(greet);

console.log(newGreet("Animesh"));
// "HELLO ANIMESH"


// ------------------------------
// 🔹 REAL-WORLD USAGE
// ------------------------------

// HOFs are used in:
// - array methods (map, filter, reduce)
// - event handlers
// - middleware
// - function composition


// Example:
[1, 2, 3].map(x => x * 2);
// map() is a HOF (takes a function)


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// Functions in JavaScript are first-class citizens:
// - can be passed as arguments
// - can be returned from functions
// - can be stored in variables


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// A Higher Order Function is a function that takes another function as input or returns a function as output.


// ==============================
// 🔹 IIFE (Immediately Invoked Function Expression)
// ==============================

// IIFE = function that runs immediately after it is defined

// Syntax:
(function () {})();     // regular function IIFE
(() => {})();           // arrow function IIFE


// ==============================
// 🔹 EXAMPLE
// ==============================

const potionShop = (function () {
  let inventory = 0; // private variable (not accessible outside)

  return {
    brew() {
      inventory++;
      return `Brew potion #${inventory}`;
    },
    getStock() {
      return inventory;
    }
  };
})(); // IIFE executes immediately


// ------------------------------
// 🔹 OUTPUT
// ------------------------------

console.log(potionShop);
// { brew: [Function], getStock: [Function] }

console.log(potionShop.brew());
// "Brew potion #1"

console.log(potionShop.inventory);
// undefined ❌ (not accessible)


// ------------------------------
// 🔹 IMPORTANT CONCEPT
// ------------------------------

// inventory is PRIVATE (closure)

// It is accessible only inside the returned methods
// Not directly accessible from outside


// ------------------------------
// 🔹 WHY IIFE IS USED
// ------------------------------

// 1. Create private variables (encapsulation)
// 2. Avoid polluting global scope
// 3. Execute code immediately


// ------------------------------
// 🔹 CONNECTION WITH CLOSURE
// ------------------------------

// brew() and getStock() "remember" inventory
// even after IIFE execution → this is closure


// ------------------------------
// 🔹 CORRECTIONS FROM YOUR CODE
// ------------------------------

// ❌ Missing brace in getStock()
// ✔ Fixed structure above

// ❌ potionShop.inventory → undefined
// ✔ because inventory is private


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// IIFE runs immediately and is commonly used to create private variables using closures.

// closures
// Learn more about closures like why, how and what
function makefunc(){
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// learn about this, call , bind etc
