function objectToArray(objeto) {
    return Object.entries(objeto);
}

// Ejemplo de uso:
const resultado = objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
});

console.log(resultado);