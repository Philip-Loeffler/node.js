var name = "phil";
var age = 29;
var hasHobbies = true; 

// you can change this variable like so 
let x = 30;
x = 31
//if we use const, the variable will never change
const philip = "philip"
function summarizeUser(userName, userAge, userHobby) {
    return ( userName + userAge + userHobby
    );
}

// passing in three arguments into the summarize user function because the function is expecting it 
console.log(summarizeUser(name, age, hasHobbies));

// additional ways to write functions. 
// holding a function in a const
const summarizeUser = function (userName, userAge, userHobby) {
return ( userName + userAge + userHobby
    );
}
//name of function
//argument
//then everything past the arrow key is the function body
const summarizeUser =  (userName, userAge, userHobby) => {
    return ( userName + userAge + userHobby
        );
    }
// even shorter way of declaring that function 
const add = (a,b) => a + bconsole.log(add(1,2))
console.log(a,b)
// arrow function with no argument 
const addRandom = () => 1 + 2; 
console.log(addRandom());