// 22.	Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"


const capLast = (data ="")=>{

    const initialString = data.slice(0,data.length-1);
    const finalString =data.slice(data.length-1,data.length).toLocaleUpperCase();

    return initialString + finalString
}


const result = capLast("hello");

console.log(result)
