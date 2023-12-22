// The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

let a = [1, 2, 3, 4, 5]

let a2 = a.map((value)=>{
    return value*2;
})

console.log(a, a2)