String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiouAEIOU]/g, vowel);
};

console.log("apples and bananas".vreplace("u")); // ➞ "upplus und bununus"
