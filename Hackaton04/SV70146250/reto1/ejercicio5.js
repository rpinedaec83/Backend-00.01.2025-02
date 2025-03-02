//funcion Flecha

const calculator=(num1, operador, num2)=>{
                            switch(operador){
                                case "+": return num1+num2;
                                case "-": return num1-num2;
                                case "/": return num1/num2;
                                case "x": return num1*num2;
                                case "%": return num1%num2;
                            default: return "El parámetro no es reconocido";
                                         }
}
//Llama funcion
let data=calculator(2,"+",2);

//Muestra
console.log(data);