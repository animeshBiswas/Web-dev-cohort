const codeName = "Shadow Fox"
const backupName = String("Night Own")
const templateName = `Agent ${codeName}` // this template literal 


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

const orders = "  move-north|hold-position|extract-vip   "
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

const missionNumber = '42'
console.log(missionNumber.padStart(6));  //"     42"  it used to pad the values using spaces or any elements
console.log(missionNumber.padStart(6, "0")); //"000042" 

// String is immutable whatever method your running it doesnt make changes in the same string instead they make new string so thats why is immutable and also follow the copy style i.e. using stack memory

// const spellCard = `
      
// +++++++++====================
// | Spell: ${myDataValue}

// `;
// template literal can use nested template literal, conditionals

// const profile = `
//    ${checker ? "true-value" : "false-value"}
// `;

// Tagged Template literal 
// learn or research about this topic


// Asked in the interview 
console.log(void 0); // undefined
console.log(void "Animesh"); // undefined
//          void  expressions

// void always evaluate its expressions and return undefined


let generalStore = {name: "Kirana", goods: 2}
console.log(generalStore);
// generalStore = undefined;
generalStore = null;
console.log(generalStore);
// To destroy a variable so its preferred to use null than undefined
// And research about actually happens behind the scene and learn about it more


// Research about Arrays and objects methods which is easy to understand