function capLast(str) {
    return str.split(" ").map(function(word) {
        return word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase();
    }).join(" ");
}

console.log(capLast("hello")); // ➞ "hellO"
