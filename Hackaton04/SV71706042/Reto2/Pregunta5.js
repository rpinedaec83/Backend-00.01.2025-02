function filtrarStrings(array) {
    return array.filter(valor => typeof valor === "string");
}

// Prueba
console.log( filtrarStrings([1, "hola", true, "asdas", 42, null, "java"]) );  