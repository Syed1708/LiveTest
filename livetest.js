// Write a function that takes an object as an argument and
// destructures it to extrat the 'name' and 'age' properties.
// Return a string in the format " My Name is {name} and I am {age} years old."

const person = {
    name: 'Jone Doe',
    age : 30
}
 const {name, age} = person

function myFunction(person){
    return `My name is ${person.name} and I am ${person.age} years old.`
}

console.log(myFunction(person))