const hero = {
  name: "Luna the Brave",
  class: "Mage",
  level: 12,
  health: 85,
  mana: 120,
  isAlive: true,
};


// ==============================
// 🔹 ACCESSING OBJECT PROPERTIES
// ==============================

// There are two main ways to access values inside an object:


// 1️⃣ Dot notation (.)

// Used when you KNOW the exact property name (hardcoded)
// Most common and clean way

hero.name; 
// "Luna the Brave"


// 2️⃣ Bracket notation ([])

// Used when property name is dynamic (comes from variable, API, loop, etc.)

const key = "health";

hero[key]; 
// 85


// ------------------------------
// 🔹 IMPORTANT DIFFERENCE
// ------------------------------

// Dot notation:
// - fixed property name
// - cannot use variables directly

hero.key; 
// ❌ looks for "key", not value of variable


// Bracket notation:
// - supports dynamic keys

hero[key]; 
// ✅ correct


// ------------------------------
// 🔹 ADDING / UPDATING PROPERTIES
// ------------------------------

// Add new property
hero.weapon = "Fire";

// Update existing property
hero.level = 13;


// ------------------------------
// 🔹 DELETING PROPERTIES
// ------------------------------

// delete removes a property from object

delete hero.level;


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// Objects are mutable → you can add, update, delete properties

// Dot vs Bracket:
// dot → when property name is known
// []  → when property name is dynamic


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// Use dot notation for known properties and bracket notation for dynamic keys.

//---------------------------------------------------------------------------------------------------

const ranger = {
  name: "Lakshya the swift",
  agility: 80,
  stealth: undefined
};


// ==============================
// 🔹 "in" OPERATOR
// ==============================

// Checks if a property exists in the object
// Includes BOTH:
// - own properties
// - inherited properties (via prototype chain)

console.log("name" in ranger);
// true (own property)

console.log("stealth" in ranger);
// true (property exists even if value is undefined)


// ------------------------------
// 🔹 PROTOTYPE CHAIN
// ------------------------------

// All objects inherit from Object.prototype

// So built-in methods like "toString" are available

console.log("toString" in ranger);
// true

// Reason:
// "toString" is not inside ranger directly,
// but it exists in its prototype (Object.prototype)


// ------------------------------
// 🔹 hasOwnProperty()
// ------------------------------

// Checks ONLY own properties (not inherited ones)

console.log(ranger.hasOwnProperty("toString"));
// false

console.log(ranger.hasOwnProperty("name"));
// true


// ------------------------------
// 🔹 IMPORTANT DIFFERENCE
// ------------------------------

// "in" operator:
// - checks own + inherited properties

// hasOwnProperty():
// - checks only own properties


// ------------------------------
// 🔹 IMPORTANT CLARIFICATION
// ------------------------------

// Your statement:
// "nested objects"

// ❌ Not correct here

// ✔ Correct concept:
// Prototype chain (inheritance), not nested objects


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// "in" checks property existence including prototype chain,
// while hasOwnProperty() checks only object's own properties.

