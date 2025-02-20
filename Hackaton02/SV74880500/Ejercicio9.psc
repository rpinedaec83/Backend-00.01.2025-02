Algoritmo aumentodesueldo
    Definir aumento Como real
    Definir sueldo,sueld_final Como entero
	
    Escribir "Sueldo del trabajador: "
	Leer sueldo
	
    Si sueldo >=2000 Entonces
		aumento=sueldo*0.05
    Sino
		aumento=sueldo*0.10
    FinSi
	sueld_final=sueldo+aumento
	Escribir "Su sueldo actual es de ", sueld_final
	Escribir "Se le hizo un aumento de ", aumento
FinAlgoritmo