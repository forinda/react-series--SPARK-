function sayHiNoName() {
  console.log("Hi...");
}

function sayHiToName(name) {
  console.log("Hi " + name + " 👋");
}

function getAge(yob) {
  return new Date().getFullYear() - yob;
}

module.exports = {
  sayHiNoName,
  sayHiToName,
  getAge,
};
