//set time out is a function in js
// this is async code becasue it doesnt finish immediately 
// beause it doesnt immediately run the "timer is done"
// it ways 2 seconds
// so async because it does not execute immediately 
const fetchData = callback => {
    setTimeout(() => {
        callback("done");
    },1500);
    }, 

    // here are promises 
    //
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done");
           },1500);
           }), 
           return promise;
    };
 
    
// the then block goes off first for the promise
setTimeout(() => {
console.log("timer is done!");
fetchData()
.then(text => {
console.log(text)
    },  2000);

//these are synchronous. the only delay is goign to be your hardware and how slow it is lol scrub
console.log("hello");
console.log("hi");

