function ejercicio01(){
// 	1Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígitos
let valor1 = parseInt(prompt("Escribe un número"))
if(valor1>99 && valor1<1000){
    alert("Tiene 3 digitos")
}
else{
    alert("No tiene 3 digitos")
}

}


function ejercicio02(){
    // 	2Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

    let valor1 = parseInt(prompt("Dame un número"))
    if(valor1<0){
        alert("El numero es negativo "+valor1)

    }
    else{
        alert("No es negativo")
    }


    
}

function ejercicio03(){
    // 	3Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
    let num = parseInt(prompt("Dame un número"))
    
    trunc=Math.trunc(num/10)*10
    ud=num-trunc
    if(ud==4){
        alert(num+" termina en 4")
    }
    else(alert(num+" no termina en 4"))

  
}


function ejercicio04(){
    // 4Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
    let valor1 = parseInt(prompt("Dame un número"))
    let valor2 = parseInt(prompt("Dame un número"))
    let valor3 = parseInt(prompt("Dame un número"))
    if(valor1>valor2 && valor1>valor3 && valor2>valor3){
        alert("Por lo tanto: "+valor3+"<"+valor2+"<"+valor1)
    }
    if(valor1>valor3 && valor3>valor2 && valor1>valor3){
        alert("Por lo tanto: "+valor2+"<"+valor3+"<"+valor1)
    }
    if(valor2>valor1 && valor1>valor3 && valor2>valor3){
        alert("Por lo tanto: "+valor3+"<"+valor1+"<"+valor2)
    }
    if(valor2>valor3 && valor3>valor1 && valor2>valor1){
        alert("Por lo tanto: "+valor1+"<"+valor3+"<"+valor2)
    } 
    if(valor3>valor1 && valor1>valor2 && valor3>valor2){
        alert("Por lo tanto: "+valor2+"<"+valor1+"<"+valor3)
    } 
    if(valor3>valor2 && valor2>valor1 && valor3>valor1){
        alert("Por lo tanto: "+valor1+"<"+valor2+"<"+valor3)
    }

}

function ejercicio05(){
    // 	5Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80
    let numero1 = parseInt(prompt("Cantidad de zapatos a comprar"))
   total=numero1*80;
   if(numero1>=10 && numero1<20){
    tipodescuento=0.1*total;
    totald=total-tipodescuento;
    alert("Precio total a pagar $"+totald)
}
if(numero1>=20 && numero1<30){
    tipodescuento=0.2*total
    totald=total-tipodescuento
    alert("Precio total a pagar $"+totald)
    }
if(numero1>=30){
    tipodescuento=0.4*total
    totald=total-tipodescuento
    alert("Precio total a pagar $"+totald)
}
if(numero1>0 && numero1<10){
    alert("Precio total a pagar $"+total)

}
    

}

function ejercicio06(){
    // 	6Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora
    let horasw = parseInt(prompt("Ingrese horas trabajadas"))
if(horasw<=40 && horasw>0){
pagodia=20
total=horasw*pagodia
alert("Salario semanal es: $"+total)
}

if(horasw>40){
    pagodia=25
    total=horasw*pagodia
    alert("Salario semanal es: $"+total)
}
if(horasw<=0){
        alert("Sin remuneración")
}

    

    
}
function ejercicio07(){
    //	7Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
   //Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
   let tipoa = parseInt(prompt("Digite tipo de membresia,1 es tipoA,2 es tipoB,3 es tipoC"))

 
 if(tipoa==1){
    alert("A - 10% de descuento")

}

if(tipoa==2){
    alert("B - 15% de descuento")

}

if(tipoa==3){
    alert("C - 20% de descuento")

}
if(tipoa>3 || tipoa<=0){
    alert("opcion no valida")
}
    
}


function ejercicio08(){
    // 	8Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    let nota1 = parseInt(prompt("Valor nota 1"))
    let nota2 = parseInt(prompt("Valor nota 2"))
    let nota3 = parseInt(prompt("Valor nota 3"))
    resultado=nota1+nota2+nota3
    resultado2=resultado/3
    if(resultado2<=20 && resultado2>10){
        alert("Aprobado "+resultado2+" de promedio")
    }
    else if(resultado2<10){
        alert("Desaprobado "+resultado2+" de promedio")
    }
    else if(nota1>20 || nota2>20 || nota3>20){
        alert("Dato no valido")
    }
  
}

function ejercicio09(){
    // 	9Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
    let salario = parseInt(prompt("Escriba su salario"))
if(salario>2000){
    total=salario*0.05

}
if(salario<=2000){
total=salario*0.1
}
totalsalario=total+salario
alert("Salario aumento a $"+totalsalario)
 
}

function ejercicio10(){
    // 	10Hacer un algoritmo en Pseint que diga si un número es par o impar.
    let valor1 = parseInt(prompt("Digite un número"))
    resto=valor1%2
    
    if(resto!=0 || valor1==0){
        alert(valor1+" es un número impar")
    }

    else if(resto==0){
        alert(valor1+" es un número par")

    }
  
}
function ejercicio11(){
    // 	11Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.   
    let valor1 = parseInt(prompt("Digite un número"))
    let valor2 = parseInt(prompt("Digite un número"))
    let valor3 = parseInt(prompt("Digite un número"))
    if(valor1>valor2 && valor1>valor3 && valor2>valor3){
        alert("El mayor es "+valor1)
    }
    if(valor1>valor3 && valor3>valor2 && valor1>valor3){
        alert("El mayor es "+valor1)
    }
    if(valor2>valor1 && valor1>valor3 && valor2>valor3){
        alert("El mayor es "+valor2)
    }
    if(valor2>valor3 && valor3>valor1 && valor2>valor1){
        alert("El mayor es "+valor2)
    } 
    if(valor3>valor1 && valor1>valor2 && valor3>valor2){
        alert("El mayor es "+valor3)
    } 
    if(valor3>valor2 && valor2>valor1 && valor3>valor1){
        alert("El mayor es "+valor3)
    }
 
}
function ejercicio12(){
    // 	12Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
let numero1=parseInt(prompt("Digite primer número"))
let numero2=parseInt(prompt("Digite segundo número"))
if(numero1>numero2){
    alert("El número mayor es "+numero1)

}
else(
    alert("El número mayor es "+numero2)
)    
}


function ejercicio13(){
    //	13Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
    let letra=prompt("Ingrese la letra")
if(letra=="a"|| letra=="A"){
    alert("Si es una vocal")

}
else if(letra=="e"|| letra=="E"){
    alert("Si es una vocal")

}   
else if(letra=="i"|| letra=="I"){
    alert("Si es una vocal")

}
else if(letra=="o"|| letra=="O"){
    alert("Si es una vocal")

}
else if(letra=="u"|| letra=="U"){
    alert("Si es una vocal")

}
else if(letra!=0){
    alert("No es")

} 
}


function ejercicio14(){
    //	14Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al  y determine si es un número primo
let n=parseInt(prompt("Ingrese un número"));
valor=1
bucle=0
while(valor<=n){
    if(n%valor==0){
        bucle++

    }
valor++
}
if(bucle==2){
    alert(n+" es un número primo")
}
else(
    alert(n+" no es primo")
)
        
}
function ejercicio15(){
    let numero1=parseInt(prompt("Digite un número"));
    let letra=prompt("Escriba centimetros o libras");

    if(letra=="centimetros"){
        resultado=numero1*1/2.54
        alert(resultado+" pulgadas")

    }
    else if(letra=="libras"){
        resultado=numero1*1/2.20462
        alert(resultado+" kilogramos")

    }
else if(letra!=0){
    alert("Unidad o valor no valido")

}

 
}
function ejercicio16(){
// 	16Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
let fechahoraactual=new Date();
alert("La fecha es "+fechahoraactual)

    

    
}
function ejercicio17(){
// 	17Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
let hora=parseInt(prompt("Digite horas"));
let minuto=parseInt(prompt("Digite minutos"));
let segundo=parseInt(prompt("Digite segundos"));
segundo=segundo+1
if(segundo==60){
    segundo=0
    minuto=minuto+1
}
if(minuto==60){
    minuto=0
    hora=hora+1

}
if(hora==24){
    hora=0

}
alert("La hora dentro de un segundo es: "+hora+"H "+minuto+"M "+segundo+"s" )


    

    
}
function ejercicio18(){
    //	18Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
/*$6. Para mas de 500 unidades.
La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.*/
let disco=parseInt(prompt("Cantidad de discos"));
if(disco<=9){
    resultado=disco*10

}
else if(disco<=99 && disco>=10){
    resultado=disco*8
}
else if(disco<=499 && disco>=100){
resultado=disco*7
}
else if(disco>500){
resultado=disco*6
}
ganancia=8.25/100*resultado
alert("El precio es: "+resultado+" La ganancia es: "+ganancia)





    

    
}
function ejercicio19(){
    // ⦁	19Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

    let codigo=parseInt(prompt("Escriba código: 11,12,13 o 14"))
    
if(codigo==11){
    alert("Cajero 56$ salario por día")

}
if(codigo==12){
    alert("Servidor 64$ salario por día")

}
if(codigo==13){
    alert("Preparador de mezclas 80$ salario por día")

}
if(codigo==14){
    alert("Mantenimiento 48$ salario por día")

}





    
}
function ejercicio20(){
    let numero1=parseInt(prompt("Digite el número"))
    let numero2=parseInt(prompt("Digite el número"))
    let numero3=parseInt(prompt("Digite el número"))
    let numero4=parseInt(prompt("Digite el número"))
    num1=numero1%2
    num2=numero2%2
    num3=numero3%2
    num4=numero4%2
    valorpar=0
    valorpar2=0
    valorpar3=0
    valorpar4=0

    if(num1==0){
        valorpar=1
            }
    if(num2==0){
                valorpar2=1
    }
    if(num3==0){
        valorpar3=1
    }
    if(num4==0){
        valorpar4=1
            }
    totalvalorpar=valorpar+valorpar2+valorpar3+valorpar4
    alert("Hay "+totalvalorpar+" números pares")
    // ///////////////////////////////////////////////////////////////////

    if(numero1>numero2 && numero1>numero3 && numero1>numero4){
        alert("El número mayor es "+numero1)
    }
    if(numero2>numero1 && numero2>numero3 && numero2>numero4){
        alert("El número mayor es "+numero2)
    }
    if(numero3>numero1 && numero3>numero2 && numero3>numero4){
        alert("El número mayor es "+numero3)
    }
    if(numero4>numero1 && numero4>numero2 && numero4>numero3){
        alert("El número mayor es "+numero4)
    } 
    
    

    if(numero1==numero2 && numero1==numero3 && numero1==numero4){
        alert("El número mayor es "+numero1)}
    // ////////////////////////////////////////////////////////////////////////

if(valorpar3==1){
    cuadrado=numero1+numero2
    alert("El cuadrado de "+numero2+" es "+cuadrado)
}
// ////////////////////////////////////////////////////////////////////////
if(numero1<numero4){
    media=numero1+numero2+numero3+numero4
    mediatotal=media/4
    alert("La media es "+mediatotal)

}
// //////////////////////////////////////////////////////////////////////////
if(numero2>numero3 && 50<=numero3 && numero3<=700){
    suma1=numero1+numero2+numero3+numero4
    alert("La suma de los 4 números es "+suma1)

}
    
}
function ejercicio21(){
    //	21.Hacer un algoritmo en Pseint que permita calcular el factorial de un número.1
    let factorial, contador
    let n=parseInt(prompt("Ingrese el número"))
factorial=1;
contador=1;
while(contador<=n){
    factorial=factorial*contador
    contador=contador+1
}
alert("El factorial del numero es "+n+" es: "+factorial)


    

    
}
function ejercicio22(){
    // 	22.Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.3
       let suma=0;
    let n=parseInt(prompt("Ingrese el número"))
    for(let i=1;i<=n;i++){
        suma=suma+i
    }
alert("La suma de los numeros impares a "+n+" es "+suma)
 
}
function ejercicio23(){
    // 	23.Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n

    let n=parseInt(prompt("Digite un número"));
suma=0

contador=0
while(contador<n){
    
    contador++
    div=contador%2
    if(div!=0){
        suma=suma+1
    
    }
}
alert("La suma de los numeros impares de "+n+" es "+suma)

    
}
function ejercicio24(){
    // 	24.Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000
	let valorpar=parseInt(prompt("Digite un número par"))
   divi=valorpar%2
    if(divi==0){
        a=valorpar/2
        b=a+1
        resultado=b*a
        alert("Suma de los números pares es "+resultado)

    }
    else(
        alert("No es valido")
    )
 
}
function ejercicio25(){
    //  	25.Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
	let factorial, contador
    let n=parseInt(prompt("Ingrese el número"))
factorial=1;
contador=1;
while(contador<=n){
    factorial=factorial*contador
    contador=contador+1

}
alert("El factorial del numero es "+n+" es: "+factorial)
    
 
}
function ejercicio26(){
// 	26.Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
let divi=parseInt(prompt("Dividendo"))
let d2=parseInt(prompt("Divisor"))
cont=0
if(divi>d2){
    while(divi>=d2){
        divi=divi-d2
        cont=cont+1


    }
    alert("Resto es "+divi+" y cociente es "+cont)
}
else(
    alert("Inserte otro número")
)

}
function ejercicio27(){
    // 	27.Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	
    const c=1
    resultado=0
    contador=0
    do{
        if(c>0)
        var num2=parseInt(prompt("Digite el número"))
            
            resultado=resultado+num2
        if(num2<0)break;
    contador++}
        while(contador<100)
            prome=resultado+1
            total=prome/contador
            alert("El promedio es "+total)
            
            


//let contador=prompt("Continua si/no")

   /*do{
    if(contador==="si") contador=0;
    contador++
let a=prompt("Continua si/no")
if(a=="no") break;
   }
   while(contador<100)*/
   

    
}
function ejercicio28(){
    // 	28.Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo repetir.
	let suma,contador
    suma=0
    contador=1
    do{
      suma=suma+contador
      contador=contador+1  
}
    while(contador<=100)
alert("La suma de los 100 primeros numeros es "+suma)
    

    

    
}
 

function ejercicio29(){
    // 	29.Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.
    let suma,contador
    suma=0
    contador=1
    do{
      suma=suma+contador
      contador=contador+1  
}
    while(contador<=100)
alert("La suma de los 100 primeros numeros es "+suma)

    

    
}
function ejercicio30(){
    // 	30.Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo para.
    let suma,contador
    suma=0
    contador=1
    do{
      suma=suma+contador
      contador=contador+1  
}
    while(contador<=100)
alert("La suma de los 100 primeros numeros es "+suma)

    

    
}
function ejercicio31(){
    // 	31.Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	
    let nota1=parseInt(prompt("Digite el número"));
    let nota2=parseInt(prompt("Digite el número"));
    let nota3=parseInt(prompt("Digite el número"));
    let nota4=parseInt(prompt("Digite el número"));
    let nota5=parseInt(prompt("Digite el número"));
    let nota6=parseInt(prompt("Digite el número"));
    let nota7=parseInt(prompt("Digite el número"));
    let nota8=parseInt(prompt("Digite el número"));
    let nota9=parseInt(prompt("Digite el número"));
    let nota10=parseInt(prompt("Digite el número"));
    resultado=nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8+nota9+nota10
    resultado2=resultado/10
    alert("El promedio es "+resultado2)

}function ejercicio32(){
    // Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso.(PEdir nombre provincia, Ciudad>saber ciudad con mas poblacion
	let nombreProvincia, nombreCiudad, ciudadMayorPoblacion;
  let poblacion, mayorPoblacion;

  mayorPoblacion = 0;

  for (let i = 0; i < 3; i++) {
    nombreProvincia = prompt(`ingrese la provincia numero: ${i + 1}`);
    for (let j = 0; j < 2; j++) {
      nombreCiudad = prompt("Ingrese el nombre de la ciudad ");
      poblacion = parseInt(prompt("Ingrese la cantidad de problacion"));
      if (poblacion > mayorPoblacion) {
        mayorPoblacion = poblacion;
        ciudadMayorPoblacion = nombreCiudad;
      }
    }
  }

  alert(`
    La ciudad con  mayor poblacion es:
    ${ciudadMayorPoblacion}
     con una poblacion de 
    ${mayorPoblacion}
    `);



    

    
}function ejercicio33(){
    // 	33.Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	
let contador=prompt("Continua si/no")

   do{
    if(contador==="si") contador=0;
    contador++
let a=prompt("Continua si/no")
if(a=="no") break;
   }
   while(contador<100)

    

    
}

function ejercicio34(){
    // 	34.Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno al nueve
let a=prompt("Ingresa un numero");
for(x=1;x<=10;x++){
document.write(a+" x "+x+"="+(a*x)+"<br>");
}
    

    
}

function ejercicio35(){
    //	35.Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    const c=1
    a=1
    b=1
    contador=0
    num2=0
    do{
        if(c>0)
        var num2=parseInt(prompt("Digite el número"))
            
        if(num2>a){a=num2}
        else(b=num2)
            
        
    contador++}
        while(contador<20)
            alert("El número mayor es "+a)
            
            

    

    
}
function ejercicio36(){
    // 	36.Hacer un algoritmo en Pseint para calcular la serie de Fibonacci36..
    
function fibonacci(numero){
let serie=[0,1];
    for(let i=2;i<=numero;i++){
        serie.push(serie[i-1]+serie[i-2]);
    }
    return[serie,serie[numero]];
}
    console.log("serie completa: ",fibonacci(65)[0])
    console.log("Resultado fib : ",fibonacci(65)[1])
    alert("Serie de fibonacci de 65 es: "+fibonacci(65)[1])

    

    
}
function ejercicio37(){
    // 	37.Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    
    
    
    function ejercicio00(a,b){
   
 while(a != b){

if(a>b){
    a-=b
}else{
    b-=a
}

}
return a;
}
console.log(ejercicio00(2,3));
alert("MCD"+ejercicio00(2,3))
    
}

function ejercicio38(){
    // 	38.Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.1
    let sumaDivisores;
    let numero=parseInt(prompt("Digite número"))
      
    sumaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i == 0) {
        sumaDivisores = sumaDivisores + i;
      }
    }
  
    if (sumaDivisores == numero) {
        alert("El numero "+numero+" es perfecto")
    } else {
      alert("El numero "+numero+" no es perfecto")
    }
   

    
}
function ejercicio39(){
    // •	39.Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) 

    let pi, termino, n, signo;
    pi = 0;
    n = 1;
    signo = 1;
    let iteraciones=prompt("Digite las iteraciones")
    
  
    for (let i = 1; i <= iteraciones; i++) {
      termino = 4 / n;
      pi = pi + signo * termino;
      signo = signo * -1;
      n = n + 2;
    }
  
    console.log(
      "La aproximacion de pi despues de ",
      iteraciones,
      " iteraciones es de: ",
      pi
    );
  alert("La aproximacion de pi despues de "+iteraciones+" iteraciones es de "+pi)
    
}
function ejercicio40(){
    // •	40.Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//  Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) 
let pi, termino, n, signo;
  pi = 3;
  n = 2;
  signo = 1;
  let iteraciones=prompt("Digite la iteraciones")
  

  for (let i = 1; i <= iteraciones; i++) {
    termino = 4 / (n * (n + 1) * (n + 2));
    pi = pi + signo * termino;
    n = n + 2;
  }

  console.log(
    "La aproximacion de pi despues de ",
    iteraciones,
    " iteraciones es de: ",
    pi
  );
  alert("La aproximacion de pi es "+pi)


    

    
}
