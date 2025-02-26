interface Employee {
  name: string;
  position: string;
}

interface Client {
  name: string;
  company: string;
}

export type PersonPro = Employee | Client;

export const showProfessionalInfo = (personPro: PersonPro) => {
  if ("position" in personPro) {
    console.log(
      `Employe: : ${personPro.name} travaille comme ${personPro.position}.`
    );
  }
  if ("company" in personPro) {
    console.log(
      `Client: ${personPro.name} est associé à l'entreprise  ${personPro.company}.`
    );
  }
};
