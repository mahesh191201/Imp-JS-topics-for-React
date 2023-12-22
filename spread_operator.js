// 1. spread operator 


// arr=[1,2,4]

// function avg(a,b,c){
//     return a+b+c/3
// }
// Spread operator is used to open the array using ... with out using the indexes of the array
// let a = avg(...arr)
// console.log(a)


//-----------------------------------
// Even though array has 5 numbers it wont through any error because it will take first 3 numbers

// arr=[1,2,4,6,32]

// function avg(a,b,c){
//     return a+b+c/3

// }

// let a = avg(...arr)
// console.log(a)


//----------------------------

// new array concatenation using spread operator


// c=[9, 10, 11, 17]

// d=[1,2, 8, ...c]
// console.log(d)


//----------------------

// Spread operator with objects

// let obj1 ={
//     name: "mahesh",
//     class: "cse-c",
//     language: "C++"
// }

// console.log(obj1)

// obj2={
//     name: obj1.name,
//     class: obj1.class,
//     language: "Javascript"
// }

// console.log(obj2) 

// We can use spread operator to copy all the object parameters to another object and can also change parameters

// obj2={...obj1, language: 'javascript'}
// console.log(obj2)





