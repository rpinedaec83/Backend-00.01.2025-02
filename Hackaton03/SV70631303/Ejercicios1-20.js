function Ejercicio1() {
    let number = parseFloat(prompt("Introduce un número para verificar si es de 3 dígitos"));

    if ((number >= 100 && number <= 999) || (number <= -100 && number >= -999)) {
        alert("Es de tres dígitos");
    } else {
        alert("No es de tres dígitos");
    }
}

function Ejercicio2() {
    let number = parseInt(prompt("Introduce un número entero para determinar si es positivo o negativo"));
    if(number > -1){
        alert("Es positivo");
    } else if (number == 0){
        alert("Es cero");
    } else {
        alert("Es negativo");
    }
}

function Ejercicio3() {
    let number = parseInt(prompt("Introduce un número para verificar si termina en 4"))
    if (number%10 == 4) {
        alert("Termina en 4")
    } else {
        alert("No termina en 4")
    }
}

function Ejercicio4() {
    let firstNumber = parseFloat(prompt("Introduce el primer número"));
    let secondNumber = parseFloat(prompt("Introduce el segundo número"));
    let thirdNumber = parseFloat(prompt("Introduce el tercer número"));

    let list = [];

    list.push(firstNumber);
    list.push(secondNumber);
    list.push(thirdNumber);
    
    list.sort(function (a, b) {
        return a - b;
      });
    
    alert(list);
}

function Ejercicio5() {
    let shoesAmount = parseInt(prompt("¿Cúantos zapatos deseas comprar?"));
    let shoesPrice = 80;
    let subtotal = shoesAmount * shoesPrice;
    let discount;

    if(shoesAmount > 10){
        discount = subtotal*0.10;
    } else if(shoes > 20 && shoes < 30){
        discount = subtotal*0.20;
    } else if(shoesAmount > 30){
        discount = subtotal*0.40;
    } else{
        discount = 0;
    }
    
    let total = subtotal - discount;
    alert(`El total a pagar por ${shoesAmount} es: ${total}
El descuento del precio original (${subtotal}) es: ${discount}`)
}

function Ejercicio6() {
    let workedHours = parseInt(prompt(`¿Cúantas horas has trabajado esta semana?`));
    let salary;
    let normalTariff = 20;
    let extraHoursTariff = 25;

    if(workedHours < 40){
        salary = workedHours * 20;
    } else{
        salary = (40 * normalTariff) + ((workedHours - 40) * extraHoursTariff);
    }

    alert(`Por trabajar ${workedHours} horas su sueldo de esta semana es: ${salary}`)
}

function Ejercicio7() {
    let iceCreamPrice = parseFloat(prompt("Introduce el precio del helado"));
    let validation = false;
    let discount;
    let total;

    while (!validation){
        let membership = prompt("Introduce tu tipo de membresia (A/B/C)").toUpperCase();

        if(membership == "A"){
            discount = 0.10;
            validation = true;
        } else if(membership == "B"){
            discount = 0.15;
            validation = true;
        } else if(membership == "C"){
            discount = 0.20;
            validation = true;
        } else{
            alert("Introduce una membresia valida!")
            continue
        }
    }
    total = iceCreamPrice - (iceCreamPrice * discount);
    alert(`El precio a pagar es: ${total}
Precio original: ${iceCreamPrice}
Descuento: ${iceCreamPrice*discount}`);
}

function Ejercicio8() {
    let firstGrade = parseFloat(prompt("Introduce la primera nota"));
    let secondGrade = parseFloat(prompt("Introduce la segunda nota"));
    let thirdGrade = parseFloat(prompt("Introduce la tercera nota"));

    let average = (firstGrade + secondGrade + thirdGrade) / 3;
    
    if(average >= 13.5){
        alert(`Aprobado con un promedio de ${average}`)
    }else{
        alert(`Desaprobado con un promedio de ${average}`)
    }
}

function Ejercicio9() {
    let salary = parseFloat(prompt("Introduce tu salario"));
    let increasePercent;

    if(salary > 2000){
        increasePercent = 0.05
    }else{
        increasePercent = 0.10
    }

    let increase = salary * increasePercent;
    let newSalary = salary + increase;
    alert(`Su nuevo salario es: ${newSalary}
Su salario incremento en: ${increase}`);

}

function Ejercicio10() {
    let number = parseInt(prompt("Ingresa un número para determinar si es par"));
    if(number%2 == 0){
        alert("Es par");
    } else{
        alert("Es impar");
    }
}

function Ejercicio11() {
    let firstNumber = parseFloat(prompt("Ingresa el primer número para determinar al mayor de los tres números"));
    let secondNumber = parseFloat(prompt("Ingresa el segundo número para determinar al mayor de los tres números"));
    let thirdNumber = parseFloat(prompt("Ingresa el tercer número para determinar al mayor de los tres números"));

    if(firstNumber>secondNumber && firstNumber>thirdNumber){
        alert(`${firstNumber} es mayor que ${secondNumber} y ${thirdNumber}`)
    } else if(secondNumber>firstNumber && secondNumber>thirdNumber){
        alert(`${secondNumber} es mayor que ${firstNumber} y ${thirdNumber}`)
    } else{
        alert(`${thirdNumber} es mayor que ${firstNumber} y ${secondNumber}`)
    }
}

function Ejercicio12() {
    let firstNumber = parseFloat(prompt("Ingresa el primer número para identificar cual es mayor"));
    let secondNumber = parseFloat(prompt("Ingresa el segundo número para identificar cual es mayor"));

    if(firstNumber == secondNumber){
        alert(`Son iguales`)
    }else if(firstNumber > secondNumber){
        alert(`${firstNumber} es mayor que ${secondNumber}`)
    } else{
        alert(`${secondNumber} es mayor que ${firstNumber}`)
    }
}

function Ejercicio13() {
    let vowels = ["A","E","I","O","U"];
    let data = prompt("Introduce una letra");

    if(data.length > 1){
        alert(`"${data}" tiene más de una letras`);
    } else if(vowels.includes(data.toUpperCase())){
        alert(`"${data}" es una vocal`);
    } else{
        alert(`"${data}" no es una vocal`);
    }
}

function Ejercicio14() {
    let number = parseInt(prompt("Ingresa un número para verificar si es primo"));

    if (isNaN(number) || number < 1 || number > 10) {
        alert("Tiene que ser un número entre 1 y 10");
        return;
    }

    let counter = 0;
    for (let iterator = 1; iterator <= number; iterator++) {
        if (number % iterator === 0) {
            counter++;
        }
    }

    if (counter === 2) {
        alert(`${number} es un número primo`);
    } else {
        alert(`${number} no es un número primo`);
    }
}

function Ejercicio15() {
    let verification = true;

    while(verification){
        let optionSelected = parseInt(prompt(`Opciones:
1- de centímetros a pulgadas
2- de libras a kilogramos`));

        if(optionSelected == 1){

            let centimeters = parseFloat(prompt("Introduce los centímetros a convertir a pulgadas"));
            let inches = centimeters/2.54;
            alert(`${centimeters} cm -> ${inches} in`)
            verification = false;

        } else if(optionSelected == 2){

            let pounds = parseFloat(prompt("Introduce las libras a convertir a kilogramos"));
            let kilograms = pounds * 0.453592;
            alert(`${pounds} lb -> ${kilograms} kg`)
            verification = false;

        } else{
            alert("No existe esa opción")
        }
    }
}

function Ejercicio16() {
    let numberDay = parseInt(prompt("Introduce un número entre 1 y 7 para mostrar un día de la semana"))

    switch (numberDay) {
        case 1:
            alert(`${numberDay} es lunes`)
            break;
        case 2:
            alert(`${numberDay} es martes`)
            break;
        case 3:
            alert(`${numberDay} es miercoles`)
            break;
        case 4:
            alert(`${numberDay} es jueves`)
            break;
        case 5:
            alert(`${numberDay} es viernes`)
            break;
        case 6:
            alert(`${numberDay} es sabado`)
            break;
        case 7:
            alert(`${numberDay} es domingo`)
            break;
        default:
            alert(`Error, no existe ningún día de la semana representado por el número ${numberDay}`)
            break;
    }
}

function Ejercicio17() {
    let hourStr = prompt("Ingrese la hora en formato HH:MM:SS");
    
    let [hours, minutes, seconds] = hourStr.split(":").map(Number);
    let date = new Date();
    date.setHours(hours, minutes, seconds);
    
    date.setSeconds(date.getSeconds() + 1);
    
    let newHour = `${date.getHours().toString().padStart(2, '0')}:` +
                    `${date.getMinutes().toString().padStart(2, '0')}:` +
                    `${date.getSeconds().toString().padStart(2, '0')}`;
    
    alert(`La hora dentro de un segundo será: ${newHour}`);
}

function Ejercicio18() {
    let CdAmount = parseInt(prompt("Ingrese la cantidad CDs a comprar"));
    let unitPrice = 10;

    if(CdAmount >= 500){
        unitPrice = 6;
    } else if(CdAmount >= 100){
        unitPrice = 7;
    } else{
        unitPrice = 8;
    }

    let total = CdAmount * unitPrice;
    let gain = total * 0.0825;
    alert(`Total a pagar: ${total}
Ganancia del vendedor: ${gain}`);
}

function Ejercicio19() {
    let payForDay;
    let id;
    let employeeTypes = [{Cajero:56},{Servidor:64},
        {PreparadorDeMezclas:80},{Mantenimiento:48}];
    let workedDays = parseInt(prompt("Introduce cuantos días trabajaste (Max. 6)"))
    if(workedDays < 7){
        let selectedEmployeeType = parseInt(prompt(`Escoge una opción:
1- Cajero
2- Servidor
3- Preparador de mezclas
4- Mantenimiento`));
                switch (selectedEmployeeType){
                    case 1:
                        payForDay = employeeTypes[0].Cajero;
                        id = "Cajero";
                        break
                    case 2:
                        payForDay = employeeTypes[1].Servidor;
                        id = "Servidor";
                        break;
                    case 3:
                        payForDay = employeeTypes[2].PreparadorDeMezclas;
                        id = "Preparador de mezclas"
                        break;
                    case 4:
                        PayForDay = employeeTypes[3].Mantenimiento;
                        id = "Mantenimiento"
                        break;
                }
        let pay = payForDay * workedDays;
        alert(`El empleado con puesto ${id}:
Trabajo ${workedDays} días
Cobra ${payForDay} por día
--------------------------
Total a pagar: ${pay}`)
    } else{
        alert("No se puede trabajar más de 6 días, intentalo de nuevo")
    }
}

function Ejercicio20() {
    let firstNumber = parseInt(prompt("Ingrese el primer número:"));
    let secondNumber = parseInt(prompt("Ingrese el segundo número:"));
    let thirdNumber = parseInt(prompt("Ingrese el tercer número:"));
    let FourthNumber = parseInt(prompt("Ingrese el cuarto número:"));

    let pairs = [firstNumber, secondNumber, thirdNumber, FourthNumber].filter(num => num % 2 === 0).length;
    alert(`Cantidad de números pares: ${pairs}`);

    let bigger = Math.max(firstNumber, secondNumber, thirdNumber, FourthNumber);
    alert(`El mayor de todos es: ${bigger}`);

    if (thirdNumber % 2 === 0) {
        alert(`El cuadrado del segundo número es: ${secondNumber ** 2}`);
    }

    if (firstNumber < FourthNumber) {
        alert(`La media de los 4 números es: ${(firstNumber + secondNumber + thirdNumber + FourthNumber) / 4}`);
    }

    if (secondNumber > thirdNumber && thirdNumber >= 50 && thirdNumber <= 700) {
        alert(`La suma de los 4 números es: ${firstNumber + secondNumber + thirdNumber + FourthNumber}`);
    }
}