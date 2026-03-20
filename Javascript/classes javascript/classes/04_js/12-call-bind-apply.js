// call and apply =>Think of it as halwai or Basic chef who will come my themselves to prepare the food for a ocassion (kitchen)
// bind =>Think of its as a caters who will send a team of chefs to prepare the food for a ocassion OR return a new function

function cookDish(ingredient, style) {
    return `${this.name} prepares ${ingredient} in ${style} style !`;
}

const sharmaKitchen = {name: "Sharma jis kitchen"}
const guptaKitchen = {name: "Gupta jis kitchen"}

// console.log(cookDish()) // if you give reference traditionally then it will take 2 arguements but you want to 3 arguements 
// this is where call comes in the scenario

console.log(cookDish.call(sharmaKitchen,"paneer and spices","muglai"));
// o/p :-
// Sharma jis kitchen prepares paneer and spices in muglai style !

const guptaOrder = ["chole kulche", "Punjabi Dhaba"]

console.log(cookDish.apply(guptaKitchen, guptaOrder));

// difference you will notice between bind and apply is that apply is used when you want to pass array to the func
// if there is array then use Apply

const bills = [100, 30, 45, 50]

Math.max.apply(null, bills) // research about why null is in the 1st arguements
Math.max(...bills);

// apply and bind they return as a result
// bind return as a function

function reportDelivery(location, status){
    return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = { name: "Ranveer" };

console.log("Call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Ordered"]));
console.log("bind: ", reportDelivery.bind(deliveryBoy, "Mars", "Ordered"));
// o/p :-
// bind:  [Function: bound reportDelivery] => its returning the functions reference just like bind definitions prove that so we use variable to store returned function reference from the bind then we'll execute the function reference to get the o/p

// const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar", "What")
// console.log(bindReport());

// OR

// 1)
// const bindReport = reportDelivery.bind(deliveryBoy, "Haridwar")
// console.log(bindReport("What"));
// // O/P :-
// // Ranveer at Haridwar: What
// 2)
const bindReport = reportDelivery.bind(deliveryBoy)
console.log(bindReport("Haridwar","What"));
// O/P :-
// Ranveer at Haridwar: What

//what is purpose of using bind where we can use call and apply easily
// reasons behind is that someplaces you dont want to run immeditaely as compared to call and apply which runs instantly and in bind has a reference of the functions which is up to you when you wants to run and specially when you onclick 

// Main purpose or goal of call, bind, apply is to change the reference of "this" keyword
// When you go to the DOM when you click the button you have to change references of the button. so you want to change the references of "this"