
function filterList(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i]);
        }
    }
    return result;

}


console.log(filterList([1, 2, 3, "x", "y", 10])); 