// Two types of datatypes
//1.primtive
    //number
    //string
    //Boolean
    //Bigint
    //symbol
    //null (null is one type of value )
    //undefined
//2. non primtive
    //array
    //object
    //function

                //----1. primtive----
    //number
let num = 10;
let num1 =20;
console.log("NUM :",num,num1);
    //string
let name = "mira";
let name1 ="kagathara";
console.log("STRING :",name,name1);
    //Boolean
let isTrue = true;
let isFalse =false;
console.log("BOOLEAN : ",isTrue);
    //undefined
let a;
console.log("UNDEFINEED :",a);
    //Bigint
let Bigint =123425354657678798;
console.log(Bigint);

                        //----2.  non  primtive----
    //object
let student = {
    name :"mira",
    RollNo : 20,
    address :{
        city : "Keshod",
    }
}
console.log(student)

    //array
let arr =[1,2,3,4,5];
console.log(arr)

    //arrayofobject
let stud ={
}
let arrayofstud =[{},{}]

    //function
function greet(){
    console.log(" This is function")
}
greet();

function showvalues(value){
    console.log(" this value :",value)
    if(value == 20);
    
}

showvalues();
showvalues(20);
showvalues([1,2,3,4,5]);

//function arthicmatic(num1,num2){
//     add =num1+num2;
//     sub =num1-num2;
//     mul =num1*num2;
//     div =num1/num2;
//     console.log("Addtion :",add,"Substriction : ", sub,"Multiplication : ",mul,"Division : ",div);

// }
// arthicmatic(100,50);

const add = (num1,num2)=>{
    return num1+num2 
}
const sub = (num1,num2)=>{
    return num1-num2 
}
const mul = (num1,num2)=>{
    return num1*num2 
}
const div = (num1,num2)=>{
    return num1/num2 
}
console.log(" This is arrow fun. : ",add(50,30))
console.log(" This is arrow fun. : ",sub(50,30))
console.log(" This is arrow fun. : ",mul(50,30))
console.log(" This is arrow fun. : ",div(50,5))

let value =10;
console.log("Defult Values : ",value);

value+=5//value +5
console.log(value)

value-=5//value -5
console.log(value)

value*=5//value *5
console.log(value)

value/=5//value /5
console.log(value)

let age = 20;
let hasId =true;
let nm ="react";
let obj={
    nm1 : 'demo',
    Roll : 2
}
console.log("Logical AND (&&) : ",value == nm)
console.log("logical OR (||) :",age<18 || hasId)
console.log("logical NOT (!) :", ! hasId)
console.log(typeof age)
console.log(typeof hasId)
console.log(typeof nm)
console.log(typeof obj)

// conditional operater

let value1 =10;
let number = "10";

console.log(" value == number :",value == number);
console.log(" value === number :",value === number);
console.log(" value != number :",value != number);

