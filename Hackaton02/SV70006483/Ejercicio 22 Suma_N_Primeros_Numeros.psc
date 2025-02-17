Proceso Suma_N_Primeros_Numeros
    Definir n, i, suma Como Entero
	
    // Solicitar un número entero positivo
    Repetir
        Escribir "Ingrese un número entero positivo:"
        Leer n
        Si n < 1 Entonces
            Escribir "Error: Debe ingresar un número mayor o igual a 1."
        FinSi
    Hasta Que n >= 1
	
    // Inicializar la suma en 0
    suma <- 0
	
    // Calcular la suma de los n primeros números
    Para i <- 1 Hasta n Hacer
        suma <- suma + i
    FinPara
	
    // Mostrar el resultado
    Escribir "La suma de los ", n, " primeros números es: ", suma
FinProceso
