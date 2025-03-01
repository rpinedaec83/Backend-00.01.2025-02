let ejercicio

document.getElementById("btn-ejercicio-01").addEventListener('click', function () {
    ejercicio = document.getElementById("btn-ejercicio-01").textContent;
    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    let controlador = true;

    while (controlador) {
        if (Number.isNaN(n)) {
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        } 
        else {
            
            if (n > 99 && n < 1000) {
                alert(`${ejercicio}
                El número ${n} tiene 3 dígitos`);
                controlador = false;
            } else if (n < - 99 && n > -1000) {
                alert(`${ejercicio}
                El número ${n} tiene 3 dígitos`); 
                controlador = false;
            } else {
                alert(`${ejercicio}
                El número ${n} no tiene 3 dígitos.`);
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
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        }
        else {

            if (n < 0) {
                alert(`${ejercicio}
                El número ${n} es negativo`);
                controlador = false;
            } else if (n > 0) {
                alert(`${ejercicio}
                El número ${n} es positivo`);
                controlador = false;
            } else {
                alert(`${ejercicio}
                El número ${n} es neutro`);
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
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
            continue;
        }
        else {

            if (n % 10 == 4) {
                alert(`${ejercicio}
                El número ${n} termina en 4`);
                controlador = false;
            } else {
                alert(`${ejercicio}
                El número ${n} no termina en 4`);
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
            alert(`${ejercicio}
            El dato ingresado no es un número.
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
        alert(`${ejercicio}
        El dato ingresado no es un número.
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

        alert(`${ejercicio}
        -----------Boleta de Venta---------
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
        alert(`${ejercicio}
        El dato ingresado no es un número.
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

        alert(`${ejercicio}
        Sueldo del trabajador: ${sueldo}`);
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
        alert(`${ejercicio}
        El dato ingresado no es un número.
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
                    alert(`${ejercicio}
                    El tipo de cliente no existe. Por favor, digite el tipo de cliente correctamente según lo indicado.`)
                    validacion = false
                    controlador = false
                    break;
            }

            if (validacion == true) {
                alert(`${ejercicio}
                ---------BOLETA DE VENTA----------
                Consumo del cliente: $${compraCliente}
                Descuento: $${descuento}
                Total: $${totalPagar}`)
                controlador = false
            }
        }

    }

});

document.getElementById("btn-ejercicio-08").addEventListener('click', function () {

    let cantidadNotas = 3, sumaNotas = 0, promedio = 0;
    let arrayNotas = [3];
    ejercicio = document.getElementById("btn-ejercicio-08").textContent;

    for (let i = 0; i < 3; i++) {

        arrayNotas[i] = parseInt(prompt(`${ejercicio}
        Ingrese ${i + 1}° nota`));

        if (Number.isNaN(arrayNotas[i])) {
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        } else if (arrayNotas[i] > 20 || arrayNotas[i] < 0) {
            alert(`${ejercicio}
            El dato ingresado no es una nota a evaluar.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        }

        else {
            sumaNotas = sumaNotas + arrayNotas[i];
        }

    };

    promedio = sumaNotas / cantidadNotas;

    if (promedio >= 12.5 && promedio <= 20) {
        alert(`${ejercicio}
        --------RESULTADO FINAL DEL ALUMNO----------
        Promedio: ${promedio.toFixed(2)}
        Estado: Aprobado`);
    } else {
        alert(`${ejercicio}
        --------RESULTADO FINAL DEL ALUMNO----------
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
        alert(`${ejercicio}
        El dato ingresado no es un número.
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

        alert(`${ejercicio}
        Aumento del trabajador: $${aumentoTrabajador.toFixed(2)}
        Total: $${totalTrabajador}`);

    }

});

document.getElementById("btn-ejercicio-10").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-10").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    if (Number.isNaN(n)) {
        alert(`${ejercicio}
        El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (n % 2 == 0) {
            alert(`${ejercicio}
            El número ${n} es par`)
        } else {
            alert(`${ejercicio}
            El número ${n} es impar`)
        }

    }

});

document.getElementById("btn-ejercicio-11").addEventListener('click', function () {

    let cantidad = 3, numeroMayor = 0;
    let arrayNumeros = [];
    ejercicio = document.getElementById("btn-ejercicio-11").textContent;

    for (let i = 0; i < cantidad; i++) {

        arrayNumeros[i] = parseInt(prompt(`${ejercicio}
        Digite ${i + 1}° número`));

        if (Number.isNaN(arrayNumeros[i])) {
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        }

        else {

            if (arrayNumeros[i] > numeroMayor) {
                numeroMayor = arrayNumeros[i];
            } else {
                numeroMayor = numeroMayor
            }

        }

    }

    alert(`${ejercicio}
    Número mayor: ${numeroMayor}`);

});

document.getElementById("btn-ejercicio-12").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-12").textContent;

    let n1 = parseInt(prompt(`${ejercicio}
    Digite 1° número`));

    let n2 = parseInt(prompt(`${ejercicio}
    Digite 2° número`));

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        alert(`${ejercicio}
        El dato o los datos ingresados no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        if (n1 == n2) {
            alert(`${ejercicio}
            ${n1} y ${n2} son números iguales`);
        } else if (n1 > n2) {
            alert(`${ejercicio}
            Número mayor: ${n1}`);
        } else {
            alert(`${ejercicio}
            Número mayor: ${n2}`)
        }

    }

});

document.getElementById("btn-ejercicio-13").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-13").textContent;

    let letra = prompt(`${ejercicio}
    Digite una letra`);

    if (letra > 0 || letra < 1) {
        alert(`${ejercicio}
        El dato ingresados es un número.
        Por favor ingrese el dato solicitado correctamente`);
    }

    else {

        switch (letra) {
            case "a":
                alert(`${ejercicio}
            La letra "${letra}" es una vocal`)
                break;

            case "e":
                alert(`${ejercicio}
                La letra "${letra}" es una vocal`)
                break;

            case "i":
                alert(`${ejercicio}
            La letra "${letra}" es una vocal`)
                break;

            case "o":
                alert(`${ejercicio}
            La letra "${letra}" es una vocal`)
                break;

            case "u":
                alert(`${ejercicio}
            La letra "${letra}" es una vocal`)
                break;

            default:
                alert(`${ejercicio}
            La letra "${letra}" no es una vocal`)
                break;
        }

    }

});

document.getElementById("btn-ejercicio-14").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-14").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número entre 1 y 10`));
    let contador = 0

    if (Number.isNaN(n)) {
        alert(`${ejercicio}
        El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);

    }

    else {

        if (n == 1 || n < 1) {
            alert(`${ejercicio}
        El número "${n}" no es un número primo`);
        } else if (n > 10) {
            alert(`${ejercicio}
        El número "${n}" no está dentro del rango solicitado.
        Por favor, digite un número entre 1 y 10`);
        } else {
            for (let i = 2; i < n - 1; i++) {

                let evaluar = n % i;

                if (evaluar == 0) {
                    contador++;
                }

            }
            if (contador > 0) {
                alert(`${ejercicio}
                El número "${n}" no es primo`);
            } else {
                alert(`${ejercicio}
                El número "${n}" es primo`);
            }
        }


    }

});

document.getElementById("btn-ejercicio-15").addEventListener('click', function () {

    let medida, validarOpcion, controlador = true;

    ejercicio = document.getElementById("btn-ejercicio-15").textContent;

    medida = parseInt(prompt(`${ejercicio}
    Digite una medida a convertir`));

    validarOpcion = parseInt(prompt(`${ejercicio}
    Digite el número según las indicaciones:
    1 : Centímetros a pulgadas
    2 : Libras a kilogramos
    0 : Salir`));


    let centimetrosPulgadas = 2.54, librasKilogramos = 2.205;


    if (Number.isNaN(medida) || Number.isNaN(validarOpcion)) {
        alert(`${ejercicio}
        El dato o datos ingresados no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else if (medida == 0) {
        alert(`${ejercicio}
        El dato ingresado es "${0}", no se puede convertir.
        Por favor ingrese un dato mayor a 0`);
    } else {
        while (controlador) {

            switch (validarOpcion) {
                case 1:
                    alert(`${ejercicio}
                    "${medida}cm" equivale a "${(medida / centimetrosPulgadas).toFixed(2)}in"`);
                    controlador = false;
                    break;

                case 2:
                    alert(`${ejercicio}
                    "${medida}lb" equivale a "${(medida / librasKilogramos).toFixed(2)}kg"`);
                    controlador = false;
                    break;

                case 0:
                    controlador = false;
                    break;

                default:
                    alert(`${ejercicio}
                    Por favor, ingrese una opción válida`);
                    controlador = false;
                    break;
            }

        }
    }
});

document.getElementById("btn-ejercicio-16").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-16").textContent;

    let numero = parseInt(prompt(`${ejercicio}
    Digite un número`));

    if (Number.isNaN(numero)) {
        alert(`${ejercicio}
        El dato ingresado no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        switch (numero) {
            case 1:
                alert(`${ejercicio}
                Lunes`);
                break;

            case 2:
                alert(`${ejercicio}
                Martes`);
                break;

            case 3:
                alert(`${ejercicio}
                Miércoles`);
                break;

            case 4:
                alert(`${ejercicio}
                Jueves`);
                break;

            case 5:
                alert(`${ejercicio}
                Viernes`);
                break;

            case 6:
                alert(`${ejercicio}
                Sábado`);
                break;

            case 7:
                alert(`${ejercicio}
                Domingo`);
                break;

            default:
                alert(`${ejercicio}
                El número digitado no le corresponde a ningún día de la semana`);
                break;
        }

    }
});

document.getElementById("btn-ejercicio-17").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-17").textContent;

    let hour = parseInt(prompt(`${ejercicio}
    Digite la hora`));
    let minutes = parseInt(prompt(`${ejercicio}
    Digite los minutos`));
    let seconds = parseInt(prompt(`${ejercicio}
    Digite los segundos`));

    if (Number.isNaN(hour) || Number.isNaN(minutes) || Number.isNaN(seconds)) {
        alert(`${ejercicio}
        El dato o datos ingresados no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else if (hour < 0 || hour >= 24) {
        alert(`${ejercicio}
        La hora digitada es incorrecta, verificar por favor`);
    } else if (minutes < 0 || minutes >= 60) {
        alert(`${ejercicio}
        Los minutos digitados son incorrectos, verificar por favor`);
    } else if (seconds < 0 || seconds >= 60) {
        alert(`${ejercicio}
        Los segundos digitados son incorrectos, verificar por favor`);
    } else {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        } else if (minutes == 60) {
            minutes = 0;
            hour++;
        } else if (hour == 24) {
            hour = 0;
        }

        alert(`${ejercicio}
        Hora dentro de un 1 segundo: ${hour}:${minutes}:${seconds}`);
    }
});

document.getElementById("btn-ejercicio-18").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-18").textContent;
    let cdsVendidos = parseInt(prompt(`${ejercicio}
    Digite la cantidad de CDs vendidos`));

    let total = 0, controlador = true, validacion = true;

    while (controlador) {

        if (Number.isNaN(cdsVendidos)) {
            alert(`${ejercicio}
            El dato ingresado no es un número.
            Por favor ingrese el dato solicitado correctamente`);
        } else {

            if (cdsVendidos >= 1 && cdsVendidos <= 9) {
                total = cdsVendidos * 10;
                controlador = false;
                validacion;
            } else if (cdsVendidos >= 10 && cdsVendidos <= 99) {
                total = cdsVendidos * 8;
                controlador = false;
                validacion;
            } else if (cdsVendidos >= 100 && cdsVendidos <= 499) {
                total = cdsVendidos * 7;
                controlador = false;
                validacion;
            } else if (cdsVendidos >= 500) {
                total = cdsVendidos * 6;
                controlador = false;
                validacion;
            } else {
                alert(`${ejercicio}
                La cantidad digitada no es la correcta. Verificar por favor.`);
                controlador = false;
                validacion = false;
            }

            if (validacion) {

                let ganancia = total * 0.0825;

                alert(`${ejercicio}
                Precio total del cliente $: ${total.toFixed(2)}
                Ganancia del vendedor $: ${ganancia.toFixed(2)}`);
            }

        }
    }

});

document.getElementById("btn-ejercicio-19").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-19").textContent;

    let id = parseInt(prompt(`${ejercicio}
    Digite el ID del empleado
    10 : Cajero
    11 : Servidor
    12 : Preparador de mezclas
    13 : Mantenimiento`));

    let total = 0;

    if (Number.isNaN(id)) {
        alert(`${ejercicio}
        El dato o datos ingresados no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        let diasTrabajadosEmpleado;

        if (id < 10 || id > 13) {
            alert(`${ejercicio}
            El empleado no existe, digite un id válido`);
        } else {
            diasTrabajadosEmpleado = parseInt(prompt(`${ejercicio}
            Digite la cantidad de días que trabajó el empleado`));

            if (diasTrabajadosEmpleado > 6) {
                alert(`${ejercicio}
                Los días digitados superan los 6 días como límite`);
            } else {
                switch (id) {
                    case 10:
                        total = diasTrabajadosEmpleado * 56;
                        break;
                    case 11:
                        total = diasTrabajadosEmpleado * 64;
                        break;
                    case 12:
                        total = diasTrabajadosEmpleado * 80;
                        break;
                    default:
                        total = diasTrabajadosEmpleado * 13;
                        break;
                }

                alert(`${ejercicio}
                Cantidad de dinero a cancelar al empleado ${id} es de $${total}`);
            }
        }
    }

});

document.getElementById("btn-ejercicio-20").addEventListener('click', function () {

    let contarPares = 0, numeroMayor = 0, resultado, resultado4 = 0, resultado5 = 0, numeroTercerPar, media, suma;
    let arrayNumeros = [4];

    ejercicio = document.getElementById("btn-ejercicio-20").textContent;

    for (let i = 0; i < 4; i++) {

        arrayNumeros[i] = parseInt(prompt(`${ejercicio}
        Ingrese ${i + 1}° número`));

        if (Number.isNaN(arrayNumeros[i])) {
            alert(`${ejercicio}
            El dato no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        }

    }

    for (let j = 0; j < 4; j++) {

        if (arrayNumeros[j] % 2 == 0) {
            contarPares++;
        }

        if (arrayNumeros[j] > numeroMayor) {
            numeroMayor = arrayNumeros[j];
        } else {
            numeroMayor = numeroMayor;
        }

        if (arrayNumeros[2] % 2 == 0) {
            resultado = arrayNumeros[1] ** 2;
            numeroTercerPar = resultado.toString();
        } else {
            numeroTercerPar = "El tercer número no es par";
        }

        if (arrayNumeros[0] < arrayNumeros[3]) {
            resultado4 = resultado4 + arrayNumeros[j];
            let resultadoMedia = resultado4 / 4;
            media = resultadoMedia.toString();
        } else {
            media = "El primer número no es menor que el cuarto número";
        }

        if (arrayNumeros[1] > arrayNumeros[2] && (arrayNumeros[2] >= 50 && arrayNumeros[2] <= 700)) {
            resultado5 = resultado5 + arrayNumeros[j];
            suma = resultado5.toString();
        } else if (arrayNumeros[1] > arrayNumeros[2] && (arrayNumeros[2] < 50 || arrayNumeros[2] > 700)) {
            suma = "No cumple con la segunda condición."
        } else {
            suma = "No cumple con la primera condición."
        }

    }

    alert(`${ejercicio}
    Cantidad de pares: ${contarPares}
    Número mayor de todos: ${numeroMayor}
    Cuadrado del segundo si el tercer número es par: ${numeroTercerPar}
    Si el primero es menor que el cuarto, la media es: ${media}
    Segundo número mayor que el tercero, tercer número comprendido entre 50 y 700: ${suma}`);

});

document.getElementById("btn-ejercicio-21").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-21").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    let resultado = n;

    if (Number.isNaN(n)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);

    } else {
        if (n == 0) {
            alert(`${ejercicio}
            Factorial de ${n} es: 1`);
        } else {
            for (let i = 1; i < n - 1; i++) {
                resultado = resultado * (n - i);
            }

            alert(`${ejercicio}
            Factorial de ${n} es: ${resultado}`);
        }
    }
});

document.getElementById("btn-ejercicio-22").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-22").textContent;

    let cantidadNumeros = parseInt(prompt(`${ejercicio}
    Digite la cantidad de números a sumarse consecutivamente`));

    let suma = 0;

    if (Number.isNaN(cantidadNumeros)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);

    } else {
        for (let i = 0; i < cantidadNumeros; i++) {
            suma = suma + (i + 1);
        }

        alert(`${ejercicio}
        Suma de los ${cantidadNumeros} primeros números es: ${suma}`);
    }
});

document.getElementById("btn-ejercicio-23").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-23").textContent;

    let totalNumeros = parseInt(prompt(`${ejercicio}
    Digite un número para hacer la suma de los números impares`));

    let suma = 0;

    if (Number.isNaN(totalNumeros)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);

    } else {

        if (totalNumeros > 0) {
            for (let i = 0; i < totalNumeros; i++) {

                if ((i + 1) % 2 == 1) {
                    suma = suma + (i + 1);
                } else {
                    suma = suma;
                }
            }

            alert(`${ejercicio}
            Suma de números impares menores o iguales a ${totalNumeros} es: ${suma}`);

        } else {
            alert(`${ejercicio}
            Por favor, digite un número mayor a 0`);
        }
    }
});

document.getElementById("btn-ejercicio-24").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-24").textContent;

    let suma = 0;

    for (let i = 0; i < 1000; i++) {

        if ((i + 1) % 2 == 0) {
            suma = suma + (i + 1);
        }
    }
    alert(`${ejercicio}
    Suma de números pares hasta 1000 es: ${suma}`);
});

document.getElementById("btn-ejercicio-25").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-25").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite un número por favor`));

    if (Number.isNaN(n)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {
        if (n == 0) {
            alert(`${ejercicio}
            Factorial de ${n} es: 1`);
        } else {

            let factorial = [n];
            let resultado = n;

            for (let i = n - 1; i > 0; i--) {
                factorial[i] = i;
                resultado = resultado * factorial[i];
            }

            alert(`${ejercicio}
            Factorial de ${n} es: ${resultado}`);
        }
    }
});

document.getElementById("btn-ejercicio-26").addEventListener('click', function () {

    let dividendo, divisor, resto, cociente;

    ejercicio = document.getElementById("btn-ejercicio-26").textContent;

    dividendo = parseInt(prompt(`${ejercicio}
    Digite un número a divir por favor`));

    divisor = parseInt(prompt(`${ejercicio}
    Digite el divisor por favor`));


    if (Number.isNaN(dividendo) || Number.isNaN(divisor)) {
        alert(`${ejercicio}
        El dato o los datos no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {
        if (divisor == 0) {
            alert(`${ejercicio}
            El divisor no puede ser 0. Por favor, verificar.`);
        } else {

            resto = dividendo;
            cociente = 0;

            while (resto >= divisor) {
                resto = resto - divisor;
                cociente = cociente + 1;
            }

            alert(`${ejercicio}
            Resto: ${resto}
            Cociente: ${cociente}`);
        }
    }
});

document.getElementById("btn-ejercicio-27").addEventListener('click', function () {

    let suma = 0, contador = 0, n, controlador = true;

    ejercicio = document.getElementById("btn-ejercicio-27").textContent;

    do {

        n = parseInt(prompt(`${ejercicio}
        Digite un número`));

        if (Number.isNaN(n)) {
            alert(`${ejercicio}
            El dato no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            controlador = false;
        } else {

            if (n >= 0) {
                suma = suma + n;
                contador++;
                controlador;
            }
        }

    } while (n > 0 && controlador);

    if (controlador) {
        alert(`Media: ${(suma / (contador - 1)).toFixed(2)}`);
    }

});

document.getElementById("btn-ejercicio-28").addEventListener('click', function () {

    let suma = 0;

    ejercicio = document.getElementById("btn-ejercicio-28").textContent;

    let i = 0;

    do {

        suma = suma + (i + 1);

        i++;

    } while (i != 100);

    alert(`${ejercicio}
    Suma: ${suma}`);

});

document.getElementById("btn-ejercicio-29").addEventListener('click', function () {

    let suma = 0;

    ejercicio = document.getElementById("btn-ejercicio-29").textContent;

    let i = 0;

    while (i < 100) {

        suma = suma + (i + 1);

        i++;
    }

    alert(`${ejercicio}
    Suma: ${suma}`);

});

document.getElementById("btn-ejercicio-30").addEventListener('click', function () {

    let suma = 0;

    ejercicio = document.getElementById("btn-ejercicio-30").textContent;

    for (let i = 0; i < 100; i++) {

        suma = suma + (i + 1);

    }

    alert(`${ejercicio}
    Suma: ${suma}`);

});

document.getElementById("btn-ejercicio-31").addEventListener('click', function () {

    let suma = 0, contador = 0, n, controlador = true;

    ejercicio = document.getElementById("btn-ejercicio-31").textContent;

    let i = 0;

    do {

        n = parseInt(prompt(`${ejercicio}
        Ingrese ${i + 1}° número`));

        if (Number.isNaN(n)) {
            alert(`${ejercicio}
            El dato no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        } else {

            if (n % 2 == 0 || n % 2 == 1) {
                suma = suma + n;
                contador++;
            }
        }

        i++;

    } while (i < 10);

    alert(`${ejercicio}
    Media: ${suma / contador}`);

});

document.getElementById("btn-ejercicio-32").addEventListener('click', function () {

    let provincia, ciudad, ciudadMayorPoblacion;
    let poblacion, mayorPoblacion = 0;

    ejercicio = document.getElementById("btn-ejercicio-32").textContent;

    let i,j = 0;

    for (i = 0; i < 3; i++) {
       
        provincia = prompt(`${ejercicio}
        Digite el nombre de la ${i + 1}° provincia`);
        
        for (j = 0; j < 11; j++) {
            
            ciudad = prompt(`${ejercicio}
            Digite el nombre de la ${j + 1}° ciudad de la provincia ${provincia}`);

            poblacion = prompt(`${ejercicio}
            Digite la población de la ciudad ${ciudad}`);
            
            if (poblacion > mayorPoblacion) {
                ciudadMayorPoblacion = ciudad;
                mayorPoblacion = poblacion;
            }
        }
    }

    alert(`${ejercicio}
    La ciudad con mayor población es: ${ciudadMayorPoblacion} con una población de ${mayorPoblacion}`);

});

document.getElementById("btn-ejercicio-33").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-33").textContent;

    let confirmar;

    do {

        prompt(`${ejercicio}
        Digite cualquier dato`);

        confirmar = prompt(`${ejercicio}
        ¿Desea continuar en el programa? (S/N)`);

    } while (confirmar != "S" && confirmar != "s");

    if (confirmar == "S" || confirmar == "s") {
        alert(`${ejercicio}
        Agradecemos su experiencia en el programa. ¡Hasta luego!`);
    }
});

document.getElementById("btn-ejercicio-34").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-34").textContent;

    let tabla = [];

    for (let i = 1; i < 11; i++) {

        tabla[i] = []

        console.log(`${ejercicio}
        -------------------------Tabla ${i}------------------------`);

        for (let j = 1; j < 11; j++) {

            tabla[i][j] = i * j;

            console.log(`${i} X ${j} = ${tabla[i][j]}`);
        }
    }

});

document.getElementById("btn-ejercicio-35").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-35").textContent;

    let arrayNumeros = [20];

    let numeroMayor = 0;

    let i = 0;

    while (i < 20) {

        let numero = parseInt(prompt(`${ejercicio}
        Digite ${i + 1}° número`));

        if (Number.isNaN(numero)) {
            alert(`${ejercicio}
            El dato no es un número.
            Por favor ingrese el dato solicitado correctamente`);
            i--;
        } else {

            arrayNumeros[i] = numero;
        }

        i++;
    }

    for (let j = 0; j < 20; j++) {

        if (arrayNumeros[j] > numeroMayor) {
            numeroMayor = arrayNumeros[j]
        }

    }

    let numeroMenor = numeroMayor;

    for (let a = 1; a < arrayNumeros.length; a++) {

        if (arrayNumeros[a] < numeroMenor) {
            numeroMenor = arrayNumeros[a];
        }

    }

    alert(`${ejercicio}
    Número mayor: ${numeroMayor}
    Número menor: ${numeroMenor}`)

});

document.getElementById("btn-ejercicio-36").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-36").textContent;

    let n = parseInt(prompt(`${ejercicio}
    Digite el número de términos de la serie de Fibonacci`))

    let a = 0, b = 1;

    if (Number.isNaN(n)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        for (let i = 0; i < n; i++) {
            alert(`${ejercicio}
        ${a} + ${b} = ${a + b}`);
            c = a + b;
            a = b;
            b = c;
        }
    }

});

document.getElementById("btn-ejercicio-37").addEventListener('click', function () {

    let residuo, cociente, a, b;

    ejercicio = document.getElementById("btn-ejercicio-37").textContent;

    let n1 = parseInt(prompt(`${ejercicio}
    Digite el 1º número`))

    let n2 = parseInt(prompt(`${ejercicio}
    Digite el 2º número`))

    a = n1;
    b = n2;

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        alert(`${ejercicio}
        El dato o los datos no son un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        while (b !== 0) {
            residuo = a % b;
            a = b;
            b = residuo;
        }

        alert(`${ejercicio}
        M.C.D (${n1};${n2}) es: ${a}`)
    }

});

document.getElementById("btn-ejercicio-38").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-38").textContent;

    let numero = parseInt(prompt(`${ejercicio}
    Digite un número para verificar si es un número perfecto`))

    let sumaDivisores = 0;

    if (Number.isNaN(numero)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        for (let i = 0; i < numero; i++) {

            if (numero % i == 0) {
                sumaDivisores = sumaDivisores + i;
            }
        }

        if (sumaDivisores == numero) {
            alert(`${ejercicio}
            El múmero: ${numero} es perfecto`);
        } else {
            alert(`${ejercicio}
            El múmero: ${numero} no es perfecto`);
        }
    }

});

document.getElementById("btn-ejercicio-39").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-39").textContent;

    let cantidadSerie = parseInt(prompt(`${ejercicio}
    Digite el número de series para la aproximación del número pi`))

    let sumatoriaSerie = 0;

    if (Number.isNaN(cantidadSerie)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        for (let i = 0; i < cantidadSerie - 1; i++) {

            sumatoriaSerie = sumatoriaSerie + Gregory(i);
        }

        alert(`${ejercicio}
        Aproximación del número pi: ${sumatoriaSerie * 4}`);
    }

    function Gregory(n) {

        return resultado = ((-1) ** n) / (2 * n + 1);
    }
});

document.getElementById("btn-ejercicio-39").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-39").textContent;

    let cantidadSerie = parseInt(prompt(`${ejercicio}
    Digite el número de series para la aproximación del número pi`))

    let sumatoriaSerie = 0;

    if (Number.isNaN(cantidadSerie)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        for (let i = 0; i < cantidadSerie - 1; i++) {

            sumatoriaSerie = sumatoriaSerie + Gregory(i);
        }

        alert(`${ejercicio}
        Aproximación del número pi: ${sumatoriaSerie * 4}`);
    }

    function Gregory(n) {

        return resultado = ((-1) ** n) / (2 * n + 1);
    }
});

document.getElementById("btn-ejercicio-40").addEventListener('click', function () {

    ejercicio = document.getElementById("btn-ejercicio-40").textContent;

    var cantidadSerie = parseInt(prompt(`${ejercicio}
    Digite el número de series para la aproximación del número pi`))

    var sumatoriaSerie = 3;

    if (Number.isNaN(cantidadSerie)) {
        alert(`${ejercicio}
        El dato no es un número.
        Por favor ingrese el dato solicitado correctamente`);
    } else {

        for (let i = 0; i < cantidadSerie - 1; i++) {

            sumatoriaSerie = sumatoriaSerie + Nilakantha(i);
        }

        alert(`${ejercicio}
        Aproximación del número pi: ${sumatoriaSerie}`);
    }

    function Nilakantha(n) {

        return resultado = ((-1) ** n * 4) / ((2 * n + 3) ** 3 - (2 * n + 3));
    }
});