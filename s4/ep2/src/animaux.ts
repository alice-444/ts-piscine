export interface IAnimal {
  name: string;
  moveOn(): void;
}

export class Animal implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  moveOn(): void {
    console.log(`L'animal ${this.name} se déplace.`);
  }
}

export class Dog extends Animal {
  moveOn(): void {
    console.log(`Le chien ${this.name} court.`);
  }
}

export class Cat extends Animal {
  moveOn(): void {
    console.log(`Le chat ${this.name} saute.`);
  }
}

export function toMoveOn(animaux: IAnimal[]): void {
  animaux.forEach((animal) => {
    animal.moveOn();
  });
}
