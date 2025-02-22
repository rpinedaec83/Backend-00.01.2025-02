Proceso Ejercicio_35
	Definir n, ma, me, i Como Entero
	
    Escribir "Ingrese el número 1:"
    Leer num
    ma = n
    me = n
	
    Para i = 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer n
        
        Si n > ma Entonces
            ma = n
        FinSi
        
        Si n < me Entonces
            me = n
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", ma
    Escribir "El número menor es: ", me
FinProceso
