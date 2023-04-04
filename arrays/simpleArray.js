// Simple array declaration
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
const arr3 = Array(1, 2, 3, 4, 5);
const arr4 = Array.of(1, 2, 3, 4, 5);
const arr5 = Array.from([1, 2, 3, 4, 5, "mike"], (x) => {
  const obj = {
    element: x,
    square: x * x,
    cube: x * x * x,
  };

  return obj;
});
console.log(arr5);
