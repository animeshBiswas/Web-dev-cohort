const orders = [
    { dish: "Pasta Carbonara", price: 14, Spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, Spicy: true, qty: 1 },
    { dish: "Casear Salad", price: 9, Spicy: false, qty: 3 },
    { dish: "Inferno wings", price: 11, Spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, Spicy: false, qty: 1 },
];

// ==============================
// 🔹 forEach()
// ==============================

// Used for iteration (side effects like logging)
// Does NOT return anything (always undefined)

const myData = orders.forEach((order, index) => {
  console.log(`#${index + 1}: ${order.qty}x ${order.dish}`);
});

console.log(myData); 
// undefined

// ❌ Cannot break or stop forEach()
// ❌ Not suitable for async/await

// console.log(myData); // Undefined
// There is no way to stop or break a forEach() loop other than by throwing an exception so using await or break in forEach() is wrong tool to do

// --------------------------------------------------------------------------------------------------

// map() is used to transform each element of an array
// It returns a NEW array with the transformed values

const receiptLines = orders.map(o => `${o.dish}: $${o.price * o.qty}`);

console.log(receiptLines);
// [
//   'Pasta Carbonara: $28',
//   'Dragon Ramen: $12',
//   'Casear Salad: $27',
//   'Inferno wings: $22',
//   'Truffle Risotto: $18'
// ]


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// map() does NOT modify the original array
// It always returns a new array of the same length

// Each element is transformed based on the callback


// ------------------------------
// 🔹 HOW IT WORKS
// ------------------------------

// For each order:
// - take dish name
// - calculate total price (price * qty)
// - return formatted string

// Example:
// { dish: "Pasta", price: 10, qty: 2 }
// → "Pasta: $20"


// ------------------------------
// 🔹 KEY BEHAVIOR
// ------------------------------

// Input length = Output length

// If original array has 5 elements
// → result will also have 5 elements


// ------------------------------
// 🔹 DIFFERENCE FROM forEach()
// ------------------------------

// map() → returns new array ✅
// forEach() → returns undefined ❌


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// map() transforms each element of an array and returns a new array of the same length.

// ------------------------------------------------------------------------------------

// filter() is used to select elements based on a condition
// It returns a NEW array containing only the elements that match the condition

const spicyOrders = orders.filter(o => o.Spicy);

// Explanation:
// For each order → check if o.Spicy is true
// If true → include in new array
// If false → skip it

console.log(spicyOrders);
// returns a new array of objects where Spicy === true


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// filter() does NOT modify the original array
// It always returns a new array

// filter() expects a condition (true/false)
// true  → include element
// false → exclude element


// ------------------------------
// 🔹 BETTER UNDERSTANDING
// ------------------------------

// Your statement:
// "filter works more as a conditions than method"

// ✔ Correct version:
// filter() is a method that uses a condition to decide which elements to keep


// ------------------------------
// 🔹 EXAMPLE
// ------------------------------

const numbers = [1, 2, 3, 4];

const even = numbers.filter(n => n % 2 === 0);

console.log(even);
// [2, 4]

// ------------------------------------------------------------------------------------
// ==============================
// 🔹 REDUCE METHOD
// ==============================

// reduce() is used to convert an array into a single value
// (number, object, array, etc.)

// It gives full control over what you want as the final result


// ------------------------------
// 🔹 SYNTAX
// ------------------------------

// array.reduce((accumulator, currentValue) => {}, initialValue)


// ------------------------------
// 🔹 EXAMPLE 1: TOTAL CALCULATION
// ------------------------------

// Common use case: total price, cart value, etc.

const totalRevenue = orders.reduce((sum, order) => {
  return sum + (order.qty * order.price);
}, 0);

console.log(totalRevenue);
// 107


// Explanation:
// sum → accumulator (stores result of previous iteration)
// order → current element

// Flow:
// iteration 1 → sum = 0 + (2 * 14)
// iteration 2 → sum = previous + (1 * 12)
// ...

// sum carries forward value (it does NOT reset)


// ------------------------------
// 🔹 INITIAL VALUE
// ------------------------------

// initial value (0 here) is the starting point of accumulator

// If not provided:
// - first element is used as initial value
// - can lead to bugs

// Always prefer giving initial value


// ------------------------------
// 🔹 EXAMPLE 2: GROUPING DATA
// ------------------------------

// reduce can also return objects, arrays, etc.

const grouped = orders.reduce((acc, order) => {
  const category = order.Spicy ? "spicy" : "mild";

  acc[category].push(order.dish);

  return acc;
}, { spicy: [], mild: [] });

console.log(grouped);
// {
//   spicy: ["Dragon Ramen", "Inferno wings"],
//   mild: ["Pasta Carbonara", "Casear Salad", "Truffle Risotto"]
// }


// Explanation:
// acc → object that we build step by step
// For each order:
// - decide category
// - push dish into correct array


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// reduce():
// - returns a single final value
// - does NOT modify original array
// - accumulator carries value across iterations


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// reduce() processes an array and accumulates it into a single result based on your logic.

//--------------------------------------------------------------------------------------------------

// ==============================
// 🔹 SORT METHOD
// ==============================

// sort() is used to sort elements of an array

const ticketNumbers = [100, 25, 3, 42, 8];


// ------------------------------
// 🔹 DEFAULT BEHAVIOR (IMPORTANT)
// ------------------------------

// By default, sort() converts values to strings
// and sorts based on Unicode (lexicographical order)

const wrongSort = [...ticketNumbers].sort();

console.log(wrongSort);
// [100, 25, 3, 42, 8]

// Reason:
// "100", "25", "3", "42", "8"
// → compared as strings, not numbers


// ------------------------------
// 🔹 CORRECT NUMERIC SORT
// ------------------------------

// Ascending order (small → large)

const sortedAsc = [...ticketNumbers].sort((a, b) => a - b);

console.log(sortedAsc);
// [3, 8, 25, 42, 100]


// Descending order (large → small)

const sortedDesc = [...ticketNumbers].sort((a, b) => b - a);

console.log(sortedDesc);
// [100, 42, 25, 8, 3]


// ------------------------------
// 🔹 HOW COMPARE FUNCTION WORKS
// ------------------------------

// (a, b) => a - b

// If result < 0 → a comes first
// If result > 0 → b comes first
// If result = 0 → no change


// Example:
(3, 8) => 3 - 8 = -5 → 3 comes before 8
(8, 3) => 8 - 3 = 5  → 3 comes before 8


// ------------------------------
// 🔹 IMPORTANT POINTS
// ------------------------------

// sort() MUTATES the original array ❗

// That’s why we use spread:
const safeSort = [...ticketNumbers].sort((a, b) => a - b);

// to avoid changing original array


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// sort() sorts elements as strings by default,
// so for numbers always use a compare function (a, b) => a - b.

//--------------------------------------------------------------------------------------------------

// ==============================
// 🔹 METHOD CHAINING (filter → map → sort)
// ==============================

const kitchenOrders = [
  { dish: "Pasta Carbonara", price: 14, Spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, Spicy: true, qty: 1 },
  { dish: "Casear Salad", price: 9, Spicy: false, qty: 3 },
  { dish: "Inferno wings", price: 11, Spicy: true, qty: 2 },
  { dish: "Truffle Risotto", price: 18, Spicy: false, qty: 1 },
];


// Step 1: filter → take only non-spicy orders
// Step 2: map → transform each order into a new object
// Step 3: toSorted → return a sorted copy (non-mutating)

const mildReport = kitchenOrders
  .filter(order => !order.Spicy)
  .map(order => ({
    dish: order.dish,
    total: order.price * order.qty
  }))
  .toSorted(); 


console.log(mildReport);


// ------------------------------
// 🔹 IMPORTANT CORRECTION
// ------------------------------

// Your comment:
// ".toSorted() => .sort((a, b) => a - b);"

// ❌ Not fully correct

// ✔ Correct understanding:

// toSorted() → returns a NEW sorted array (non-mutating)
// BUT still sorts like sort() → lexicographically by default

// If you want numeric/object sorting, you must pass compare function:

const sortedCorrectly = kitchenOrders
  .filter(order => !order.Spicy)
  .map(order => ({
    dish: order.dish,
    total: order.price * order.qty
  }))
  .toSorted((a, b) => a.total - b.total);


// ------------------------------
// 🔹 DIFFERENCE: sort vs toSorted
// ------------------------------

// sort()
// - mutates original array ❌

// toSorted()
// - does NOT mutate original array ✅


// ------------------------------
// 🔹 WHY METHOD CHAINING
// ------------------------------

// filter → select data
// map    → transform data
// sort   → organize data

// Clean, readable, step-by-step data processing


// ------------------------------
// 🎯 ONE-LINER
// ------------------------------

// Method chaining allows you to filter, transform, and sort data in a clean and readable pipeline.
