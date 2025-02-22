Algoritmo numero_primo
    Definir num Como Entero
    Definir es_primo Como logico
    es_primo = Verdadero
	
    Escribir "Introduce un número entero positivo entre 1 y 10: "
    Leer num
	
    Si num < 1 O num > 10 Entonces
        Escribir "El número debe estar entre 1 y 10."
    Sino
        Si num = 1 Entonces
            es_primo = Falso  
        Sino
            Para i = 2 Hasta num - 1 Con Paso 1
                Si num MOD i = 0 Entonces
                    es_primo = Falso  
                FinSi
            FinPara
        FinSi
	
        Si es_primo Entonces
            Escribir "El número ", num, " es primo."
        Sino
            Escribir "El número ", num, " no es primo."
        FinSi
    FinSi
FinAlgoritmo