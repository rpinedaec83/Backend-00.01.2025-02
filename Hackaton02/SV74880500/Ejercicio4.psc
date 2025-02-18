Algoritmo termina_en_4
    Definir numero Como Entero
    Definir s1,s2,s3 Como Entero
	Definir temp Como Entero
    
    Escribir "Introduce primer número: "
    Leer s1 
	Escribir "Introduce segundo número: "
    Leer s2 
	Escribir "Introduce tercer número: "
    Leer s3 
    
	// Ordenar los números usando una serie de comparaciones
    Si s1 > s2 Entonces
        temp = s1
        s1 = s2
        s2 = temp
    FinSi
    
    Si s1 > s3 Entonces
        temp = s1
        s1 = s3
        s3 = temp
    FinSi
    
    Si s2 > s3 Entonces
        temp = s2
        s2 = s3
        s3 = temp
    FinSi
    
    // Mostrar los números ordenados
    Escribir "Los números ordenados de menor a mayor son: ", s1, ", ", s2, ", ", s3
FinAlgoritmo