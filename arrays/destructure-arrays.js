// Array descructuring
const arr = [1, 2, 3, 4, 5];
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const uppercasedAlphabet = alphabet.map((letter) => letter.toUpperCase());

// access the first element of the array
const first0 = arr[0];
// access the second element of the array
const second2 = arr[1];

// destructuring
const [first, second] = arr;
console.log({ first, second, first0, second2 });
// rest restructuring
const [first1, second1, ...rest] = alphabet;
console.log({ first1, second1, rest });
