// there are two ways we can import modules into our JS code

// The first way is "require" 
// This approach works only with commonjs modules (which are default nodejs modules) 
let colors = require('colors'); 

// The second way is "import"
// This approach works only with ECMAScript modules
// Need to add: "type": "module" in package.json file to work with modules
// import colors from 'colors'; 


global.console.log('Yeeey this is my first node app!'); // same as console.log
const text = '              Yeeey this is my       first node app!                 ';

console.log(text.trim());
// console.log(window); // will throw an error because we are executing the code onour local machine (we are not in the browser)
console.log(global);

console.log(process);
console.log(process.version); // Node.js version
console.log(process.platform); // Current operating system
console.log(process.cwd()); // Current working directory

// process.stdout.write('Enter some text: ');

// process.stdin.on('data', (input) => {
//     const userInput = input.toString().trim();
//     console.log(`You entered: ${userInput}`);
//     process.exit();
// });

console.log('START'); // This will exexcute first
setTimeout(() => {
    console.log('This is inside the setTimeout function'); // This will exexcute third
}, 2000);
console.log('END'); // This will exexcute second

console.log('HELLO' .magenta); // change text color
console.log('HELLO' .bgMagenta); // change background color by adding the prefix bg



