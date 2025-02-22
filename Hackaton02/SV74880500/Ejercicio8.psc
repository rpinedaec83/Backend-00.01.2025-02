Algoritmo resultadonota
    Definir promedio Como real
    Definir nota1, nota2,nota3 Como entero
	
    Escribir "Introduce primera nota: "
    Leer nota1
	Escribir "Introduce segunda nota: "
    Leer nota2
	Escribir "Introduce tercera nota: "
    Leer nota3
	
	promedio = (nota1+nota2+nota3)/3
    Si promedio >= 14 Entonces
        Escribir "Usted aprobo con nota ", promedio
    Sino
		Escribir "Usted desaprobo con nota ",promedio
    FinSi
FinAlgoritmo