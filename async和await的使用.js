import thenFs from "then-fs"
// import fs from "fs"

console.log('A');
async function getAllFile() {
  console.log("B");
   const r1 = await thenFs.readFile("./files/1.txt","utf8")
   const r2 = await thenFs.readFile("./files/2.txt","utf8")
  //  const r1 = fs.readFile("./files/1.txt",'utf8')
   console.log(r1);
   console.log(r2);
   console.log("C");
}

getAllFile()
console.log("D");