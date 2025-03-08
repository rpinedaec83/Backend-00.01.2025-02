//funcioon
 const countdown =(numMaximo)=>{
    const arrayCreado = [];
    //recorre del argumento hasta 0, disminuye en 1
    for(let i=numMaximo;i>=0;i--){
        arrayCreado.push(i) //Empuja el dato en el array
    }
    return arrayCreado
} 

//llamar
const data = countdown(3) ;

//muestra
console.log(data)