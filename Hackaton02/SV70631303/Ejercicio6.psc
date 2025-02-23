//6. Hacer un algoritmo en Pseint para ayudar a un trabajador
//a saber cuál será su sueldo semanal, se sabe que si trabaja
//40 horas o menos, se le pagará $20 por hora,
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Algoritmo Ejercicio6
	Definir horasTrabajadas, sueldo Como Real
    Definir tarifaNormal, tarifaExtra Como Real
    tarifaNormal = 20
    tarifaExtra = 25
    
    Escribir "Ingrese el n?mero de horas trabajadas en la semana:"
    Leer horasTrabajadas
    
    Si horasTrabajadas <= 40 Entonces
        sueldo = horasTrabajadas * tarifaNormal
    Sino
        sueldo = (40 * tarifaNormal) + ((horasTrabajadas - 40) * tarifaExtra)
    Fin Si
    
    Escribir "El sueldo semanal es: ", sueldo
FinAlgoritmo