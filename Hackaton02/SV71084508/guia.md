# Introducción a la Validación en PSeInt

[![](https://raw.githubusercontent.com/ezio-dev-web/repo-fork-test/refs/heads/main/PSeInt.svg)](https://pseint.sourceforge.net/)

Cuando se trate de manejar números, es mejor tomar la entrada como cadena. Si tomas las entradas como número, los errores serán consecutivos y extraños.

## Pasos

- Tratar los datos como cadena de Texto
- Filtrar los números 
- Recorrer cada caracter
- Separar guion y punto


> Pseudocodigo: es un intermedio entre lenguaje maquina y humano
> sus palabras claves son legibles


## Axiomas
- Un programa no puede detenerse (errores) antes de completar su objetivo
- Si un programa se detiene y no cumple el objetivo
- Quiere decir que hay un error en el algoritmo
- Y el programador no a contralado los errores posibles

## Tipos

```sh
Como Caracter, Texto, Cadena          -> representa string vacio o 0
Como Entero                           -> representa vacio o 0-9
Tipo Entero                           -> soporta 10 digitos positivos
Tipo Entero                           -> soporta 9 digitos negativo
```


## Lo que me gusta de PSeInt

```sh
Cuando un programa está en ejecución, se puede agregar funcionalidad o 
reparar erorres en plena ejecución; los proceso se vuelven a ejecutar 
en automatico.
```

```sh
Muchas funcionalidades de uso diario (validaciones) se tienen que hacer 
de nuevo, a diferencia de JS que integra metodos para manejar 
datos rapidamente.
```

```sh
Tomar la entrada de datos como caractes, y a partir de las entradas 
comenzar a parsear y filtrar.
```
```sh
No tiene herramientas de excepción o cacheo de errores, por tal motivo 
es frecuente que los algoritmos en PSeInt tengan muchas validaciones. 
```
