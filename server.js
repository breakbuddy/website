const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) =>
{
    res.statusCode = 200;
    res.end('Hello World,ZEET');
});

server.get('/hursit', (req, res) => {
    res.statusCode = 200;
    res.end("Hello Hursit!");
});

server.listen(port, hostname, () => {
    console.log(
        "Server running at")
});