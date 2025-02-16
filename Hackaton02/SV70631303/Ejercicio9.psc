//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
// se debe tomar en cuenta que si ganaba más de $2000
//tendrá un aumento del 5%, si generaba menos de $2000 su aumento será
//de un 10%.

Proceso Ejercicio9
	Definir salario, aumento, nuevoSalario Como Real
    
	Escribir "Ingrese el salario actual:"
    Leer salario
    
    Si salario > 2000 Entonces
        aumento = salario * 0.05
    Sino
        aumento = salario * 0.10
    Fin Si
    
    nuevoSalario = salario + aumento
    
    Escribir "Aumento aplicado: ", aumento
    Escribir "Nuevo salario: ", nuevoSalario
FinProceso