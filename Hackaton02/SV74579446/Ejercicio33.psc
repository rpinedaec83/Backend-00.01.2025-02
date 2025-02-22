//Ejercicio33
//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso Continuar_Programa
    Definir opc Como Caracter
    
    Repetir
        Escribir "¿Desea continuar con el programa? (S/N): "
        Leer opc
    Hasta Que opc = "N" O opc = "n"
    
    Escribir "El programa ha finalizado."
	
FinProceso
