const codeName = "Shadow Fox"
const backupName = String("Night Own")
const templateName = `Agent ${codeName}`


let intercepted = "Hello"
intercepted[0] = "J"; // Silent Fail means silent error
// console.log(intercepted);

// const secretCode = "OMEGA-7"

// console.log(secretCode.length);
// console.log(secretCode.charAt(0)); //O
// console.log(secretCode.charAt(99)); // empty-string
// console.log(secretCode[99]); // undefined
// console.log(secretCode.at(-1)); // 7


const rawTransmission = "The Eagle has Landed"
// console.log(rawTransmission.toLocaleLowerCase());

const message = "The drop point is at Dock 7. Repeat: Dock 7"

// console.log(message.indexOf("Dock"));

// console.log(message.slice(0, 12));

const orders = "move-north|hold-position|extract-vip"
let OrderList = orders.split("|")
console.log("Split", OrderList);
// Split [ 'move-north', 'hold-position', 'extract-vip' ]
console.log(typeof OrderList);
// Object

const list = [ 'move-north', 'hold-position', 'extract-vip' ]
let listjoin = list.join("|")
console.log(listjoin);
// move-north|hold-position|extract-vip
console.log(typeof listjoin);
// string

const myDataValue = "SOS".split("");
console.log(myDataValue); // [ 'S', 'O', 'S' ]
console.log(typeof myDataValue); // object
console.log(Array.isArray(myDataValue)); // true
