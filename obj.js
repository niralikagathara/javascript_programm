//collection of a data of any type of data 
//objact no properties hoy
// const person ={
//     name : 'testing',
//     age : 24,
//     hobbies : ['cooking','singing','dancing'],
//     greet :function (){
//         console.log("hello")
//     }
// }
// //access values from objact
// console.log(person.name)
// console.log(person['name'])
// //adding or modifying the data of obj
// person.job ="devloper"
// person.salery =50000
// console.log(person)
// delete person.salery
// console.log(person)
//nested object
// const person1={
//     name : "mira",
//     age : 20,
//     address :{
//         city : "keshod",
//         Zipcode :'362220',
//         street :"123 main st."
//     }
// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))
//object disturing  
const user ={
    name : "user",
    age : 24,
    role : "admin",
    designation : "devloper",
    address : {
        city : "keshod",
       Zipcode :'362220',
       street :"123 main st."
    }
}
// const{name,age,role}=user//const ni value change thy shkti nthi
// console.log(name,age,role)
// const{name : profilename ,age : profileage}= user//rename objact propertites
// console.log(profilename,profileage)
// const {name,age,role,state ="gujrat"}=user
// console.log(name,age,role,state)
// const array =[1,2,3]
// const moreelements = [...array,4,5,6]
// console.log(moreelements)
// const originalarray =[1,2,3]
// const copiedarray =[...originalarray]
// console.log(copiedarray)
// const arr1 =[1,2,3]
// const arr2 =[4,5,6]
// const mergedarray =[...arr1,...arr2]
// console.log(mergedarray)
//sprid opt.in obj
const user1 ={
    name :"user1",
    city :"keshod"

}
console.log(user1)
const newobj ={
    ...user1,
    role : "react devloper"
}
console.log(newobj)
//copy obj
const user2 ={
    name : "mira",
    age : 24
}
const user3 ={...user2}
console.log(user3)
//merge obj
const obj1 ={
    name : "abc",
    age :45
}
const obj2 ={
    city : "jund",
    state : "rajsthan",
    age : 30
}
const obj3 ={...obj1,...obj2}
console.log(obj3)