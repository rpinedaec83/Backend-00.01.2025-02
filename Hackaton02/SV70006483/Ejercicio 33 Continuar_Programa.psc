Proceso Continuar_Programa
    Definir continuar Como Caracter
	
    Repetir
        // Instrucciones del programa
        Escribir "Ejecutando el programa..."
        
        // Preguntar al usuario si desea continuar
        Escribir "¿Desea continuar? (S/N): "
        Leer continuar
        
        // Convertir la respuesta a mayúsculas para evitar errores
        continuar <- Mayusculas(continuar)
		
    Hasta Que continuar = "N"
	
    Escribir "Programa finalizado."
FinProceso
