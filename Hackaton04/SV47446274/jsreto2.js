//Ejercicio 1
const presentation = (name, lastname, age) => {return (`Hola mi nombres es ${name} ${lastname} y mi edad ${age}`)};
console.log("Ejercicio 1:",presentation("Sebastián","Yabiku",33))

//Ejercicio 2
const sumOfCubes = (firstNumber, secondNumber, thirdNumber) => {return (firstNumber**3 + secondNumber**3 + thirdNumber**3)};
console.log("Ejercicio 2:",sumOfCubes(1,5,9))

//Ejercicio 3
const typeOfTheValue = (value) =>{return typeof(value)};
console.log("===Ejercicio 3===");
console.log(typeOfTheValue("Hola"),": Hola");
console.log(typeOfTheValue(33),": 33");
console.log(typeOfTheValue(true),": true");
console.log(typeOfTheValue(345351n),": 345351n");
console.log(typeOfTheValue(null),": null");
console.log(typeOfTheValue(),": (nada)");
console.log("=================");

//Ejercicio 4
const sumData = (...allNumbers) => {
    const sum = (acomulator, actualValue) => acomulator + actualValue;
    const result = allNumbers.reduce(sum, 0);
    return result;
}
console.log("Ejercicio 4:",sumData(1,2,3,4));

//Ejercicio 5
const onlyStrings = (arrayData) => {
    let arrayToReturn = [];

    for(let actualItem of arrayData){
        if(typeof(actualItem) == "string"){
            arrayToReturn.push(actualItem);
        }
    }
    
    return arrayToReturn;
}
let arrayForExercice5 = ["hola",33,"Mundo",true,null,":D"]
console.log("Ejericicio 5:", onlyStrings(arrayForExercice5));

//Ejercicio 6
const minMax = (arrayNumbers) => {
    return [Math.min(...arrayNumbers),Math.max(...arrayNumbers)];
}
let arrayForExercice6 = [1,2,3,4,5];
console.log("Ejercicio 6:", minMax(arrayForExercice6));

//Ejercicio 7
const formatPhoneNumber = (arrayPhoneNumber) => {
    return `(${arrayPhoneNumber.slice(0, 3).join("")}) ${arrayPhoneNumber.slice(3, 6).join("")}-${arrayPhoneNumber.slice(6).join("")}`;
}
let arrayForExercice7 = [9,4,3,3,9,1,1,6,8]
console.log("Ejercicio 7:", formatPhoneNumber(arrayForExercice7));

//Ejercicio 8
const findLargestNums = (arrayOfArrays) => {
    return arrayOfArrays.map((subarray) => Math.max(...subarray));
}
let arrayForExercice8 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Ejercicio 8:", findLargestNums(arrayForExercice8));

//Ejercicio 9
const charIndex = (word, character) => {
    let wordToArray = [];
    for(let char of word){
        wordToArray.push(char);
    }
    let firstIndexChar = wordToArray.indexOf(character);
    let lastIndexChar = wordToArray.lastIndexOf(character);
    return (`The first "${character}" has index ${firstIndexChar}, the last "${character}" has index ${lastIndexChar}.`)
}
console.log(`Ejercicio 9: ${charIndex("Hello","l")}`);

//Ejercicio 10
const toArray = (object) => {
    return Object.entries(object);
};
let objectForExercice10 = {a:1, b:2};
console.log("Ejercicio 10:",toArray(objectForExercice10));

//Ejercicio 11
const getBudgets = (arrayOfPeople) => {
    let totalBudget = 0;
    for(let pearson of arrayOfPeople){
        totalBudget += pearson.budget; 
    }
    return totalBudget;
}
let arrayOfPeople = [{name: "John", age: 21, budget: 23000}, 
    {name: "Steve",  age: 32, budget: 40000},
    {name: "Martin",  age: 16, budget: 2700}];
console.log(`Ejercicio 11: ${getBudgets(arrayOfPeople)}`);
//Ejercicio 12
const getStudentNames = (arrayOfStudents) => {
    let arrayToReturn = [];
    for(let student of arrayOfStudents){
        arrayToReturn.push(student.name);
    }
    return arrayToReturn;
}
let arrayOfStudents = [{ name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
console.log("Ejercicio 12:", getStudentNames(arrayOfStudents));
//Ejercicio 13
const objectToArray = (object) => {
    return Object.entries(object);
}
let objectForExercice13 = {
    likes: 2,
    dislikes: 3,
    followers: 10
};
console.log("Ejercicio 13:", objectToArray(objectForExercice13));

//Ejercicio 14
const squareSum = (n) => {
    let returnSum = 0;
    for(let counter = 1; counter <= n; counter++){
        returnSum += counter**2;
    }
    return returnSum;
}
console.log(`Ejercicio 14: ${squareSum(3)}`);

//Ejercicio 15
const multiplyByLength = (arrayOfNumbers) => {
    return arrayOfNumbers.map((value) => value*arrayOfNumbers.length);
}
console.log("Ejercicio 15:", multiplyByLength([2, 3, 1, 0]));

//Ejercicio 16
const countdown = (number) => {
    let arrayToReturn = [];
    for(let counter = 0; counter = number; counter++){
        arrayToReturn.push(number);
        number--;
    }
    return arrayToReturn;
}
console.log("Ejercicio 16:",countdown(5));

//Ejercicio 17
const diffMaxMin = (arrayNumbers) => {
    return Math.max(...arrayNumbers) - Math.min(...arrayNumbers);
}
console.log("Ejercicio 17:", diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Ejercicio 18
const filterList = (arrayData) => {
    let arrayToReturn = [];

    for(let actualItem of arrayData){
        if(typeof(actualItem) == "number"){
            arrayToReturn.push(actualItem);
        }
    }
    
    return arrayToReturn;
}
console.log("Ejercicio 18:", filterList([1, 2, 3, "x", "y", 10]));

//Ejercicio 19
const repeat = (numberToRepeat, timesToRepeat) => {
    let arrayToReturn = [];
    for(let i = 0; i < timesToRepeat; i++){
        arrayToReturn.push(numberToRepeat);
    }
    return arrayToReturn;
}
console.log("Ejercicio 19:",repeat(13,5));

//Ejercicio 20
String.prototype.vreplace = function (vowel) {
    let finalValue = "";

    for(let i = 0; i < this.length; i++){
        switch(this[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u": finalValue = finalValue + vowel;
                break;
            default: finalValue = finalValue + this[i];
        }
    }
    return finalValue;
}

console.log("Ejercicio 20:","apples and bananas".vreplace("u"));

//Ejercicio 21
const findNemo = (phrase) => {
    let words = phrase.split(" ");
    let index = words.indexOf("Nemo");
    if(index != -1){
        return `I found Nemo at ${index + 1}!`;
    } else{
        return "Nemo not found"
    }
}
console.log("Ejercicio 21:",findNemo("I am finding Nemo !"))

//Ejercicio 22
const capLast = (word = "") => {
    let initialString = word.slice(0,word.length-1);
    let finalString = word.slice(word.length-1,word.length).toLocaleUpperCase();
    return initialString + finalString;
}

console.log("Ejercicio 22: ",capLast("hello"));