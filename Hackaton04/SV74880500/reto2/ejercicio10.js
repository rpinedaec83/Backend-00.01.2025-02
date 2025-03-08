function toArray(obj) {
    var result = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(toArray({ a: 1, b: 2 })); // ➞ [["a", 1], ["b", 2]]
