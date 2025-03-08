Proceso operaciones4Numeros
    mayor <- 0;
   
    Para i<-1 Hasta 4 Con Paso 1 Hacer
        Escribir "PROCESO ", i;
        Escribir Sin Saltar "Ingresa el valor de un numero:";
        Leer numero;
		suma=suma+ numero;
        Si i = 1 O mayor<numero Entonces
            mayor <- numero;
        FinSi
        Si numero mod 2 =0 Entonces
            Par=par+ 1 ;
        FinSi
        Escribir "";
    FinPara
    Escribir "Valor de mayor: ", mayor;
    Escribir "los numeros pares son: ", par;
	Escribir "la suma  de los 4 números es: ", suma;
	Escribir "la media  de los 4 números es: ", suma/4;
FinProceso