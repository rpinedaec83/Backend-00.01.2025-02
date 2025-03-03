function charIndex(word, char) {
    return [word.indexOf(char), word.lastIndexOf(char)];
}

console.log(charIndex("hello", "l")); 
console.log(charIndex("circumlocution", "c")); // ➞ [0, 8]
