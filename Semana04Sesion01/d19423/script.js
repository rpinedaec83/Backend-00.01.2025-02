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

//hanoi(3, 'A', 'B', 'C');

let arrNotas = [20, 16, 14, 8, 20, 12];

console.log(arrNotas);

function ordenamientoBurbuja(arr){
    let n = arr.length;
    console.log(n);
    let bandera = true;
    do {
        console.log("Inicio del bucle");
        bandera = false;
        for (let i = 0; i < n-1; i++) {
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                console.log(arr[i])
                bandera = true;
            }
        }
        n--;
    } while (bandera);
    return arr;
}

console.log(ordenamientoBurbuja(arrNotas));

let arrEdades = [41, 36, 28, 3, 4, 23,45,63,45,66,77,88];

console.log(arrEdades.sort());

console.log(arrEdades.sort(function(a, b){return a - b}))
console.log(arrEdades.sort(function(a, b){return b - a}))


let arrListaPrecios = [6.9, 26.30, 13.50, 19.18, 14.92, 16.91, 8.5, 9.45];

console.log(arrListaPrecios)

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length -1 ; i++) {
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
        
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort(arrListaPrecios))

let arrDataConsolidada = new Array();

let arrHijos = ["Pancho", "Lucius"];
let arrHajas = ["Selina", "Felipa"];

let arrMisHijos = arrHijos.concat(arrHajas);
console.log(arrMisHijos)


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result)

console.log(ages.join('|'))