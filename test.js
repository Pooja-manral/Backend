const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    try {
        if (req.url === '/home') {
            const data = await fs.readFile("./home1.html", 'utf8');
            res.end(data);
        } else {
            const data = await fs.readFile("./error.html", 'utf8');
            res.end(data);
        }
    } catch (err) {
        res.statusCode = 500;
        res.end("<h1>Internal Server Error</h1>");
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});