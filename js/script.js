//dasilvagomes-mattheo-dm-tech

//Je créer un tableau avec des nombres aléatoires

var array = [98, 658, 8, 17151, 15, 529, 0]

//Grace au sort(), tout est trié automatiquement dans le tableau
//le probème était que sans la fonction, il lisait les nombres comme des chaines de caractères
//donc si un nombre commencait par 9, il était forcément le plus grand nombre ex : 98>48148 car le 9 est plus grand
//la fonction dans le sort() permet de régler ce problème

array.sort(function(a, b){return a - b});

console.log(array);