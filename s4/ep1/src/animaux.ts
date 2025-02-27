interface IAnimal {
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
