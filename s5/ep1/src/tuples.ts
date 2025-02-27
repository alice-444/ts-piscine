export function CreateRecord(): [string, number] {
  return ["Joueur1", 100];
}

export function ViewRecord(score: [string, number]): void {
  console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}
