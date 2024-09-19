console.log("Pizza App")

type Pizza ={
    name:string
    price:number
    
}
type Ordertype ={
    id:number
    pizza:Pizza
    status:string
}

const menu1:Pizza[] =[
    {name:"Pepperoni", price: 10},
    {name:"Hawaiian", price: 9},
    {name:"Margherita", price: 8},

]
// ?method 2
// const menu2:Array<Pizza> =[
//     {name:"Pepperoni", price: 10},
//     {name:"Hawaiian", price: 9},
//     {name:"Margherita", price: 8},

// ]

let cashInRegister:number = 100;
const orderQueue:Ordertype[] =[];
let nextOrderId:number =101;

// Exercise 1: Create addNewPizza function
const addNewPizza=(pizzaObject:Pizza) =>{

    menu1.push(pizzaObject);
}

addNewPizza({name:"veg",price:25})
console.log(menu1)

// Exercise 2: Create placeOrder function that add money in register and add new queue


const placeOrder =(item)=>{

    for( let x in menu1){
        console.log(menu1[x])
        if(menu1[x].name===item){
            cashInRegister =cashInRegister+ menu1[x].price;
            let order:Ordertype={
                id:nextOrderId++,
                pizza: menu1[x],
                status:"ordered"
            }
            orderQueue.push(order)
            return menu1[x];
        }
    }
    
}
placeOrder("Hawaiian");

console.log(orderQueue,cashInRegister)

// Exercise 3: create complete order
const completeOrder =(id:number)=>{

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