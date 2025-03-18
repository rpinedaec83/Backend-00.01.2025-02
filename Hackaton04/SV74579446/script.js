//RETO 1: 

//EJERCICIO 01: Crea una función que retorne la suma de dos números.
function ejercicio01(){
    let numero=parseInt(prompt("Ingrese el primer número"))
    let numero2=parseInt(prompt("Ingrese el segundo número"))
    
    let suma=numero+numero2
    alert(`La suma es: ${suma}`)
}

//EJERCICIO 02: Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function ejercicio02(){
    let pot=parseInt(prompt("Ingrese la potencia que desea calcular:"))
    let num=parseFloat(prompt("Ingrese el numero:"))

    let potencia= Math.pow(num, pot)

    alert(`El resultado de la operación es: ${potencia}`)
}

/*EJERCICIO 03: Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
 Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855*/

function ejercicio03(){
    let num1=parseInt(prompt("Ingrese el primer numero"))
    let num2=parseInt(prompt("Ingrese el segundo numero"))
    let num3=parseInt(prompt("Ingrese el tercer numero"))

    const sumaDeCubos = (num1, num2, num3) => {
    return Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);
    }

    let resultado = sumaDeCubos(num1, num2, num3);
    alert(`El resultado de la suma de los cubos es: ${resultado}`);

}

/*EJERCICIO 04: Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3 */
function ejercicio04(){
    let base=parseInt(prompt("Ingrese la base del triangulo"))
    let altura=parseInt(prompt("Ingrese la altura del triangulo")) 

    let area= (base*altura)/2

    alert(`La área del triangulo es: ${area}`)
}

/*EJERCICIO 05: Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4*/

function calculator(num1, operacion, num2) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}

function ejercicio05() {
    let num1 = parseFloat(prompt("Ingrese el primer número"));
    let num2 = parseFloat(prompt("Ingrese el segundo número"));
    let operacion = prompt("Ingrese el operador (+, -, x, /, %)");

    const resultado = calculator(num1, operacion, num2);
    alert(`El resultado es: ${resultado}`);
}

//----------------------------PASAMOS A LA TERCERA PARTE DE LA TAREA ----------------------------------------

//RETO 2

/* EJERCICIO 01: Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad 
y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”*/

/* Definicion de funcion Arrow: están diseñadas para simplificar la sintaxis de las funciones, eliminando la 
necesidad de escribir la palabra clave function y usando una sintaxis más compacta. */
const ejercicioR2_01 = () => {
    const nombre = prompt("Ingresa tu nombre:");
    const apellido = prompt("Ingresa tu apellido:");
    const edad = prompt("Ingresa tu edad:");

    const juntaNombre = (nombre, apellido, edad) => `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

    alert(juntaNombre(nombre, apellido, edad));
}

/* EJERCICIO 02: Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855*/

const ejercicioR2_02 = () => {
    let num1 = parseInt(prompt("Ingrese el primer número"));
    let num2 = parseInt(prompt("Ingrese el segundo número"));
    let num3 = parseInt(prompt("Ingrese el tercer número"));

    const sumaDeCubos = (num1, num2, num3) => 
        Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(num3, 3);

    let resultado = sumaDeCubos(num1, num2, num3);
    alert(`El resultado de la suma de los cubos es: ${resultado}`);
}

/*EJERCICIO 03: Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js*/

const ejercicioR2_03 = () => {
    let valor = prompt("Digite el valor:");

    // Intentar convertir el valor a un número
    let valorConvertido = Number(valor);

    // Verificar si el valor ingresado es un número, String, o Boolean
    if (valor === null) {
        alert("El valor ingresado es null");
    } else if (valor === "true" || valor === "false") {
        alert("El valor ingresado es un Boolean");
    } else if (typeof valor === 'string') {
        alert("El valor ingresado es un String");
    } else if (!isNaN(valorConvertido) && valor !== "") { 
        alert("El valor ingresado es un Number");
    } else if (Array.isArray(valor)) {
        alert("El valor ingresado es un Array");
    } else if (typeof valor === 'object') {
        alert("El valor ingresado es un Object");
    } else if (typeof valor === 'function') {
        alert("El valor ingresado es una Function");
    } else {
        alert("Tipo de valor no reconocido");
    }
}

/*EJERCICIO 04: Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)*/

const ejercicioR2_04 = ( ) => {

let input = prompt("Ingrese los números separados por coma (ejemplo: 1, 2, 3):");

let numeros = input.split(',').map(Number);

let resultado = sumarArgumentos(numeros);

alert(`La suma de los números es: ${resultado}`);

};
/*EJERCICIO 05: Crear una función que reciba un array de valores y filtre los valores que no son string*/
const ejercicioR2_05 = () => {
    const values = prompt("Ingresa varios valores separados por coma:").split(',');
    const result = values.filter(value => typeof value.trim() === 'string');
    alert(`Los valores que son strings: ${result}`);
};

/*EJERCICIO 06: Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/
const ejercicioR2_06 = () => {
    const arr = prompt("Ingresa los números separados por coma:").split(',').map(Number);
    const result = [Math.min(...arr), Math.max(...arr)];
    alert(`El número mínimo es: ${result[0]}, el número máximo es: ${result[1]}`);
};

/*EJERCICIO 07: Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"*/
const ejercicioR2_07 = () => {
    const arr = prompt("Ingresa 10 números separados por coma:").split(',').map(Number);
    const result = `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
    alert(`El número de teléfono es: ${result}`);
};


/* EJERCICIO 08: Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]*/

const ejercicioR2_08 = () => {
    const input = prompt("Ingresa las submatrices separadas por coma (ejemplo: [1,2,3],[4,5,6]):");
    const arr = input.split('],[').map(subArr => subArr.replace('[', '').replace(']', '').split(',').map(Number));
    const result = arr.map(subArr => Math.max(...subArr));
    alert(`Los mayores números de cada submatriz son: ${result}`);
};

/* EJERCICIO 09: Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
 The first "c" has index 0, the last "c" has index 8.*/

 const ejercicioR2_09 = () => {
    const word = prompt("Ingresa una palabra:");
    const char = prompt("Ingresa un carácter:");
    const result = [word.indexOf(char), word.lastIndexOf(char)];
    alert(`El primer índice de "${char}" es: ${result[0]}, el último índice es: ${result[1]}`);
};

/*EJERCICIO 10: Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/

const ejercicioR2_10 = () => {
    const input = prompt("Ingresa un objeto (ejemplo: {a:1, b:2}):");
    const obj = JSON.parse(input);
    const result = Object.entries(obj);
    alert(`La matriz de claves y valores es: ${JSON.stringify(result)}`);
};

/*EJERCICIO 11: Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700*/

const ejercicioR2_11 = () => {
    const input = prompt("Ingresa los presupuestos en formato JSON (ejemplo: [{name: 'John', budget: 10000}, ...]):");
    const arr = JSON.parse(input);
    const result = arr.reduce((sum, person) => sum + person.budget, 0);
    alert(`La suma total de los presupuestos es: ${result}`);
};

/*EJERCICIO 12: Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]*/

const ejercicioR2_12 = () => {
    const input = prompt("Ingresa los nombres de los estudiantes en formato JSON (ejemplo: [{name: 'John'}, {name: 'Steve'}]):");
    const arr = JSON.parse(input);
    const result = arr.map(student => student.name);
    alert(`Los nombres de los estudiantes son: ${result.join(", ")}`);
};

/*EJERCICIO 13: Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/

const ejercicioR2_13 = () => {
    const input = prompt("Ingresa un objeto (ejemplo: {a:1, b:2}):");
    const obj = JSON.parse(input);
    const result = Object.entries(obj);
    alert(`La matriz de claves y valores es: ${JSON.stringify(result)}`);
};

/*EJERCICIO 14: Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
1² + 2² + 3² = 1 + 4 + 9 =14*/

const ejercicioR2_14 = () => {
    const n = parseInt(prompt("Ingresa el valor de n:"));
    const result = Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((a, b) => a + b, 0);
    alert(`La suma de los cuadrados es: ${result}`);
};

/* EJERCICIO 15: Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0] */

const ejercicioR2_15 = () => {
    const arr = prompt("Ingresa los números separados por coma:").split(',').map(Number);
    const result = arr.map(value => value * arr.length);
    alert(`Los valores multiplicados por la longitud son: ${result}`);
};

/*EJERCICIO 16: Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]*/

const ejercicioR2_16 = () => {
    const n = parseInt(prompt("Ingresa un número para contar hacia atrás:"));
    const result = Array.from({ length: n + 1 }, (_, i) => n - i);
    alert(`La cuenta regresiva es: ${result.join(", ")}`);
};

/* EJERCICIO 17: Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
Smallest number is -50, biggest is 32.*/

const ejercicioR2_17 = () => {
    const arr = prompt("Ingresa los números separados por coma:").split(',').map(Number);
    const result = Math.max(...arr) - Math.min(...arr);
    alert(`La diferencia entre el número más grande y el más pequeño es: ${result}`);
};

/* EJERCICIO 18: Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]*/

const ejercicioR2_18 = () => {
    const arr = prompt("Ingresa los elementos separados por coma (ejemplo: 1,2,3,x,y,10):").split(',');
    const result = arr.filter(value => !isNaN(value) && value.trim() !== '');
    alert(`La nueva matriz con solo enteros es: ${result}`);
};

/* EJERCICIO 19: Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]*/
const ejercicioR2_19 = () => {
    const element = prompt("Ingresa el elemento a repetir:");
    const times = parseInt(prompt("Ingresa cuántas veces repetir el elemento:"));
    const result = Array(times).fill(element);
    alert(`La matriz con el elemento repetido es: ${result}`);
};

/* EJERCICIO 20: Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"*/

const ejercicioR2_20 = () => {
    const text = prompt("Ingresa una cadena de texto:");
    const vowel = prompt("Ingresa la vocal con la que reemplazar:");
    const result = text.vreplace(vowel);
    alert(`El resultado con las vocales reemplazadas es: ${result}`);
};

/*EJERCICIO 21:Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"*/

const ejercicioR2_21 = () => {
    const text = prompt("Ingresa la cadena para buscar 'Nemo':");
    const index = text.indexOf("Nemo");
    if (index !== -1) {
        alert(`¡Encontré a Nemo en el índice ${index + 1}!`);
    } else {
        alert("No encontré a Nemo.");
    }
};

/*EJERCICIO 22: Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"*/
const ejercicioR2_22 = () => {
    const text = prompt("Ingresa una palabra:");
    const result = text.split(' ').map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(' ');
    alert(`La palabra con la última letra capitalizada es: ${result}`);
};
