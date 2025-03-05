
Proceso NumPrimo
	Escribir "Ingrese numero"
	leer n
	si n=1 Entonces
		Escribir "Es un número primo"
	SiNo
		con=0
		para i=1 hasta n con paso 1 Hacer 
			Si n mod i =0 Entonces
				con =con +1
				
			FinSi
		FinPara
		si con=2 Entonces
			Escribir "Es un número primo"
		SiNo
			Escribir "No es un número primo"
		FinSi
	FinSi
	
FinProceso

