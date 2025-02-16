Algoritmo pregunta11
   
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
	
    Si num1 > num2 Y num1 > num3 Entonces
        Escribir "El mayor número es: ", num1
    Sino
        Si num2 > num1 Y num2 > num3 Entonces
            Escribir "El mayor número es: ", num2
        Sino
            Escribir "El mayor número es: ", num3
        FinSi
    FinSi
FinAlgoritmo
