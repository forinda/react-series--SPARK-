// Named functions
// Named functions are functions that have a name.
// Named functions are hoisted.
// Named functions can be called before they are declared.
greet();
// greet2(); // ReferenceError: greet2 is not defined
function greet() {
  console.log("Hello");
}
// V2
const greet2 = function () {
  console.log("Hello 2");
};
greet2(); // Hello 2

// Function expression
function greet3(name) {
  console.log("Hello 3 " + name);
}

greet3("John"); // Hello 3 John

function pickAllArgs(name, ...args) {
  console.log(name);
  console.log(args);
}

pickAllArgs("John", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, {
  a: 1,
  b: 2,
}); // John [1,2,3,4,5,6,7,8,9,10,{a:1,b:2}]

// function with default parameters
function greet4(name = "John") {
  console.log("Hello 4 " + name);
}

// Closures
// A closure is a function that has access to its parent scope, even after the parent function has closed.
// A closure has access to variables in three scopes:
// 1. Variables in its own scope
// 2. Variables in the parent function's scope
// 3. Variables in the global scope
// The child scope always has access to the parent scope, but the parent scope does not have access to the child scope.
// The child scope can also have access to the global scope.
// A closure makes sure that a function does not loose connection to variables that existed at the function's birth place.
var scopeVar = "global";
// Example 1
function greet5() {
  var message = "Hello";
  var times = 0;
  return function () {
    console.log({message, times, scopeVar});
    times++;
  
  };
}
const sayHello = greet5();
sayHello(); // Hello
sayHello(); // Hello
sayHello(); // Hello
sayHello(); // Hello
