Proceso CalcularMedia
	Definir num,suma,contador Como Real
	contador=0;
	Repetir
		Escribir "ingrese un numero positivo (o un número negativo para finalizar)"
		Leer num
		si num>=0 Entonces
			suma=suma+num
			contador=contador+1
		FinSi
	              Hasta Que num<0
	              si contador>0 Entonces
		Escribir "la media de los números ingresados es:",suma/contador
	SiNo
		Escribir "No se ingresaron numeros positivos"
	FinSi
FinProceso
