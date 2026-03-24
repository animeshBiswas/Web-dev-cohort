// JavaScript feels quite similar to languages like C++, Java, and Python in terms of basic syntax.
// Many core concepts are shared across these languages.

// For example:
// Loops are almost the same (for, while, etc.)
// Functions and conditionals also follow a familiar pattern.

// So if you already know one language, picking up JavaScript becomes easier.

// But... where does JavaScript start becoming different?

// The biggest difference comes when we talk about objects and how JavaScript handles them.
// This is where things get interesting (and sometimes confusing).

// Now the real question:
// What actually makes JavaScript "JavaScript"?
// And what are those concepts that are important not just for understanding,
// but also for cracking interviews?

// First — DOM:
// DOM is not really a core JavaScript concept.
// It's more like a browser feature that JavaScript can interact with.
// So think of it as a specialty, not the core language itself.

// Now comes the real game changers:

// 1. "this"
// The way "this" works in JavaScript is very unique.
// It behaves differently depending on how a function is called.
// This level of flexibility (and confusion 😅) is not commonly seen in other languages.
// That’s why "this" is both powerful and tricky.

// 2. call, apply, bind
// These are directly connected to "this".
// They let you control what "this" should refer to.
// In interviews, this is a make-or-break topic.

// 3. new keyword
// The "new" keyword changes how functions behave.
// It helps create objects and sets up "this" in a specific way.
// Another important concept for interviews.

// 4. prototype
// If you truly understand prototypes, you understand JavaScript at a deeper level.
// It’s the backbone of how inheritance works in JS.
// One of the most important topics.

// 5. Polyfills
// Ever wondered how features are recreated manually?
// That’s where polyfills come in.
// And they heavily rely on understanding things like prototypes and "this".

// In short:
// Syntax is easy.
// But mastering "this", prototypes, and function behavior is what really defines JavaScript.


// this topic

// Explainations :- Ranveer himself is just one person, but depending on the movie he is in, he becomes a different character. For example, in one film he might play Hamza, and in Bajirao Mastani he becomes Bajirao. So even though the person is the same, his role changes based on the context.
// This is exactly how "this" works in JavaScript.
// It is not a fixed value — it changes depending on the context in which the function is called.

// Code:-

// console.log(this);
// {} => now its pointing to the node global object or you can that is pointing to global executions context

function ranveerOnGlobalStage() {
    return typeof this;
    // this is pointing to the functional executions context because its inheriting something from the object so you'll see a variations in o/p from console.log(this) and the function this
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
// closures example below
/*
function makeFunc() {
    const name = "Mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// myFunc hold the reference of makeFunc() and its also returns the displayName i.e. whole func with the access of "name" [tippin box analogy] so people usually assumes that its will happen same in the detached method too but it doesnt happens and thats the differences and this is how you relate

*/

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
// Another thing is that when you run the program you have to observe from what environment your running this either node environment or browser environment and it will give o/p according to that
// Another nested fuctions doesnt inherit "this" and that's why its showing undefined
// these are behaviours of "this" keyword in JS and you have to accept such behaviour of the js you cant simply just ask why?


// --------------------------------------------------------------------------------------

// Learning "this" from the chatgpt
/*
1) What is "this" in JavaScript?
2) What is need of "this" in JavaScript?
3) how "this" works in nornal function?
4) how "this" works in arrow function?
5) how "this" behaves differently in normal function and arrow function?
5) how "this" works in object method?
6) What are quirks of "this" in JavaScript?
*/

/*
Notes :-


// "this" keyword in JavaScript

// Explanation:
// Think of Ranveer Singh.
// He is one person, but in different movies he plays different roles.
// In one movie he is Bajirao, in another he is Alauddin Khilji.

// So the person is the same, but the identity changes based on context.

// This is exactly how "this" works in JavaScript.
// "this" is not fixed — it depends on HOW a function is called.

// ------------------------------------------------------------

// Case 1: Global level

// console.log(this);

// In Node.js → {}
// (because top-level "this" points to module.exports)

// In Browser → window object

// ------------------------------------------------------------

// Case 2: Inside a normal function (non-strict mode)

function ranveerOnGlobalStage() {
    return this;
}

// console.log(ranveerOnGlobalStage());

// In Node.js → global object
// In Browser → window object

// Why?

// Let’s think:
// Who is calling this function?

// ranveerOnGlobalStage();

// There is no object before it.
// So JavaScript defaults "this" to the global object (in non-strict mode).

// ------------------------------------------------------------

// Case 3: Strict mode

function ranveerWithNoScript() {
    "use strict";
    return this;
}

// console.log(ranveerWithNoScript());

// Output → undefined

// Why?

// In strict mode, JavaScript does NOT assume a default global object.
// So if no one calls the function explicitly, "this" becomes undefined.

// ------------------------------------------------------------

// Final understanding:

// "this" does NOT depend on:
// ❌ where the function is written

// "this" ONLY depends on:
// ✅ how the function is called

// That’s the most important rule.

Final Mental Model (Very Important)

Let’s compress everything into one question you should always ask:

❓ “Who is calling this function?”
obj.method() → this = obj
function() → this = global / undefined (strict)
new Function() → this = new object [new keyword is needed]



*/