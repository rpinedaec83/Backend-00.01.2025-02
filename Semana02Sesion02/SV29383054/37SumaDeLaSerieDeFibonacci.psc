Proceso SumaDeLaSerieDeFibonacci
    f1 <- 0;
    f2 <- 0;
    suma <- 0;
    Escribir Sin Saltar "Ingresa el valor de n:";
    Leer n;
    Para i<-1 Hasta n Con Paso 1 Hacer
        Escribir "PROCESO ", i;
        Si i = 1 Entonces
            f2 <- 1;
        FinSi
        termino <- f2;
        suma <- suma+f2;
        f3 <- f1+f2;
        f1 <- f2;
        f2 <- f3;
        Escribir "Valor de f3: ", f3;
        Escribir "Valor de termino: ", termino;
        Escribir "";
    FinPara
    Escribir "Valor de f1: ", f1;
    Escribir "Valor de f2: ", f2;
    Escribir "Valor de suma: ", suma;
FinProceso