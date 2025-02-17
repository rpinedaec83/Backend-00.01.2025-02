// Ejercicio 6:
//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso Horas_Trabajo
	Definir Horas, HoraExtra, sueldo Como Entero
	
	Escribir "Ingrese las horas semanales que se ha trabajado:"
	Leer Horas
	
	si Horas<=40 Entonces
		sueldo=Horas*20
		
	SiNo
		HoraExtra=Horas-40
		sueldo=(40*20)+((HoraExtra)*25)
	FinSi
	
	Escribir "La horas extras que se ha realizado es:", HoraExtra
	Escribir "El sueldo semanal es:", sueldo
FinProceso
