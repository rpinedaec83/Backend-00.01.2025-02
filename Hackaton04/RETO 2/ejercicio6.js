const minMax = (matriz) => {
    let max = 0;
    let min = 9999999;
    for (let i = 0; i < matriz.length; i++) {
        if (max < matriz[i]) {
            max = matriz[i]
        }
        if (min > matriz[i]) {
            min = matriz[i]
        }
    }

    return [min,max]

}
const minMaxSimple =(matriz)=>{
    const max = Math.max(...matriz);
    const min = Math.min(...matriz);
    return [min,max]
}

const result = minMax([1, 2, 3, 4, 5]) 

console.log(result)


const result1 = minMaxSimple([1, 2, 3, 4, 5]) 

console.log(result1)