//dasilvagomes-mattheo-dm-tech

//Je créer une variable "debut" qui sera changeable, pour l'exemple, elle sera à 0, je dis ensuite que cpt "compteur" est égale à la variable debut+1
//Tant que cpt est plus petite que debut+11 chiffres/nombres (ce qui sera toujours le cas) alors je vais attribuer +1 à mon compteur pour avoir les 10 prochains chiffres/nombres
let debut = 17;
for (let cpt = debut +1; cpt < debut +11; cpt++) {
    //J'affiche dans ma console les chiffres ou nombres suivants le compteur+11
    console.log(cpt);
  }