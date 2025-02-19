const http = require ('http');
const axios= require ('axios');
const port=3000;

const server = http.createServer(async(req, res) => {
    console.log("new request recieved");
    res.writeHead(200,{'content-type':'text/html'});
    // const response=await fetch("https://dummyjson.com/product")
    // const data=await response.json();
    const response=await axios.get("https://dummyjson.com/product")
    const productsdata=response.data.products;
    let frontdata=`<html><head></head><body>`
    productsdata.forEach((product)=>{
        frontdata += `<div><img src="${product.thumbnail}"></div>`
});
    frontdata +=`</body></html>`
    // res.end(JSON.stringify(adata));
    res.end(frontdata)
});
server.listen(port,()=>{
    console.log(`server is running port ${port}`);
})