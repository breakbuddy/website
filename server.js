const express = require('express');
const http = require('http');
//const hostname = '0.0.0.0';
const port = 3000;
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/hursit', (req, res) => {
    res.send("Hello Hursit");
})

app.listen(port, () => {
    console.log('Server started!');
})

//
// server.get('/hursit', (req, res) => {
//     res.statusCode = 200;
//     res.end("Hello Hursit!");
// });
//
// server.listen(port, hostname, () => {
//     console.log(
//         "Server running at")
// });

//test
