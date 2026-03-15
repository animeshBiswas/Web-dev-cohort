const crewMembers = 40
const fuelTons = 142.42
const light_speed = 299_888_999

const infiniteRange = Infinity
const negativeInfiniteRange = Infinity
const notANumber = NaN
// "5" => 5 (when converted to number)

// "Ashotosh" => NaN
// "Deepak" => NaN

// NaN === NaN -> false
// because according to IEEE-754 rules, NaN is not equal to anything, even itself.

// To check NaN properly:
Number.isNaN(value)

//-------------------------------------------------------------------------

// console.log(1/0); // Infinity

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.EPSILON); // Research about this topic
// console.log(Number.isNaN);
// console.log(Number.isFinite);
// console.log(Number.isNaN(notANumber));

//-------------------------------------------------------------------------

const fuelReading = "142.75 tons"
const sectorCode = '0xA3';
const countDown = "007"

// console.log(parseInt(fuelReading)); // 142
// console.log(parseInt(sectorCode)); // 163
// console.log(parseInt(countDown)); // 7

// console.log(parseInt("111",2));

//-------------------------------------------------------------------------

const thrustForce = 4.567

console.log(Math.round(thrustForce)); // rounds to the nearest integer; decimal ≥ 0.5 → round up; decimal < 0.5 → round down
console.log(Math.floor(thrustForce)); // Meaning it always rounds down
console.log(Math.ceil(thrustForce)); // Meaning it always rounds up.
console.log(Math.trunc(thrustForce)); // It does no rounding

//-------------------------------------------------------------------------

const temps = [-120, 43, 56, -23];

// Math.min() and Math.max() do NOT accept arrays.
// They expect numbers as separate arguments.

// When we pass an array, JavaScript tries to convert the array into a number.
// [-120, 43, 56, -23] → "-120,43,56,-23" (string)
// Number("-120,43,56,-23") → NaN

console.log(Math.min(temps)); // NaN
console.log(Math.max(temps)); // NaN


// Correct way → use spread operator (...) to pass values individually

console.log(Math.min(...temps)); // -120
console.log(Math.max(...temps)); // 56

//-------------------------------------------------------------------------

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

function almostEqual(a, b){
    return Math.abs(a-b) < Number.EPSILON;
}

almostEqual(almostEqual(0.1 + 0.2, 0.3));

// learn more about shallow copy and deep copy and structuredClone()
