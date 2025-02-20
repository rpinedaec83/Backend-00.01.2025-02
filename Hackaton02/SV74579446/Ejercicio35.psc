//Ejercicio35
//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso calMayor_Menor
    Definir num, may, men Como Entero
    may= -9999999
    men= 9999999
    
    Para i <- 1 Hasta 20
        Escribir "Ingrese un número: "
        Leer num
        
        Si num > may Entonces
            may <- numero
        FinSi
        
        Si num < men Entonces
            men <- num
        FinSi
    FinPara
    
    Escribir "El número mayor es: ", may
    Escribir "El número menor es: ", men
	
FinProceso
