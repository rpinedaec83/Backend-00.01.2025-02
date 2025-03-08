function findNemo(sentence) {
    var words = sentence.split(" ");
    var index = words.indexOf("Nemo");
    return "I found Nemo at " + (index + 1) + "!";
}

console.log(findNemo("I am finding Nemo !")); // ➞ "I found Nemo at 4!"
