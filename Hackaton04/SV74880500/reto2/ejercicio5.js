function filtrarStrings(arr) {
    return arr.filter(function(item) {
        return typeof item === 'string';
    });
}

console.log(filtrarStrings([1, 'hello', 3, 'world', true])); 