/**
 * @fileoverview Tests for double vs triple equals.
 *  - double equals is type coercion
 * - triple equals is strict equality
 */

// In most programming languages, the equality operator (==) checks for equality of value, but not equality of type.

// In JavaScript, the equality operator (==) converts the operands if they are not of the same type, then applies strict comparison.

// The strict equality operator (===) returns true if the operands are of the same type and the contents match.

let stringAge = "18";
let numberAge = 18;

// check type of both
console.log(typeof stringAge); // string
console.log(typeof numberAge); // number
// check value of both
console.log(stringAge); // 18
console.log(numberAge); // 18
// check equality
console.log(stringAge == numberAge); // true
console.log(stringAge === numberAge); // false
// Add the two
console.log(stringAge + numberAge); // 1818

var sumOfTwo =
  typeof stringAge === "string" && typeof numberAge === "number"
    ? stringAge + numberAge
    : "Not a number";

// NaN
/**
 In JavaScript, NaN stands for "Not a Number", and is a special value that represents an undefined or unrepresentable value resulting from an operation that cannot be performed as expected. NaN is the result of a mathematical operation that cannot produce a meaningful result, such as trying to perform arithmetic operations on non-numeric values.

 */
console.log(10 / "hello"); // NaN
console.log(Math.sqrt(-1)); // NaN
/**
 It's important to note that NaN is not equal to any other value, including itself. Therefore, you cannot use the == or === operators to check if a value is NaN. Instead, you can use the built-in isNaN() function to determine if a value is NaN.
 */
console.log(isNaN(NaN)); // true
console.log(isNaN("hello")); // true
console.log(isNaN(10)); // false
/**
The isNaN() function first coerces the argument to a Number type and then checks if the resulting value is NaN. However, it's important to note that isNaN() has some quirks and can sometimes produce unexpected results. For example, isNaN("123") returns false, even though "123" is not a valid number for arithmetic operations. To avoid such issues, you can use the Number.isNaN() method introduced in ECMAScript 6, which only returns true if the argument is actually NaN.
  */

console.log(typeof "" ==='undefined');// false
console.log(typeof "" ==='object');// false
console.log(typeof "" ==='string');// true
console.log(typeof "" ==='number');// false
console.log(typeof "" ==='boolean');// false
console.log(typeof "" ==='symbol');// false
console.log(typeof "" ==='function');// false
console.log(typeof "" ==='bigint');// false
