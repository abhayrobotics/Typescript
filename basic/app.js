console.log("Pizza App");
var menu1 = [
    { id: 1, name: "Pepperoni", price: 10 },
    { id: 2, name: "Hawaiian", price: 9 },
    { id: 3, name: "Margherita", price: 8 },
];
// ?method 2
// const menu2:Array<Pizza> =[
//     {name:"Pepperoni", price: 10},
//     {name:"Hawaiian", price: 9},
//     {name:"Margherita", price: 8},
// ]
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 101;
// Exercise 1: Create addNewPizza function
var addNewPizza = function (pizzaObject) {
    menu1.push(pizzaObject);
};
addNewPizza({ id: 5, name: "veg", price: 25 });
console.log(menu1);
// Exercise 2: Create placeOrder function that add money in register and add new queue
var placeOrder = function (item) {
    // method-1
    for (var x in menu1) {
        console.log(menu1[x]);
        if (menu1[x].name === item) {
            cashInRegister = cashInRegister + menu1[x].price;
            var order = {
                id: nextOrderId++,
                pizza: menu1[x],
                status: "ordered",
            };
            orderQueue.push(order);
            return menu1[x];
        }
    }
    // *method2 :
    // const selectedPizza = menu1.filter((x) => x.name == item)[0];
    //* method 3
    // const selectedPizza = menu1.find((x) => x.name == item);
    // if (!selectedPizza) {
    //   console.error(`${selectedPizza} is not found `)
    //     return;
    // }
    // cashInRegister = cashInRegister + selectedPizza.price;
    // let order: Ordertype = {
    //     id: nextOrderId++,
    //     pizza: selectedPizza,
    //     status: "ordered",
    // };
    // orderQueue.push(order);
};
placeOrder("Hawaiian");
console.log(orderQueue, cashInRegister);
// Exercise 3: create complete order
var completeOrder = function (id) {
    orderQueue.filter(function (item) {
        if (item.id === id) {
            console.log(item);
            item.status = "Completed";
            return item;
        }
    });
};
completeOrder(101);
console.log(orderQueue, cashInRegister);
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        var result = menu1.filter(function (x) { return x.name.toLowerCase() === identifier.toLowerCase(); })[0];
        return result;
    }
    else if (typeof identifier === "number") {
        var result = menu1.filter(function (x) { return x.id === identifier; })[0];
        return result;
    }
    else {
        throw new TypeError("parameter Identifier is not a number or string");
    }
}
