// Async Await function is used to wait for the promise. It could be used within the async block only.

// It makes the code wait until the promise returns a result.

let fs = require("fs/promises")

const readthree=async(file1, file2, file3)=>{
    let a1=fs.readFile(file1, "utf-8");
    let a2=fs.readFile(file2, "utf-8");
    let a3=fs.readFile(file3, "utf-8");

    let c2=await a2;
    console.log(c2) 
    let c1=await a1;
    console.log(c1)
    let c3=await a3;
    console.log(c3)
}


readthree("file1.txt", "file2.txt", "file3.txt");