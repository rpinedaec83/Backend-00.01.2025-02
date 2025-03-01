//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y 
// edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const concatenarDatos = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;

const resultado = concatenarDatos("Sebastián", "Yabiku", 33);
console.log(resultado);