import { Animal, Dog, Cat, toMoveOn, IAnimal } from "./animaux";

const leo = new Animal("Leo");
const rex = new Dog("Rex");
const felix = new Cat("Felix");

const animaux: IAnimal[] = [leo, rex, felix];
toMoveOn(animaux);
