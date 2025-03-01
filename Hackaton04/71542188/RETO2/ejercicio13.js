function objectToArray(obj) {
    return Object.entries(obj);
}

const resultado = objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
});

console.log(resultado); 