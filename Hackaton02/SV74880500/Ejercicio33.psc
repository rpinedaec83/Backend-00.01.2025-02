Algoritmo continuar_programa
    Definir respuesta Como Cadena
	
    Repetir
        Escribir "El programa está en ejecución..."
        Escribir "¿Quieres continuar? (S para sí, N para no): "
        Leer respuesta
		
        Si respuesta = "S" o respuesta = "s" Entonces
            Escribir "El programa continuará..."
        Sino
            Escribir "El programa ha terminado."
        FinSi
    Hasta Que respuesta = "N" o respuesta = "n"
FinAlgoritmo