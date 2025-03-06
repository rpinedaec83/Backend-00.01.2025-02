
function minMax(arr) {
    return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

console.log(minMax([1, 2, 3, 4, 5])); // ➞ [1, 5]
