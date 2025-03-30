import matplotlib.pyplot as plt
import matplotlib.dates as mdates
import datetime

def crear_linea_de_tiempo():
    eventos = [
        ("1970", "Artículo de Codd sobre el modelo relacional"),
        ("1974", "IBM desarrolla System R, precursor de SQL"),
        ("1979", "Oracle lanza la primera base de datos comercial basada en SQL"),
        ("1985", "Codd establece las 12 reglas de bases de datos relacionales"),
        ("1990s", "Expansión de MySQL, PostgreSQL y SQL Server"),
        ("2000s", "Popularización del almacenamiento distribuido y bases de datos NoSQL"),
        ("2010s", "Bases de datos híbridas combinando SQL y NoSQL")
    ]
    
    fechas = [datetime.datetime.strptime(e[0][:4], "%Y") for e in eventos]
    descripciones = [e[1] for e in eventos]
    
    fig, ax = plt.subplots(figsize=(14, 10))
    
    # Calcular las posiciones verticales
    y_positions = range(len(eventos))
    
    # Dibujar líneas horizontales para cada evento
    for y in y_positions:
        ax.axhline(y=y, color='gray', alpha=0.3, linestyle='--')
    
    # Dibujar puntos y etiquetas
    for i, (fecha, desc, y) in enumerate(zip(fechas, descripciones, y_positions)):
        ax.scatter(fecha, y, color='red', s=100, zorder=5)
        ax.annotate(desc, (fecha, y), 
                    xytext=(5, 0), 
                    textcoords="offset points",
                    va='center',
                    fontsize=10,
                    bbox=dict(boxstyle="round,pad=0.3", fc="white", ec="gray", alpha=0.8))
    
    ax.xaxis.set_major_locator(mdates.YearLocator(10))
    ax.xaxis.set_minor_locator(mdates.YearLocator(5))
    ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y'))
    
    ax.set_yticks(y_positions)
    ax.set_yticklabels([e[0] for e in eventos])
    
    ax.set_xlabel("Año")
    ax.set_title("Línea de Tiempo: Evolución de Bases de Datos")
    
    # Invertir el eje Y para que el evento más antiguo esté arriba
    ax.invert_yaxis()
    
    # Ajustar los márgenes y el espacio entre subplots
    plt.tight_layout()
    plt.subplots_adjust(left=0.2, right=0.95, top=0.95, bottom=0.1)
    
    plt.show()

crear_linea_de_tiempo()