function Ejercicio1(){
    let firstNumber = parseFloat(prompt("Introduce el primer número"));
    let secondNumber = parseFloat(prompt("Introduce el segundo número"));
    let result = firstNumber + secondNumber;
    alert(`La suma de ${firstNumber} y ${secondNumber} es: ${result}`);    
}

function Ejercicio2(){
    let base = parseFloat(prompt("Introduce la base del número"));
    let exponent = parseFloat(prompt(`Introduce la potencia del número ${base}`));
    let result = base**exponent;

    alert(`El resultado de ${base}^${exponent} es: ${result}`);
}

function Ejercicio3(){
    alert("----LA SUMA DE LOS CUBOS DE 3 NÚMEROS----");
    let firstNumber = parseFloat(prompt("Introduce el primer número"));
    let secondNumber = parseFloat(prompt("Introduce el segundo número"));
    let thirdNumber = parseFloat(prompt("Introduce el tercer número"));
    
    let firstPower = firstNumber**3;
    let secondPower = secondNumber**3;
    let thirdPower = thirdNumber**3;
    let result = firstPower + secondPower + thirdPower;

    alert(`la suma de los cubos de ${firstNumber}, ${secondNumber} y ${thirdNumber} es ${result}`);

}

function Ejercicio4(){
    alert("----Calcular el área de un triangulo----")
    let base = parseFloat(prompt("Introduce la base"));
    let height = parseFloat(prompt("Introduce la altura"));

    let result = (base * height)/2;

    alert(`El área de un triangulo de base (${base}) y de altura (${height}) es: ${result}`);

}

function symbolToOperate(firstNumber, sign, secondNumber){
    if(sign == "+"){
        return firstNumber + secondNumber;
    } else if(sign == "-"){
        return firstNumber - secondNumber;
    } else if(sign == "x"){
        return firstNumber * secondNumber;
    } else if(sign == "/"){
        return firstNumber / secondNumber;
    } else if(sign == "%"){
        return firstNumber % secondNumber;
    } else{
        return null;
    }
}

function Ejercicio5(){
    alert("----Calculadora----")
    let firstNumber = parseFloat(prompt("Introduce un primer número"));
    let secondNumber = parseFloat(prompt("Introduce un segundo número"));
    let sign = prompt(`Introduce que operación se quiere realizar
1. "-" -> Resta
2. "+" -> Suma
3. "x" -> Multiplicación
4. "/" -> División
5. "%" -> Resto de una división`);
    let result = symbolToOperate(firstNumber, sign, secondNumber);

    if(result == null){
        alert(`"${sign}" no es una alternativa`);
    } else {
        alert(`${firstNumber} ${sign} ${secondNumber} = ${result}`);
    }
}