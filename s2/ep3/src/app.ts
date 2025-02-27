import { getProperty } from "./generics";

interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = { brand: "Ford", model: "Mustang", year: 1964 };

console.log(getProperty(myCar, "brand"));
console.log(getProperty(myCar, "year"));

// Validation
console.log(getProperty(myCar, "type")); // Error message : Argument of type '"type"' is not assignable to parameter of type 'keyof Car'.
