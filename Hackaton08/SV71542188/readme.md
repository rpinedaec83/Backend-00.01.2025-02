Informe: Bases de Datos Relacionales
1. Las 12 Reglas de Codd
Edgar F. Codd, creador del modelo relacional, definió 12 reglas para que un sistema de gestión de bases de datos sea considerado verdaderamente relacional:

    1. Regla de la información: Toda la información debe representarse en tablas.
    2. Regla del acceso garantizado: Cada dato debe ser accesible mediante una combinación de tabla, clave primaria y columna.
    3. Tratamiento sistemático de valores nulos: Los valores nulos deben ser soportados y tratados de manera uniforme.
    4. Catálogo dinámico en línea: El sistema debe tener un catálogo accesible mediante SQL.
    5. Regla del sublenguaje de datos: Debe haber un lenguaje de datos completo (como SQL) para definir, manipular y consultar datos.
    6. Actualización de vistas: Las vistas deben ser actualizables.
    7. Inserción, actualización y eliminación de alto nivel: Debe ser posible realizar estas operaciones en conjuntos de datos, no solo en filas individuales.
    8. Independencia física de los datos: Los cambios en el almacenamiento físico no deben afectar el acceso a los datos.
    9. Independencia lógica de los datos: Los cambios en la estructura lógica no deben afectar las aplicaciones.
    10. Independencia de la integridad: Las reglas de integridad deben definirse en el catálogo y no en las aplicaciones.
    11. Independencia de la distribución: El sistema debe soportar bases de datos distribuidas sin requerir cambios en las aplicaciones.
    12. Regla de no subversión: Si el sistema tiene un lenguaje de bajo nivel, este no debe subvertir las reglas del modelo relacional.

2. Normalización de Base de Datos
La normalización es un proceso para organizar los datos en una base de datos, eliminando redundancias y asegurando la integridad de los datos. Se realiza en varias formas normales (FN):

    1. Primera Forma Normal (1FN):
    * Los datos deben estar en tablas con filas únicas.
    * Cada celda debe contener un único valor (no valores repetidos o listas).
    2. Segunda Forma Normal (2FN):
    * Cumple con la 1FN.
    * Todos los atributos no clave deben depender completamente de la clave primaria.
    3. Tercera Forma Normal (3FN):
    * Cumple con la 2FN.
    * No debe haber dependencias transitivas (un atributo no clave no debe depender de otro atributo no clave).
    4. Forma Normal de Boyce-Codd (BCNF):
    * Cumple con la 3FN.
    * Cada determinante debe ser una clave candidata.
    5. Cuarta Forma Normal (4FN):
    * Cumple con la BCNF.
    * No debe haber dependencias multivaluadas.
    6. Quinta Forma Normal (5FN):
    * Cumple con la 4FN.
    * No debe haber dependencias de unión.
3. El Modelo Relacional
El modelo relacional es un enfoque para modelar y gestionar bases de datos basado en la teoría de conjuntos y lógica de predicados. Sus características principales son:

    1. Tablas (Relaciones):
    * Los datos se organizan en tablas, donde cada fila es un registro y cada columna es un atributo.
    2. Claves:
    * Clave primaria: Identifica de manera única cada fila en una tabla.
    * Clave foránea: Relaciona una tabla con otra.
    3. Integridad:
    * Integridad de entidad: Cada fila debe ser única.
    * Integridad referencial: Las claves foráneas deben coincidir con una clave primaria en otra tabla.
    4. Operaciones:
    * Selección: Extraer filas específicas.
    * Proyección: Extraer columnas específicas.
    * Unión: Combinar datos de dos tablas.
    * Intersección y diferencia: Operaciones de conjuntos.
    5. Ventajas:
    * Reducción de redundancia.
    * Facilidad para realizar consultas complejas.
    * Escalabilidad y flexibilidad.
4. Línea del Tiempo
Puedes crear una línea del tiempo interactiva utilizando herramientas como TimeToast. Aquí tienes algunos hitos importantes para incluir:
    * 1960s: Desarrollo de los primeros sistemas de bases de datos jerárquicos y en red.
    * 1970: Edgar F. Codd publica el modelo relacional.
    * 1980s: Aparición de los primeros sistemas de gestión de bases de datos relacionales (RDBMS) como Oracle y DB2.
    * 1990s: Popularización de SQL como estándar para bases de datos relacionales.
    * 2000s: Aparición de bases de datos NoSQL para manejar grandes volúmenes de datos no estructurados.
    * 2010s: Bases de datos en la nube y bases de datos distribuidas.
