const weaponName = "Flame Sword"
console.log("Weapon: ", weaponName, "| type: ", typeof weaponName);

const attackPower = 75n;
const attackUpgrade = 1.5;

console.log(typeof attackPower); // bigint
console.log(typeof attackUpgrade); // number

const isLoggedIn = true
let bonusEffect; // undefined

let curseStatus = null; // value is intentionally absent
let weatherApiResponse = null
console.log(typeof weatherApiResponse); // object but null due to quirky of js
console.log(weatherApiResponse); // null this is bug due to backward compatibility

const uniqueRuneId = Symbol("rune_of_fire");
const uniqueRuneId2 = Symbol("rune_of_fire");
console.log("Rune: ", 
    uniqueRuneId.toString(), 
    "| type of: ", 
    typeof uniqueRuneId,

);

const heroStats = {
    name: "Deepak",
    level: 12,
    class: "Ranger",

}

console.log("Hero: ", heroStats, "| type: ", typeof heroStats);

const inventory = ["flame sword", "Health potion", "shield"]
console.log("Inventory: ", inventory, "| type: ", typeof inventory);

function castSpell() { return "Fireball"}
console.log("Spell Type ", typeof castSpell); // typeof is function but is a object due non-primitive

console.log(typeof "Chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
// typeof function is function will be important when we work with Manipulations of DOM  


let originalHP = 100
let cloneHP = originalHP

cloneHP = 80

console.log("originalHP: ",originalHP);
console.log("cloneHP: ", cloneHP);

const originalSword = {
    name: "Flame Sword",
    damage: 75,
    typeofW: "Fire",
};

const cloneSword = originalSword;

cloneSword.damage = 100;

console.log("Original Sword: ", originalSword.damage);
console.log("Clone Sword: ", cloneSword.damage);

const armorOriginal = {
    name: "Iron Plate",
    defence: 80,
    buff: {
        fire: 10
    },
};

const armorCopy = {...armorOriginal} 
// Spread operator creates a shallow copy.
// Top-level properties are copied,
// but nested objects still share the same reference.
// To create a deep copy, use structuredClone().
armorCopy.buff.fire = 90

const potionOriginal = {name: "Health", effects: {heal: 40, mana:30}}
const potionCopy = structuredClone(potionOriginal)
// Shallow copy → only top-level properties are copied.
// Nested objects still share the same reference.

// Deep copy → nested objects are also duplicated,
// so modifying them does not affect the original object.

typeof null === "object" // object and this is legacy bug

// to check array use .isArray() to not get a object in o/p and instead you'll get true or false
Array.isArray()
