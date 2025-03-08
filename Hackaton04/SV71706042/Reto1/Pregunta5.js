
function calculator(num1,operator,num2){

    switch(operator){
        case '+':
            return num1+num2;
        case '*':
            return num1*num2;
        case '-':
            return num1-num2;
        case '/':
            return num1/num2;
        default:
           return "El parametro no es reconocido";
    }
}

console.log(calculator(2,'-',23));