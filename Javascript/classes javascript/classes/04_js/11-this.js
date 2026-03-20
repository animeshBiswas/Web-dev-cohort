// Javascript is very similar to C++, Java, python interms of syntax
// and its very common in programming languages
// what are similar? loops almost same but there are some differences
// just like functions, conditions
// but there is a difference in objects
// what things which makes javascipt a javascript and also helps to crack the interview (DOM is not a topic instead its a speciality which also not a part of core programminf)
// this, => its doesnt exists anywhere the level "this" holds in javascript other than anyother programming languages and one the what makes javascript a javascript and also create tricky.
// call, bind, apply => this make and break interview
// new => another make and break
// prototype => if you understand "prototype" thats it, its very important topics in JS
// this where polyfills comes from.


// this topic

// Explainations :- Ranveer himself is just one person, but depending on the movie he is in, he becomes a different character. For example, in one film he might play Hamza, and in Bajirao Mastani he becomes Bajirao. So even though the person is the same, his role changes based on the context.
// This is exactly how "this" works in JavaScript.
// It is not a fixed value — it changes depending on the context in which the function is called.

// Code:-

// console.log(this);
// {} => now its pointing to the node global object

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
    // when you run the program you have to observe from what environment your running this either node environment or browser environment
}

console.log(ranveerWithNoScript());
// <ref *1> Object [global] => giving reference to the global object, 
// and this is from the node global object 
// and if this code runs from the browser then it will be windows global object
// if you notices "this" from the functions and normally written in the 1st line its given
// its given different o/p
// you have to understand that from where "this" is pointing in node, windows etc
// and it will give o/p according to that



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
            // arrow functions it'll give errors but if you notice main function  (announceCast()) is not arrow functions so "this" keyword is used by loops i.e. foreach or anyother loop i.e map etc etc so loops has access to "this" keyword 
            //  this is call back
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
    },
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

        // common traps in interview is asked to the candidates related to arrow fnc with this
        // this is called as detached method
        // and also one of the intresting gotcha of js
        const arrangeLights = () => {
            console.log(`Arrow this.crew: ${this.crew}`); 
            // o/p :-
            // Arrow this.crew: Spot boys

            // and this the behaviour of the language
            // you cant just believe concept blindly that like in arrow fnc that doesnt have access to "this" keyword but its not happened like that.
            // this is use case in JS.
            //  so their will be quirky in js
            // you have to accept such behaviour of the js you cant simply just ask why?
        };
        arrangeLights();
    },
};

filmSet.prepareProps()


// Notes :-
// In filmDirector, name and cast is array and in announceCast() inside we use loop i.e. foreach to the cast and inside the loop there is a arrow functions so inside of the arrow func does they have access to "this" func? yup they have and its detached functions 
// story repeat same in the filmSet  instead of array we gave string and we have one functions i.e. prepareProps() on the inside there is a arrow function i.e. arrangeLights so they'll have access to the this? definitely they'll have but in the regular functions will have access to the "this" absolutely not!
// this is the some behaviour of JS


// Detached Methods
// meaning of detached methods is that you created a method (bow()) inside a object (actor) but you did a detached (detachedBow) means is that you remove the function of bow from the actor object and placed the referece of the actor.bow in the somewhere else i.e. detachedBow and in the end you'll have 2 things i.e. you can run actor.bow() and also detachedBow where holds the reference of actor.bow() and differen will be that one object is running the methods and the other reference of bow() is stored in somewhere else is detachedBow() where you can run too.
// such type of questions is asked in the interview
// is also kind of similar to closures too
// 

const actor = {
    name: "Ranveer",
    bow() {
        return `${this.name} tale a bow`;
    }
}

const detachedBow = actor.bow

console.log(detachedBow());
// undefined tale a bow


// this behaviour is very tricky
// whatever roles "this" inherit they become like that

// you have to know the  current state of the "this" global
// there are 2 important things one of them in the detached mode is that what "this" keyword take with them this should be clear