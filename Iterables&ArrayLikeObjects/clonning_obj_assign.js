// Two ways of clooning object

// 1. Spread Operator

const obj1 = {
  name: 'John',
  age: 30,
};

const obj2  = {...obj1}

console.log(obj2);

// 2. Object.assign

const obj3 = Object.assign({} , obj1)

console.log(obj3);