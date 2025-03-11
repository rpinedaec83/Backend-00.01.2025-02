const findLargestNums = (matriz = []) => {
    let resultado = [];

    for (let i = 0; i < matriz.length; i++) {
        let maxNum = Math.max(...matriz[i]);
        resultado.push(maxNum);
    }

    return resultado;
};

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));