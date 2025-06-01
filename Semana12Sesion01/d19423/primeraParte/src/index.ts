console.log("Hola");
let nombre: string = "Roberto";
let apellido = "Pineda";// implicito

nombre = 'David';
apellido = 'Lopez';

let hobbies: any = 'AeroModelismo';
hobbies = [33,44,55];

let edad: number = 41;
edad = 41.5;

console.log(typeof edad);

let titulos: readonly string[]=['Ingenieria en Sistemas', 'Contabilidad y Auditoria']

//titulos.push()
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push('dsd');

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "tiene que ser un string"];

let objPersona : {
    nombre: string,
    apellido: string,
    edad: number,
    hobbies: string[]
}={
    nombre:"Roberto",
    apellido: 'Pineda',
    edad:41,
    hobbies:["Aeromedelismo"]
}

let objPersona2 : {
    nombre: string,
    apellido: string,
    edad?: number,
    hobbies: string[]
}={
    nombre:"Roberto",
    apellido: 'Pineda',
   
    hobbies:["Aeromedelismo"]
}

enum CardinalDirections {
    North,
    East,
    South,
    West
  }

let currentDirection = CardinalDirections.East;

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }

let respuesta = StatusCodes.Accepted;

console.log(respuesta)

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

interface Rectangle {
    height: number,
    width: number
  }

  interface ColoredRectangle extends Rectangle {
    color: string
  }

  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  let rectanguloDeColor: ColoredRectangle={
    height:40,
    width:20,
    color:'Rojo'
  }

function sumar(primerNumero: number, segundoNumero: number): number{

    return primerNumero + segundoNumero;
}


function saludar(nombre?:string):void{
    if(nombre){
        console.log(`Hola ${nombre}`)
    }else{
        console.log(`Hola Anonimo`)
    }
}

saludar()

let x: unknown = 'hello';
console.log((x as string).length);


class Person {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private