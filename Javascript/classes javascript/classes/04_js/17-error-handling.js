function bootNavigation(mapLoaded) {
    try{
        console.log(`Is Navigation loaded: ${mapLoaded}`);
        if (!mapLoaded) {
            throw new Error("Map was not passed in this function")
        } 
        return "NAV_OK"
    } catch(error){
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    } finally {
        console.log("Navigation sequence completed");
    }
}

// const status1 = bootNavigation(true)
// console.log(`Result: ${status1}`);
// O/P :-
// Is Navigation loaded: true
// Navigation sequence completed
// Result: NAV_OK
const status2 = bootNavigation(false)
console.log(`Result: ${status2}`);
