import {firstElement} from "./generics"

const arrayNumbers = [1, 2, 3, 4, 5];
const arrayLetter = ["a", "b", "c", "d", "e"];
const arrayObjet  = [{name: "John"}, {name: "Jane"}];

console.log(firstElement(arrayNumbers));
console.log(firstElement(arrayLetter));
console.log(firstElement(arrayObjet));



