
const Person = {
    name: "Phil",
    age: 29,
    greet() {
        console.log("hi, i am" + this.name)
    }
};
person.greet();

const hobbies = ['sports', 'cooking',1, true]
for (let hobby of hobbies) {
    console.log(hobby)
}

//param hobby is each individual hobby inside hobbies 
//then string plus whateer the hobbies are 
console.log(hobbies.map(hobby => 'Hobby:' + hobby));

// how to copy an array
// with no argument in the slice function it will copy the entire array
// with an arugment it would only do whichever one you specified.
const copiedArray = hobbies.slice();
console.log(copiedArray)

// if we did this though it would put an array inside of the other array
// this is a nested array

const arrayinsideanarray = [hobbies];
console.log(arrayinsideanarray);

// if we use the spread operator it will pull everything out of the 
// array and put it into the variable. so it will have a similar result as 
// the splice
const arraywithspread = [...hobbies];
console.log(arrayinsideanarray);

// can also be used on our person object
const copiedPerson = {...person};
console.log(copiedPerson);