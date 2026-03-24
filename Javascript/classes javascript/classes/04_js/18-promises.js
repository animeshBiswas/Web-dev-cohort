function preparedOrderCB(dish, cb){
    setTimeout(() => cb(null, {dish, status: "prepared"}), 100)
}
function pickupOrderCB(order, cb){
    setTimeout(() => cb(null, {...order, status: "picked up"}), 100)
}
function deliverOrderCB(order, cb){
    setTimeout(() => cb(null, {...order, status: "delivered"}), 100)
}

preparedOrderCB("biryani", (err, order) => {
    if (err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        deliverOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`);
        });
    });
});

// pending, fulfilled, rejected
// 
function preparedOrder(dish) {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            if (!dish) {
                reject(new Error("No dish in there"))
                return
            }
            console.log(`${dish} is ready`);
            resolve({dish, status: "prepared"})
        }, 100)
    })
}
function pickupOrder(order) {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            if (!order) {
                reject(new Error("No order in there"))
                return
            }
            console.log(`${dish} is ready`);
            resolve({...order, status: "pickup"})
        }, 100);
    });
}
function deliverOrder(order) {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            if (!order) {
                reject(new Error("No deliver in there"))
                return
            }
            console.log(`${dish} is ready`);
            resolve({...order, status: "delivered"})
        }, 100);
    });
}

preparedOrder("Panner Tikka")
    .then(order => pickupOrder(order))
    .then(order => deliverOrder(order))
    .catch()