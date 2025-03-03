const calculator = (primerNumber, operacion, segundoNumber) => {


    switch (operacion) {
        case "+":
            return primerNumber * segundoNumber;
        case "x":
            return primerNumber * segundoNumber;

        default:
            return "El parámetro no es reconocido"
    }

}


const result = calculator(2, "+", 2)

console.log(result)