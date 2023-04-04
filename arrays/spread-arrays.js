// Spread arrays
let arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6];
arr1= arr1.concat(arr2);
console.log(arr1); // [1,2,3,4]
// normal way to concatenate arrays
const arr3 = arr1.concat(arr2);
console.log(arr3); // [1,2,3,4,5,6]

// spread operator
const arr4 = [...arr1, ...arr2];
console.log(arr4); // [1,2,3,4,5,6]
