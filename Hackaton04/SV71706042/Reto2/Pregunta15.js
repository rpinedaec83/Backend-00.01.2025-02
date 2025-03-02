function multiplyByLength(arr) {

    let length = arr.length;
    
    for (let i = 0; i < length; i++) {
        arr[i] *= length;
    }
    return arr;
}


console.log(multiplyByLength([2, 3, 1, 0])); 