console.log("Hola Inicio del programa")
//alert("Hola desde el alert de Javascript")
//prompt("Digita tu Edad")

function sumar(primerNumero, segundoNumero = 0){
    return primerNumero + segundoNumero;
}

let respuesta = sumar(44)

console.log(respuesta)

let getDate = function(){
    return new Date();
}

console.log(getDate())

let getYear =()=>{return new Date().getFullYear()}

console.log(getYear())

let otraFuncion = ()=>{
  return  prueba() + otraPrueba();
}

console.log(otraFuncion());
//console.log(otraFuncion.otraPrueba());

function prueba(){
    return "Si se puede"
}
function otraPrueba(){
    return "Tambien se pudo"
}



function hanoi(numeroDiscos, origen, auxiliar, destino){
    if(numeroDiscos === 1){
        console.log(`Mover disco de ${origen}  ${destino}`);
        return;
    }
    hanoi(numeroDiscos-1, origen, destino, auxiliar);
    console.log(`Mover disco de ${origen} a ${destino}`)
    hanoi(numeroDiscos-1, auxiliar, origen, destino)
}

hanoi(3, 'A', 'B', 'C');