Proceso sin_titulo
	Definir sueldoactual, aumento, nsueldo Como Real
    
    Escribir "Ingrese el sueldo actual del trabajador:"
    Leer sueldoactual
    
    Si sueldoactual > 2000 Entonces
        aumento = sueldoactual * 0.05 
    Sino
        aumento = sueldoactual * 0.10 
    FinSi
    
    nsueldo = sueldoactual + aumento
    
    Escribir "El aumento es: $", aumento
    Escribir "El nuevo sueldo es: $", nsueldo
FinProceso
