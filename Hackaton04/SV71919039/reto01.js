// 01. Crea una función que retorne la suma de dos números.
function funcion01(num1, num2){
    return num1 + num2;
}

// 02. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function calcularPotencia(base, exponente){
    return Math.pow(base, exponente);
}

// 03. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855. (Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855)
function sumOfCubes(...nums) {
    return nums.reduce((total, num) => total + Math.pow(num, 3), 0);
}


// 04. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. (triArea(3, 2) ➞ 3)
function triArea(base, altura) {
    return (base * altura) / 2;
}

/* 05. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%),
y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4 */
function calculator(num1, operacion, num2) {
    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "x":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

