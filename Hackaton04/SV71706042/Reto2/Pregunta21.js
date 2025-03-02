

function findNemo(sentence) {

    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "Nemo") {
            return `¡Encontré a Nemo en ${i + 1}!`;
        }
    }

    return "Nemo no encontrado";

}


console.log(findNemo("I am finding Nemo !")); 