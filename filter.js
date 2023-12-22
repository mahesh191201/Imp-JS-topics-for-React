// The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

let a = [10, 2, 34, 4, 56]

let a2 = a.filter((value)=>{
    return value>=10;
})

console.log(a, a2)