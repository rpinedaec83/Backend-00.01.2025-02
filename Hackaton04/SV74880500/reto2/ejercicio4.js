function sumarArgumentos() {
    var args = Array.from(arguments); 
    return args.reduce(function(acc, num) {
        return acc + num;
    }, 0);
}

console.log(sumarArgumentos(1, 2, 3, 4)); // ➞ 10
console.log(sumarArgumentos(5, 10, 15)); // ➞ 30
