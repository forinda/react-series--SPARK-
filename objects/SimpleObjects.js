/**
 * JS simple objects
 */
// Empty object
var SimpleObjects = {};

// Object with properties
var car = {
  color: "red",
  model: "BMW",
};

// Object with nested properties
var person = {
  name: {
    first: "John",
    last: "Doe",
  },
  age: 30,
  car: {
    color: "red",
    model: "BMW",
  },
};
// Object with properties and methods
var dog = {
  name: "Rex",
  age: 3,
  bark: function () {
    console.log("Bark!");
  },
};
// Creating objects from a template
/**
 *
 * @param {string} name
 * @param {number} age
 */
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
// var person1 = new Person("John", 30);
// var person2 = new Person("Jane", 25);
// console.log(person1.getName());
// person1.eat();
var num1 = Number(10);
var str = String("Hello");
var bool = Boolean(true);
var arr = Array(1, 2, 3,"Mike");