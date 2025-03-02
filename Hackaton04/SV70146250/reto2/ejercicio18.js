//funcion                               //recorre matris y filtra los numerios
const filterList = (matriz = []) => matriz.filter((evaluaNum) => typeof evaluaNum == "number");
//llama
const data = filterList([1, 2, 3, "x", "y", 10]);
//mostrar
console.log(data);