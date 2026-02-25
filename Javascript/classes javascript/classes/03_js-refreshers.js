"use strict"

// Topic: Hello world
// console.log('Hello world');

// Topic: Code structure
// Kebab-case file names. Use Semicolon

// Topic: Comments
// Interns should not touch this logic.
/*
Line one
Line two
Line three
[Multiline]
 */
 

// Topic: Strict Mode
// 2009 ES5 added new feature which breaks few things.
// Too keep old systems running - new features are turned off by default.
// *use strict* --> always use at top
// *no use strict*
// JS -> Class, Modules 

// Topic: Variables
// steps -> create, store, use, modify
let myFavLang;
myFavLang = 'JavaScript';

// console.log(myFavLang);

myFavLang = "TypeScript";
// console.log("After learning TS my fav is: ", myFavLang);

// Good Practice
// Use camelCase for variable names
// Rule for Identifiers

const G = 9.98 // m/s^2

// g = 'o ji'; --> This will not work
// console.log(G); 

// UPPERCASE
const VDay = '14 Feb';

const days = "days from VDay";

// console.log(Math.PI);

// Topic: Data Types
// Numbers - Integer , float 
let myNum = 45.65;
// INFINITY, -INFINITY and NaN (Not a Number)
// console.log(1/0);
// console.log(6 / "not a number ");

// BigInt
// 2*53 - 1 = 9849393939393

// String
let single = 'I am single';
let double = "I am double";
let backtick = `string interpolation`;

let name = "ak";
// console.log(`My name is ${name}`);
// console.log(`2 + 2 is ${2 + 2}.`);

// Boolean (true , false)
let ispassed = true;
let piyushIsSingle = false;

// Null -> Empty or unknown
let partner = null;

// undefined (value not assigned)
let ekVariableHai;
// console.log(ekVariableHai); // undefined

// Symbol
// To create unique identifiers for objects.

// Object
const person = {
    name: "Animesh",
    age: 24,
    mobile: 8828524906,
    isMarried: false, 
}

// typeof X return type
// console.log(typeof 12.4556);
// console.log(typeof 12444434664556n);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof Symbol("id"));
// console.log(typeof Math);

// Quirky
// console.log("Type of null:", typeof null);
// console.log(typeof console.log);

// Topic: Type Conversion
// String Conversion
let choice = false;
let strChoice = String(choice)
// console.log(strChoice);


// Number Conversion
let strInput = "25"
let age = Number(strInput);
// console.log(age);

let myAge = Number("Twenty Five");
// console.log(myAge);

// console.log(Number(partner)); // 0

// Boolean Conversion
// console.log(Boolean(0));

// Truty, falsy

// Topic: Operators
/* Terms
    Operators [+, -, / ,*]
    Operand - on which we apply operators [for eg. in a+b, a and b are operands]
    Unary - An operator is unary if it has a single operand. (-number)
    Binary - double operand [a - b]
    Ternary - short hand if-else (?)
*/

// Arithmatic [+,-,*,/,%, **]
// % gives remainder it's known as modular operator
console.log(81 ** (1/2)); // a^b

// String Concatination
console.log(6 + " not a number");
// rule - Note that if any of the operands is a string, then the other one is converted to a string too.
console.log(3 + "5"); // 35
console.log(3 + "5" + 3);
console.log(3 + 3 + "5");

// Other arithmetic operator work only with numbers and always convert their operands to numbers.
// console.log(6 - "2"); //4

// topic: Operators Precedence
// Refer MDN Table

// Assignment Operators
let myLife = "chill"

// Modify in Place
let aura = 0
// console.log((aura += 10));
// aura = aura + 10 

// console.log((aura *= 10));
// aura = aura * 10 

// Increment and Decrement
let counter = 0;
counter++; // 1
// console.log(counter);

counter--; // 1-1 = 0
// console.log(counter);

// Thera are two ways to write [prefix and postfix]
let newCounter = 10
console.log(newCounter++); // it will return newcounter then it will increase by 1
console.log(++newCounter);

// ++, --, prefix, suffix
console.log(newCounter - 1);

// Bitwise Operator
// Visit MDN if needed

// Comparisons
// >, <, >=, <=, !=, =, ==, !==, ===
// Strict, Lose

console.log(2 == "2"); // it compare value
console.log(2 === "2"); // it compare value + type

// console.log(userRole === 'ADMIN');

let a = 19;
if (a > 18) {
    console.log('adult');
} else {
    console.log('chotti bacchi');
}

while (condition){
// write code here
}

// Declaration 
function sum(a, b) {
    return a + b;
}

// Expression
const add = function (a, b) {
    return a + b;  
};

// Arrow
const addition = (a, b) => a + b;