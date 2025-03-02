function Ejercicio21() {
    
    function factorial(number){
        if(number <= 1){
            return number;
        }

        return number * factorial(number-1);
    }

    let number = parseInt(prompt("Introduce un número para calcular su factorial"));
    let factorialNumber = factorial(number);

    alert(`El factorial de ${number} es: ${factorialNumber}`)
}

function Ejercicio22() {
    let number = parseInt(prompt('Introduce un número para calcular la suma de los primeros "n" números'));
    let total = 0;
    for (let iterator = 0; iterator <= number; iterator++) {
        total+=iterator;
        
    }

    alert(`La suma de los primeros ${number} es: ${total}`);
}

function Ejercicio23() {
    let number = parseInt(prompt("Ingrese un número para determinar la suma de los números impares hasta aque número"));
    let total = 0;
    for (let i = 1; i <= number; i += 2) {
        total += i;
    }
    alert(`La suma de los impares hasta ${number} es: ${total}`);
}

function Ejercicio24() {
    let total = 0;
    for (let i = 2; i <= 1000; i += 2) {
        total += i;
    }
    alert(`La suma de los primeros mil números pares es: ${total}`);
}

function Ejercicio25() {
    let number = parseInt(prompt("Ingrese un número para determinar su factorial:"));
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    alert(`El factorial de ${number} es: ${result}`);
}

function Ejercicio26() {
    let dividend = parseInt(prompt("Ingresa el dividendo"));
    let divisor = parseInt(prompt("Ingresa el divisor"));

    let quotient = 0;
    let rest = dividend;

    while(rest >= divisor){
        rest -= divisor;
        quotient += 1; 
    }

    alert(`Cociente: ${quotient}
Resto: ${rest}`);
}

function Ejercicio27() {
    let total = 0;
    let counter = 0;
    let number = 0;
    do{
        number = parseInt(prompt("Introduce un número (hasta que se ingrese un número negativo) para medir la media de los números que ingreses"))
        total += number;
        counter+=1;
    }while(number >= 0);

    if(counter > 0){
        alert(`La media es: ${total/counter}`);
    } else{
        alert("No se ha ingresado números positivos")
    }
}

function Ejercicio28() {
    let total = 0;
    let iterator = 1;
    do {
        total += iterator++; 
    } while (iterator <= 100);
    alert(`La suma es: ${total}`);
}

function Ejercicio29() {
    let total = 0;
    let iterator = 1;

    while (iterator <= 100) {
        total += iterator++
    }

    alert(`La suma es: ${total}`);
}

function Ejercicio30() {
    let total = 0;

    for (let iterator = 1; iterator <= 100; iterator++){
        total += iterator;
    }
    
    alert(`La suma es: ${total}`);
}

function Ejercicio31() {
    let pairsAddition = 0;
    let oddsAddition = 0;
    let pairsCounter = 0;
    let oddsCounter = 0;

    for (let iterator = 1; iterator <= 10; iterator++) {
        let number = parseInt(prompt("Ingresa un número"));

        if(number%2 == 0){
            pairsAddition += number;
            pairsCounter += 1;
        } else{
            oddsAddition += number;
            oddsCounter += 1;
        }
    }

    if(pairsCounter > 0){
        alert(`La media de los números pares es: ${pairsAddition/pairsCounter}`)
    } else{
        alert("No se han ingresados números pares")
    }

    if(oddsCounter > 0){
        alert(`La media de los números impares es: ${oddsAddition/oddsCounter}`)
    } else{
        alert("No se han ingresados números impares")
    }
}

function Ejercicio32() {
    let maxPopulation = 0;
    let maxCityName = "";
    let maxProvinceName = "";

    for (let i = 1; i <= 3; i++) {
        let provinceName = prompt(`Ingrese el nombre de la Provincia ${i}:`);

        for (let j = 1; j <= 3; j++) {
            let cityName = prompt(`Ingrese el nombre de la ciudad ${j} de la provincia ${provinceName}:`);
            let cityPopulation = parseInt(prompt(`Ingrese la población de ${cityName}:`));

            if (cityPopulation > maxPopulation) {
                maxPopulation = cityPopulation;
                maxCityName = cityName;
                maxProvinceName = provinceName;
            }
        }
    }

    alert(`La ciudad con mayor población es ${maxCityName} en la provincia de ${maxProvinceName} con ${maxPopulation} habitantes.`);
}


function Ejercicio33() {
    let continueProgram = true;
    while (continueProgram) {
        let userInput = prompt("¿Desea continuar? (s/n)");
        if (userInput.toLowerCase() !== "s") {
            continueProgram = false;
        }
    }
}

function Ejercicio34() {
    for (let i = 1; i <= 9; i++) {
        alert(`Tabla del ${i}`);
        for (let j = 1; j <= 10; j++) {
            alert(`${i} x ${j} = ${i * j}`);
        }
    }
}

function Ejercicio35() {
    let number = parseInt(prompt("Introduce un número (1 de 20):"));
    let max = number;
    let min = number;

    for (let iterator = 1; iterator < 20; iterator++) {
        number = parseInt(prompt(`Introduce un número (${iterator + 1} de 20):`));

        if (number > max) {
            max = number;
        }

        if (number < min) {
            min = number;
        }
    }

    alert(`Mayor: ${max}\nMínimo: ${min}`);
}

function Ejercicio36() {
    let amountOfTermsOfFibonacci = parseInt(prompt("Ingresa la cantidad de terminos de la serie de Fibonacci que quieres ver"));
    let a = 0;
    let b = 1;

    for (let i = 0; i < amountOfTermsOfFibonacci; i++) {
        alert(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function Ejercicio37() {
    let firstNumber = parseInt(prompt("Ingresa un número para calcular el M.C.D"));
    let secondNumber = parseInt(prompt("Ingresa otro número para calcular el M.C.D"));

    while (secondNumber !== 0) {
        let temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
    }

    alert(`El M.C.D es: ${firstNumber}`);
}

function Ejercicio38() {
    let number = parseInt(prompt("Ingrese un número:"));
    let total = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0){
            total += i
        }
    }

    if(total == number){
        alert(`${number} es perfecto`);
    } else{
        alert(`${number} no es perfecto`);
    }
}

function Ejercicio39() {
    let terms = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de pi:"));
    let piSymbol = 0;

    for (let i = 0; i < terms; i++) {
        if (i % 2 === 0) {
            piSymbol += 4 / (2 * i + 1);
        } else {
            piSymbol -= 4 / (2 * i + 1);
        }
    }

    alert("Aproximación de pi: " + piSymbol);
}

function Ejercicio40() {
    let n = parseInt(prompt("Ingrese la cantidad de términos para la aproximación de pi:"));
    let piSymbol = 3;

    for (let i = 1; i <= n; i++) {
        let term = 4 / ((2 * i) * (2 * i + 1) * (2 * i + 2));
        if (i % 2 === 0) {
            piSymbol -= term;
        } else {
            piSymbol += term;
        }
    }

    alert("Aproximación de pi: " + piSymbol);
}