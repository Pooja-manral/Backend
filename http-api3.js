const http = require('http');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
    console.log('New request received');

    res.writeHead(200, { 'Content-Type': 'text/html' });

    try {
        const response = await axios.get("https://api.github.com/search/users?q=location:ghaziabad");
        const productsdata = response.data.items;

        let frontdata = `
            <html>
                <head>
                    <title>GitHub Users from Ghaziabad</title>
                </head>
                <body>
                    <h1>GitHub Users from Ghaziabad</h1>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        `;

        productsdata.forEach(product => {
            frontdata += `
                <div>
                    <img src="${product.avatar_url}" width="100" height="100" style="border-radius: 50%;">
                    <p>${product.login}</p>
                </div>
            `;
        });

        frontdata += `
                    </div>
                </body>
            </html>
        `;

        res.end(frontdata);
    } catch (error) {
        res.end('<h1>Error fetching data</h1>');
        console.error('Error fetching GitHub users:', error);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
