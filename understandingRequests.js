const http = require('http');
const server = http.createServer((req, res) => {
    // if you look at your console log in the terminal and alter stuff in the browser, you can 
    // see these object change in the terminal
    console.log(req.url, req.method, req.headers);

});
server.listen(3000);
