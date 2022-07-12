// HTTP Module
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {
        res.end('Welcome to my webpage')
    } else if (req.url === '/about') {
        res.end('Here is our little history')
    } else {
        res.end(`
        <h1>Ooops</h1>
        <p> We can't seem to find the page you are looking for</p>
        <p><a href="/">Back Home!</p>
    `)
    }

});

server.listen(5000)

