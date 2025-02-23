Algoritmo sueldosemanal
    Definir sueldo_semanal,sueldo, horas_extras, horas_trabajadas Como Real
    por_hora = 20
	extra = 25
	
    Escribir "Introduce las horas trabajadas: "
    Leer horas_trabajadas
	
    Si horas_trabajadas<=40 Entonces
        sueldo_semanal=horas_trabajadas*por_hora
		sueldo=sueldo_semanal
    Sino
		
		horas_extras=horas_trabajadas mod 40
		sueldo_semanal=(horas_trabajadas-horas_extras)*por_hora
		sueldo=sueldo_semanal+(horas_extras*25)
        
    FinSi	
    Escribir "El total de su sueldo es : $", sueldo
    Escribir "Horas extras trabajadas: $", horas_extras 
FinAlgoritmo