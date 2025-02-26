import {PersonPro, showProfessionalInfo} from "./personnePro"

const personnePro1: PersonPro = {
  name: "Alice",
  position: "Développeur",
};

const personnePro2: PersonPro = {
  name: "Bob",
  company: "Google",
};

showProfessionalInfo(personnePro1);
showProfessionalInfo(personnePro2);