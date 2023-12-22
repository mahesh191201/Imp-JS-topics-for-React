// To manage asynchronous actions in JavaScript, promises are used. It is an assurance that something will be done. The promise is used to keep track of whether the asynchronous event has been executed or not and determines what happens after the event has occurred.

//then is used in promise 

// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

let fs = require("fs/promises")

let a = fs.readFile("file.txt", "utf-8");
a.then((data)=>{
    console.log(data);
})

console.log("This is the end of file")
