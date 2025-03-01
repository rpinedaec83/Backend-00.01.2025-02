//Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function triAreaNormal(base, altura) {
    return (base * altura) / 2

}

const triArea = (base, altura) => (base * altura) / 2


const result = triArea(3, 2);

console.log(result)