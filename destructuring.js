const Person = {
    name: "Phil",
    age: 29,
    greet() {
        console.log("hi, i am" + this.name)
    }
};

const printName = (personData) => {
    console.log(personData.name)
}
// calling print name function and passing person in as data
printName(person);

//here is object destructuring 
// here we are going to specify the property of the incoming object we are interested in
const printName = ({ name }) => {
    console.log(name);
}
printName(person);


// this is desturcting not in a function
const {name, age } = person;
console.log(name, age);

// destruct an array
const hobbies = ["swimming", "biking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby, hobby2);