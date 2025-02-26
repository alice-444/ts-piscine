interface Person {
  readonly id: number;
  name: string;
  age: number;
  address?: { street: string; city: string };
}

export function ShowPerson(person: Person) {
  console.log(
    `Bonjour, je m'appelle ${person.name} et j'ai ${person.age} ans.`
  );
}

export const showPersonAvanced = (person: Person) => {
  if (person.address) {
    console.log(
      `Bonjour, je m'appelle ${person.name} (ID: ${person.id}), j'ai ${person.age} ans et j'habite au ${person.address.street}, ${person.address.city}.`
    );
  } else {
    console.log(
      `Bonjour, je m appelle ${person.name} (ID: ${person.id}) et j ai ${person.age} ans.`
    );
  }
};
