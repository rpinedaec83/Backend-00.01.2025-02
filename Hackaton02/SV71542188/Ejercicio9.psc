Algoritmo AumentoSalario
    Definir salario, nuevoSalario Como Real
    Escribir "Ingrese el salario actual: "
    Leer salario

    Si salario > 2000 Entonces
        nuevoSalario <- salario * 1.05
    Sino
        nuevoSalario <- salario * 1.1
    FinSi

    Escribir "El nuevo salario es: $", nuevoSalario
FinAlgoritmo
