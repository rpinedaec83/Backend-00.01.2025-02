//3.	Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const suma=(num1,num2,num3)=>{

    total=(num1**3)+(num2**3)+(num3**3)
    return total
}

console.log(suma(1,5,9))

