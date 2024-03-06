// Test data
const numbers = [2, 5, 8, 10, 15, 3, 7, 12, 17, 34, 53];

const mixedNumbers = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];

const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    occupation: "Software Engineer",
    gender: "female",
  },
  { id: 2, name: "Bob", age: 35, occupation: "Data Scientist", gender: "male" },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    occupation: "Graphic Designer",
    gender: "male",
  },
  {
    id: 4,
    name: "David",
    age: 42,
    occupation: "Marketing Manager",
    gender: "male",
  },
  {
    id: 5,
    name: "Eva",
    age: 31,
    occupation: "Product Manager",
    gender: "female",
  },
];

const students = ["Sasho", "Boris", "Ivan", "Elena", "Marija", "Vladimir"];

// *** forEach ***
// - executes a provided function once for each array element
// - does not return value
// - modifies the original array
// Example 1: using forEach to log each number to the console
numbers.forEach((num) => console.log(num));

// Example 2: using forEach to display user information
users.forEach((user) => {
  console.log(`${user.name} - ${user.age} years old - ${user.occupation}`);
});

// *** map ***
// - executes a provided function once for each array element
// - returns a value for each element in the array and stores it in a new array
// - does not modify the original array
// Example 1: using map to square each number
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);

// Example 2: using map to create an array of user names out of array of user objects
const userNames = users.map((user) => user.name);
console.log(userNames);

// Use map to transform the occupation for each user
const seniorUsers = users.map((user) => {
  return {
    id: user.id,
    name: user.name,
    age: user.age,
    occupation: "Senior " + user.occupation,
  };
});

// *** filter ***
// - executes a provided function once for each array element
// - if the elemets passes the test it is kept in the new result array
// - does not modify the original array
// Example 1: using filter to get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Example 2: using filter to get users who are older than 30
const olderUsers = users.filter((user) => user.age > 30);
console.log(olderUsers);

const maleUsers = users.filter((user) => user.gender === "male");

// *** reduce ***
// - executes a provided reducer function once for each array element and the result of the calculation on the previous element is passed to the next element
// - returns a single value after running the reducer across all elements
// Example 1: using reduce to calculate the sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Example 2: using reduce to calculate the average age of users
const averageAge =
  users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averageAge);

// *** sort ***
// - sorts the elements of an array in place and returns the reference to the same array, now sorted
// - THIS MEANS THAT THE ORIGINAL ARRAY IS BEING CHANGED
const numbersToSort = [
  5, -3, 12, -8, 9, -4, 7, -1, 20, -15, 6, -10, 18, -2, 11, -13,
];
numbersToSort.sort((a, b) => a - b); // ascending
console.log("Ascending:", numbersToSort);

numbersToSort.sort((a, b) => b - a); // ascending
console.log("Descending:", numbersToSort);

const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name)); // Returns users in sorting order
console.log(sortedUsers);

// *** every ***
// - tests whether all elements in the array pass the test implemented by the provided function
// - returns a Boolean value
// - does not modify the original array
areAllUsersAdult = users.every((user) => user.age >= 18);

// *** some ***
// - tests whether at least one element in the array passes the test implemented by the provided function
// - returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false
// - does not modify the original array
const areThereProgrammers = users.some(
  (user) => user.occupation.toLowerCase() === "software engineer"
);
console.log(areThereProgrammers);

// *** find ***
// - returns the first element in the provided array that satisfies the provided testing function
// - if no elements satisfy the testing function, undefined is returned
// - does not modify the original array
const foundUser = users.find((user) => user.age === 42);
console.log(foundUser);

// *** findIndex ***
// accepts callback function as an arguement
// - returns the index of the first element in an array that satisfies the provided testing function
// - if no elements satisfy the testing function, -1 is returned
// - does not modify the original array
const indexOfUser = users.findIndex((user) => user.name === "Alice");
console.log(indexOfUser);

// *** indexOf ***
// - returns the first index at which a given element can be found in the array
// - if no elements satisfy the testing function, -1 is returned
// - does not modify the original array
const indexOfMarija = students.indexOf("Marija");
console.log(indexOfMarija);

// *** includes ***
// - determines whether an array includes a certain value among its entries
// - returns true if the array includes that specific value, otherwise it returns false
// - does not modify the original array
const studentsIncludeBob = students.includes("Bob");
console.log(studentsIncludeBob);

// *** slice ***
// - returns a portion of an array into a new array based on the start and end index provided in the slice function
// - if we call slice without providing parameters we get back a new copy of the array
const originalArraySlice = [1, 2, 3, 4, 5];

// Extract a portion of the array without modifying the original
const slicedArray = originalArraySlice.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

// Original array remains unchanged
console.log(originalArraySlice); // Output: [1, 2, 3, 4, 5]

// *** splice ***
// - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const originalArraySplice = [1, 2, 3, 4, 5];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const removedMonths = months.splice(2, 2);
console.log(removedMonths); // ['Mar', 'Apr'];
console.log(months); // ["Jan","Feb","May","Jun"]

// Remove elements at index 2 and 3 and insert 'a' and 'b' at that position
const removedElements = originalArraySplice.splice(2, 2, "a", "b");
console.log(removedElements); // Output: [3, 4]

// Original array is modified
console.log(originalArraySplice); // Output: [1, 2, 'a', 'b', 5]

// *** reverse ***
// directly modifies the original array
const originalArrayReverse = [1, 2, 3, 4, 5];
originalArrayReverse.reverse();
console.log(originalArrayReverse); // Output: [5, 4, 3, 2, 1]

// Create a new array with reversed elements without modifying the original
const reversedCopy = originalArrayReverse.slice().reverse();
console.log(reversedCopy); // Output: [5, 4, 3, 2, 1]
console.log(originalArrayReverse); // Output: [1, 2, 3, 4, 5]

// Using reverse with string
const originalString = "Hello, World!";

// Convert the string to an array, reverse it, and then join back into a string
const reversedString = originalString.split("").reverse().join("");

// *** flat ***
// - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, 2, [3, 4, [5, 6]]];
let flattenedArray = nestedArray.flat(1);
console.log(flattenedArray);

// *** flatMap ***
// - executes a provided function once for each array element and then flattening the result by one level
// - It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately
const arr = [1, 2, 3, 4];
const result = arr.flatMap((num) => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8]

// with flat and map separately
const arr2 = [1, 2, 3, 4];
const doubledArray = arr.map((num) => [num, num * 2]);
console.log(doubledArray); // [[1, 2], [2, 4], [3, 6], [4, 8]]
const result2 = doubledArray.flat();
console.log(result);

// Copying
const newStudentsWithSlice = students.slice(); // deep copy of an array using splice
newStudentsWithSlice.push("Stefan");
console.log(newStudentsWithSlice);

const newStudentsWithSpread = [...students]; // deep copy of an array using spread operator
newStudentsWithSpread.push("Elena");
console.log(newStudentsWithSpread);

const copyArray = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element);
  }
  return newArr;
};

// reference types (arrays and objects)
let a1 = [1, 2, 3];
let a2 = a1; // [1, 2, 3]
let a3 = a2;
a2.push(4);
// a1 = [1, 2, 3, 4];
// a2 = [1, 2, 3, 4];

// create new copy
let a4 = [...a1];

// value types - everything else
let n1 = 2;
let n2 = n1;
n2 = 4;
// n1 = 2
// n2 = 4
