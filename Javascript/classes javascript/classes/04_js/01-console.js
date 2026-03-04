const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("clue found: ", clue1);
console.log("clue found: ", clue2);

const suspectName = "Dipesh"
const suspectAge = 20
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);

 console.warn("Warning: Fingerprint evidence detected");
 console.error("Warning: Fingerprint evidence detected");

console.group("Group starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd();

console.time("time starts now")

let dnaMatches = 0
for (let i = 0; i < 1_000_000 ; i++) {
    dnaMatches++  
}
console.timeEnd("time starts now");