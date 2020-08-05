var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserici la seconda parola");

if(primaParola.length > secondaParola.length){
  console.log(secondaParola + " " + primaParola);
}
else if(secondaParola.length > primaParola.length){
  console.log(primaParola + " " + secondaParola);
}
else{
  alert("Le parole hanno uguale lunghezza");
}
