Proceso ValorDePi
	Definir pi2, termino como real;
	definir n,signo Como Entero
	
    pi2 <- 0;
    Escribir Sin Saltar "Ingresa el valor de n:";
    Leer n;
    Para i<-1 Hasta n Con Paso 1 Hacer
        Escribir "PROCESO ", i;
        pi2 <- pi2+4.0/(i*2-1);
        Escribir "";
    FinPara
    Escribir "Valor de pi: ", pi2;
FinProceso
