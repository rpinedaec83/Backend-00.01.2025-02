Proceso aumento_trabajador
Definir salario, aumento, salario_final Como Real

Escribir "Ingrese el salario del trabajador en soles: "
Leer salario

// Aumento_salario
Si salario > 2000 Entonces
	aumento <- salario * 0.05 // A5%
Sino
	aumento <- salario * 0.10 // 10%
FinSi

// salario final después del aumento
salario_final <- salario + aumento

Escribir "El salario inicial es: S/.", salario
Escribir "El aumento es: S/.", aumento
Escribir "El salario final es: S/.", salario_final

	
FinProceso
