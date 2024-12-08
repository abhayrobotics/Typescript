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
type Address ={
    street:string
    city:string
    pin:number
}
type Person = {
    name: string
    age: number
    isStudent: boolean
    address?:Address
}

let person1:Person={
    name:"Raj",
    age:30,
    isStudent:true,
    address:{
        street:"MG ROAD",
        city:"KOLKATA",
        pin:828210
    }
}

// you can check the error
let person2:Person ={
    name:"ABhay",
    age:30,
    isStudent:false
}   

// Array
// data type is array of number
let marks:number[] =[20,23,45,53]

 let array2:Person[] = [person1,person2]

//  literal Data type 
// value specific data type is called literal data type,and hence cannot be changed even for let
const name1: string = "Abhay" ;
let name2:"raj" = "raj";
// name1 = "sd"

type Friends = "Abhay" | "Deepak" | "Raj"

let hero :Friends = "Raj"