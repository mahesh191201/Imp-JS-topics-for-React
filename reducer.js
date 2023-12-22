// The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

let a =[1,2,3,4]
//1+2=3
//3+3=6
//6+4=10

let a2=a.reduce((val1, val2)=>{
    return val1+val2
})

console.log(a2)