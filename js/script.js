//dasilvagomes-mattheo-dm-tech

//J'attribue une valeur de départ de 1 qui me servira à faire mon calcul
//La valeur de fin est la valeur que nous voulons changer pour arreter la boucle
let debut = 1;
let fin = 5;
let somme = 0;
//Tant que la valeur du début est plus petite ou égale à la valeur de fin, alors la boucle continue
while (debut <= fin) {
  //J'ajoutes à ma somme la valeur de début soit +1
  somme += debut;
  //Tant que la boucle n'est pas terminée, j'ajoutes à ma valeur de début +1 donc elle passe à 2 etc..
  debut += 1;
}
console.log(somme);