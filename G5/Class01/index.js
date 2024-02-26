console.log("Hello from Nodejs =)");

const sumOfNumbers = (numberOne, nubmerTwo) => numberOne + nubmerTwo;
const result = sumOfNumbers(2, 10);

console.log(result);

console.log('*** REST ***');

const sumNumbers = (...args) => {
    console.log(args)
    let sum = 0;
    for(let number of args){
        if(typeof number === "number"){
            sum += number
        }
    }

    console.log('result is: ', sum)

};

sumNumbers(2);
sumNumbers(2, 10, 54);
sumNumbers(2,1,4,5,1,23, "string");

const fullName = (firstName, lastName, ...args) => {
    console.log("PARAMETERS", firstName, lastName);
    console.log(args)
};

fullName("Bob", "Bobski");
fullName('John', "Doe", 29, true, false, 0, "How are you");


console.log("**** SPREAD ****");

const fruitsBasketOne = ["Banana", "Strawberries"];
const fruitsBasketTwo = ["Pineapple"];

// "MERGING" TWO OR MORE ARRAYS INTO ONE
const combinedBaskets = [...fruitsBasketOne, ...fruitsBasketTwo];
console.log(combinedBaskets);

// "COPY" OF ARRAYS WITH SPREAD;
console.log("---- COPY ARRAYS WITH SPREAD ----");
let pets = ["Dog", "Cat"];
console.log('pets #1:', pets);

// THE PROBLEM: We cannot copy arrays like that
// let petsTwo = pets;

// THE SOLUTION: This is how we make shallow copy of an array
let petsTwo = [...pets];

console.log('petsTwo #1:', petsTwo);
console.log(petsTwo === pets) // true => POINT TO THE SAME REFERENCE IN MEMORY

petsTwo.push("Parrot");

console.log('petsTwo #2:', petsTwo);
console.log('pets #2:', pets);

// "COPY" OF OBJECTS WITH SPREAD
console.log("---- COPY OBJECTS WITH SPREAD ----");

let movieOne = {
    name: "Harry Potter"
};

// THE PROBLEM
// let movieTwo = movieOne; // Here we dont make a copy, we just pass the same reference
let movieTwo = {
    ...movieOne
};

console.log("movieOne: #1", movieOne);
console.log("movieTwo: #1", movieTwo);

movieTwo.genre = "Fantasy"
console.log('AFTER UPDATE')
console.log("movieTwo: #2", movieTwo);
console.log("movieOne: #2", movieOne);

console.log('**** COMBINING OBJECTS USING SPREAD ****');


let jsAcadamy = {
    name: 'Web Development',
    programmingLanguage: "Javascript",
    semesters: 2
}

let cshaprAcademy = {
    name: 'Web Development',
    programmingLanguage: "C#",
    duration: '1 year'
};

let combinedAcademies = {
    ...jsAcadamy,
    ...cshaprAcademy
};

console.log(combinedAcademies);

const burger = {
    hasKetchup: true,
    price: 100,
    hasPleskavice: 'Yes, two pleskavicas'
};

console.log(burger);

console.log(burger.hasKetchup)
console.log(burger.hasPleskavice);

const {hasKetchup, price, hasPleskavice} = burger;
console.log(hasKetchup, price, hasPleskavice)


// SAME AS ABOVE BUT LONGER
// const hasKetchup = burger.hasKetchup;
// const price = burger.price;
// const hasPleskavice = burger.hasPleskavice;
// console.log(hasKetchup, price, hasPleskavice)

const numbers = [1, 2, 3];

const [firstElement, secondElement, thirdElement, forthElement] = numbers;
console.log(firstElement, secondElement, thirdElement, forthElement);


const users = [
    {name: "Alice", age: 25, occupation: "Engineer"},
    {name: "Bob", age: 30, occupation: "Designer"},
    {name: "Charlie", age: 45, occupation: "Manager"}
];


// FOR EACH

users.forEach(({name, occupation, age}) => {
    // console.log(user)
    let message = `User is: ${name} and it's profession is: ${occupation}`
    console.log(message)
})

console.log('___________')
// INCLUDES // Returns true if element exists in array, otherwise returns false
const movies = ["Harry Potter", "Cuvari na formulata", "Dune", "Lord of the Rings"];

const isMovieInArray = movies.includes("Before the rain"); // false
console.log(isMovieInArray);

const isMovieIncluded = movies.includes("Harry Potter"); // true
const isMovieIncludedTwo = movies.includes("harry potter"); // false INCLUDES IS CASE SENSITIVE

console.log(isMovieIncluded)
console.log(isMovieIncludedTwo)

// FIND => Will return the element or will return undefined
const movie = movies.find((movie) => movie === "Dune") // Will return the element if found
console.log(movie)

const movieSecond = movies.find((movie) => movie === "Dune 2") // Will return the element if found or UNDEFINED
console.log(movieSecond);

// SOME => Returns true if atleast ONE element fullfills the CONDITION
const digits = [10, 451, 51, 12, 5];

const numberFound = digits.some((digit) => digit >= 300); // TRUE
console.log(numberFound)

const numberFoundSecond = digits.some((digit) => digit >= 1000); // FALSE
console.log(numberFoundSecond);

// EVERY => Returns true if ALL elements fullfills the CONDITION
const areElementBiggerThenFour = digits.every((digit) => digit > 4); // TRUE
console.log(areElementBiggerThenFour);

const areElementBiggerThenFourTwo = digits.every((digit) => digit > 20); // FALSE
console.log(areElementBiggerThenFourTwo)