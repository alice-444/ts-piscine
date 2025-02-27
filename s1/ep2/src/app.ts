import {showPersonAvanced} from './person';

const person1 = {
  id : 1,
  name: "Alice",
  age: 25,
};

const person2 = {
  id : 56,
  name: "007",
  age: 20,
  address: {
    street: "rue de la paix",
    city: "Paris"
  }
};

showPersonAvanced(person1);
showPersonAvanced(person2);