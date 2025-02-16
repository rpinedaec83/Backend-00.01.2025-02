Proceso Algoritmo26_Resto_Cociente_Por_Restas_Sucesivas
	Definir dividento, divisor como Real
	Definir cociente, resto como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese numero a dividir: "
		Leer dividendo 
		Escribir "Ingrese numero que divide: "
		Leer divisor
		
		//Validacion NO negativo 
		Si dividendo < 0 O TRUNC(dividendo) <> dividendo O divisor <= 0 O TRUNC(divisor) <> divisor  Entonces
			Escribir "ERROR: *DEBE SER ENTERO NO NEGATIVO*"
		SiNo
			cociente=0
			resto=dividendo
			Escribir "   Restas Sucesivas: "
			Mientras resto >= divisor Hacer
				cociente = cociente + 1
				Escribir "    ",cociente,") ",resto," - ",divisor," = ",resto-divisor //Calculo temporal
				resto=resto-divisor //Calculo alcenando en resto
			FinMientras
			Escribir  "El resto es: ", resto
			Escribir "El cocientes: ",cociente
		FinSi
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso