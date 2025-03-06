const formatPhoneNumber = (numero = []) => {
    if (numero.length != 10) {
        return "numero invalido"
    }
    let part1 = numero.slice(0, 3);
    part1 = part1.join("")
    let part2 = numero.slice(3, 6);
    part2 = part2.join("")
    let part3 = numero.slice(6, 10);
    part3 = part3.join("")

    return `(${part1}) ${part2}-${part3}`


}

const result= formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

console.log(result);