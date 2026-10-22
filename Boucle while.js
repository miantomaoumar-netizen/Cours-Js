let epargne = 0;
let semaine = 0;

while (epargne <= 50000) {
  epargne = epargne + 4000;
  semaine = semaine + 1;

  console.log("Semaine " + semaine + " : " + epargne);
}

console.log("Objectif atteint en " + semaine + " semaines.");