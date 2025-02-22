Proceso TiendaDeZapatos
    Escribir Sin Saltar "Ingresa el valor de numero de zapatos:";
    Leer numero_de_zapatos;
    subtotal <- numero_de_zapatos*80;
    descuento <- 0;
    Si numero_de_zapatos>10 Y numero_de_zapatos<=20 Entonces
        descuento <- subtotal*0.1;
    FinSi
    Si numero_de_zapatos>20 Y numero_de_zapatos<=30 Entonces
        descuento <- subtotal*0.2;
    FinSi
    Si numero_de_zapatos>30 Entonces
        descuento <- subtotal*0.4;
    FinSi
    total <- subtotal-descuento;
    Escribir "Valor de descuento: ", descuento;
    Escribir "Valor de subtotal: ", subtotal;
    Escribir "Valor de total: ", total;
FinProceso

