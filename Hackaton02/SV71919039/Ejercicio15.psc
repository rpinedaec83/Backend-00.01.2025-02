Proceso Ejercicio15
	Definir opcion Como Entero
    Definir valor Como Real
    Definir resultado Como Real
    
    Repetir
        Escribir "Seleccione la opción de conversión:"
        Escribir "1. Centímetros a pulgadas"
        Escribir "2. Libras a kilogramos"
        Leer opcion
        
        Si opcion = 1 Entonces
            Escribir "Ingrese el valor en centímetros:"
            Leer valor
            
            resultado <- valor / 2.54
            Escribir valor, " centímetros son ", resultado, " pulgadas."
        Sino
            Si opcion = 2 Entonces
                Escribir "Ingrese el valor en libras:"
                Leer valor
                
                resultado <- valor * 0.453592
                Escribir valor, " libras son ", resultado, " kilogramos."
            Sino
                Escribir "Opción no válida. Por favor seleccione 1 o 2."
            FinSi
        FinSi
    Hasta Que opcion = 1 O opcion = 2
FinProceso