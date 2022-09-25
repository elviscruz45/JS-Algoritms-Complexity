/**
 * Complejidad Temporal -> O( n^2 )
 * Complejidad Espacial -> O( n+4 ) = O(n)
 * Espacio Auxiliar -> O(4 ) = O(1)
 */
function bubbleSort(arreglo) {
    let longitud = arreglo.length;
    for (let i = 0; i < longitud; i++) {
      for (let j = 0; j < longitud; j++) {
        if (arreglo[j] > arreglo[j + 1]) {
          let temporal = arreglo[j];
          arreglo[j] = arreglo[j + 1];
          arreglo[j + 1] = temporal;
        }
      }
    }
    return arreglo;
  }

console.log(bubbleSort([1,32,5,76,54,23,3,1,4,5]))