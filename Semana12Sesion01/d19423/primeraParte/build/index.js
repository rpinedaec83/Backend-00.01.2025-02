console.log("Hola");
var nombre = "Roberto";
var apellido = "Pineda"; // implicito
nombre = 'David';
apellido = 'Lopez';
var hobbies = 'AeroModelismo';
hobbies = [33, 44, 55];
var edad = 41;
edad = 41.5;
console.log(typeof edad);
var titulos = ['Ingenieria en Sistemas', 'Contabilidad y Auditoria'];
//titulos.push()
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push('dsd');
var ourTuple;
// initialize correctly
ourTuple = [5, false, "tiene que ser un string"];
var objPersona = {
    nombre: "Roberto",
    apellido: 'Pineda',
    edad: 41,
    hobbies: ["Aeromedelismo"]
};
var objPersona2 = {
    nombre: "Roberto",
    apellido: 'Pineda',
    hobbies: ["Aeromedelismo"]
};
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.East;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var respuesta = StatusCodes.Accepted;
console.log(respuesta);
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
var rectangle = {
    height: 20,
    width: 10
};
var rectanguloDeColor = {
    height: 40,
    width: 20,
    color: 'Rojo'
};
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
function saludar(nombre) {
    if (nombre) {
        console.log("Hola ".concat(nombre));
    }
    else {
        console.log("Hola Anonimo");
    }
}
saludar();
var x = 'hello';
console.log(x.length);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
