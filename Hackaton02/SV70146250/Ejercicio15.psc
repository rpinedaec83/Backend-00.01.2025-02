Proceso Algoritmo15_Convertidor_cm_pul_lib_kil
	Definir cantidad, pulga, kilo como Real
	Definir tipo como Caracter
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "¿Que desea convertir?"
		Escribir "CENTIMETROS o LIBRAS"
		Leer tipo
		Escribir "Ingrese cantidad a convertir"
		Leer cantidad
		//Evalua que sea positivo y diferente de 0
		Si cantidad <= 0 Entonces
			Escribir "ERROR: ",cantidad," DEBE SER POSITIVO"
		SiNo
			Si Mayusculas(tipo)=="CENTIMETROS" Entonces //Evalua que tipo este correcto escrito
				pulga=cantidad/2.54			//Convierte a pulgadas
				Escribir "> " cantidad," cm equivale a: ", pulga," in"
			SiNo
				Si Mayusculas(tipo)=="LIBRAS" Entonces//Evalua que tipo este correcto escrito
					kilo=cantidad*0.4536 		//Convierte a kilos
					Escribir "> " cantidad," lb equivale a: ", kilo " kg"
				SiNo
					Escribir "ERROR: ",tipo," NO ES UN TIPO VALIDO"
				FinSi
			FinSi
		FinSi
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe en mayusculas o minusculas, luego se convertira o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Mayusculas(Llave)=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso