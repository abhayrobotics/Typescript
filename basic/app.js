console.log("Pizza App")

const menu =[
    {name:"Pepperoni", price: 10},
    {name:"Hawaiian", price: 9},
    {name:"Margherita", price: 8},

]

let cashInRegister = 100;
const orderQueue =[];
let nextOrderId =101;

// Exercise 1: Create addNewPizza function
const addNewPizza=(name,price) =>{

    menu.push({name,price});
}

addNewPizza("veg","25")
console.log(menu)

// Exercise 2: Create placeOrder function that add money in register and add new queue


const placeOrder =(item)=>{

    for( x in menu){
        console.log(menu[x])
        if(menu[x].name===item){
            cashInRegister =cashInRegister+ menu[x].price;
            order={
                id:nextOrderId++,
                pizza: menu[x],
                status:"ordered"
            }
            orderQueue.push(order)
            return menu[x];
        }
    }
    
}
placeOrder("Hawaiian");

console.log(orderQueue,cashInRegister)

// Exercise 3: create complete order
const completeOrder =(id)=>{

    orderQueue.filter((item)=>{
        if(item.id===id){
            console.log(item)
            item.status="Completed";
            return item
        };
    })
    
}

completeOrder(101)
console.log(orderQueue,cashInRegister)