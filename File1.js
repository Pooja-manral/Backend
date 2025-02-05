const fs= require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
//  console.log(data.toString());
//  fs.writeFileSync("./data.txt","abes promise");
//  fs.unlinkSync("./data.txt");
 if(data.match("H")){
     console.log("H is present")
     const changedata =  data.replace("H","ABES");
     fs.writeFileSync("./data.txt",changedata)
 }
 