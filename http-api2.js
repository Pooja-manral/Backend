const http = require ('http');
const axios= require ('axios');
const port=3000;

const server = http.createServer(async(req, res) => {
    console.log("new request recieved");
    res.writeHead(200,{'content-type':'text/html'});
    const response=await axios.get("https://dummyjson.com/users")
    const usersdata=response.data.users;
    let frontdata=`<html><head></head><body>`
    usersdata.forEach((user)=>{
        frontdata += `<div><img src="${user.thumbnail}"></div>`
});
    frontdata +=`</body></html>`
    res.end(frontdata)
});
server.listen(port,()=>{
    console.log(`server is running port ${port}`);
})