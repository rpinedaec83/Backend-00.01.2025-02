function findLargestNums(arr) {
    return arr.map(function(subArr) {
        return Math.max.apply(null, subArr);
    });
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // ➞ [7, 90, 2]
