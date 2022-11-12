function chaineReverse(lettre) {

  var chaine = "";

  for (var x = lettre.length - 1; x >= 0; x--) {

      chaine += lettre[x];
  }
  return chaine;
}
console.log(chaineReverse('Test avec Espace'));