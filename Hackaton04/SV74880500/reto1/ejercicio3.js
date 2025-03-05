function sumOfCubes(...numbers) {
    return numbers.reduce((acc, num) => acc + Math.pow(num, 3), 0);
}

console.log(sumOfCubes(1, 5, 9));  
