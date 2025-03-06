function calculator(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
        case 'x':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}


console.log(calculator(2, "+", 2));  
console.log(calculator(10, "x", 3)); 
console.log(calculator(15, "/", 3)); 
console.log(calculator(8, "%", 3));  
console.log(calculator(7, "-", 4));  

