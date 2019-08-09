// a get request is automatically sent you when you click on a url
// a post request has to be set up by creating a form
const http = require('http');
// so this is a call back function. that is why you're able use them to call functions on
// we have a request object and a response object
const server = http.createServer((req, res) => {
    // when we visit localhost / nothing we will return html code. 
const url = req.url;
if (url === '/') {
    res.write('</html>')
    res.write('<head><title>My first page</title></head>');
    // setting the return function will stop this function block
   return res.end()  
}
   

});

server.listen(3000);
