//funcin flecha dentrode otra      //recorre la matriz      //multiplica por el tamaño
const multiplyByLength = (matriz = []) => matriz.map((value) => value * matriz.length)

//llamar
const data = multiplyByLength([2, 3, 1, 0]);

//mostrar
console.log(data)