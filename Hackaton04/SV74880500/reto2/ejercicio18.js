function filterList(arr) {
    return arr.filter(function(item) {
        return typeof item === 'number';
    });
}
console.log(filterList([1, 2, 3, "x", "y", 10])); // ➞ [1, 2, 3, 10]
