// destructuring
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let obj1={
    name1: "Mahesh",
    class1: "CSE",
    language: "Python",
}

let{name1, class1, language}=obj1 // Destructuring 

console.log(name1, class1, language)
