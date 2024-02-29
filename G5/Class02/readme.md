
### Example 1: Default Export and Import

#### CommonJS (Node.js)

```javascript
// greet.js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

module.exports = greet;
```

```javascript
// main.js
const greet = require('./greet');

greet('John'); // Output: Hello, John!
```

#### ES6 Modules

```javascript
// greet.js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

export default greet;
```

```javascript
// main.js
import greet from './greet';

greet('John'); // Output: Hello, John!
```

### Example 2: Named Exports and Imports

#### CommonJS (Node.js)

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
```

```javascript
// main.js
const { add, subtract } = require('./math');

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

#### ES6 Modules

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```javascript
// main.js
import { add, subtract } from './math';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```
### Example 3: Default Exporting Object of Values

#### CommonJS (Node.js)

```javascript
// config.js
class MyClass {
  constructor() {
    console.log('This is my class');
  }
}

const myVariable = 'This is my variable';

module.exports = {
  myVariable,
  MyClass
};
```

```javascript
// main.js
const { myVariable, MyClass } = require('./config');

console.log(myVariable); // Output: This is my variable
new MyClass(); // Output: This is my class
```

#### ES6 Modules

```javascript
// config.js
class MyClass {
  constructor() {
    console.log('This is my class');
  }
}

const myVariable = 'This is my variable';

export default {
  myVariable,
  MyClass
};
```

```javascript
// main.js
import config from './config';

console.log(config.myVariable); // Output: This is my variable
new config.MyClass(); // Output: This is my class
```
