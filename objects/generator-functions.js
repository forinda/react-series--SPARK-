// Generator functions
function* generateNumbers(max) {
  let count = 0;
  if (max <= 1) {
    yield 1;
  } else {
    while (count < max) {
      yield count++;
    }
  }
}
const gen1 = generateNumbers(5);
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
