Proceso ejercicio15
	//  15Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	
	definir letra como caracter
	escribir "Digite numero"
	leer numero1
	escribir "Escriba centimetros o libras"
	leer letra
	
	si letra == "centimetros"entonces
		resultado = numero1 * 1/2.54
		escribir resultado, " Pulgadas"
	SiNo
		si letra =="libras" entonces
			resultado = numero1 * 1/2.20462
			escribir resultado, " libras"
		SiNo
			escribir "Unidad no valida"
			
		FinSi
	FinSi
	
	
FinProceso
