//Asynchronous in javascript: JS is async in nature and execute the lines in asynchronously without waiting for the next line

console.log("Mahesh is in home")

setTimeout(()=>{
    console.log("Mahesh is going out")
}, 2000);

console.log("Mahesh is outside")

