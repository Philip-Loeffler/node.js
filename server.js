//importing an http module, so we can use its features. 
// use const because we will never overide


// this is the way you import in node.js
// if it was in one of your files it would be ./ that would be a local file
// this is looking for a global modal
const http = require('http');

function rqListner(req, res) {

}
// by putting the . we can call things on this http variable
// you can see that the create serve function takes in a "request listener" so we must make that function
// all this is saying is look for the rqlistener runction for requests
// this is passing a reference of the function into createserver, this tell createserver to look for this function
// and execute any request thats come in from rqListener
http.createServer(rqListner);


// you can also do this through an anonomous function
http.createServer(funtion(req, res) {

});

// and same thing with arrow function

http.createServer((req, res) => {
    console.log(req)
});
