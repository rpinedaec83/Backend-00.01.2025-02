// 21.	Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

const findNemo = (value ="")=>{
    let words = value.split(" ");
    let index = words.indexOf("Nemo");

    if(index!=-1){
        return `I found Nemo at ${index+1}!`;
    }

    return `Nemo not found`
}

const result = findNemo("I am finding Nemo !");


console.log(result);
