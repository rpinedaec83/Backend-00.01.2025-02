Proceso Algoritmo8_Promedio_Aprobad_o_Desaprobado
	Definir nota1,nota2,nota3,promedio como Real
	Definir Llave como Cadena
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese 3 notas: "
		Leer nota1,nota2,nota3		
		Si nota1<0 O nota2<0 O nota3<0 Entonces  	//Valida si es negativo y advierte
			Escribir " *NOTAS INVALIDAS,FUERA DE RANGO*"
		SiNo
			Si	nota1>20 O nota2>20 O nota3>20 Entonces//Valida el rango maximo
				Escribir " *NOTAS INVALIDAS,FUERA DE RANGO*"
			SiNo
				promedio=(nota1+nota2+nota3)/3 //Calcula el promedio
				Si promedio>=12 Entonces //Determina si aprobo o desaprobo
					Escribir "El Alumno APROBO con: ", promedio
				SiNo
					Escribir "El Alumno DESAPROBO con: ", promedio
				FinSi
			FinSi
		FinSi
		
		//Menu para continuar o salir
		Escribir "[=============================]"
		Escribir "PRESIONE [ENTER] PARA CONTINUAR"
		Escribir "PARA TERMINAR ESCRIBA: SALIR"
		Leer Llave //Escribe o Presiona Enter
		Escribir "[=============================]"
	Hasta Que Llave=="SALIR" //La condicion para cerrar el bucle
	Escribir "[++++++++++++[FIN]+++++++++++++]"
	
FinProceso