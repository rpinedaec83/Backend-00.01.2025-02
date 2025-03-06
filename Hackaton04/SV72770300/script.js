//SECTION 01 - RETO 01 - FUNCIONES

/*
EJERCICIO 01
Crea una función que retorne la suma de dos números.
*/

let ejercicio;


document.getElementById('ejercicio-01-reto-01').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-01-reto-01').textContent;

    let n1 = parseInt(prompt(`${ejercicio}\nDigite 1° número`));

    let n2 = parseInt(prompt(`${ejercicio}\nDigite 2° número`));

    let resultado = 0;

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        alert(`${ejercicio}\nEl dato o datos ingresados no son un número`);
    } else {

        const SumaNumeros = () => n1 + n2

        alert(`${ejercicio}\nSuma: ${SumaNumeros()}`);
    }

});

/*
EJERCICIO 02
Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
*/

document.getElementById('ejercicio-02-reto-01').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-02-reto-01').textContent;

    let numero = parseInt(prompt(`${ejercicio}\nDigite el número a elevar`));

    let potencia = parseInt(prompt(`${ejercicio}\nDigite el exponente`));

    if (Number.isNaN(numero) || Number.isNaN(potencia)) {
        alert(`${ejercicio}\nEl dato o los datos ingresados no son un número`);
    } else {

       const PotenciaNumeros = () => {

            let resul = numero;

            for (let index = 0; index < potencia - 1; index++) {

                resul = resul * numero;

            }
            return resul

        }

        alert(`${ejercicio}\nPotencia: ${PotenciaNumeros()}`);
    }

});

/*
EJERCICIO 03
Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/

document.getElementById('ejercicio-03-reto-01').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-03-reto-01').textContent;

    let cantidad = parseInt(prompt(`${ejercicio}\nDigite la cantidad de números a digitar`));

    if (Number.isNaN(cantidad)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let arrayNumeros = [];
        let sumaCubos = 0;
        const SumaNumerosCubos = (numero) => numero ** 3; 

        for (let i = 0; i < cantidad; i++) {

            arrayNumeros[i] = parseInt(prompt(`${ejercicio}\nDigite ${i + 1}° número`));

            if (Number.isNaN(arrayNumeros[i])) {
                alert(`${ejercicio}\nEl dato ingresado no es un número`);
                i--;
            } else {

                sumaCubos += SumaNumerosCubos(arrayNumeros[i]);

            }

        }

        alert(`${ejercicio}\nSuma de cubos: ${sumaCubos}`);
    }

});

/*
EJERCICIO 04
Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
triArea(3, 2) ➞ 3
*/

document.getElementById('ejercicio-04-reto-01').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-04-reto-01').textContent;

    let base = parseInt(prompt(`${ejercicio}\nDigite la medida de la base del triángulo`));
    let altura = parseInt(prompt(`${ejercicio}\nDigite la medida de la altura del triángulo`));

    let medida = prompt(`${ejercicio}
    Digite la unidad de medida para calcular el área del triángulo`);

    if (medida > 0 || medida < 1) {
        alert(`${ejercicio}\nEl dato ingresado no es una medida`);
    }

    else if (Number.isNaN(base) || Number.isNaN(altura)) {
        alert(`${ejercicio}\nEl dato o los datos ingresados no son un número`);
    } else {

        const AreaTriangulo = () =>  (base * altura) / 2;
        alert(`${ejercicio}\nÁrea del triángulo: ${AreaTriangulo()}${medida}2`);
    }

});

/*
EJERCICIO 05
Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática.
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
*/

document.getElementById('ejercicio-05-reto-01').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-05-reto-01').textContent;

    let n1 = parseInt(prompt(`${ejercicio}\nDigite el 1° número`));
    let operador = prompt(`${ejercicio}\nDigite el operador ("+", "-", "x", "/", "%")`);
    let n2 = parseInt(prompt(`${ejercicio}\nDigite el 2° número`));



    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        alert(`${ejercicio}\nEl dato o datos ingresados no son un número`);
    } else {

        const Calculator = () => {

            switch (operador) {
                case "+":
                    return (`Suma: ${n1 + n2}`)
                    break;
                case "-":
                    return (`Resta: ${n1 - n2}`)
                    break;
                case "x":
                case "X":
                    return (`Producto: ${n1 * n2}`)
                    break;
                case "/":
                    return n2 != 0 ? (`División: ${n1 / n2}`) : (`Error: No se puede hacer la división por 0`);
                    break;
                case "%":
                    return (`Residuo: ${n1 % n2}`)
                    break;
                default:
                    return (`Parámetro no reconocido.\nEl operador digitado no es válido`)
                    break;
            }

        }

        alert(`${ejercicio}\n${Calculator()}`);

    }

});





//SECTION 02 - RETO 02 - FUNCIONES

/*
EJERCICIO 01
Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
*/

document.getElementById('ejercicio-01-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-01-reto-02').textContent;

    let nombre = prompt(`${ejercicio}\nDigite su nombre`);
    let apellido = prompt(`${ejercicio}\nDigite su apellido`);
    let edad = parseInt(prompt(`${ejercicio}\nDigite su edad`));

    if (Number.isNaN(edad)) {
        alert(`${ejercicio}\nLa edad ingresada no es un dato válido`);
    } else {

       const DatosPersona = () => `¡Hola!, mi nombre es: ${nombre} ${apellido} y mi edad ${edad}`;

        alert(`${ejercicio}\n${DatosPersona()}`);
    }

});

/*
EJERCICIO 02
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

*/

document.getElementById('ejercicio-02-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-02-reto-02').textContent;

    let cantidad = parseInt(prompt(`${ejercicio}\nDigite la cantidad de números a digitar`));

    if (Number.isNaN(cantidad)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let arrayNumeros = [];
        let sumaCubos = 0;
        const SumOfCubes = (numero) => numero ** 3;

        for (let i = 0; i < cantidad; i++) {

            arrayNumeros[i] = parseInt(prompt(`${ejercicio}\nDigite ${i + 1}° número`));

            if (Number.isNaN(arrayNumeros[i])) {
                alert(`${ejercicio}\nEl dato ingresado no es un número`);
                i--;
            } else {

                sumaCubos += SumOfCubes(arrayNumeros[i]);

            }

        }

        alert(`${ejercicio}\nSuma de cubos: ${sumaCubos}`);
    }

});

/*
EJERCICIO 03
Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

*/

document.getElementById('ejercicio-03-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-03-reto-02').textContent;

    const TipoDato = (dato) => typeof dato;

    alert(`${ejercicio}\n${TipoDato({ nombre: "Emerson", edad: 20 })}`);

});

/*
EJERCICIO 04
Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

*/

document.getElementById('ejercicio-04-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-04-reto-02').textContent;

    let cantidad = parseInt(prompt(`${ejercicio}\nDigite la cantidad de números a digitar`));

    if (Number.isNaN(cantidad)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let arrayNumeros = [];
        let sumaNumeros = 0;
        const SumaNumeros = (...datos) => {
            datos.forEach(element => {
                sumaNumeros += element;
            }); return sumaNumeros
        }

        for (let i = 0; i < cantidad; i++) {

            arrayNumeros[i] = parseInt(prompt(`${ejercicio}\nDigite ${i + 1}° número`));

            if (Number.isNaN(arrayNumeros[i])) {
                alert(`${ejercicio}\nEl dato ingresado no es un número`);
                i--;
            }
        }

        alert(`${ejercicio}\nSuma: ${SumaNumeros(...arrayNumeros)}`);
    }

});

/*
EJERCICIO 05
Crear una función que reciba un array de valores y filtre los valores que no son string

*/

document.getElementById('ejercicio-05-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-05-reto-02').textContent;

    let arrayValores = [
        7254,
        "¿Cómo estás?",
        true,
        function NumerosPares() { },
        objPersona = ({
            nombre: 'Emerson',
            edad: 15
        }),
        objPersona.nombre,
        objPersona.edad,
        "Soy un arreglo",
        false
    ];

    const EncontrarValores = (valores) => typeof valores !== 'string';

    alert(`${ejercicio}\nValores que no son un string\n${arrayValores.filter(EncontrarValores).join(', ')}`);
});

/*
EJERCICIO 06
Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

*/

document.getElementById('ejercicio-06-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-06-reto-02').textContent;

    let cantidad = parseInt(prompt(`${ejercicio}\nDigite la cantidad de números a digitar`));

    if (Number.isNaN(cantidad)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let arrayNumeros = [];

        const MinMax = (...datos) => {

            let numeroMenor = Math.min(...datos);
            let numeroMayor = Math.max(...datos);
            return { numeroMenor, numeroMayor };
        }

        for (let i = 0; i < cantidad; i++) {

            arrayNumeros[i] = parseInt(prompt(`${ejercicio}\nDigite ${i + 1}° número`));

            if (Number.isNaN(arrayNumeros[i])) {
                alert(`${ejercicio}\nEl dato ingresado no es un número`);
                i--;
            }
        }

        let { numeroMenor, numeroMayor } = MinMax(...arrayNumeros)

        alert(`${ejercicio}\nNúmero mínimo: ${numeroMenor}\nNúmero mayor: ${numeroMayor}`);
    }
});

/*
EJERCICIO 07
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

*/

document.getElementById('ejercicio-07-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-07-reto-02').textContent;

    let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const FormatPhoneNumber = (...numeros) => {

        if (numeros.length != 10) {
            return `Formato de número inválido`;
        } else {
            let segmento1 = numeros.slice(0, 3);
            segmento1 = segmento1.join("");
            let segmento2 = numeros.slice(3, 6);
            segmento2 = segmento2.join("");
            let segmento3 = numeros.slice(6, 9);
            segmento3 = segmento3.join("");

            return `(${segmento1}) ${segmento2}-${segmento3}`;
        }
    }

    alert(`${ejercicio}\nNúmero telefónico ${FormatPhoneNumber(...arrayNumeros)}`);

    /*

    Se puede hacer uso de una expresión regular para validar el formato telefónico de una cadena de números y strings.

    let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let FormatPhoneNumber = (...numeros) => {

        return (`(${numeros[0]}${numeros[1]}${numeros[2]}) ${numeros[3]}${numeros[4]}${numeros[5]}-${numeros[6]}${numeros[7]}${numeros[8]}${numeros[9]}`)

    }

    const expresionTelefonica = /^\(\d{3}\) \d{3}-\d{4}$/;

    let formatoTelefonico = FormatPhoneNumber(...arrayNumeros)

    if (expresionTelefonica.test(formatoTelefonico)) {
        alert(`${ejercicio}\nNúmero telefónico: ${formatoTelefonico}`);
    } else {
        alert(`${ejercicio}\nFormato telefónico no válido`);
    }
    */
});

/*
EJERCICIO 08
Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

*/

document.getElementById('ejercicio-08-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-08-reto-02').textContent;

    let arrayNumeros = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
    let arrayNumerosMayores = []

    const NumerosMayoresMatriz = (...numeros) => {

        for (let i = 0; i < numeros.length; i++) {

            let numeroMayor = Math.max(...numeros[i])
            arrayNumerosMayores.push(numeroMayor)

        }

        return arrayNumerosMayores;

    }

    alert(`${ejercicio}\nNúmeros mayores de cada matriz: [${NumerosMayoresMatriz(...arrayNumeros).join(', ')}]`);

});

/*
EJERCICIO 09
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
The first "c" has index 0, the last "c" has index 8.

*/

document.getElementById('ejercicio-09-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-09-reto-02').textContent;

    let palabra = prompt(`${ejercicio}\nDigite una palabra`);
    let caracter = prompt(`${ejercicio}\nDigite un caracter`)

    if (Number.isNaN(palabra) || Number.isNaN(caracter)) {
        alert(`${ejercicio}\nEl dato o los datos ingresados son un número`);
    } else if (caracter.length > 1) {
        alert(`${ejercicio}\nHas ingresado más de 1 caracter`)
    } else {

        const CharIndex = () => {

            let primerIndice = palabra.indexOf(caracter);
            let ultimoIndice = palabra.lastIndexOf(caracter)
            return { primerIndice, ultimoIndice }

        }

        let { primerIndice, ultimoIndice } = CharIndex();

        if (primerIndice < 0) {
            alert(`${ejercicio}\nEl caracter que digitó no se encuentra en la palabra que digitó`);
        } else {
            alert(`${ejercicio}\nEl primer índice del caracter "${caracter}" tiene la posición "${primerIndice}"
            El último índice del caracter "${caracter}" tiene la posición "${ultimoIndice}`);
        }


    }

});

/*
EJERCICIO 10
Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*/

document.getElementById('ejercicio-10-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-10-reto-02').textContent;

    let objetoNumeros = ({ a: 1, b: 2 })

    let ToArray = (objeto) => {

        return Object.entries(objeto)
    }

    alert(`${ejercicio}\n Objeto a Array:${JSON.stringify(ToArray(objetoNumeros))}`)

});

/*
EJERCICIO 11
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

*/

document.getElementById('ejercicio-11-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-11-reto-02').textContent;

    let getBudgets = ([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 }
    ])

    let ObtenerPresupuesto = (prespuestoObjeto) => {
        let suma = 0;
        for (let i = 0; i < prespuestoObjeto.length; i++) {
            suma += prespuestoObjeto[i].budget;
        }
        return suma;
    }

    alert(`${ejercicio}\n Total presupuesto $${ObtenerPresupuesto(getBudgets)}`)

});

/*
EJERCICIO 12
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]

*/

document.getElementById('ejercicio-12-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-12-reto-02').textContent;

    let getStudentNames = ([
        { name: "Steve" },
        { name: "Mike" },
        { name: "John" }
    ])

    let arrayNombres = []

    let MatrizNombresEstudiantes = (nombres) => {

        for (let i = 0; i < nombres.length; i++) {
            arrayNombres[i] = nombres[i].name;
        }
        return arrayNombres;
    }

    alert(`${ejercicio}\nNombres: ${JSON.stringify(MatrizNombresEstudiantes(getStudentNames))}`)

});

/*
EJERCICIO 13
Escriba una función que convierta un objeto en una matriz de claves y valores.

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


*/

document.getElementById('ejercicio-13-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-13-reto-02').textContent;

    let objectToArray = ({
        likes: 2,
        dislikes: 3,
        followers: 10
    })

    let ObjetoArreglo = (valores) => {

        return Object.entries(valores)
    }

    alert(`${ejercicio}\nNombres: ${JSON.stringify(ObjetoArreglo(objectToArray))}`)

});

/*
EJERCICIO 14
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
1² + 2² + 3² =
1 + 4 + 9 =
14

*/

document.getElementById('ejercicio-14-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-14-reto-02').textContent;

    let numero = parseInt(prompt(`${ejercicio}\nDigite un número`))

    if (Number.isNaN(numero)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let squaresSum = () => {

            let suma = 0;

            for (let i = 1; i <= numero; i++) {

                suma += (i ** 2)

            }
            return suma;
        }

        alert(`${ejercicio}\nSuma de los números cuadrados: ${squaresSum()}`)
    }

});

/*
EJERCICIO 15
Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

*/

document.getElementById('ejercicio-15-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-15-reto-02').textContent;

    let multiplyByLength = ([2, 3, 1, 0]);
    let arrayValoresMultiplicados = [];

    let MultiplicarValoresMatriz = () => {
        let resultado
        multiplyByLength.forEach(valor => {

            resultado = valor * multiplyByLength.length
            arrayValoresMultiplicados.push(resultado)
        });

        return arrayValoresMultiplicados

    }

    alert(`${ejercicio}\nMultiplicación de los valores [${multiplyByLength}] => ${JSON.stringify(MultiplicarValoresMatriz())}`)

});

/*
EJERCICIO 16
Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

countdown(5) ➞ [5, 4, 3, 2, 1, 0]

*/

document.getElementById('ejercicio-16-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-16-reto-02').textContent;

    let numero = parseInt(prompt(`${ejercicio}\nDigite un número`))

    if (Number.isNaN(numero)) {
        alert(`${ejercicio}\nEl dato ingresado no es un número`);
    } else {

        let MatrizNumeros = () => {

            let arrayNumeros = [];

            i = numero;
            while (i >= 0) {
                arrayNumeros.push(i);
                i--;
            }
            return arrayNumeros

        }

        alert(`${ejercicio}\nMatriz de números: ${JSON.stringify(MatrizNumeros())}`)
    }

});

/*
EJERCICIO 17
Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
Smallest number is -50, biggest is 32.


*/

document.getElementById('ejercicio-17-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-17-reto-02').textContent;

    let arrayNumeros = ([10, 4, 1, 4, -10, -50, 32, 21]);

    let MatrizNumeros = () => {

        let numeroMayor = Math.max(...arrayNumeros)
        let numeroMenor = Math.min(...arrayNumeros)
        let diferencia = numeroMayor - numeroMenor

        return { numeroMenor, numeroMayor, diferencia }

    }

    let { numeroMenor, numeroMayor, diferencia } = MatrizNumeros();

    alert(`${ejercicio}\nNúmero menor: ${numeroMenor}, mayor: ${numeroMayor}, diferencia: ${diferencia}`)


});

/*
EJERCICIO 18
Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

*/

document.getElementById('ejercicio-18-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-18-reto-02').textContent;

    let arrayValores = ([1, 2, 3, "x", "y", 10]);

    let filterList = (valores) => {

        return typeof valores === 'number';
    }

    alert(`${ejercicio}\n${JSON.stringify(arrayValores.filter(filterList))}`)

});

/*
EJERCICIO 19
Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.

repeat(13, 5) ➞ [13, 13, 13, 13, 13]

*/

document.getElementById('ejercicio-19-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-19-reto-02').textContent;

    let numero = parseInt(prompt(`${ejercicio}\nDigite un número`));
    let veces = parseInt(prompt(`${ejercicio}\nDigite la cantidad de veces a repetir el número digitado`));

    if (Number.isNaN(numero) || Number.isNaN(veces)) {
        alert(`${ejercicio}\nEl dato o datos ingresados no son un número`);
    } else {

        let Repeat = (elemento, veces) => {

            let arrayNumeros = [];

            if (veces < 1) {
                return `La cantidad de repeticiones no puede ser 0 o un valor negativo`;
            } else {

                for (let i = 0; i < veces; i++) {
                    arrayNumeros.push(elemento)
                }

                return `[${arrayNumeros.join(', ')}]`
            }
        }

        alert(`${ejercicio}\n${Repeat(numero, veces)}`);
    }

});

/*
EJERCICIO 20
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

"apples and bananas".vreplace("u") ➞ "upplus und bununus"

*/

document.getElementById('ejercicio-20-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-20-reto-02').textContent;

    let vocal = "u";
    let dato = "apples and bananas";

    let vreplace = (dato, vocal) => {

        return resul = dato.replace(/[aeiouáéíóúàèìòù]/gi, vocal)
    }

    let resultado = vreplace(dato, vocal);
    alert(`${ejercicio}\n"${dato}"\n"${resultado}"`);

});

/*
EJERCICIO 21
Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

*/

document.getElementById('ejercicio-21-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-21-reto-02').textContent;

    let FindNemo = (cadena) => {

        let palabras = cadena.split(" ");
        console.log(palabras)

        for (let i = 0; i < palabras.length; i++) {

            if (palabras[i] === "Nemo") {
                return `I found Nemo at ${i + 1}!`
            }

        }
    }

    alert(`${ejercicio}\n${FindNemo("I am finding Nemo !")}`)
});

/*
EJERCICIO 22
Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"

*/

document.getElementById('ejercicio-22-reto-02').addEventListener('click', (e) => {

    ejercicio = document.getElementById('ejercicio-22-reto-02').textContent;

    let CapLast = (palabra) => {

        let letraCapitazliada = palabra.at(-1).toUpperCase();
        return palabra.slice(0, -1) + letraCapitazliada;

    }

    alert(`${ejercicio}\n"${CapLast("hello")}"`)

});
