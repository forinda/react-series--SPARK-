// Object spread
const mike1 = {
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
};

const mike2 = {
  name: "mike",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  education: {
    degree: "Degree",
    school: "NYU",
  },
  maritalStatus: "Married",
  gender: "Male",
};
const mike3 = { ...mike1, ...mike2 };

console.log(mike3);
