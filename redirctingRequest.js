const http = require('http');
//allows us to work with file system
const fs = require('fs');
const server = http.createServer((req, res) => {
const url = req.url;
//req has a method property
const method = req.method;
if (url === '/') {
    res.write('</html>')
    res.write('<head><title>My first page</title></head>');
     return res.end()  
}
   
if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'dummy');
    res.setHeader('Location', '/');
    return res.end();
};

