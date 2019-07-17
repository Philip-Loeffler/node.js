//objects allow us to group data together

const Person = {
    name: "Phil",
    age: 29,
    greet() {
        console.log("hi, i am" + this.name)
    }
};
//calling your function from your object
person.greet();

//arrays with four loop
const hobbies = ['sports', 'cooking',1, true]
for (let hobby of hobbies) {
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby:' + hobby));

//objects and arrays are reference types