// 5.	Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculadora=(num1,operacion,num2) => {
switch(operacion){
    case "+":
    return num1+num2;
    case "-":
return num1-num2;
case "/":
    return num1/num2;
    case "*":
    return num1*num2;
    case "%":
    return num1%num2;

default:
    return "El parametro no es reconocido"
}
}
console.log(calculadora(10,"*",2))




