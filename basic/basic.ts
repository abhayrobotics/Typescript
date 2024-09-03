// corrent en in ts
let friend ="Raj";


// Primitive data type , explicity declaring he variable
let myName:string = "ABhay";

let myAge: number =30;

let isAlive: boolean = true;

// Custom type

// Ex : Food(start with caps) is new data type which is string 
type  Food =string;

// Challenge, create a custom defination of type
type Person = {
    name: string
    age: number
    isStudent: boolean
    address:{
        street:string
        city:string
        pin:number
    }
}

let person1:Person={
    name:"Raj",
    age:30,
    isStudent:true
}

// you can check the error
// let person2:Person ={
//     name:"ABhay",
//     age:30,
//     isstudent:false
// }   