const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;
const multiplyNumbers = (numOne, numTwo) => numOne * numTwo;

// Named exports must have the export keyword before their declaration
export const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;
export const divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;

// Default es6 export, only one per file (module)
export default {
  addTwoNumbers,
  multiplyNumbers,
};
