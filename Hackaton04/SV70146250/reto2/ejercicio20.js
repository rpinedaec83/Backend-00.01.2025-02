//funcion
String.prototype.vreplace = function (vocal) {
    let valorFinal = "";
    //evalua buscando vocales
    for (let i = 0; i < this.length; i++) {
        switch (this[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u': valorFinal = valorFinal + vocal
                break;
            default: valorFinal = valorFinal + this[i]
        }
    }
    return valorFinal
}
//llanma
const data = "apples and bananas".vreplace("u")
//muestra
console.log(data)