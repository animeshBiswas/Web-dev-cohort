/*
Think symbol as a aadhar card
everyone has a aadhar card but the number is unique
*/ 

const aadhaar_of_animesh = Symbol("aadhaar")
// Symbol("aadhaar"); "aadhaar" is the lable name of symbol
// kya label gurantte hai ki symbol name same honge? No
// Symbol only guranttee that you'll get unique values but they wont tells what the unique values is
const aadhaar_of_piyush = Symbol("aadhaar")

console.log(typeof aadhaar_of_animesh);
// symbol
console.log(aadhaar_of_animesh === aadhaar_of_piyush);
// false => symbol always gives guranttee unique value despite the label (Symbol("aadhaar")) is same
console.log(aadhaar_of_animesh.toString());
// Symbol(aadhaar)
console.log(aadhaar_of_animesh.description);
// aadhaar => gives descriptions as a label

// One of the best about symbol is not able to see the value

const nonIndian = Symbol();
console.log(nonIndian.description);
// undefined => because you give label 

// Using symbols as a keys
const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRecord = {
    name: "Animesh Biswas",
    age: 24,
    // you can define key [] this way
    // you cant able to loop due to non visibility
    [biometricHash]: "ajakjdiksjidjhsidj", 
    [bloodGroup]: "O+"
}

console.log(Object.keys(citizenRecord));
// [ 'name', 'age' ] you see different behavioue and key you'll get is name and age; and making a symbol and passing a key so you wont able to see the keys, this not visible properties

// to find out non-visible properties
console.log(Object.getOwnPropertySymbols(citizenRecord));
// [ Symbol(biometricHash), Symbol(bloodGroup) ]


/* Use-case 




*/