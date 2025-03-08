PREGUNTAS:
-  ¿Cómo defines una función?

    En JavaScript, se puede definir una función de diferentes maneras, algunas son:

    1. Función Declarativa (Función Regular)
    Este es el tipo más común de definición de funciones en JavaScript.
    Ejm:

        function suma(a, b) {
            return a + b;
        }

        console.log(suma(3, 4));

    2. Función de Expresión (Función Anónima)
    Una función también puede ser asignada a una variable. Esta es llamada una función anónima, porque no tiene un nombre.
    Ejm:

        const resta = function(a, b) {
            return a - b;
        };

        console.log(resta(5, 3));

    3. Función de Flecha (Arrow Function)
    Las funciones de flecha son una forma más concisa de definir funciones. La sintaxis es más compacta, y no necesitan la palabra clave function. Además, no tienen su propio contexto de this, lo cual es importante en algunos casos.
    Ejm:

        const multiplicar = (a, b) => a * b;

        console.log(multiplicar(2, 3));

    4. Función Inmediata (IIFE - Immediately Invoked Function Expression)
    Una función que se define y se invoca inmediatamente. Esto es útil para crear un ámbito (scope) aislado y evitar la contaminación del espacio global.
    Ejm:

        (function() {
            console.log("¡Hola desde la función IIFE!");
        })();


-  ¿Hasta cuantos argumentos puedes declarar en una función?

    En JavaScript, no hay un límite explícito en el número de argumentos que puedes declarar en una función. Sin embargo, hay algunas consideraciones a tener en cuenta:

    1. Número de argumentos declarados en la función
    Puedes declarar cualquier cantidad de parámetros en la definición de una función.
    Ejm:

        function ejemplo(a, b, c, d, e) {
            console.log(a, b, c, d, e);
        }

    2. Acceder a más parámetros de los definidos
    Si invocas la función con más parámetros de los que has declarado, esos parámetros adicionales no serán directamente accesibles como variables locales, pero puedes acceder a ellos mediante el objeto especial arguments.
    Ejm:

        function ejemplo(a, b) {
            console.log(a, b);  // Imprime los dos primeros parámetros
            console.log(arguments);  // Imprime todos los parámetros pasados a la función
        }

        ejemplo(1, 2, 3, 4, 5);  // Salida: 1, 2, [1, 2, 3, 4, 5]

        (El objeto arguments es un array-like (no es un array real) que contiene todos los argumentos pasados a la función, sin importar cuántos hayas declarado.)

    3. Uso de Parámetros Rest (...args)
    Una forma moderna y más flexible de manejar un número indeterminado de argumentos es utilizar parámetros rest. Con los parámetros rest, puedes capturar todos los argumentos no declarados en un solo array.
    Ejm:

        function ejemplo(a, b, ...restoDeArgumentos) {
            console.log(a, b);  // Los dos primeros parámetros
            console.log(restoDeArgumentos);  // El resto de los argumentos en un array
        }

        ejemplo(1, 2, 3, 4, 5);  // Salida: 1 2 [3, 4, 5]

    4. Limitación en la cantidad de argumentos
    En términos prácticos, el número máximo de parámetros que puedes pasar depende de los límites de la memoria y de la pila del sistema. Aunque JavaScript permite definir un número indefinido de parámetros, en la mayoría de los entornos y navegadores modernos, las funciones pueden manejar hasta 10,000-20,000 argumentos sin problemas. Si pasas demasiados argumentos, podrías encontrar errores de rendimiento o de memoria.