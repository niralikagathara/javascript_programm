//string methods
//length(validation ma jrur pade string ne count kerva m ate ex.passowerd)
//trim()
//toUppercase()
//toLowercase()
//includes()
//indexof()
//slice()
//substring()
//replace()
//concat()
//split()

//length
let str = " Hello  javascript  world "
console.log(str)
console.log(" length() : ",str.length)

//remove space kerva mate trim(ther two type of trim ltrim(left) and rtrim(right) )

let Trimtext = str.trim()
console.log("trim() : ",Trimtext)

//toUppercase

console.log("toUppercase () : ",str.toUpperCase())

//toLowercase

console.log("toLowercase () : ",str.toLowerCase())

//includes  condtiton wise work kro tyre jarur pade
console.log("includes :",str.includes("javascript"))
console.log("includes :",str.includes("test"))

//indexof
console.log("indexof() :",str.indexOf("javascript"))

//slice   phale thi string  ne jovi hoiy tyre mynese ji jrur pade 
console.log("slice() :",str.slice(2,7))

//substring   same as a slice but nagative value na api shako
console.log("substirng() :",str.substring(2,7))


//replace
console.log("replace() :",str.replace("javascript ","react"))

//concat joint keride banne string ne
let extraRext = "-HELLO JS ";
console.log("concat : ",str.concat(extraRext))

//split array of string 
console.log("split : ",str.split(" "));
