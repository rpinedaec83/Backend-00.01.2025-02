Proceso Hora
	Definir hh, mm, ss Como Entero;
	
	Escribir "Ingresa hh, mm, ss";
	Leer hh;
	Leer mm; 
	Leer ss;
	
	si (hh < 24 y mm < 60 y ss < 60) Entonces
		ss <- ss + 1;
		si (ss = 60) Entonces
			ss <- 0;
			mm <- mm + 1;
			si (mm = 60) Entonces
				mm <- 0;
				hh <- hh + 1;
				si (hh = 24)Entonces
					hh <- 0;
				FinSi
			FinSi
		FinSi
	FinSi
	
	Escribir hh, " : ", mm, " : ", ss, " : ";
	
FinProceso
