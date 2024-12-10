console.log("Pizza App");

type Pizza = {
    id :number;
  name: string;
  price: number;
};
type Ordertype = {
  id: number;
  pizza: Pizza;
  status: "Completed" | "ordered";
};

const menu1: Pizza[] = [
  {id:1,  name: "Pepperoni", price: 10 },
  { id:2, name: "Hawaiian", price: 9 },
  {id:3,  name: "Margherita", price: 8 },
];
// ?method 2
// const menu2:Array<Pizza> =[
//     {name:"Pepperoni", price: 10},
//     {name:"Hawaiian", price: 9},
//     {name:"Margherita", price: 8},

// ]

let cashInRegister: number = 100;
let orderQueue: Ordertype[] = [];
let nextOrderId: number = 101;

// Exercise 1: Create addNewPizza function
const addNewPizza = (pizzaObject: Pizza) => {
  menu1.push(pizzaObject);
};

addNewPizza({id:5, name: "veg", price: 25 });
console.log(menu1);

// Exercise 2: Create placeOrder function that add money in register and add new queue

const placeOrder = (item: String) => {
  // method-1
  for (let x in menu1) {
    console.log(menu1[x]);
    if (menu1[x].name === item) {
      cashInRegister = cashInRegister + menu1[x].price;
      let order: Ordertype = {
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
const completeOrder = (id: number) => {
  orderQueue.filter((item) => {
    if (item.id === id) {
      console.log(item);
      item.status = "Completed";
      return item;
    }
  });
};

completeOrder(101);
console.log(orderQueue, cashInRegister);



function getPizzaDetail(identifier: string | number){
    
    if(typeof identifier === "string"){
       let result =  menu1.filter(x=> x.name.toLowerCase() === identifier.toLowerCase() )[0]
       return result;
    }
    else if(typeof identifier === "number"){
        let result =  menu1.filter(x=> x.id === identifier )[0]
        return result;
    }
    else {
        throw new TypeError("parameter Identifier is not a number or string")
    }

}

