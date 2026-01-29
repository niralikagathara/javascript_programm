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
const person1={
    name : "mira",
    age : 20,
    address :{
        city : "keshod",
        Zipcode :'362220',
        street :"123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))

