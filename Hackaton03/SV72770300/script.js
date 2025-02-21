let ejercicio

document.getElementById("btn-ejercicio-01").addEventListener('click', function () {
    ejercicio = document.getElementById("btn-ejercicio-01").textContent;
    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    let controlador = true;

    while (controlador) {
        if (Number.isNaN(n)) {
            alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        } 
        else {
            
            if (n > 99 && n < 1000) {
                alert(`El número ${n} tiene 3 dígitos`);
                controlador = false;
            } else if (n < - 99 && n > -1000) {
                alert(`El número ${n} tiene 3 dígitos`); 
                controlador = false;
            } else {
                alert(`El número ${n} no tiene 3 dígitos.`);
                controlador = false;
            }
        };
    };
});

document.getElementById("btn-ejercicio-02").addEventListener('click', function () {
    ejercicio = document.getElementById("btn-ejercicio-02").textContent;
    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    let controlador = true;

    while (controlador) {
        if (Number.isNaN(n)) {
            alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        }
        else {

            if (n < 0) {
                alert(`El número ${n} es negativo`);
                controlador = false;
            } else if (n > 0) {
                alert(`El número ${n} es positivo`);
                controlador = false;
            } else {
                alert(` El número ${n} es neutro`);
                controlador = false;
            }
        };
    };
});

document.getElementById("btn-ejercicio-03").addEventListener('click', function () {
    ejercicio = document.getElementById("btn-ejercicio-03").textContent;
    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    let controlador = true;

    while (controlador) {
        if (Number.isNaN(n)) {
            alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        }
        else {

            if (n % 10 == 4) {
                alert(`El número ${n} termina en 4`);
                controlador = false;
            } else {
                alert(` El número ${n} no termina en 4`);
                controlador = false;
            }
        };
    };
});

document.getElementById("btn-ejercicio-04").addEventListener('click', function () {
    ejercicio = document.getElementById("btn-ejercicio-04").textContent;
    let n1 = parseInt(prompt(`${ejercicio}
    Digite 1° número entero`));
    let n2 = parseInt(prompt(`${ejercicio}
    Digite 2° número entero`));
    let n3 = parseInt(prompt(`${ejercicio}
    Digite 3° número entero`));


    let controlador = true;

    while (controlador) {
        if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
            alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        }
        else {

            if (n1 < n2 && n2 < n3) {
                alert(`${n1} ${n2} ${n3}`);
                controlador = false;
            } else if (n2 < n1 && n1 < n3) {
                alert(`${n2} ${n1} ${n3}`);
                controlador = false;
            } else if (n3 < n2 && n2 < n1) {
                alert(`${n3} ${n2} ${n1}`);
                controlador = false;
            } else if (n3 < n1 && n1 < n2) {
                alert(`${n3} ${n1} ${n2}`);
                controlador = false;
            } else if (n2 < n3 && n3 < n1) {
                alert(`${n2} ${n3} ${n1}`);
                controlador = false;
            } else if (n1 < n3 && n3 < n2) {
                alert(`${n1} ${n3} ${n2}`);
                controlador = false;
            }
        };
    };
});

document.getElementById("btn-ejercicio-05").addEventListener('click', function () {
    let cantidad, subTotal, descuento = 0, total = 0;
    ejercicio = document.getElementById("btn-ejercicio-05").textContent;
    cantidad = parseInt(prompt(`${ejercicio}
    Digite la cantidad de zapatos comprados`));

    if (Number.isNaN(cantidad)) {
        alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        subTotal = cantidad * 80

        if (cantidad > 10 && cantidad < 21) {
            descuento = subTotal * 0.10
            total = subTotal - descuento
        } else if (cantidad > 20 && cantidad < 31) {
            descuento = subTotal * 0.20
            total = subTotal - descuento
        } else if (cantidad > 30) {
            descuento = subTotal * 0.40
            total = total = subTotal - descuento
        } else {
            descuento = 0
            total = subTotal
        }

        alert(`-----------Boleta de Venta---------
        Cantidad de zapatos: ${cantidad}
        Descuento: ${descuento}
        Sub Total: ${subTotal}
        Total: ${total}`)
    };

});

document.getElementById("btn-ejercicio-06").addEventListener('click', function () {
    let sueldo = 0, sueldoExtra = 0, horasExtras = 0;
    ejercicio = document.getElementById("btn-ejercicio-06").textContent;
    let horas = parseInt(prompt(`${ejercicio}
    Digite sus horas trabajadas`));

    if (Number.isNaN(horas)) {
        alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (horas > 40) {
            horasExtras = horas - 40;
            sueldoExtra = horasExtras * 25;
            sueldo = (40 * 20) + sueldoExtra;
        } else {
            sueldo = horas * 20;
        }

        alert(`Sueldo del trabajador: ${sueldo}`);
    }

});

document.getElementById("btn-ejercicio-07").addEventListener('click', function () {

    let compraCliente, opcionCliente, descuento = 0, totalPagar = 0, validacion, controlador = true;
    ejercicio = document.getElementById("btn-ejercicio-07").textContent;

    compraCliente = parseInt(prompt(`${ejercicio}
    Digite el monto ($) de consumo de helados del cliente`));
    opcionCliente = parseInt(prompt(`${ejercicio}
    Digite el número según las indicaciones:
    1 : Cliente "A"
    2 : Cliente "B"
    3 : Cliente "C"
    0 : Salir`));

    if (Number.isNaN(compraCliente) || Number.isNaN(opcionCliente)) {
        alert(`El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        while (controlador) {

            switch (opcionCliente) {

                case 1:
                    descuento = compraCliente * 0.10
                    totalPagar = compraCliente - descuento
                    validacion = true
                    break;

                case 2:
                    descuento = compraCliente * 0.15
                    totalPagar = compraCliente - descuento
                    validacion = true
                    break;

                case 3:
                    descuento = compraCliente * 0.20
                    totalPagar = compraCliente - descuento
                    validacion = true
                    break;

                case 0:
                    controlador = false
                    break;

                default:
                    alert(`El tipo de cliente no existe. Por favor, digite el tipo de cliente correctamente según lo indicado.`)
                    validacion = false
                    controlador = false
                    break;
            }

            if (validacion == true) {
                alert(`---------BOLETA DE VENTA----------
                Consumo del cliente: $${compraCliente}
                Descuento: $${descuento}
                Total: $${totalPagar}`)
                controlador = false
            }
        }

    }

});

document.getElementById("btn-ejercicio-08").addEventListener('click', function () {

    let cantidadNotas = 3, nota = 0, sumaNotas = 0, promedio = 0;
    let arrayNotas = [3];
    ejercicio = document.getElementById("btn-ejercicio-08").textContent;

    for (let i = 0; i < 3; i++) {

        arrayNotas[i] = parseInt(prompt(`${ejercicio}
        Ingrese ${i + 1}° nota`));

        if (Number.isNaN(arrayNotas[i])) {
            alert(`El dato ingresado no es un número.
                Por favor ingrese el dato solicitado correctamente`);
            i--;
        } else if (arrayNotas[i] > 20 || arrayNotas[i] < 0) {
            alert(`El dato ingresado no es una nota a evaluar.
                Por favor ingrese el dato solicitado correctamente`);
            i--;
        }

        else {
            sumaNotas = sumaNotas + arrayNotas[i];
        }

    };

    promedio = sumaNotas / cantidadNotas;

    if (promedio >= 12.5 && promedio <= 20) {
        alert(`--------RESULTADO FINAL DEL ALUMNO----------
        Promedio: ${promedio.toFixed(2)}
        Estado: Aprobado`);
    } else {
        alert(`--------RESULTADO FINAL DEL ALUMNO----------
        Promedio: ${promedio.toFixed(2)}
        Estado: Desaprobado`);
    }

});

document.getElementById("btn-ejercicio-09").addEventListener('click', function () {

    let montoTrabajador, aumentoTrabajador = 0, totalTrabajador = 0;
    ejercicio = document.getElementById("btn-ejercicio-09").textContent;

    montoTrabajador = parseInt(prompt(`${ejercicio}
    Digite el monto ($) generado por el trabajador`));

    if (Number.isNaN(montoTrabajador)) {
        alert(`El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (montoTrabajador > 2000) {
            aumentoTrabajador = montoTrabajador * 0.05;
            totalTrabajador = montoTrabajador + aumentoTrabajador;
        } else {
            aumentoTrabajador = montoTrabajador * 0.10;
            totalTrabajador = montoTrabajador + aumentoTrabajador;
        }

        alert(`--------------------------------------------------
        Aumento del trabajador: $${aumentoTrabajador}
        Total: $${totalTrabajador}`);

    }

});

document.getElementById("btn-ejercicio-10").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-10").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    if (Number.isNaN(n)) {
        alert(`El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (n % 2 == 0) {
            alert(`El número ${n} es par`)
        } else {
            alert(`El número ${n} es impar`)
        }

    }

});

document.getElementById("btn-ejercicio-11").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-11").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    if (Number.isNaN(n)) {
        alert(`El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (n % 2 == 0) {
            alert(`El número ${n} es par`)
        } else {
            alert(`El número ${n} es impar`)
        }

    }

});