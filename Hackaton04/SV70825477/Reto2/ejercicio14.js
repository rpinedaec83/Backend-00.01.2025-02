// 14.	Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.


///////

const  squaresSum =(value )=>{

    let result =0;

    for(let i=1;i<=value;i++){
        result = result+Math.pow(i,2)
    }

    return result
}

const result = squaresSum(3);

console.log(result)