Algoritmo pregunta20
    
	
    // Solicitar los 4 números enteros positivos
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
    // Verificar que los números sean positivos
    Si (num1 <= 0 O num2 <= 0 O num3 <= 0 O num4 <= 0) Entonces
        Escribir "Error: Los números deben ser enteros positivos."
    Sino
        // Contar cuántos números son pares
        contadorPares <- 0
        Si num1 MOD 2 = 0 Entonces
            contadorPares <- contadorPares + 1
        FinSi
        Si num2 MOD 2 = 0 Entonces
            contadorPares <- contadorPares + 1
        FinSi
        Si num3 MOD 2 = 0 Entonces
            contadorPares <- contadorPares + 1
        FinSi
        Si num4 MOD 2 = 0 Entonces
            contadorPares <- contadorPares + 1
        FinSi
        
        // Determinar el mayor de los cuatro números
        mayor <- num1
        Si num2 > mayor Entonces
            mayor <- num2
        FinSi
        Si num3 > mayor Entonces
            mayor <- num3
        FinSi
        Si num4 > mayor Entonces
            mayor <- num4
        FinSi
		
        // Mostrar cuántos números son pares y el mayor número
        Escribir "Cantidad de números pares: ", contadorPares
        Escribir "El mayor número es: ", mayor
		
        // Si el tercero es par, calcular el cuadrado del segundo
        Si num3 MOD 2 = 0 Entonces
            cuadradoSegundo <- num2 * num2
            Escribir "El cuadrado del segundo número es: ", cuadradoSegundo
        FinSi
		
        // Si el primero es menor que el cuarto, calcular la media de los 4 números
        Si num1 < num4 Entonces
            media <- (num1 + num2 + num3 + num4) / 4
            Escribir "La media de los 4 números es: ", media
        FinSi
		
        // Si el segundo es mayor que el tercero y el tercero está entre 50 y 700, calcular la suma de los 4 números
        Si (num2 > num3) Y (num3 >= 50 Y num3 <= 700) Entonces
            suma <- num1 + num2 + num3 + num4
            Escribir "La suma de los 4 números es: ", suma
        FinSi
    FinSi
FinAlgoritmo


    








