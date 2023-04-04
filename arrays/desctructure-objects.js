// Object destructuring

const mike = {
  name: "mike",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  education: {
    degree: "Masters",
    school: "NYU",
  },
  family: {
    wife: "Jane",
    kids: ["John", "Jill"],
  },
  password: "123456",
};

// console.log(obj);
// destructuree and rename
const { address: mikesAddress,...props } = mike;
// Extract all properties except password
const { password:_,...user} = props;
console.log(user);
