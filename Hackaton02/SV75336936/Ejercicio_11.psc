Proceso Ejercicio_11
	Definir n1, n2, n3 Como Real
    
    Escribir "Ingrese el primer número:"
    Leer n1
    Escribir "Ingrese el segundo número:"
    Leer n2
    Escribir "Ingrese el tercer número:"
    Leer n3

    Si n1 > n2 Y n1 > n3 Entonces
        Escribir "El número mayor es: ", n1
    Sino
        Si n2 > n1 Y n2 > n3 Entonces
            Escribir "El número mayor es: ", n2
        Sino
            Si n3 > n1 Y n3 > n2 Entonces
                Escribir "El número mayor es: ", n3
            Sino
                Escribir "Hay números iguales, no hay un único mayor."
            FinSi
        FinSi
    FinSi
FinProceso
