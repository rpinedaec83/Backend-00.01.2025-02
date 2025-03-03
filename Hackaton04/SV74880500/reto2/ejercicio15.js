function multiplyByLength(arr) {
    var length = arr.length;
    return arr.map(function(value) {
        return value * length;
    });
}

console.log(multiplyByLength([2, 3, 1, 0])); // ➞ [8, 12, 4, 0]
