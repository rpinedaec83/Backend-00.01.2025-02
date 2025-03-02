//  16.	Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.

const count=(limitnumber)=>{
const arrayvalue =[];
for(let i=limitnumber;i==0;i--){
arrayvalue.push(i)

}
return arrayvalue

}

const resultado = count(5);
console.log(resultado)


