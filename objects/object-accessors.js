function Person(name, age) {
    this._name = name;
    this._age = age;
  
    this.getName = function () {
      return this._name;
    };
    this.getAge = function () {
      return this._age;
    };
  
    this.setName = function (name) {
      this._name = name;
    };
  
    this.setAge = function (age) {
      this._age = age;
    };
  
    this.eat = function () {
      console.log("Eating...");
    }
  }

var person1 = new Person("John", 30);
// Wyas of accessing properties and methods
// 1. Dot notation
console.log(person1.getName());
// 2. Bracket notation
console.log(person1["getName"]());
// nullish coalescing operator
console.log(person1?.["name"]);
// ?? operator
console.log(person1?.["name"] ?? "No name");
// Long ternaly operator
console.log(person1?.["name"] ? person1?.["name"] : "No name");