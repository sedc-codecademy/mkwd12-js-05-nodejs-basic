


# HOFs In Javascript

## 1. `map`

The `map` function can be used to transform an array of strings by applying a specific operation to each string. Returns new array in memory.

```javascript
const fruits = ["apple", "banana", "orange"];
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "ORANGE"]
```

## 2. `forEach`

The `forEach` function is useful for performing an action on each element of an array of strings. Important: Does not return VALUE!

```javascript
const animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => console.log(`I love ${animal}s!`));
// Output:
// I love dogs!
// I love cats!
// I love rabbits!
```

## 3. `filter`

The `filter` function can be used to select specific elements from an array of strings based on a condition. Returns new array in memory.

```javascript
const colors = ["red", "blue", "green", "yellow"];
const shortColors = colors.filter(color => color.length < 5);
console.log(shortColors); // Output: ["red", "blue"]
```

## 4. `find`

The `find` function is helpful for retrieving the first element in an array of strings that satisfies a given condition. If element is not found it will return undefined.

```javascript
const names = ["Alice", "Bob", "Charlie", "David"];
const shortName = names.find(name => name === "Bob");
console.log(shortName); // Output: "Bob"
```

## 5. `some`

The `some` function checks if at least one element in an array of strings satisfies a condition.

```javascript
const myWord = "goodbye"
const words = ["HELLO", "WORLD", "GOODBYE"];
const hasUpperCase = words.some(word => word === myWord.toUpperCase());
console.log(hasUpperCase); // Output: true
```

## 6. `every`

The `every` function verifies if all elements in an array of strings meet a certain condition. Will return true only if all elements satisfy the condition, otherwise it returns false.

```javascript
const passwords = ["abc123", "password", "securepass"];
const isValidPassword = passwords.every(password => password.length >= 6);
console.log(isValidPassword); // Output: false
```

## 7. `includes`

The `includes` function checks if a specific string exists in an array of strings.

```javascript
const fruits = ["apple", "banana", "orange"];
const hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true
```

