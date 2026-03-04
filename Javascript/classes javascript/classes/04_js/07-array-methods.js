const orders = [
    { dish: "Pasta Carbonara", price: 14, Spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, Spicy: true, qty: 1 },
    { dish: "Casear Salad", price: 9, Spicy: false, qty: 3 },
    { dish: "Inferno wings", price: 11, Spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, Spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
    console.log(` #${index + 1} : ${order.qty}x ${order.dish}`);
    
});
// console.log(myData); // Undefined
// There is no way to stop or break a forEach() loop other than by throwing an exception so using await or break in forEach() is wrong tool to do
 
const receiptLines =  orders.map(o => `${o.dish}: $${o.price * o.qty}`)
// console.log(receiptLines); // returns a array

const spicyOrders = orders.filter(o => o.Spicy); // .filter works more as a conditions than method
// console.log(spicyOrders); // returns arrays of object

// Commonly use case of reduce in example or in-productions to do total calculations and reduce is used in shopping cart or add-to-cart
// as compared to others methods reduce let you decide what you want in return

// value of sum will be 0 or any_intial_value[on the line 27]
const totalRevenue = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price) // sum holds the value of sum from the next iterations it doesnt get reset
}, 0);

console.log(totalRevenue); // 107

const grouped = orders.reduce((acc, order) => {
    const category = order.Spicy ? "spicy": "mild";

    acc[category].push(order.dish)
    return acc
}, {spicy: [], mild:[]});

// console.log(grouped);

const ticketNumbers = [100, 25, 3, 42, 8];
// const sortedW = [...ticketNumbers].sort();
// o/p :- [ 100, 25, 3, 42, 8 ]
// it sorted as a string not number so to sort as a number then use sort this way...
// const sortedW = [...ticketNumbers].sort((a, b) => a - b);
// To reverse the sort
const sortedW = [...ticketNumbers].sort((a, b) => b - a);
// console.log(sortedW);


const kitchenOrders = [
    { dish: "Pasta Carbonara", price: 14, Spicy: false, qty: 2 },
    { dish: "Dragon Ramen", price: 12, Spicy: true, qty: 1 },
    { dish: "Casear Salad", price: 9, Spicy: false, qty: 3 },
    { dish: "Inferno wings", price: 11, Spicy: true, qty: 2 },
    { dish: "Truffle Risotto", price: 18, Spicy: false, qty: 1 },
];

const mildReport = kitchenOrders
    .filter(order => !order.Spicy)
    .map(order => ({
        dish: order.dish,
        total: order.price * order.qty
    }))
    .toSorted()

console.log(mildReport);
