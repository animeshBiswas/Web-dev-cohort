const carriage1 = ["Animesh","Govind","Biswas"]
const emptyCarriage = []

const threeEmptySeats = Array(3)
// console.log(threeEmptySeats); // [ <3 empty items> ]
// console.log(threeEmptySeats.length); // 3

const passenger = Array("Animesh","Govind","Biswas")

const singlePassenger = Array.of(3);
const anotherPassenger = Array.of("Animesh");
// console.log(singlePassenger); // [ 3 ]
// console.log(anotherPassenger); // [ 'Animesh' ]
// Research about differences Array() and Array.of() and also learn about Array.of()

const traincode = Array.from("DUST")
// console.log(traincode);

const tempTrain = ["A","B","C","D","E"]
// console.log(tempTrain); // [ 'A', 'B', 'C', 'D', 'E' ]
tempTrain.length = 3
// console.log(tempTrain); // [ 'A', 'B', 'C' ]
tempTrain.length = 5
// console.log(tempTrain); // [ 'A', 'B', 'C', <2 empty items> ]

// instead of Directly doing console log, try to visualise what output will be then after sometimes do console log

// push, pop, shift, unshift, splice :- methods of arrays
//
// concat, slice, flat :- non mutating which means returns new array without changing the original array and mostly used in react and redux 

// const trainCopy = wholeTrain.slice() // commonly used to copy the data because it returns the new data without changing the original data
//
// Searching: indexOf, includes, find, findIndex

console.log(typeof []);
// to check a given array is array or not then use .isArray() not typeof becuase it will give you object
console.log(Array.isArray([])); // true
console.log(Array.isArray("Ravi")); // false
// if you dug deeper string is also array (array of characters) but its a not a array meaning is different its for thr knowledge but in conditional checks its very different, knowledge and wisdom should be their on there own places like for knowledge tomato is a fruit but wisdom is that dont put in the fruit salad just like for strings dont put knowledge in wisdom

//key points
// 1. Try to use Array in literals i.e. [] not this => Array(n) because its create empty slot means its create a fixed slot in the memory so basically dont try to hardcode array
// 2. array are 0 based
// 3. array throws undefined as a errors if you try access the element of the array which doesnt exists
// 4. Mutating methods: push, pop, shift, unshift, splice
// 5. Non Mutating Methods: concat, slice, flat, flatmap [1, 2, 3, [5,6]]
// 6. Searching: includes (most used methods) and others which are commonly used
// 7. Array.isArray() => to find is array or not