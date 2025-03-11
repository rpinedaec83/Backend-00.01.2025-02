function sumOfCubes(...numbers) {
    return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

console.log(sumOfCubes(1, 5, 9)); // ➞ 855