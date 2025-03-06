function repeat(element, times) {
    var result = [];
    for (var i = 0; i < times; i++) {
        result.push(element);
    }
    return result;
}

console.log(repeat(13, 5)); // ➞ [13, 13, 13, 13, 13]
