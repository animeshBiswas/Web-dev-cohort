const crewMembers = 40
const fuelTons = 142.42
const light_speed = 299_888_999

const infiniteRange = Infinity
const negativeInfiniteRange = Infinity
const notANumber = NaN
// "5" => 5
// "Ashotosh" => NaN
// "Deepak" => NaN
// NaN === NaN :- NaN is not equal to NaN because NaN is not a value instead its a output so Ashotosh NaN is not same as deepak NaN

// console.log(1/0); // Infinity

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON); // Research about this topic
// console.log(Number.isNaN);
// console.log(Number.isFinite);
// console.log(Number.isNaN(notANumber));

const fuelReading = "142.75 tons"
const sectorCode = '0xA3';
const countDown = "007"

// console.log(parseInt(fuelReading));
// console.log(parseInt(sectorCode));
// console.log(parseInt(countDown));

// console.log(parseInt("111",2));

const thrustForce = 4.567

console.log(Math.round(thrustForce)); // priority to high numbers
console.log(Math.floor(thrustForce)); // priority to low numbers
console.log(Math.ceil(thrustForce)); // priority to high numbers
console.log(Math.trunc(thrustForce)); // it truncate the values

const temps = [-120, 43, 56, -23];
console.log(Math.min(temps)); // NaN
console.log(Math.max(temps)); // NaN

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

function almostEqual(a, b){
    return Math.abs(a-b) < Number.EPSILON;
}

almostEqual(almostEqual(0.1 + 0.2, 0.3));

// learn more about shallow copy and deep copy