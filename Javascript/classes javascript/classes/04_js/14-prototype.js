const prithviraj = {
    name: "Prithviraj",
    generation: "grandfather",
    cookTraditionalDish() {
        return `${this.name} cooks an ancient family recipe`;
    },
};

// The important use of prototype is inheritances and how can you able to use inheritacnes easily is transferring all the properties for example, raj  wants to inherit all the properties from prithviraj and the prototype is by creating object.create(prithviraj) and raj got all the values but problem is that raj got the name as prithviraj
const raj = Object.create(prithviraj);
console.log(raj.name);
// Prithviraj
// so when a Object [Object.create(prithviraj)] inherit like that and where its goes? it goes to Prototype

raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function () {
    return `${this.name} runs the family business`;
};
console.log(raj);
console.log(raj.cookTraditionalDish());
console.log(raj.runBusiness());
/*
{
  name: 'raj',
  generation: 'father',
  runBusiness: [Function (anonymous)]
}
*/

const ranbir = Object.create(raj)
ranbir.name = "ranbir"
ranbir.generation = 'son'
ranbir.makeFilm = function () {
    return `${this.name} directs blockbuster movies`
}

console.log(ranbir.makeFilm());
console.log(ranbir.runBusiness());
console.log(ranbir.cookTraditionalDish());

// in-Browser
// q) does prototype exists on the myName?
const myName = "Animesh"
/*
myName.__proto__
=> String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
agar String ko expand karenge toh toh aap methods milega jo aapne phele padha hai i.e concat, charAt etc bohot saare methods hai jo hum familiar hai and daily basis pe use karthe hai 
end pe jaaoge toh "[[Prototype]]: Object" and prototype hai kya?  object hai and further down open karthe ho toh Object ke saare properties i.e. constructor, hasOwnProperty etc ee sab Object ki thi properties 
toh harr cheez inherit kisko kartha hai? objects karthe hai 
isseliye bola jaatha hai javascript mein sabkuch aapko end pe kaha par milega "prototype" pe and eee hee prototype wala inheritances hai ee toh string mein dekha 

const myNewFun = function (){}
=> undefined

myNewFun
=> ƒ (){}

myNewFun.__proto__
=> ƒ () { [native code] }
Issmei further saare sabh object hote hai? bikul hote hai

arrys pe bhi same hote hai 
*/


/* Array has prototype just like with strings, functions, objects  etc and if you try to think the datatype of array prototype so what will be the datatype of prototype? it'll be "Object" so datatype of prototype is Object.
So can we add properties in the object? yup we can do that like this on the below code 
aap koi toh array hoga array ka access kaisa lu? this keyword toh dega reference [from the ranveer singh example in this lecture]
*/
Array.prototype.last = function() {
    return this[this.length - 1]
};

console.log([1, 2, 3].last());
/*
does arrays ke andhar map hota hai? yup toh fir kya map2 ho saktha hai jo number ko twice kar de yup kiya jaa saktha hai
*/
// This concept is also called as polyfills

Array.prototype.mapTwo = function () {

}
// we can create our own forEach, map or other methods of your choices and the reasons behind is that just suppose map doesnt support in old browser and in the old times doesnt support so we make the custom 
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

/*
Prototype ke 2-3 kaam hota hai
phela kaam kya hai? Inheritances
Object create karthe ho toh inheritances ho jaatha hai
dusra kaam hai prototype ka 
Ek object hota hai , object mein properties hoti hai , object mein bilkul functions hota hai 
*/
Array.prototype.animesh = "Animesh";

console.log([1,2,3].animesh);
// Animesh

// Create your own map, forEach, reduce using polyfill
// In almost every Javascript Interview they asked you create your Own map, forEach, reduce etc but mainly they ask this 3 questions surely

// Assignment => Jitne bhi arrays ke functions hai ussko polyfills mein likhna hai i.e. forEach, Reduce, map, and flat [it uses recursions] and array to string or vice-versa 

/*
Fact :- Javascript mein koi classes hota nhi hai woh wrapper hai, mainly prototype hota hai  
classes syntaxtical sugar hota hai 

*/