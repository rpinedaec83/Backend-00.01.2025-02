//Funcion flecha            
const filtraString=(array)=>{
                //.filter() recorre el aray
                        //Funcion flecha evalua que sea string
    return array.filter(evalua => typeof evalua === "string");
}
//llama
let data = filtraString(["prueba",33,44,"tu", false,"mente",-44]);
//Muestra
console.log(data);
