const maximo = (matriz) => {
    let max = 0;
    for (let i = 0; i < matriz.length; i++) {
        if (max < matriz[i]) {
            max = matriz[i]
        }
    }
    return max;
}
function findLargestNums(matriz) {
    let respuesta = [];
    for (let i = 0; i < matriz.length; i++) {
        solucion = maximo(matriz[i]);
        respuesta.push(solucion);
    }
    return respuesta;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [4, 5, 0]]));  