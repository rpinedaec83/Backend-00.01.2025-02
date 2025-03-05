function diffMaxMin(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    return max - min;
}

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // ➞ 82
