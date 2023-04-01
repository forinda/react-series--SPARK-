class Animal {
  // private
  #_name;
  #_age;
  constructor(name, age) {
    this.#_age = age;
    this.#_name = name;
  }
  set name(value) {
    this.#_name = value;
  }
  get name() {
    return this.#_name;
  }
  set age(value) {
    this.#_age = value;
  }
  get age() {
    return this.#_age;
  }
  static something() {
    console.log("Some static method...");
  }
}

const an1 = new Animal("Dog", 50);
an1.age = 30;
console.log(an1.name);
console.log(Animal.something());
// console.log(an1.something());

class Dog extends Animal {
  #_wags;
  #_barks;
  constructor(name, age, wags, barks) {
    super(name, age);
    this.#_barks = barks;
    this.#_wags = wags;
  }
  canBark() {
    return typeof this.#_barks === "boolean" && this.#_barks;
  }
  canWag() {
    return typeof this.#_wags === "boolean" && this.#_wags;
  }

  bark() {
    const cond = this.canBark() ? "Can  bark " : "Cannot bark";
    const cond2 = this.canWag() ? "Can  wag tail " : "Cannot wag tail";
    console.log("Dog " + this.name + " " + cond + " and " + cond2);
  }
}

const d1 = new Dog("Bosco", 1, true, true);
d1.bark();
