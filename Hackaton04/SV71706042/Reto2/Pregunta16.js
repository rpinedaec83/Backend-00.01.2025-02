
function countdown(n) {

    let result = [];
    for (let i = n; i >= 0; i--) {
        result.push(i);
    }
    return result;

}

console.log(countdown(5)); 