// Without args

/**
 * Some
 */
(function () {
  console.log("IIFE ran");
})(),
  (function (name, age) {
    console.log("Hello " + name + " " + ", you are " + age + " years old");
  })("Jane Doe", 40);
