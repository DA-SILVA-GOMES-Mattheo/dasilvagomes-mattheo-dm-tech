function enOrdreCroissant(array){

  for(let x = 0; x < array.length; x++){
      for(let y = x +  1; y < array.length; y++){
          if(array[x] > array[y]){

              let temp =  array[x];
              array[x] = array[y];
              array[y] = temp;
          }
      }
  }
  return array;
}
console.log(enOrdreCroissant([1,50,18,28827,277]))