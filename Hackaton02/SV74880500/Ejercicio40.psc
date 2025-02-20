Algoritmo aproximacion_pi_nilakantha
    Definir n, i, denominador1, denominador2, denominador3, termino, resultado Como Real
	
    Escribir "Ingresa el número de términos para la aproximación de Pi: "
    Leer n
	
    resultado = 3
    denominador1 = 2
    denominador2 = 3
    denominador3 = 4
	
    Para i = 1 Hasta n-1 Hacer
        termino = 4 / (denominador1 * denominador2 * denominador3)
		
        Si i Mod 2 = 1 Entonces
            resultado = resultado + termino
        Sino
            resultado = resultado - termino
        FinSi
		
        denominador1 = denominador1 + 2
        denominador2 = denominador2 + 2
        denominador3 = denominador3 + 2
    FinPara
	
    Escribir "La aproximación de Pi es: ", resultado
FinAlgoritmo