function ejercicio01() {
    var numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (numero >= 100 && numero <= 999) {
        alert("El número tiene tres dígitos.");
    } else {
        alert("El número no tiene tres dígitos.");
    }
}

function ejercicio02() {
    var numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (numero < 0) {
        alert("El número es negativo.");
    } else {
        alert("El número no es negativo.");
    }
}

function ejercicio03() {
    var numero = prompt("Ingrese un número:");
    numero = parseInt(numero);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    if (numero % 10 === 4) {
        alert("El número termina en 4.");
    } else {
        alert("El número no termina en 4.");
    }
}

function ejercicio04() {
    var num1 = prompt("Ingrese el primer número:");
    var num2 = prompt("Ingrese el segundo número:");
    var num3 = prompt("Ingrese el tercer número:");

    // Validate input
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingrese solo números.");
        return;
    }

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            alert("Los números de menor a mayor son: " + num1 + ", " + num2 + ", " + num3);
        } else {
            alert("Los números de menor a mayor son: " + num1 + ", " + num3 + ", " + num2);
        }
    } else if (num2 < num1 && num2 < num3) {
        if (num1 < num3) {
            alert("Los números de menor a mayor son: " + num2 + ", " + num1 + ", " + num3);
        } else {
            alert("Los números de menor a mayor son: " + num2 + ", " + num3 + ", " + num1);
        }
    } else {
        if (num1 < num2) {
            alert("Los números de menor a mayor son: " + num3 + ", " + num1 + ", " + num2);
        } else {
            alert("Los números de menor a mayor son: " + num3 + ", " + num2 + ", " + num1);
        }
    }
}