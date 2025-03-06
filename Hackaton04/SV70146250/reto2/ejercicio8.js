//funcion flecha
const findLargestNums=(matrices)=>{
                //.map recorre las submatrices
                            //funcion flecha evalua el array buscando el mayor
    return matrices.map(array=>Math.max(...array));
}
//llamar 
let data = findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]);
//mostrar
console.log(data);