/*
Think symbol as a aadhar card
everyone has a aadhar card but the number is unique
*/ 

const aadhaar_of_animesh = Symbol("aadhaar")
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


const biometricHash = Symbol("biometricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRecord = {
    name: "Animesh Biswas",
    age: 24,
    [biometricHash]: "ajakjdiksjidjhsidj",
    [bloodGroup]: "O+"
}

console.log(Object.keys(citizenRecord));
// [ 'name', 'age' ]

console.log(Object.getOwnPropertySymbols(citizenRecord));
// [ Symbol(biometricHash), Symbol(bloodGroup) ]