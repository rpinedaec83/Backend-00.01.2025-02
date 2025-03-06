// 17.	Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños


const diffmaxmin=(arrayvalue)=>{
    const max = Math.max(...arrayvalue)
    const min = Math.min(...arrayvalue)
    
    const dif = max-min
    return dif
    
    }
    
    const resultado=diffmaxmin([5, 4, 3, 2, 1, 0])
    console.log(resultado)