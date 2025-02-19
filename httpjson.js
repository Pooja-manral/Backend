const http = require ('http');
const fs =require ('fs/promises');
// const user=[
//     {
//     id:1,
//     name:'Rahul',
//     email:'rahul@gmail.com',

//     },
//     {
//         id:2,
//     name:'shayam',
//     email:'shayam@gmail.com',
//     },
//     {
//         id:3,
//         name:'Ram',
//         email:'ram@gmail.com',

//     }]
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    const filedata=awaitfs.readfile("./aa.json",'utf8')
    const parsedata=JSON.parse(filedata);
    res.end(JSON.stringify(parsedata));
    // const newdata=user.map((user)=>{
    //     return user.name
    // });
    // let newdata="";
    // user.foreach((user)=>{
    //     newdata +=`${user.name}`;
    // });
    res.end(filedata);

});
PORT=3000;
server.listen(PORT,()=>{
 console.log('server is running port')
})
