// JS functions
// Types of Js functions
// [x] Named function
// [x] Anonymous function
// [x] Arrow function
// [x] IIFE (Immediately Invoked Function Expression)
// [x] Callback function
// [ ] Higher order function
// [x] Function constructor
// [x] Generator function
// [ ] Async function //ES6
// [ ] Async generator function  //ES6
// [x] Function expression
// [x] Factory functions

/**
 * Arrow function (ES6)
 */
//  simple arrow function
const simpleArrowFunction = () => {
  console.log("Hi");
};

// simpleArrowFunction()
// Arrow func with arguments
const func1WithArg1 = (name) => {
  console.log("Hello " + name);
};
// func1WithArg1("Mike")
// Arrow func with arg and computation
const arrowSquareNumberV1 = (number) => {
  return number * number;
};
// console.log(arrowSquareNumberV1(6));//36
const arrowSquareNumberV2 = (number) => number * number;
// const arrowSquareNumberV2 = (number) => number * number;// still valid

console.log(arrowSquareNumberV2(9));
const arrowMultiply = (num1, num2) => num1 * num2; //multiple args
// console.log(arrowMultiply(3,4));
