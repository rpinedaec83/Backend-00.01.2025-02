Algoritmo Ordenar_3_nros
	Definir n1,n2,n3 Como Real
	Escribir 'Introduzca tres numeros:'
	Leer n1,n2,n3
	Si n1>n2 Y n1>n3 Entonces
		may <- n1
	SiNo
		Si n2>n1 Y n2>n3 Entonces
			may <- n2
		SiNo
			may <- n3
		FinSi
	FinSi
	Si n1<n2 Y n2<n3 Entonces
		men <- n1
	SiNo
		Si n2<n1 Y n2<n3 Entonces
			men <- n2
		SiNo
			men <- n3
		FinSi
	FinSi
	med <- (n1+n2+n3)-(may+men)
	Escribir men,med,may
FinAlgoritmo
