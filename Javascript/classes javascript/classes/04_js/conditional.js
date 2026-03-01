const playerHealth = 75
const HasShield = true
const hasSword = false

if (playerHealth <= 30 && HasShield) {
    
}

// true && false => false 
// ture || false =. true
const isLoggedIn = true
const hasCourseAccess = false

if (isLoggedIn || hasCourseAccess) {
    //allow to watch videos
}

const courseLaunched = true

const chosenPath = "left"

switch(chosenPath){
    case "right":
        console.log("User selected right");
        break;
    case "top":
        console.log("User selected top");
        break;
    case "left":
        console.log("User selected left");
        break;
    default:
        console.log("Kiska koi nhi hota, unka default hota h");
        
}