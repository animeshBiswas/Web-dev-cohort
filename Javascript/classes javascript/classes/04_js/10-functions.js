console.log(brewPotion("Healing Herbs", 3));

function brewPotion(ingredient, dose){
    return `Brewing potion with ${ingredient} (x${dose})... Potion ready`;
}

// function expression
const mixElixir = function (ingredient) {
    return `Mixing elixir with ${ingredient} `;
}


// Every functions has their own arguments and arguments objects, some have and some havent like arrow functions dont have a arguments objects and 'this'
// no own 'this', no 'arguments' Object [there is differnece between arguments and arguments object] in arrow functions
const distilEssence = (ingredient) => {
    return `Mixing elixir with ${ingredient}`
}

function oldBrewingLogs() {
    console.log("Type: ", typeof arguments); // Type:  object
    console.log("Is Array : ", Array.isArray(arguments)); // Is Array :  false
    console.log(arguments); // [Arguments] { '0': 'Sage', '1': 'Rosemary' }
    const argsArray = Array.from(arguments);
    // to convert objects to array use Array.from()
    console.log(argsArray);
    
}

// oldBrewingLogs("Sage", "Rosemary");

// const arrowBrew = () => {
//     console.log(arguments);  
// };

// arrowBrew(); // it crash the program so use try-catch

const arrowBrew = () => {
    try {
        console.log(arguments);
        
    } catch(e) {
        // console.log(e);
        console.log(e.message);
    }
};

arrowBrew(); 
console.log("Progress continue");

// side effects of functions

// impure fn. :- functions who depended on the external  state and mutates the values is know as impure fn.
// pure fn. :- functions who is independed and works internally and doesnt mutates the values is know as pure fn.

let globalCount = 0

function brewAndCount(name) {
    globalCount++
}

// HOF (Higher Order functions)

function anotherFunctionForClass(brewAndCount){
    return function newBrew() {
        //do something
    }
}


// IIFE (Immeditaely invoked functions execution)

// ()()
// (function () {  })()
// (() => {})()

const potionShop = (function () {
    let inventory = 0

    return {
        brew() {
            inventory++
            return `Brew potion #${inventory}`;
        },
        getStock(){
            return inventory;
    },
  })();
