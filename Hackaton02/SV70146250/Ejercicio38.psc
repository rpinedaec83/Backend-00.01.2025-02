Proceso Algoritmo38_Numero_Perfecto
	Definir num, sumaDivisores, i Como Entero
	Definir Llave como Caracter
	Llave="" //Permite cerrar el bucle
	Escribir "[+++++++++++[INICIO]+++++++++++]"
	Repetir //Comienza el bucle
		
		Escribir "Ingrese numero y verificar perfecto"
		leer num
		sumaDivisores=0
		Para i=1 hasta num-1 con paso 1 hacer
			Si num MOD i = 0 Entonces				//evalua si tiene  divisores 
				sumaDivisores = sumaDivisores+i	  //si cumple los acumula
			FinSi
		FinPara
		Si sumaDivisores = num Entonces
			Escribir  "> ",num," es PRRRfecto"
		SiNo
			Escribir  "> ",num," NO es PRRRfecto"
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
