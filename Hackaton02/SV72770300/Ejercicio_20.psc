Proceso Ejercicio_20
	
	cantidad = 4
	Dimensionar array_numeros(cantidad)
	
	cont_pares = 0
	num_mayor = 0
	resul_4 = 0
	resul_5 = 0
	Definir num_tercer_par, media, suma Como Caracter
	
	Para i <- 1 Hasta cantidad Con Paso 1 Hacer
		Escribir "Ingrese ", i, "º número"
		Leer array_numeros(i)
	Fin Para

	Para a <- 1 Hasta cantidad Con Paso 1 Hacer
		Si array_numeros(a) MOD 2 == 0 Entonces
			cont_pares = cont_pares + 1
		Fin Si
		
		Si array_numeros(a) > num_mayor Entonces
			num_mayor = array_numeros(a)
		SiNo
			num_mayor = num_mayor
		Fin Si
		
		Si array_numeros(3) MOD 2 == 0 Entonces
			resultado = array_numeros(2) ^ 2
			num_tercer_par = ConvertirATexto(resultado)
		SiNo
			num_tercer_par = "El tercer número no es par"
		Fin Si
		
		Si array_numeros(1) < array_numeros(4) Entonces
			resul_4 = resul_4 + array_numeros(a) 
			resultado_media = resul_4 / 4
			media = ConvertirATexto(resultado_media)
		SiNo
			media = "El primero no es menor que el cuarto"
		Fin Si
		
		Si array_numeros(2) > array_numeros(3) y (array_numeros(3) >= 50 y array_numeros(3) <= 700) Entonces
			resul_5 = resul_5 + array_numeros(a)
			suma = ConvertirATexto(resul_5)
		SiNo
			Si array_numeros(2) > array_numeros(3) y (array_numeros(3) < 50 o array_numeros(3) > 700) Entonces
				suma="No cumple la segunda condición"
			SiNo
				suma="No cumple la primera condición"
			Fin Si
		Fin Si
		
	Fin Para
	
	Escribir "Cantidad pares: ",cont_pares
	Escribir "Número mayor de todos: ",num_mayor
	Escribir "Cuadrado del segundo si el tercer número es par: ",num_tercer_par
	Escribir "Si el primero es menor que el cuarto, la media es: ",media
	Escribir "Segundo mayor que el tercero, tercero comprendido entre 50 y 700: ",suma
	
FinProceso
