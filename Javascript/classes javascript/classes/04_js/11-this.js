// console.log(this);
// {}

function ranveerOnGlobalStage() {
    return typeof this;
}

// console.log(ranveerOnGlobalStage());
// object


// this extact code asked in the interview  
// function ranveerWithNoScript() {
//     "use strict"

//     return this;
// }

// console.log(ranveerWithNoScript());
// // undefined

// without using strict mode what o/p can we expect?
function ranveerWithNoScript() {
    return this;
}

console.log(ranveerWithNoScript());
// <ref *1> Object [global] => giving reference to the global object, 
// and this is from the node global object 
// andd if this code runs from the browser then it will be windows global object
// if you notices "this" from the functions and normally written in the 1st line its given
// its given different o/p
// you have to understand that from where "this" is pointing node, windows etc
// and it will o/p according to that

const bollywoodFilm = {
    name: "Bajirao Mastani",
    lead: "Ranveer",

    introduce() {
        return `${this.lead} performs in ${this.name}`;
    },
};

// console.log(bollywoodFilm.introduce());

// Interview Questions

const filmDirector = {
    name: "Sanjay Leela Bhansali",
    cast: ["Ranveer", "Deepika", "Priyanka"],

    announceCast() {
        this.cast.forEach((actor) => {
            console.log(`${this.name} introduces ${actor}`);  
            // O/P :-
            // Sanjay Leela Bhansali introduces Ranveer
            // Sanjay Leela Bhansali introduces Deepika
            // Sanjay Leela Bhansali introduces Priyanka  

            // As we have learned previously that if we use "this" on the
            // arrow functions it'll give errors but their is a exceptions
            // is that when we use .forEach or any other method then we can use
            // "this" inside of the method and this is call back
        });
    },
};

// filmDirector.announceCast();

// Interview Questions
/*
const filmSet = {
    crew: "Spot boys",
    prepareProps(){
        console.log(`Outer this.crew: ${this.crew}`);

        function arrangeChairs() {
            console.log(`Inner this.crew: ${this.crew}`);
            
        }
        arrangeChairs();
        // Inner this.crew: undefined

        // A regular nested functions doesnt inherit "this"
        // that's why its showing undefined
    }
};

filmSet.prepareProps();
// Outer this.crew: Spot boys
*/

const filmSet = {
    crew: "Spot boys",
    prepareProps(){
        console.log(`Outer this.crew: ${this.crew}`);

        function arrangeChairs() {
            console.log(`Inner this.crew: ${this.crew}`);
            
        }
        arrangeChairs();

        // common traps in interview is asked to the candidates related
        // arrow fnc with this
        // this is called as detached method
        // and also one of the intresting gotcha of js
        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`); 
            // o/p :-
            // Arrow this.crew: Spot boys
            // and this the behaviour of the language
            // you cant just believe concept blindly their will be quirky in js
            // like in arrow fnc you cant simply use "this" but its not happened like that.
            // you have to accept such behaviour of the js you cant simply just why?
        };
        arrangeLights();
    },
};

filmSet.prepareProps()