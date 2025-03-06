function squaresSum(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(i, 2);
    }
    return sum;
}

console.log(squaresSum(3)); // ➞ 14
