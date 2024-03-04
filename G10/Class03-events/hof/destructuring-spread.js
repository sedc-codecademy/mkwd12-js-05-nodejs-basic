// Object Destructuring
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
};
  
// Destructuring assignment
const { firstName, lastName} = person;
  
// Using the extracted values
console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(person.age); // Output: 30

// const { firstName: firstN, lastName: lastN} = person;  // we can rename our constants. They dont have to have the same name as the properties in the object


// Array Destructuring
const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, , fourth] = numbers;
// Using the extracted values
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

// Nested destructuring
const colors = ['red', [128, 128, 70], '#F11111'];
const [name, [red, green, blue], hex] = colors;
console.log(red);   // Output: 128
console.log(green); // Output: 128
console.log(blue);  // Output: 70


// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// array deep copy
const newArr1 = [...arr1];

// Combining arrays using spread operator
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// Example object
const personOne = {
    firstName: 'John',
    lastName: 'Doe',
};
  
// Creating a new object with additional properties using spread operator (extending the object)

const updatedPerson = { ...personOne, age: 30, city: 'New York' };
  
console.log(updatedPerson);
// Output: { firstName: 'John', lastName: 'Doe', age: 30, city: 'New York' }


// Rest operator
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// Using the rest operator to collect the remaining elements into 'otherFruits' array
const [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log(firstFruit);        // Output: apple
console.log(secondFruit);       // Output: banana
console.log(otherFruits);  // Output: ['orange', 'grape', 'kiwi']