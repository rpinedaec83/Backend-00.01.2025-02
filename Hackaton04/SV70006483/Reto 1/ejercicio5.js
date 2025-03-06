// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


const calculator = (primerNumber, operacion, segundoNumber) => {


    switch (operacion) {
        case "+":
            return primerNumber * segundoNumber;
        case "x":
            return primerNumber * segundoNumber;
        //////

        default:
            return "El parámetro no es reconocido"
    }

}


const result = calculator(2, "+", 2)

console.log(result)