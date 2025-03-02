//funcion flecha           //array numero
const formatPhoneNumber = (numero = []) => {
    if (numero.length != 10) { //valida
        return "numero invalido"
    }   
    let part1 = numero.slice(0, 3); //Separa 3 primeros
    part1 = part1.join("")  //une la cadena a part1
    let part2 = numero.slice(3, 6); //3 del medio
    part2 = part2.join("")  //une la cadena a part2
    let part3 = numero.slice(6, 10); //Spara 3 ultimos
    part3 = part3.join("")  //une la cadena a part3

    return `(${part1}) ${part2}-${part3}` //une todas las cadenas
}
//llama
const data= formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
//muestra
console.log(data);