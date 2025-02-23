Proceso Algoritmo19_Heladeria_Empleados
	Definir ID, dias, pagoSemana, precioDia como Real
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "[ID]Tipo Empleado"		//Leyenda de ID de tipo empleado.
		Escribir "-----------------"
		Escribir "[ 1]Cajero"
		Escribir "[ 2]Servidor"
		Escribir "[ 3]Prep. Mezcla"
		Escribir "[ 4]Mantenimiento"
		Escribir "Ingrese ID empleado: "		
		Leer ID
		Escribir "Dias trabajados [1-6]: " 
		Leer dias
		//Evalua ID valido y dias validos
		Si ID < 1 O ID > 4 O TRUNC(ID) <> ID O dias < 1 O dias > 6 O TRUNC(dias) <> dias  Entonces
			Escribir  "*ERROR: DATA INVALIDA*"
		SiNo
			Segun ID Hacer		//Segun ID asgina un precio por dia
				1:
					precioDia=56
				2:
					precioDia=64
				3:
					precioDia=80
				4:
					precioDia=48
			Fin Segun
			//Calculo de pago semanal
			pagoSemana=precioDia*dias
			Escribir "Pago semanal es: $", pagoSemana
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