Proceso Ejercicio33
	Definir respuesta Como Cadena
	
    Repetir
        
        Escribir "Este es el programa, ¿qué deseas hacer?"
        Escribir "Puedes realizar alguna operación o hacer algo más."
		
        
        Escribir "¿Quieres continuar? (s/n): "
        Leer respuesta
        
       
        Si respuesta <> "s" Y respuesta <> "n" Entonces
            Escribir 'Respuesta no válida, por favor ingresa s para continuar o n para salir.'
        FinSi
    Hasta Que respuesta = "n"
    
    Escribir "¡Gracias por usar el programa! Hasta luego."
FinProceso