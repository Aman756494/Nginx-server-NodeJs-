const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req , res) => {
    const filePath = path.join(__dirname , req.url === '/' ? "index.html" : "req.url")

    const extName = String(path.extname(filePath)).toLowerCase();
});

server.listen(port, () => {
    console.log(`Server is listening to the port ${port}`);
    
});