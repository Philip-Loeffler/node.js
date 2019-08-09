
const http = require('http');
// so this is a call back function. that is why you're able use them to call functions on
const server = http.createServer((req, res) => {
    console.log(req)
    // this will attach a header to our response
    res.setHeader('content-type', 'text/html')
    //allows us to write some data to response
    // this would be sending html
    res.write('</html>')
    res.write('<head><title>My first page</title></head>');
    // this is how to end the response
    res.end()

});
server.listen(3000);
