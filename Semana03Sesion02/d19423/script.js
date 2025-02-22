console.log("Inicio del Programa");

let bandera = true;

while (bandera) {
  let respuesta = 0;
  let primerNumero = parseInt(prompt("Escribe el primer numero"));
  let segundoNumero = parseInt(prompt("Escribe el segundo numero"));
  if (Number.isNaN(primerNumero) || Number.isNaN(segundoNumero)) {
    console.log("uno de los dos es NAN");
    alert("lo que ingresaste no es valido");
    continue;
  } else {
    let opcion = parseInt(
      prompt(`Escoge la operacion que deseas realizar
        1 para sumar
        2 para restar
        3 para multiplicar
        4 para dividir o
        0 para salir`)
    );

    console.log(`La opcio que se escogio es ${opcion}`);
    let mostrarRespuesta = true;
    switch (opcion) {
      case 1:
        respuesta = primerNumero + segundoNumero;
        break;
      case 2:
        respuesta = primerNumero - segundoNumero;
        break;
      case 3:
        respuesta = primerNumero * segundoNumero;
        break;
      case 4:
        respuesta = primerNumero / segundoNumero;
        break;
      case 0:
        bandera = false;
        mostrarRespuesta = false;
        break;
      default:
        alert(`La opcion: "${opcion}" no es valido`);
        mostrarRespuesta = false;
        break;
    }
    if (mostrarRespuesta) {
      alert(`La respuesta es: ${respuesta}`);
    }
  }
}
//Vaiidar que sucede si se ingresa otro caracter cuando pido los numeros para operar
