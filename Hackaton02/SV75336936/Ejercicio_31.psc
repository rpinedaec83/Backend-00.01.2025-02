Proceso sin_titulo
	Definir n, spares, simpares, contapar, contaimpar, i Como Entero
    Definir mediapares, mediaimpares Como Real
	
    spares = 0
    simpares = 0
    contapar = 0
    contaimpar = 0
	
    Para i = 1 Hasta 10 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer n
        
        Si n MOD 2 = 0 Entonces
            spares = spares + n
            contapar = contapar + 1
        Sino
            simpares = simpares + n
            contaimpar = contaimpar + 1
        FinSi
    FinPara
	
    Si contapar > 0 Entonces
        mediapares = supares / contapar
    Sino
        mediapares = 0
    FinSi
	
    Si contaimpar > 0 Entonces
        mediaimpares = simpares / contaimpar
    Sino
        mediaimpares = 0
    FinSi
	
    Escribir "La media de los números pares es: ", mediapares
    Escribir "La media de los números impares es: ", mediaimpares
FinProceso
