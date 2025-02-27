interface Vehicle {
  brand: string;
  year: number;
}

export function isVehicule(obj: any): obj is Vehicle {
  return typeof obj.brand === "string" && typeof obj.year === "number";
}

export const displayVehicle = (vehicle: Vehicle) => {
  if (isVehicule(vehicle)) {
    console.log(
      `Le véhicule ${vehicle.brand} de l'année ${vehicle.year} est valide.`
    );
  } else {
    console.log(`Objet invalide pour un véhicule.`);
  }
};
