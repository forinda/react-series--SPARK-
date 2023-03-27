/**
 * In JavaScript, there are six primitive data types:
 * Undefined: represents a value that is not defined.
 * Null: represents a deliberate non-value, meaning it is intended to represent an absence of any object value.
 * Boolean: represents a logical entity that can have two values: true or false.
 * Number: represents a numeric value.
 * String: represents a sequence of characters.
 * Symbol: represents a unique identifier. Symbols are introduced in ECMAScript 6 and are primarily used as property keys to avoid name collisions between properties.
 */

// String
var name = 'John Doe';
// Number
var age = 45;
// Boolean
var hasKids = true;
// Null
var car = null;
// Undefined
var house;
// Symbol
var sym = Symbol();

// Display on console
console.log(age);// 45
// Check type
console.log(typeof car);// object
console.log(typeof house);// undefined

console.log(typeof car === 'object');// true
/*
In JavaScript, the typeof operator is used to determine the data type of a variable. 
When the typeof operator is used on a variable that has been assigned a value of null, it returns "object". 
This behavior is actually a mistake in the implementation of JavaScript, 
and it has been present since the early days of the language.
The reason for this behavior is that the internal representation of null 
in JavaScript is actually an object reference that points to a special 
object in memory with a null value. 
This object is distinct from all other objects and has no properties, 
which is why attempting to access a property of a variable that has been assigned a value of null will result in a `TypeError`.
*/

//console.log(mm);// ReferenceError: mm is not defined
