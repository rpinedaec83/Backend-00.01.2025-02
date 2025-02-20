Algoritmo numeromayor
    Definir num1, num2 Como Real
	
    Escribir "Introduce el primer número: "
    Leer num1
	
    Escribir "Introduce el segundo número: "
    Leer num2
	
	
    Si num1 > num2 Entonces
        Escribir "El número mayor es: ", num1
    Sino
        Si num2 > num1 Entonces
            Escribir "El número mayor es: ", num2
        Sino
            Escribir "ambos numeros son iguales: "
        FinSi
    FinSi
FinAlgoritmo