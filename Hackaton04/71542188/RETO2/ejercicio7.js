//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumber = (numero = []) => {
    if (numero.length!= 10) {
        return "Numero invalido"
    }
    let part1 = numero.slice(0,3);
    part1 = part1.join("");
    let part2 = numero.slice(3,6);
    part2 = part2.join(""); 
    let part3 = numero.slice(6,10);
    part3 = part3.join(""); 
    return `(${part1}) ${part2}-${part3}`
}
const resultado = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(resultado);