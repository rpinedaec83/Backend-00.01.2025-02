Proceso cociente_resto_restas_sucesivas
    Repetir
        leer a,b
    Hasta Que a>0 & a=trunc(a) &  b>0 & b=trunc(b)
    c<-0
    Mientras a>=b Hacer
        a<-a-b
        c<-c+1
    FinMientras
    Escribir "Cociente ",c
    Escribir "Resto ",a
FinProceso

